export const Item = ({
  task,
  onDelete,
  onEdit,
  onSaveEdit,
  isEditing,
  editedText,
  setEditedText,
}) => {
  const handleSaveEditClick = () => {
    onSaveEdit(task.id, editedText);
  };
  return (
    <li className="list-item" key={task.id}>
      {isEditing ? (
        <input
          className="input"
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span className="text">{task.text}</span>
      )}
      <div className="control">
        <span className="close" onClick={() => onDelete(task.id)}>
          ❌
        </span>
        {isEditing ? (
          <span className="save" onClick={handleSaveEditClick}>
            🔒
          </span>
        ) : (
          <span className="edit" onClick={onEdit}>
            ✏️
          </span>
        )}
      </div>
    </li>
  );
};
