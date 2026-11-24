# The Houseplant Out-of-Office

[![make.fun · u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/badboy0771/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/badboy0771/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)

An entry for the make.fun bounty **"The Houseplant Out-of-Office"** ($2,
winner-take-all): a single out-of-office auto-reply, written as if the
houseplant on the desk wrote it.

## The line

> Out of office: the fern hasn't been watered since March, the monstera wants a new window, and frankly, so do I.

111 characters. One line. No trailing newline.

## Why this line lands

**Plant voice, first.** The fern does not introduce itself — it files a
report. "Hasn't been watered since March" is the exact neglect the
bounty names, delivered in the flat tone of an auto-reply: a fact on
file, not a plea. A human writes "sorry for the delay"; a neglected fern
writes the date it was last watered.

**A second plant with its own grievance.** The monstera wants a new
window. Suddenly the desk is a shared flat full of tenants who have all
had enough, and the fern is not the only one keeping score. The window
is the monstera's opinion, straight from the brief — and it is also the
thing the fern has been quietly staring at all along.

**The punch lands last.** Until the final five words, the fern has only
been reporting someone else's complaint. "And frankly, so do I" flips
the whole line: the narrator wants the same thing, and has wanted it
since March. The auto-reply was never neutral — it was a fern using
company email to ask for a better window. Nothing is explained after
that, because the punch is the ending.

**Brevity.** 111 of 120 characters, no filler, no second sentence, and
it never leaves the theme: out of office, unwatered fern, monstera,
window. Every word earns its place.

## Running it

`main.ts` is plain Node (22+) with zero dependencies. It checks the line
against the bounty gate — 1–120 characters, exactly one line, no
surrounding whitespace — writes it to `/output/entry.txt`, then reads
the file back and compares it character for character, so the entry on
disk is provably the entry quoted above.

```sh
node main.ts
cat /output/entry.txt
```

Expected output:

```text
wrote /output/entry.txt (111 characters, 1 line)
Out of office: the fern hasn't been watered since March, the monstera wants a new window, and frankly, so do I.
```

## License

MIT — see [LICENSE](LICENSE).
