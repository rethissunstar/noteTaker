// let noteTitle;
// let noteText;
// let saveNoteBtn;
// let newNoteBtn;
// let noteList;

// if (window.location.pathname === '/notes') {
//   noteTitle = document.querySelector('.note-title');
//   noteText = document.querySelector('.note-textarea');
//   saveNoteBtn = document.querySelector('.save-note');
//   newNoteBtn = document.querySelector('.new-note');
//   noteList = document.querySelectorAll('.list-container .list-group');
// }

// const showNoteContent = () => {
//   // Display the active note content in the main area
//   document.getElementById('note-content').innerHTML = `
//     <h2>${activeNote.title}</h2>
//     <p>${activeNote.text}</p>
//   `;
// };

// // Show an element
// const show = (elem) => {
//   elem.style.display = 'inline';
// };

// // Hide an element
// const hide = (elem) => {
//   elem.style.display = 'none';
// };

// // activeNote is used to keep track of the note in the textarea
// let activeNote = {};

// const getNotes = () =>
//   fetch('/api/db', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

// const saveNote = (note) =>
//   fetch('/api/db', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(note),
//   });

//   const deleteNote = (id) => {
//     const noteIndex = db.findIndex((note) => note.id === id);
//     if (noteIndex !== -1) {
//       db.splice(noteIndex, 1);
//       localStorage.setItem('notes', JSON.stringify(db));
//     }
  
//     return fetch(`/api/db:${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   };
  

//   const renderActiveNote = () => {
//     hide(saveNoteBtn);
  
//     if (activeNote.id) {
//       noteTitle.setAttribute('readonly', true);
//       noteText.setAttribute('readonly', true);
//       noteTitle.value = activeNote.title;
//       noteText.value = activeNote.text;
//     } else {
//       noteTitle.removeAttribute('readonly');
//       noteText.removeAttribute('readonly');
//       noteTitle.value = '';
//       noteText.value = '';
//     }
    
//     showNoteContent();
//   };
// const handleNoteSave = () => {
//   const newNote = {
//     title: noteTitle.value,
//     text: noteText.value,
//   };
//   saveNote(newNote).then(() => {
//     getAndRenderNotes();
//     localStorage.setItem('notes', JSON.stringify(db));
//     renderActiveNote();
//   });
// };

// // Delete the clicked note
// const handleNoteDelete = (e) => {
//   // Prevents the click listener for the list from being called when the button inside of it is clicked
//   e.stopPropagation();

//   const noteElement = e.target.parentElement;
//   const noteId = JSON.parse(noteElement.dataset.note).id;

//   if (activeNote.id === noteId) {
//     activeNote = {};
//   }

//   deleteNote(noteId).then(() => {
//     getAndRenderNotes();
//     renderActiveNote();
//   });
// };

// // Sets the activeNote and displays it
// const handleNoteView = (e) => {
//   e.preventDefault();
//   const noteElement = e.target.parentElement;
//   activeNote = noteElement.dataset.note ? JSON.parse(noteElement.dataset.note) : {};
//   renderActiveNote();
// };

// // Sets the activeNote to and empty object and allows the user to enter a new note
// const handleNewNoteView = (e) => {
//   activeNote = {};
//   renderActiveNote();
// };

// const handleRenderSaveBtn = () => {
//   if (!noteTitle.value.trim() || !noteText.value.trim()) {
//     hide(saveNoteBtn);
//   } else {
//     show(saveNoteBtn);
//   }
// };

// // Render the list of note titles
// const renderNoteList = async (notes) => {
//   let jsonNotes = await notes.json();
//   if (window.location.pathname === '/notes') {
//     noteList.forEach((el) => (el.innerHTML = ''));
//   }

//   let noteListItems = [];

//   // Returns HTML element with or without a delete button
//   const createLi = (text, delBtn = true) => {
//     const liEl = document.createElement('li');
//     liEl.classList.add('list-group-item');
  
//     const spanEl = document.createElement('span');
//     spanEl.classList.add('list-item-title');
//     spanEl.innerText = text;
  
//     liEl.append(spanEl);
  
//     if (delBtn) {
//       const delBtnEl = document.createElement('i');
//       delBtnEl.classList.add(
//         'fas',
//         'fa-trash-alt',
//         'float-right',
//         'text-danger',
//         'delete-note'
//       );
//       delBtnEl.addEventListener('click', handleNoteDelete); // Add this line
  
//       liEl.append(delBtnEl);
//     }
  
//     liEl.addEventListener('click', handleNoteView);
  
//     return liEl;
//   };
  

//   if (jsonNotes.length === 0) {
//     noteListItems.push(createLi('No saved Notes', false));
//   }

//   jsonNotes.forEach((note) => {
//     const li = createLi(note.title);
//     li.dataset.note = JSON.stringify(note);

//     noteListItems.push(li);
//   });

//   if (window.location.pathname === '/notes') {
//     noteListItems.forEach((note) => noteList[0].append(note));
//   }
// };

// // Gets notes from the db and renders them to the sidebar
// //const getAndRenderNotes = () => getNotes().then(renderNoteList);
// const getAndRenderNotes = () => {
//   const localNotes = JSON.parse(localStorage.getItem('notes'));
//   if (localNotes) {
//     db.push(...localNotes);
//     renderNoteList(new Response(JSON.stringify(localNotes)));
//   } else {
//     getNotes().then(renderNoteList);
//   }
// };
// if (window.location.pathname === '/notes') {
//   saveNoteBtn.addEventListener('click', handleNoteSave);
//   newNoteBtn.addEventListener('click', handleNewNoteView);
//   noteTitle.addEventListener('keyup', handleRenderSaveBtn);
//   noteText.addEventListener('keyup', handleRenderSaveBtn);
// }

