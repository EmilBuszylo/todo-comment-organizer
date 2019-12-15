const readdirp = require('readdirp');
import fs from 'fs';
import { Transform, Stream } from 'stream';

export const printFileList = async (projectPath: string) => {
  let fileList = [];
  try {
    for await (const entry of readdirp(projectPath, { type: 'all' })) {
      const { path, fullPath } = entry;

      fileList.push(fullPath);
    }

    return fileList;
  } catch (error) {
    console.error(error);
  }
};

export const printAllToDo = async (projectPath: string) => {
  try {
    const fileList = await printFileList(projectPath);

    if (fileList && fileList.length) {
      for await (let file of fileList) {
        let stream = fs.createReadStream(file);
        const singleStream = getToDoFromStream(stream);
        console.log(singleStream.toString());
      }
    }
  } catch (error) {}
};

export const getToDoFromStream = (stream: Stream) => {
  const commentRegex = /(\/\*[\w\'\s\r\n\*]*\*\/)|(\/\/[\w\s\']*)|(\<![\-\-\s\w\>\/]*\>)/gim;
  let outStream = stream;
  let toDoList = [];

  const transformedStream2 = new Transform({
    transform(chunk, enc, next) {
      const transformedFile = chunk.toString().match(commentRegex);
      toDoList.push(transformedFile[0]);
      this.push(transformedFile[0]);
      next();
    },
  });

  outStream = outStream.pipe(transformedStream2);
  const targetStream = process.stdout;
  const test = outStream;
  // outStream.pipe(targetStream);
  return targetStream;
};
