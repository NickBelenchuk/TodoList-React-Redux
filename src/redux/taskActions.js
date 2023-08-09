export const addTask = (task) => {
  return {
    type: "tasks/add",
    payload: task,
  };
};

export const deleteTask = (id) => {
  return {
    type: "tasks/delete",
    payload: id,
  };
};

export const updateTask = (tasks) => {
  return {
    type: "tasks/update",
    payload: tasks,
  };
};
