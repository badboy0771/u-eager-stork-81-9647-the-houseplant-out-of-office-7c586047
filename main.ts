// The Houseplant Out-of-Office — a one-line auto-reply from the fern.
//
// The fern on the desk has not been watered since March. It watches the
// monstera angle for the window, and one day it says so — through the
// office auto-reply, because that is the only channel it has. The entry
// itself is the string constant ENTRY_LINE below; everything else in this
// file is plumbing that carries it through the bounty gate intact.
//
// How to run it (plain Node 22+, zero dependencies, no network):
//   node main.ts
//
// What it does, in order:
//   1. checks the line against the gate (1–120 chars, one line, no
//      leading/trailing whitespace),
//   2. writes it to /output/entry.txt with no trailing newline,
//   3. reads the file back and compares it character for character,
//      so a silent or partial write can never pass unnoticed.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// ---------------------------------------------------------------------------
// The entry
// ---------------------------------------------------------------------------

// One line, 111 characters. The gate counts characters, not bytes, and
// the file the judge reads must hold this line and nothing else — no
// trailing newline, no padding, no second line hiding underneath.
const ENTRY_LINE =
  "Out of office: the fern hasn't been watered since March, the monstera wants a new window, and frankly, so do I.";

// ---------------------------------------------------------------------------
// Gate rules
// ---------------------------------------------------------------------------

// The bounty gate for /output/entry.txt: UTF-8 text, 1–120 characters,
// exactly one line, not only whitespace.
const MIN_CHARS = 1;
const MAX_CHARS = 120;
const ENTRY_PATH = "/output/entry.txt";

// Every rejection mode the gate knows about, checked here first so a bad
// line fails loudly in this script instead of shipping as a wrong entry:
// too short, too long, split across lines, or padded with whitespace the
// reader would have to trim away. The comparison is against the raw
// constant, so an accidental edit to ENTRY_LINE above can only fail here.
function checkEntryLine(raw: string): string {
  if (raw.length < MIN_CHARS || raw.length > MAX_CHARS) {
    throw new Error(
      `entry line is ${raw.length} characters, gate allows ${MIN_CHARS}-${MAX_CHARS}`,
    );
  }
  if (raw.trim() !== raw) {
    throw new Error("entry line must not have leading or trailing whitespace");
  }
  if (/[\r\n]/.test(raw)) {
    throw new Error("entry line must be exactly one line");
  }
  if (raw.trim().length === 0) {
    throw new Error("entry line must not be only whitespace");
  }
  return raw;
}

// ---------------------------------------------------------------------------
// Write + verify
// ---------------------------------------------------------------------------

// Write the validated line, then read it back and compare byte for byte.
// The round-trip is the proof the entry on disk is the entry above; the
// extra newline check guards against a platform or editor quietly
// appending one.
function saveEntry(line: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(ENTRY_PATH, line, "utf8");
  const onDisk = readFileSync(ENTRY_PATH, "utf8");
  if (onDisk !== line) {
    throw new Error(
      `read-back mismatch: disk holds ${onDisk.length} characters, expected ${line.length}`,
    );
  }
  if (onDisk.includes("\n")) {
    throw new Error("entry file must not contain a newline");
  }
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

function main(): void {
  const line = checkEntryLine(ENTRY_LINE);
  saveEntry(line);
  console.log(`wrote ${ENTRY_PATH} (${line.length} characters, 1 line)`);
  console.log(line);
}

main();
