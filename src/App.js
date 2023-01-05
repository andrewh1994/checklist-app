import React, { useState } from "react";

import { Heading } from "./Heading";
import { InputArea } from "./InputArea";
import { ToDoItem } from "./ToDoItem";

export const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (inputText) => {
    if (inputText) {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
    }
  };

  const deleteItem = (idOfItemToBeDeleted) => {
    setItems((prevItems) => {
      return prevItems.filter(
        (item, currentItemIndex) => currentItemIndex !== idOfItemToBeDeleted
      );
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <Heading />
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, itemIndex) => (
            <ToDoItem
              key={itemIndex}
              id={itemIndex}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
