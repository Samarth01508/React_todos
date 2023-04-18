import GetTaskIndex from "./GetTaskIndex";

const IncompleteClick = (taskId, taskList, setTaskList) => {
  let ind = GetTaskIndex(taskId,taskList);
  let newTaskList = [...taskList];
  newTaskList[ind].status = "INCOMPLETE";
  setTaskList(newTaskList);
};
export default IncompleteClick;
