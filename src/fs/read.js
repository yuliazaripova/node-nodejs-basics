import { readFile } from 'node:fs/promises';
import FSError from '../error/error.js';

const read = async () => {
    try {
        const content = await readFile('./src/fs/files/fileToRead.txt', { encoding: 'utf8' });
        console.log(content)
     } catch (err) { 
        throw new FSError(); 
     } 
};

await read();