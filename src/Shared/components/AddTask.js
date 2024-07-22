import React, { useState } from "react";
import "../UI/css/AddTask.css";
import { IconButton } from "@mui/material";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/TaskSlice";

const AddTask = () => {
  const [taskInput, setTaskInput] = useState("");
  const dispatch = useDispatch();
  const addTaskContainerStyle = {
    // backgroundColor: "#191b1a",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    width: "56%",
    margin: "1em",
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter" && taskInput !== "") {
      handleAddTask();
    }
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      dispatch(addTask({ id: uuidv4(), task: taskInput, completed: false }));
      setTaskInput("");
    }
  };

  const handleTaskInput = (e) => {
    setTaskInput(e.target.value);
  };

  return (
    <div className="add-task-container" style={addTaskContainerStyle}>
      <input
        className="standard-input"
        type="text"
        placeholder="Add a task.."
        value={taskInput}
        onChange={handleTaskInput}
        onKeyDown={handleEnterPress}
      />
      <IconButton
        sx={{
          color: "white",
          width: "48px",
          height: "48px",
          backgroundColor: "#181a1a",
          borderRadius: "50%",
          marginInline: "5px",
        }}
        onClick={handleAddTask}>
        <AddSharpIcon />
      </IconButton>
    </div>
  );
};
export default AddTask;
