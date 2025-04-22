document.getElementById("taskForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  }
});

function addTask(text) {
  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = text;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.innerText = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerText = "Delete";

  // Edit Functionality
  editBtn.addEventListener("click", function () {
    const newText = prompt("Edit your task:", span.innerText);
    if (newText !== null && newText.trim() !== "") {
      span.innerText = newText.trim();
    }
  });

  // Delete Functionality
  deleteBtn.addEventListener("click", function () {
    li.remove(); // DOM removal
  });

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);
  taskList.appendChild(li);
}

