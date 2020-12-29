import Fuse from 'fuse.js'

const options = {  
  threshold: 0.5,
  distance: 400,  
  keys: [
    "title",
    "description"
  ]
};
export const addNote = (notesCollection, newNote) => {
  notesCollection.push(newNote)
  return [...notesCollection]
}
export const removeNote = (notesCollection, _id) => {
  const index = notesCollection.findIndex(el => el._id === _id)
  notesCollection.splice(index, 1)
  return [...notesCollection]
}
export const filterNotes = (notesCollection, pattern) => {
  const fuse = new Fuse(notesCollection, options)
  const filtered = fuse.search(pattern)
  const filteredItems = filtered.reduce((prev, curr) => {
     prev.push(curr.item)
     return prev
  }, [])  
  return filteredItems
}
export const editNote = (collection, noteToEdit) => {  
  const index = collection.findIndex(el => el._id === noteToEdit._id)
  if(index !== -1) collection[index] = {
    ...collection[index],
    ...noteToEdit
  }
  return [...collection]
}