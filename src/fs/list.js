import { readdir } from 'node:fs/promises';

const list = async () => {
    try {
        const files = await readdir('./src/fs/files/');
        files.forEach(file => console.log(file))
     } catch (err) { 
        throw new Error('111111111111'); 
     } 
};

await list();