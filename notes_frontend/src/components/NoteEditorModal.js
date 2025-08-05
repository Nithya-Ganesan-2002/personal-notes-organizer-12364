import React, { useState, useEffect } from "react";

// PUBLIC_INTERFACE
function NoteEditorModal({ open, note, onClose, onSave, onDelete }) {
  /** Modal for editing or creating a note. Called for both cases. */
  const [title, setTitle] = useState(note ? note.title : "");
  const [body, setBody] = useState(note ? note.body : "");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setBody(note.body);
    } else {
      setTitle("");
      setBody("");
    }
  }, [note]);

  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="modal-header">
          <h2 id="modal-title">{note ? "Edit Note" : "New Note"}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="modal-content">
          <label>
            Title
            <input
              type="text"
              className="modal-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
              maxLength={100}
            />
          </label>
          <label>
            Body
            <textarea
              className="modal-textarea"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={8}
              maxLength={2000}
            />
          </label>
        </div>
        <div className="modal-actions">
          {note && (
            <button className="btn-danger" onClick={() => onDelete(note.id)}>
              Delete
            </button>
          )}
          <button
            className="btn-primary"
            onClick={() => onSave({ ...note, title, body })}
            disabled={!title || !body}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteEditorModal;
