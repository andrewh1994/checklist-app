import React, { useState } from "react";

export const ToDoItem = ({ id, text, onChecked }) => {
  const [crossedOut, setCrossedOut] = useState(false);

  const handleClick = (id) => {
    setCrossedOut((prevValue) => !prevValue);
    //you can pass a function into setState(), where the paramter it
    //receives is the most recent value of state ('prevValue' in this case)
    //setTimeout(onChecked(id), 1000);
  };

  return (
    <div onClick={() => onChecked(id)}>
      {/*above this line we use ()=> to assign the function to the onClick WITHOUT calling it immediately executing when the ToDoItem component is rendered */}
      <li style={{ textDecoration: crossedOut ? "line-through" : "none" }}>
        {text}
      </li>
    </div>
  );
};
