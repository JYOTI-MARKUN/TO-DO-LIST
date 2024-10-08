const submitButton = document.querySelector(".sub-btn");
const taskList = document.querySelector(".all-tasklist");
const taskAddition = document.querySelector(".taskaddition");
const deleteTask = document.querySelectorAll(".delete");
const eachTask = document.querySelector(".outer-div");

// function to add new task
function addTask(text, saveToLocalStorage = true) {
  // adding classes and properties in the new task added
  if (text.length > 0 || !saveToLocalStorage) {
    const newTask = document.createElement("div");
    newTask.classList.add("outer-div");
    const inputField = document.createElement("input");
    inputField.classList.add("editable-input");
    inputField.type = "text";
    inputField.disabled = true;
    inputField.value = text;

    // append newtask to the list
    newTask.appendChild(inputField);

    // add edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit");

    // add delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");

    newTask.appendChild(editButton);
    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);
    console.log(newTask);

    // after adding task input should be again empty
    taskAddition.value = "";

    if (saveToLocalStorage) {
      addTaskToLocalStorage(text);
    }
  }

  const editBtns = document.querySelectorAll(".edit");
  const editableInput = document.querySelectorAll(".editable-input");
  console.log(editableInput);

  // make input able on the click of edit button
  editBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const currentInputField = e.target.previousElementSibling;
      console.log(currentInputField);

      editableInput.forEach((input) => {
        input.disabled = true;
      });
      currentInputField.disabled = false;
    });
  });

  // delete functionality
  const deletebtns = document.querySelectorAll(".delete");
  deletebtns.forEach((deletebtn) => {
    deletebtn.addEventListener("click", (e) => {   
      taskElement = e.target.parentElement
      taskList.removeChild(taskElement);
      removeTaskFromLocalStorage(taskElement)
    });
  });
}


// adding task to local storage
function addTaskToLocalStorage(task) {
  console.log(task);
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  console.log(tasks);
  if (tasks.includes(task)) {
    console.log(task);
    console.log(`${task} is already added in the local storage`);
  } else {
    tasks.push(task);
    console.log(task);
    console.log(`${task} added to the local storage`);
  }

  let addedtasks = localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(addedtasks);
}

// remove taks from localStorage
function removeTaskFromLocalStorage(taskElement){
let tasks = JSON.parse(localStorage.getItem("task"))||[]
let taskText = taskElement.querySelector(".editable-input").value
tasks = tasks.filter((t)=>t!==taskText)
localStorage.setItem("tasks",JSON.stringify(tasks))

}


// load task from local storage
function loadTaskFromLocalStorage() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    addTask(task, false); // calling the function addtask and add task to the UI
  });
}



// eventlistner in submit button
submitButton.addEventListener("click", () => {
  const text = taskAddition.value;
  console.log(text);
  addTask(text, true);
});


// eventlistner in submit button
submitButton.addEventListener("click", () => {
  const text = taskAddition.value;
  console.log(text);
  addTask(text, true);
});


//call the function localTaskFromLOcalStorage when page gets reload
window.addEventListener("load", loadTaskFromLocalStorage);
