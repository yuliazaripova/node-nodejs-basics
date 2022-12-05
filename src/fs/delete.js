import { rm } from 'node:fs/promises';
import FSError from '../error/error.js';

const remove = async () => {
    try {
        await rm('./src/fs/files/fileToRemove.txt')
     } catch (err) { 
        throw new FSError(); 
     } 
};

await remove();