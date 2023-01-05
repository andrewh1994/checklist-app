import React, { useState } from "react";

export const InputArea = ({ onAdd }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };

  const checkIfKeyPressedIsEnter = (event) => {
    console.log(event.keyCode)
    if (event.keyCode === 13) {
      const addButton = document.getElementById("addButton");
      addButton.click();
    }
  };

  return (
    <div className="form">
      <input onChange={handleChange} onKeyDown={checkIfKeyPressedIsEnter} type="text" value={inputText} />
      <button
        id="addButton"
        onClick={() => {
          onAdd(inputText, setInputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
};
