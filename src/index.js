import path from "node:path";
import { readFile } from "node:fs/promises";
import { getInput, setOutput, setFailed } from "@actions/core";

const { GITHUB_WORKSPACE } = process.env;

try {
  let dir = getInput("path") || GITHUB_WORKSPACE;
  dir = path.resolve(dir);

  const packagePath = path.join(dir, "package.json");
  const rawContent = await readFile(packagePath, "utf-8");
  const pkg = JSON.parse(rawContent);
  const version = pkg.version.toString();

  setOutput("version", version);
} catch (error) {
  setFailed(error.message);
}
