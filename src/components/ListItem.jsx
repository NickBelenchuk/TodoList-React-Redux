import React from "react";
import { Item } from "./Item";

export const ListItem = ({
  tasks,
  onDelete,
  onEdit,
  onSaveEdit,
  editingIndex,
  editedText,
  setEditedText,
}) => {
  return (
    <ul className="list">
      {tasks.map((task, index) => (
        <Item
          task={task}
          key={task.id}
          onDelete={onDelete}
          onEdit={() => onEdit(index)}
          onSaveEdit={() => onSaveEdit(index)}
          isEditing={editingIndex === index}
          editedText={editedText}
          setEditedText={setEditedText}
        />
      ))}
    </ul>
  );
};
