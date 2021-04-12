const yargs = require('yargs');
const notes = require('./notes');

yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});
yargs.command({
  command: 'remove',
  describe: 'remove a note',
  builder: {
    title: {
      describe: 'title to remove',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: 'listNotes',
  describe: 'list all notes titles',
  handler: () => {
    console.log(notes.listNotes());
  },
});
yargs.parse();
