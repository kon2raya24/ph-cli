#!/usr/bin/env node
import { scaffoldProject } from './scaffold';

const args = process.argv.slice(2);
const command = args[0];

if (command === "scaffold") {
  scaffoldProject(args[1] || "my-project");
} else {
  console.log("ph-cli - Philippine Developer CLI");
  console.log("Commands: scaffold <name>");
}
