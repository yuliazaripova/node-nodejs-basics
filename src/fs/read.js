import { readFile } from 'node:fs/promises';

const read = async () => {
    try {
        const content = await readFile('./src/fs/files/fileToRead.txt', { encoding: 'utf8' });
        console.log(content)
     } catch (err) { 
        throw new Error('111111111111'); 
     } 
};

await read();