import { Item } from "./Item";

export const ListItem = ({
  tasks,
  onDelete,
  onSaveEdit,
  editingid,
  editedText,
  setEditedText,
  onEdit,
}) => {
  return (
    <ul className="list">
      {tasks.map((task, index) => (
        <Item
          task={task}
          key={task.id}
          onDelete={() => onDelete(task.id)}
          onSaveEdit={(editedText) => onSaveEdit(task.id, editedText)}
          onEdit={onEdit}
          isEditing={editingid === task.id}
          editedText={editedText}
          setEditedText={setEditedText}
        />
      ))}
    </ul>
  );
};
