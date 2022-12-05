import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { createUnzip } from 'node:zlib';

const decompress = async () => {
    const unzip = createUnzip();
    const source = createReadStream('src/zip/files/archive.gz');
    const destination = createWriteStream('src/zip/files/fileToCompress.txt');
    
    pipeline(source, unzip, destination, (err) => {
      if (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
      }
    }); 
};

await decompress();