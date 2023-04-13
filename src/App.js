import "./App.css";
import { useState, createContext } from "react";
import RenderTasks from "./RenderTaskElements";

export const taskContext = createContext();

function App() {
  const [taskList, setTaskList] = useState([]);

  function addTaskClick() {
    var input = document.getElementById("task-input-bar");
    var taskName = input.value;
    if (!taskName) alert("Enter any Task");
    else {
      setTaskList(
        taskList.concat({ taskName: taskName, status: 0, taskId: Date.now() })
      );
    }
    input.value = "";
  }

  return (
    <taskContext.Provider value={{ taskList, setTaskList }}>
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
          <RenderTasks taskList={taskList} reqStatus={0}></RenderTasks>
        </div>
        <div id="completedTask-div">
          <h2 className="div-heading">Completed Tasks</h2>
          <RenderTasks taskList={taskList} reqStatus={1}></RenderTasks>
        </div>
      </div>
    </taskContext.Provider>
  );
}

export default App;
