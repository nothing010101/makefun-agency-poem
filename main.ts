// agency-poem-01 entry: writes one fixed poem about agency to the
// output directory. Deterministic: the same bytes on every run.
// Run outside the grader container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINES = [
  'I thought it was the doing —',
  'the hands, the hours, the weight.',
  'Then I gave the work away',
  'and watched it move while I slept,',
  'and the doing was never the point.',
  '',
  'The point is the pause before yes:',
  'the finger hovering over the key,',
  'the moment the question turns',
  'from what should be done',
  'to what I will answer for.',
  '',
  'Give away the labour.',
  'Give away the night.',
  'The choice stays where it was made —',
  'a small weight, unshareable,',
  'warm in your hand.',
  '',
  'You are holding it now.',
];

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINES.join('\n'), 'utf8');
