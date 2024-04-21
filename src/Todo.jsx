import React, { useState } from "react";

function Todo() {
  const [list, setList] = useState([]);
  const [newitem, setNewitem] = useState("");

  function handleList(event) {
    setNewitem(event.target.value);
  }

  function AddButton() {
    if (newitem !== "") {
      setList((l) => [newitem, ...l]);
      setNewitem("");
    }
  }

  function deleteitem(index) {
    setList((l) => l.filter((_, i) => i !== index));
  }

  function moveup(index) {
    if (index > 0) {
      const uplist = [...list];
      [uplist[index], uplist[index - 1]] = [uplist[index - 1], uplist[index]];
      setList(uplist); // Update the state with the new order
    }
  }

  function movedown(index) {
    if (index < list.length - 1) {
      const uplist = [...list];
      [uplist[index], uplist[index + 1]] = [uplist[index + 1], uplist[index]];
      setList(uplist); // Update the state with the new order
    }
  }

  return (
    <div className="todolist-container">
      <h1>Todo List</h1>
      <div className="input-wrapper">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            AddButton();
          }}
        >
          <input
            type="text"
            onChange={handleList}
            placeholder="Enter a task..."
            value={newitem}
            className="inputInIt"
          />
        </form>
        <button type="submit" onClick={AddButton}>
          ✔{" "}
        </button>
      </div>
      <div className="listitem-wrapper">
        <ul>
          {" "}
          {list.map((item, index) => (
            <li key={index}>
              <span className="texting">{item}&nbsp;</span>
              <button onClick={() => deleteitem(index)}>⤬</button>
              <button onClick={() => moveup(index)}>⇑</button>
              <button onClick={() => movedown(index)}>⇓</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
