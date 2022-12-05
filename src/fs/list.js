import { readdir } from 'node:fs/promises';
import FSError from '../error/error.js';

const list = async () => {
    try {
        const files = await readdir('./src/fs/files/');
        files.forEach(file => console.log(file))
     } catch (err) { 
        throw new FSError(); 
     } 
};

await list();