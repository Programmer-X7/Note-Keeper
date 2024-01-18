import React from "react";
import "./note.css";
import { MdDelete } from 'react-icons/md';

const Note = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><MdDelete /></button>
    </div>
  );
};

export default Note;
