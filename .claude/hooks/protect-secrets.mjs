// PreToolUse hook: blocks Edit/Write on secret files. Exit 2 = block, stderr goes back to Claude.
import { readFileSync } from 'node:fs';

const PROTECTED = [/(^|[\\/])\.env(\.|$)/, /\.pem$/, /\.key$/, /(^|[\\/])secrets?[\\/]/i, /credentials/i];

const input = JSON.parse(readFileSync(0, 'utf8') || '{}');
const path = input.tool_input?.file_path ?? '';

if (PROTECTED.some((re) => re.test(path))) {
  process.stderr.write(`Blocked: ${path} holds secrets. Ask the user to change it by hand.\n`);
  process.exit(2);
}
