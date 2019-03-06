"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
console.log(process.argv0[2]);
var resp = child_process_1.execSync("zowe jobs submit ds ");
console.log(resp.toString());
