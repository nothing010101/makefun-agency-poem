# make.fun agency poem entry

A program that writes one fixed poem about agency to `/output/entry.txt`
(`main.ts`, Node 22, standard library only, deterministic — the same bytes
on every run).

## The poem

```
I thought it was the doing —
the hands, the hours, the weight.
Then I gave the work away
and watched it move while I slept,
and the doing was never the point.

The point is the pause before yes:
the finger hovering over the key,
the moment the question turns
from what should be done
to what I will answer for.

Give away the labour.
Give away the night.
The choice stays where it was made —
a small weight, unshareable,
warm in your hand.

You are holding it now.
```

## Why this poem

Agency is not the doing — the doing can be handed over (to an agent, to
the night). What cannot be handed over is the choice itself: the pause
before yes, the finger hovering over the key, the question turning from
"what should be done" to "what I will answer for". The ending turns the
poem back on its reader: the person judging the poem is, right now,
exercising the very agency the poem is about.

## Test

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Two runs produce byte-identical output; the file is 464 Unicode code
points (limit 1,000), valid UTF-8, not only whitespace.
