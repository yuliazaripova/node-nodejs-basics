import child_process from "child_process";

const spawnChildProcess = async (args) => {
    child_process.fork('src/cp/files/script.js', args);
};

spawnChildProcess();