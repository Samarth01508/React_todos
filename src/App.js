import "./App.css";
import { useState } from "react";
import RenderTaskDivs from "./RenderTaskElements";
import AddTaskBar from "./AddTaskBar";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="todos-app">
      <h1 className="heading">Todos-App</h1>
      <AddTaskBar taskList={taskList} setTaskList={setTaskList} />
      <div id="Task-div">
        <RenderTaskDivs
          taskList={taskList}
          divHeading="Incomplete Tasks"
          setTaskList={setTaskList}
          reqStatus="INCOMPLETE"
        ></RenderTaskDivs>
        <RenderTaskDivs
          taskList={taskList}
          divHeading="Completed Tasks"
          setTaskList={setTaskList}
          reqStatus="COMPLETED"
        ></RenderTaskDivs>
      </div>
    </div>
  );
}

export default App;
