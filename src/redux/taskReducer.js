const initialState = {
  tasks: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "tasks/add":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "tasks/delete":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "tasks/update":
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};
