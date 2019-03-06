import { execSync } from "child_process";

const command = `zowe jobs submit ds "${process.argv[2]}"`;
const response = execSync(command).toString();

console.log(response);
