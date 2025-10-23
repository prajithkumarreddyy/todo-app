function addTask() {
  const input = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (input.value.trim() === '') return;

  const li = document.createElement('li');
  li.textContent = input.value;
  li.onclick = () => li.remove(); // remove on click
  taskList.appendChild(li);

  input.value = '';
}
