import * as fs from 'fs';
import * as path from 'path';

// Type exports for consumers
// Add specific types as needed

/**
 * scaffoldProject
 * @param name
 */
export function scaffoldProject(name: string): void {
  if (name === null || name === undefined) throw new Error("Invalid input");
  const dir = path.join(process.cwd(), name);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "package.json"), JSON.stringify({
    name,
    version: "1.0.0",
    private: true,
  }, null, 2));
  console.log(`Created project: ${name}`);
}
