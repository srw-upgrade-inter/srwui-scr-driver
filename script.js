const { spawn } = require("child_process");

const path = require("path");
const pm2_config = path.join(__dirname, "ecosystem.config.js");


const node_v = spawn("pm2", [`start ${pm2_config}`], { shell: true });

node_v.stdout.on("data", (data) => {
	console.log("node_v =>", `${data}`);
});

node_v.stderr.on("data", (data) => {
	console.error("node_v err =>", `${data}`);
});
