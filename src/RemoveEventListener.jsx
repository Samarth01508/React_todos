import GetTaskIndex from "./GetTaskIndex";

const RemoveClick = (taskId, taskList, setTaskList) => {
  let ind = GetTaskIndex(taskId, taskList);
  let newTaskList = [...taskList];
  newTaskList.splice(ind, 1);
  setTaskList(newTaskList);
};
export default RemoveClick;
