import { writeFile } from 'node:fs/promises';
import FSError from '../error/error.js';

const create = async () => {
    try {
        await writeFile('./src/fs/files/fresh.txt', 'I am fresh and young', { flag: 'wx' })
     } catch (err) { 
      throw new FSError(); 
     }
};

await create();