import React from "react";
import "../UI/css/AddTask.css";
import { IconButton } from "@mui/material";
import AddSharpIcon from "@mui/icons-material/AddSharp";
const AddTask = () => {
  const addTaskContainerStyle = {
    // backgroundColor: "#191b1a",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    width: "56%",
    margin: "1em",
  };
  return (
    <div className="add-task-container" style={addTaskContainerStyle}>
      <input
        className="standard-input"
        type="text"
        placeholder="Add a task.."
      />
      {/* <button className="icon-btn add-btn">
        <div className="add-icon" />
        <div className="btn-txt">Add Task</div>
      </button> */}
      <IconButton
        sx={{
          color: "white",
          width: "48px",
          height: "48px",
          backgroundColor: "#181a1a",
          borderRadius: "50%",
          marginInline: "5px",
        }}>
        <AddSharpIcon />
      </IconButton>
    </div>
  );
};
export default AddTask;
