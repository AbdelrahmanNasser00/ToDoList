import React from "react";
import "../UI/css/AddTask.css";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import IconButton from "@mui/material/IconButton";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { removeTask, toggleTaskCompletion } from "../../store/TaskSlice";
import { useDispatch } from "react-redux";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleRemoveTask = () => {
    dispatch(removeTask(task.id));
  };

  const handleToggleTaskCompletion = () => {
    dispatch(toggleTaskCompletion(task.id));
  };
  return (
    <div
      className="task-container"
      style={{
        backgroundColor: task.completed
          ? "rgb(100, 100, 100, 0.1)"
          : "rgb(255, 255, 255, 0.1)",
      }}>
      <span
        className="task-content"
        style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.task}
      </span>
      <IconButton
        sx={{
          color: "white",
          width: "48px",
          height: "48px",
          backgroundColor: "rgb(255, 255, 255, 0.1)",
          borderRadius: "50%",
          marginInline: "5px",
        }}
        onClick={handleToggleTaskCompletion}>
        <CheckRoundedIcon />
      </IconButton>
      <IconButton
        sx={{
          color: "white",
          width: "48px",
          height: "48px",
          backgroundColor: "rgb(255, 255, 255, 0.1)",
          borderRadius: "50%",
          margin: "5px",
        }}
        onClick={handleRemoveTask}>
        <DeleteRoundedIcon />
      </IconButton>
    </div>
  );
};
export default Task;
