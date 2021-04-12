const fs = require('fs');

// fs.writeFileSync('notes.txt', 'I live in Philadelphia');
// fs.readFile('notes.txt', (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
//   fs.writeFileSync('anotherFile.txt', data);
// });

// fs.renameSync('anotherFile.txt', 'newName.txt');

// console.log(fs.readdirSync('./'));
const PATH = '../';

const recursiveLs = (PATH, currentArray) => {
  files = fs.readdirSync(PATH);
  currentArray = currentArray || [];
  for (file of files) {
    const isDirectory = fs.lstatSync(PATH + '/' + file).isDirectory();
    if (isDirectory) {
      currentArray = recursiveLs(PATH + '/' + file, currentArray);
    } else {
      currentArray.push(file);
    }
  }
};
console.log(recursiveLs('../', []));
