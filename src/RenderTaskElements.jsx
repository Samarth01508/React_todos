import RemoveClick from "./RemoveEventListener";
import CompleteClick from "./CompleteEventListener";
import IncompleteClick from "./IncompleteEventListener";

export default function RenderTaskDivs(props) {
  const tasks = props.taskList;
  const taskElements = tasks.map((task) => {
    if (task.status == props.reqStatus)
      return (
        <li className="tasklist-element">
          <label className="task-label">{task.taskName}</label>
          <button
            className="remove-btn"
            onClick={() =>
              RemoveClick(task.taskId, props.taskList, props.setTaskList)
            }
          >
            Remove
          </button>
          {props.divHeading == "Incomplete Tasks" && (
            <button
              className="Complete-btn"
              onClick={() =>
                CompleteClick(task.taskId, props.taskList, props.setTaskList)
              }
            >
              Complete
            </button>
          )}
          {props.divHeading == "Completed Tasks" && (
            <button
              className="Incomplete-btn"
              onClick={() =>
                IncompleteClick(task.taskId, props.taskList, props.setTaskList)
              }
            >
              Incomplete
            </button>
          )}
        </li>
      );
  });
  return (
    <div>
      <h1>{props.divHeading}</h1>
      <ul>{taskElements}</ul>
    </div>
  );
}
