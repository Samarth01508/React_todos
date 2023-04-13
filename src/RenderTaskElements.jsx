import { IncompleteListElement, CompleteListElement } from "./ListElement";

export default function RenderTasks(props) {
  const tasks = props.taskList;
  const taskElements = tasks.map((task) => {
    if (task.status === props.reqStatus) {
      if (task.status === 0)
        return <IncompleteListElement key={task.taskId} task={task} />;
      else if (task.status === 1) {
        return <CompleteListElement key={task.taskId} task={task} />;
      }
    }
  });
  return <ul>{taskElements}</ul>;
}
