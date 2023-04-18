export default function AddTaskBar(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Type your Task here"
        id="task-input-bar"
      />
      <button
        id="addTask-button"
        onClick={() => addTaskClick(props.taskList, props.setTaskList)}
      >
        Add Task
      </button>
    </div>
  );
}
function addTaskClick(taskList, setTaskList) {
  var input = document.getElementById("task-input-bar");
  var taskName = input.value;
  if (!taskName) alert("Enter any Task");
  else {
    setTaskList(
      taskList.concat({
        taskName: taskName,
        status: "INCOMPLETE",
        taskId: Date.now(),
      })
    );
  }
  input.value = "";
}
