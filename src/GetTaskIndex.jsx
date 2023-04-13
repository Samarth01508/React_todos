export default function GetTaskIndex(taskId, taskList) {
  for (let i in taskList) {
    if (taskList[i].taskId == taskId) return i;
  }
  return -1;
}
