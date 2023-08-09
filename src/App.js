import React, { useState } from "react";
import { Input } from "./components/Input";
import { ListItem } from "./components/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, updateTask } from "./redux/taskActions";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [editedText, setEditedText] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleSubmitTask = () => {
    if (!inputValue) return;

    dispatch(addTask({ text: inputValue, id: new Date().getTime() }));
    setInputValue("");
  };

  const handledeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    const editedTaskText = tasks[index].text;
    setEditedText(editedTaskText);
  };

  const handleSaveEdit = (taskId, editedText) => {
    if (editedText === "") return;
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: editedText } : task
    );

    dispatch(updateTask(updatedTasks));
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
        onSaveEdit={handleSaveEdit}
        onEdit={handleEdit}
        editedText={editedText}
        setEditedText={setEditedText}
        editingIndex={editingIndex}
      />
    </div>
  );
}

export default App;
