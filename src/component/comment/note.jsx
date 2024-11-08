import React, { useState } from "react";
import "./note.css";
import avatar2 from "../../assets/image/Ellipse 2.png";

const Note = () => {
  const [notes, setNotes] = useState([
    { id: 1, text: "Lưu lại đã, rồi mấy nữa tính tiếp...", time: "5 min ago" },
  ]);

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="note-section">
      <h3>Ghi chú</h3>
      <div className="note-list">
        {notes.map((note) => (
          <div key={note.id} className="note-item">
            <img src={avatar2} alt="You" className="note-avatar" />
            <div className="note-content">
              <h4>You</h4>
              <p className="note">Lưu lại đã rồi mấy bữa nữa tính tiếp</p>
              <span>{note.time}</span>
            </div>
            <button
              className="delete-btn"
              onClick={() => handleDelete(note.id)}
            >
              🗑
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Note;
