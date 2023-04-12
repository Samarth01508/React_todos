import "./App.css";
import { useState } from "react";

function App() {
  function addTaskClick() {
    var input = document.getElementById("task-input-bar");
    var taskName = input.value;
    if (!taskName) alert("Enter any Task");
    else {
      pushToIncomplete(taskName);
    }
    input.value = "";
  }
  function pushToIncomplete(taskName) {
    let incompleteDiv = document.getElementById("incompleteTask-div");
    let taskElement = createTaskElement(taskName);
    incompleteDiv.appendChild(taskElement);
  }
  function createTaskElement(taskName) {
    let taskElement = document.createElement("span");
    taskElement.innerHTML = `${taskName}`;
    return taskElement;
    // return (
    //   <span>
    //     <label className="task-label">{taskName}</label>
    //     <button className="remove-btn">Remove</button>
    //     <button className="complete-btn">Complete</button>
    //   </span>
    // );
  }
  return (
    <div className="todos-app">
      <h1 className="heading">Todos-App</h1>
      <input
        type="text"
        placeholder="Type your Task here"
        id="task-input-bar"
      />
      <button id="addTask-button" onClick={addTaskClick}>
        Add Task
      </button>
      <div id="incompleteTask-div">
        <h2 className="div-heading">Incomplete Tasks</h2>
      </div>
      <div id="completedTask-div">
        <h2 className="div-heading">Completed Tasks</h2>
      </div>
    </div>
  );
}

export default App;
