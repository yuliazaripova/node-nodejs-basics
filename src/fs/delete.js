import { rm } from 'node:fs/promises';

const remove = async () => {
    try {
        await rm('./src/fs/files/fileToRemove.txt')
     } catch (err) { 
        throw new Error('111111111111'); 
     } 
};

await remove();