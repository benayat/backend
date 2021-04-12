const yargs = require('yargs');

yargs.command({
  command: 'add',
  describe: 'add two numbers',
  handler: (argv) => {
    console.log(argv._[1] + argv._[2]);
  },
});
yargs.command({
  command: 'sub',
  describe: 'sub two numbers',
  handler: (argv) => {
    console.log(argv._[1] - argv._[2]);
  },
});
yargs.command({
  command: 'mult',
  describe: 'multiply two numbers',
  handler: (argv) => {
    console.log(argv._[1] * argv._[2]);
  },
});
yargs.command({
  command: 'pow',
  describe: 'square power a number',
  handler: (argv) => {
    console.log(argv._[1] ** 2);
  },
});
yargs.parse();
// console.log(yargs.argv);
