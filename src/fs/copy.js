import { cp } from 'node:fs/promises';
import FSError from '../error/error.js';

const copy = async () => {
    try {
        await cp('./src/fs/files/', './src/fs/files_copy/', { errorOnExist: true, force: false, recursive: true })
    }  catch (err) { 
        throw new FSError(); 
     }
};

copy();