import os from "os";
import  { Worker } from "worker_threads";

const runService = (workerData) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./src/wt/worker.js', { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`stopped with  ${code} exit code`));
        })
    })
}

const performCalculations = async () => {
    const numOfCpus = os.cpus().length;
    await Promise.allSettled(
        Array.from({ length: numOfCpus }, async (v, i) => await runService((10 + i)))
    ).
         then((results) => console.log(results));
};

await performCalculations();