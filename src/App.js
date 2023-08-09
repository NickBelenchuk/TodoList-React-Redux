import React, { useState } from "react";
import { Input } from "./components/Input";
import { ListItem } from "./components/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, updateTask } from "./redux/taskActions";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [editedText, setEditedText] = useState("");
  const [editingid, setEditingid] = useState(null);

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

  const handleEdit = (id) => {
    setEditingid(id);
    console.log(id);
    const editedTaskText = tasks[id].text;
    setEditedText(editedTaskText);
  };

  const handleSaveEdit = (taskId, editedText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: editedText } : task
    );

    dispatch(updateTask(updatedTasks));
    setEditingid(null);
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
        editingid={editingid}
      />
    </div>
  );
}

export default App;
