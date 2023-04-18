import GetTaskIndex from "./GetTaskIndex";

const CompleteClick = (taskId, taskList, setTaskList) => {
  let ind = GetTaskIndex(taskId,taskList);
  let newTaskList = [...taskList];
  newTaskList[ind].status = "COMPLETED";
  setTaskList(newTaskList);
};
export default CompleteClick;
