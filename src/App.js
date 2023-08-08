import React, { useState } from "react";
import { Input } from "./components/Input";
import { ListItem } from "./components/ListItem";

function App() {
  const [tasks, setNewTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleSubmitTask = (e) => {
    e.preventDefault();
    if (!inputValue) return;

    setNewTasks([...tasks, { text: inputValue, id: new Date() }]);
    setInputValue("");
  };

  const handledeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setNewTasks(updatedTasks);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedText(tasks[index].text);
  };

  const handleSaveEdit = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = editedText;
    setNewTasks(updatedTasks);
    setEditingIndex(null);
    setEditedText("");
  };

  return (
    <div className="app">
      <Input
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmitTask={handleSubmitTask}
      />
      <ListItem
        tasks={tasks}
        onDelete={handledeleteTask}
        onEdit={handleEdit}
        onSaveEdit={handleSaveEdit}
        editingIndex={editingIndex}
        editedText={editedText}
        setEditedText={setEditedText}
      />
    </div>
  );
}

export default App;
