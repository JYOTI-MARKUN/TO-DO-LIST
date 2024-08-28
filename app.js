const submitButton = document.querySelector(".sub-btn");
const taskList = document.querySelector(".all-tasklist");
const taskAddition = document.querySelector(".taskaddition");

const deleteTask = document.querySelectorAll(".delete");
const eachTask = document.querySelector(".outer-div");

// function to add new task
function addTask(text) {
  // adding classes and properties in the new task added
  if (taskAddition.value.length > 0) {
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

    newTask.appendChild(inputField);
    newTask.appendChild(editButton);
    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);
    console.log(newTask);
    taskAddition.value = "";
  }
  
  const editBtns = document.querySelectorAll(".edit");
  const editableInput = document.querySelectorAll(".editable-input");
  console.log(editableInput)

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
  const deletebtns = document.querySelectorAll(".delete")
  deletebtns.forEach((deletebtn)=>{
    deletebtn.addEventListener("click",(e)=>{
     console.log(e.target)
     console.log(e.target.parentElement)
     taskList.removeChild(e.target.parentElement)
    })
  })

  
}

// eventlistner in submit button
submitButton.addEventListener("click", () => {
  const text = taskAddition.value;
  console.log(text);
  addTask(text);
});



