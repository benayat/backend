const yargs = require('yargs');
const userCrud = require('./userCrud');

yargs.command({
  command: 'add',
  describe: 'add a new user',
  builder: {
    name: {
      describe: 'user name',
      demandOption: true,
      type: 'string',
    },
    email: {
      describe: 'user email',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    userCrud.addUser(argv.name, argv.email);
  },
});
yargs.command({
  command: 'update',
  describe: 'update user',
  builder: {
    id: {
      describe: 'id of the user to update',
      demandOption: true,
      type: 'string',
    },
    name: {
      describe: 'new name to update',
      demandOption: false,
      type: 'string',
    },
    email: {
      describe: 'new email to update',
      demandOption: false,
      type: 'string',
    },
  },
  handler: (argv) => {
    userCrud.updateUser(argv.id, argv.name, argv.email);
  },
});
yargs.command({
  command: 'remove',
  describe: 'remove a user',
  builder: {
    id: {
      describe: 'id of the user to remove',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    userCrud.removeUser(argv.id);
  },
});
yargs.command({
  command: 'listusers',
  describe: 'list all users users',
  handler: () => {
    console.log(userCrud.listUsers());
  },
});
yargs.parse();
