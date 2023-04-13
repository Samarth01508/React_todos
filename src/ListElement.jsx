import RemoveClick from "./RemoveEventListener";
import CompleteClick from "./CompleteEventListener";
import IncompleteClick from "./IncompleteEventListener";
import { taskContext } from "./App";
import { useContext } from "react";

export function IncompleteListElement(props) {
  const { taskList, setTaskList } = useContext(taskContext);
  return (
    <li className="tasklist-element">
      <label className="task-label">{props.task.taskName}</label>
      <button
        className="remove-btn"
        onClick={() => RemoveClick(props.task.taskId, taskList, setTaskList)}
      >
        Remove
      </button>
      <button
        className="Complete-btn"
        onClick={() => CompleteClick(props.task.taskId, taskList, setTaskList)}
      >
        Complete
      </button>
    </li>
  );
}

export function CompleteListElement(props) {
  const { taskList, setTaskList } = useContext(taskContext);
  return (
    <li className="tasklist-element">
      <label className="task-label">{props.task.taskName}</label>
      <button
        className="remove-btn"
        onClick={() => RemoveClick(props.task.taskId, taskList, setTaskList)}
      >
        Remove
      </button>
      <button
        className="Incomplete-btn"
        onClick={() =>
          IncompleteClick(props.task.taskId, taskList, setTaskList)
        }
      >
        Incomplete
      </button>
    </li>
  );
}
