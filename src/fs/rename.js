import { rename as renameFs, access } from 'node:fs/promises';

const checkFileExists = async (file) => {
    return await access(file, fs.constants.F_OK)
             .then(() => true)
             .catch(() => false)
  }

const rename = async () => {
    try {
        const des = './src/fs/files/fileToRead.txt';
       const isExist = await checkFileExists(des);
       if (isExist) throw new Error()
       await renameFs('./src/fs/files/hello.txt', des)
    }  catch (err) { 
    
       throw new Error("111111"); 
     } 
};

await rename();