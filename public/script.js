const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskTime = document.getElementById("taskTime");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  const date = taskDate.value;
  const time = taskTime.value;
  if (!taskText) return;

  const li = document.createElement("li");

  // checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onchange = () => li.classList.toggle("completed");

  const taskDiv = document.createElement("div");
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskDiv.appendChild(taskSpan);

  if (date || time) {
    const dateTimeSpan = document.createElement("span");
    dateTimeSpan.classList.add("date-time");
    dateTimeSpan.textContent = `${date ? date : ""} ${time ? time : ""}`.trim();
    taskDiv.appendChild(dateTimeSpan);
  }

  li.appendChild(checkbox);
  li.appendChild(taskDiv);

  // delete button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Delete";
  removeBtn.onclick = () => li.remove();
  li.appendChild(removeBtn);

  taskList.appendChild(li);

  // reset inputs
  taskInput.value = "";
  taskDate.value = "";
  taskTime.value = "";
}

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});
