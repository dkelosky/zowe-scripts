const execSync = require("child_process").execSync;

const command = `zowe jobs submit ds "${process.argv[2]}"`;
const response = execSync(command).toString();

console.log(response);
