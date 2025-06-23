// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  alert("Form submitted successfully!");
  this.reset();
});

// Todo List Functionality
const todoList = document.getElementById("todoList");
const totalTasks = document.getElementById("totalTasks");

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => {
    li.remove();
    updateTaskCount();
  };

  li.appendChild(deleteBtn);
  todoList.appendChild(li);
  taskInput.value = "";
  updateTaskCount();
}

function updateTaskCount() {
  totalTasks.textContent = todoList.children.length;
}
