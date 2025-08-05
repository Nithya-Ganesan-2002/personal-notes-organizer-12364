import React from "react";

// PUBLIC_INTERFACE
function NotesList({ notes, onSelect, search, setSearch }) {
  /** List of notes, with search input, filters, click to open */
  return (
    <section className="notes-list">
      <div className="notes-list-header">
        <input
          className="notes-search"
          aria-label="Search notes"
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul className="notes-list-items">
        {notes.length === 0 && (
          <li className="notes-empty">No notes found.</li>
        )}
        {notes.map((note) => (
          <li
            key={note.id}
            className="notes-list-item"
            onClick={() => onSelect(note)}
            tabIndex="0"
          >
            <div className="note-title">{note.title}</div>
            <div className="note-snippet">
              {note.body.slice(0, 56)}{note.body.length > 56 ? "…" : ""}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NotesList;
