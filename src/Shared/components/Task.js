import React from "react";
import "../UI/css/AddTask.css";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import IconButton from "@mui/material/IconButton";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const Task = () => {
  return (
    <div className="task-container">
      <span className="task-content">first task</span>
      <IconButton
        sx={{
          color: "white",
          width: "48px",
          height: "48px",
          backgroundColor: "rgb(255, 255, 255, 0.1)",
          borderRadius: "50%",
          marginInline: "5px",
        }}>
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
        }}>
        <DeleteRoundedIcon />
      </IconButton>
    </div>
  );
};
export default Task;