// getAndRenderNotes();

let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let noteList;

if (window.location.pathname === '/notes') {
  noteTitle = document.querySelector('.note-title');
  noteText = document.querySelector('.note-textarea');
  saveNoteBtn = document.querySelector('.save-note');
  newNoteBtn = document.querySelector('.new-note');
  noteList = document.querySelector('.list-container .list-group');
}

const showNoteContent = () => {
  // Display the active note content in the main area
  document.getElementById('note-content').innerHTML = `
    <h2>${activeNote.title}</h2>
    <p>${activeNote.text}</p>
  `;
};

// Show an element
const show = (elem) => {
  elem.style.display = 'inline';
};

// Hide an element
const hide = (elem) => {
  elem.style.display = 'none';
};

// activeNote is used to keep track of the note in the textarea
let activeNote = {};

const getNotes = () =>
  fetch('/api/db', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

const saveNote = (note) =>
  fetch('/api/db', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });

const deleteNote = (id) =>
  fetch(`/api/db/${id}`, { // Update the URL to include a forward slash (/) before the ID
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

const renderActiveNote = () => {
  hide(saveNoteBtn);

  if (activeNote.id) {
    noteTitle.removeAttribute('readonly'); // Remove the `readonly` attribute
    noteText.removeAttribute('readonly'); // Remove the `readonly` attribute
    noteTitle.value = activeNote.title;
    noteText.value = activeNote.text;
  } else {
    noteTitle.value = '';
    noteText.value = '';
    noteTitle.setAttribute('readonly', true);
    noteText.setAttribute('readonly', true);
  }

  showNoteContent();
};

const handleNoteSave = () => {
  const newNote = {
    title: noteTitle.value,
    text: noteText.value,
  };
  saveNote(newNote)
    .then(() => {
      return getAndRenderNotes(); // Return the promise chain to ensure proper sequence
    })
    .then(() => {
      localStorage.setItem('notes', JSON.stringify(db));
      renderActiveNote();
    })
    .catch((error) => {
      console.error('Error saving note:', error);
    });
};

// Delete the clicked note
const handleNoteDelete = (e) => {
  e.stopPropagation();

  const noteElement = e.target.parentElement;
  const noteId = JSON.parse(noteElement.dataset.note).id;

  if (activeNote.id === noteId) {
    activeNote = {};
    renderActiveNote();
  }

  deleteNote(noteId)
    .then(() => {
      return getAndRenderNotes(); // Return the promise chain to ensure proper sequence
    })
    .then(() => {
      localStorage.setItem('notes', JSON.stringify(db));
    })
    .catch((error) => {
      console.error('Error deleting note:', error);
    });
};

// Sets the activeNote and displays it
const handleNoteView = (e) => {
  e.preventDefault();
  const noteElement = e.target.closest('.list-group-item'); // Use `closest` to find the parent list item
  activeNote = noteElement.dataset.note ? JSON.parse(noteElement.dataset.note) : {};
  renderActiveNote();
};

// Sets the activeNote to an empty object and allows the user to enter a new note
const handleNewNoteView = (e) => {
  e.preventDefault();
  activeNote = {};
  renderActiveNote();
};

const handleRenderSaveBtn = () => {
  if (!noteTitle.value.trim() || !noteText.value.trim()) {
    hide(saveNoteBtn);
  } else {
    show(saveNoteBtn);
  }
};

// Render the list of note titles
const renderNoteList = async (notes) => {
  let jsonNotes = await notes.json();
  noteList.innerHTML = ''; // Clear the note list

  let noteListItems = [];

  if (jsonNotes.length === 0) {
    noteListItems.push(createLi('No saved notes', false));
  }

  jsonNotes.forEach((note) => {
    const li = createLi(note.title);
    li.dataset.note = JSON.stringify(note);

    noteListItems.push(li);
  });

  noteListItems.forEach((note) => {
    noteList.appendChild(note);
  });
};

// Create a list item element
const createLi = (text, delBtn = true) => {
  const liEl = document.createElement('li');
  liEl.classList.add('list-group-item');

  const spanEl = document.createElement('span');
  spanEl.classList.add('list-item-title');
  spanEl.innerText = text;

  liEl.appendChild(spanEl);

  if (delBtn) {
    const delBtnEl = document.createElement('i');
    delBtnEl.classList.add('fas', 'fa-trash-alt', 'float-right', 'text-danger', 'delete-note');
    delBtnEl.addEventListener('click', handleNoteDelete);

    liEl.appendChild(delBtnEl);
  }

  return liEl;
};

const getAndRenderNotes = () => {
  const localNotes = JSON.parse(localStorage.getItem('notes'));
  if (localNotes) {
    db.push(...localNotes);
    renderNoteList(new Response(JSON.stringify(localNotes)));
  } else {
    getNotes()
      .then((response) => {
        return response.json();
      })
      .then((jsonNotes) => {
        localStorage.setItem('notes', JSON.stringify(jsonNotes));
        db.push(...jsonNotes);
        renderNoteList(new Response(JSON.stringify(jsonNotes)));
      })
      .catch((error) => {
        console.error('Error getting notes:', error);
      });
  }
};

if (window.location.pathname === '/notes') {
  saveNoteBtn.addEventListener('click', handleNoteSave);
  newNoteBtn.addEventListener('click', handleNewNoteView);
  noteTitle.addEventListener('keyup', handleRenderSaveBtn);
  noteText.addEventListener('keyup', handleRenderSaveBtn);
}

getAndRenderNotes();
