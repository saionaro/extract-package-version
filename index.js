const core = require("@actions/core");
const path = require("path");

const workspace = process.env.GITHUB_WORKSPACE;

async function run() {
  try {
    const packagePath = path.join(workspace, "package.json");
    const pkg = require(packagePath);
    const version = pkg.version.toString();

    core.setOutput("version", version);
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = run;
