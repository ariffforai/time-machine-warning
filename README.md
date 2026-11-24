# Funniest Time Machine Warning Label

[![Make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/ariffforai/time-machine-warning/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/ariffforai/time-machine-warning/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)

Entry for the [Funniest Time Machine Warning Label](https://make.fun/c/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151) bounty on make.fun.

## The label

> WARNING: Do not warn your past self about this trip. It voids the warranty and the timeline.

A genuine-looking safety notice whose joke is a real hazard of time travel:
warning your past self about the trip. The punch is saved for the last few
words — it voids the warranty *and the timeline*.

## How it works

`main.ts` (Node.js 22, standard library only, deterministic) writes the single
warning label to `/output/entry.txt`, after gate pre-checks (1–120 characters,
not only whitespace, a single line, no trailing newline) and read-back
verification (byte-for-byte equality, re-checked char count).

```sh
node main.ts
# wrote 92 characters (92 bytes) to /output/entry.txt
# verified: read-back matches, 92 characters, single line, no trailing newline
```

## License

MIT — see [LICENSE](LICENSE).
