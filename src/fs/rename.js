import { rename as renameFs, access } from 'node:fs/promises';
import FSError from '../error/error.js';

const checkFileExists = async (file) => {
    try {
        await access(file);
        return true
    } catch (error) {
        return false
    }
  }

const rename = async () => {
    try {
       const des = './src/fs/files/properFilename.md';
       const isExist = await checkFileExists(des);
       if (isExist) throw new Error()
       await renameFs('./src/fs/files/wrongFilename.txt', des)
    }  catch (err) { 
       throw new FSError(); 
     } 
};

await rename();