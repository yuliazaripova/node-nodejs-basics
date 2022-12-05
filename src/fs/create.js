import { writeFile } from 'node:fs/promises';


const create = async () => {
    try {
        await writeFile('./src/fs/files/fresh.txt', 'I am fresh and young', { flag: 'wx' })
     } catch (err) { 
        throw new Error('111111111111'); 
     }
};

await create();