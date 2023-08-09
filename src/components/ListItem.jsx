import { Item } from "./Item";

export const ListItem = ({
  tasks,
  onDelete,
  onSaveEdit,
  editingIndex,
  editedText,
  setEditedText,
  onEdit,
}) => {
  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleSaveEdit = (taskId, editedText) => {
    onSaveEdit(taskId, editedText);
  };

  return (
    <ul className="list">
      {tasks.map((task, index) => (
        <Item
          task={task}
          key={task.id}
          onDelete={handleDelete}
          onSaveEdit={handleSaveEdit}
          onEdit={() => onEdit(index)}
          isEditing={editingIndex === index}
          editedText={editedText}
          setEditedText={setEditedText}
        />
      ))}
    </ul>
  );
};
