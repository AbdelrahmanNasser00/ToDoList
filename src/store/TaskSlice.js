import { createSlice } from "@reduxjs/toolkit";

export const loadTasksFromLocalStorage = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  return tasks;
};

export const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const TaskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: loadTasksFromLocalStorage(),
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveTasksToLocalStorage(state.tasks);
      }
    },
  },
});

export const { addTask, removeTask, toggleTaskCompletion } = TaskSlice.actions;
export default TaskSlice.reducer;
