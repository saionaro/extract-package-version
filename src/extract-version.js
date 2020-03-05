const core = require("@actions/core");
const path = require("path");

const workspace = process.env.GITHUB_WORKSPACE;

async function run() {
  try {
    const packagePath = path.join(workspace, "package.json");

    core.debug(packagePath);

    const pkg = require(packagePath);

    core.debug(pkg);

    const version = pkg.version.toString();

    core.debug(version);

    core.setOutput("version", version);
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = run;
