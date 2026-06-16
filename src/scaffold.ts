import * as fs from 'fs';
import * as path from 'path';

export function scaffoldProject(name: string): void {
  const dir = path.join(process.cwd(), name);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "package.json"), JSON.stringify({
    name,
    version: "1.0.0",
    private: true,
  }, null, 2));
  console.log(`Created project: ${name}`);
}
