import React, { useState } from "react";
import "./createArea.css";
import { MdAdd } from 'react-icons/md';

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
      props.onAdd(note);
      setNote({ title: "", content: "" });
      setIsExpanded(false);
      event.preventDefault();
  }

  function expand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {
          isExpanded && (<input
            name="title"
            onChange={handleChange}
            placeholder="Title"
            value={note.title}
          />)
        }

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={note.content}
        />
        <button onClick={submitNote}><MdAdd className="addIcon"/></button>
      </form>
    </div>
  );
}

export default CreateArea;
