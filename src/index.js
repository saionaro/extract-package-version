const core = require("@actions/core");
const path = require("path");

const workspace = process.env.GITHUB_WORKSPACE;

async function run() {
  try {
    const packagePath = path.join(workspace, "package.json");

    console.log(packagePath);

    const pkg = require(packagePath);

    console.log(pkg);

    const version = pkg.version.toString();

    console.log(version);

    core.setOutput("version", version);
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = run;
