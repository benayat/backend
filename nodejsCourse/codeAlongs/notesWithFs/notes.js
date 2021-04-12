const fs = require('fs');
const getNotes = () => 'your notes...';
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.find((note) => note.title === title);
  if (typeof duplicateNotes === 'undefined') {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
  } else {
    console.log(`can't insert duplicates`);
  }
};
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};
const loadNotes = () => {
  try {
    const buffer = fs.readFileSync('notes.json');
    const string = buffer.toString();
    return JSON.parse(string);
  } catch (err) {
    return [];
  }
};
const removeNote = (title) => {
  const notes = loadNotes();
  const indexToRemove = notes.findIndex((note) => note.title === title);
  if (typeof indexToRemove === 'undefined') return 'not there';
  (indexToRemove + 1 < notes.length &&
    notes.slice(indexToRemove, indexToRemove + 1)) ||
    notes.pop();
  saveNotes(notes);
};
const listNotes = () => {
  return loadNotes().map((note) => note.title);
};
const readNote = (title) => {
  const index = notes.find((note) => note.title === title);
};
module.exports = {
  getNotes,
  addNote,
  saveNotes,
  loadNotes,
  removeNote,
  listNotes,
};
