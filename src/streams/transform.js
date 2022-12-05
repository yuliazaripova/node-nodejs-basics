import { Transform, pipeline } from 'node:stream';

const transform = async () => {
    const reverseStr = new Transform({
        transform(chunk, encoding, callback) {
          callback(null, chunk.toString().split('').reverse().join(''));
        },
      });
    pipeline(process.stdin, reverseStr, process.stdout, (err) => {
        err && console.error(err);
    });
};

await transform();