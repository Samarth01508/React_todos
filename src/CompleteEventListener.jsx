import GetTaskIndex from "./GetTaskIndex";

const CompleteClick = (taskId, taskList, setTaskList) => {
  let ind = GetTaskIndex(taskId,taskList);
  let newTaskList = [...taskList];
  newTaskList[ind].status = 1;
  setTaskList(newTaskList);
};
export default CompleteClick;
