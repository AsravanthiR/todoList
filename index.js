//const toDoList = document.getElementById('todo-list');
const dateElement= document.getElementById("date"); 
const ul = document.getElementById("myList");
let button = document.getElementById("addButton");

const toDoList = [];
addButton.addEventListener("click", addList);
myList.addEventListener("click", deletetask);
//Just added this line. this will delete entry from done list
tasksDone.addEventListener("click", deletetask);

const options= {
  weekday: "long", month:"short",day:"numeric"
};
const today= new Date();
dateElement.innerHTML=today.toLocaleDateString("en-us", options); 
function addList(event) {
  event.preventDefault();
  const toDo = myInputTodo.value;
  if (toDo === "") {
    alert("type a to do task");
  } else {
    console.log(toDo);
    toDoList.push(toDo);
    const toDoDiv = document.createElement("div");
    const newtask = document.createElement("li");
    newtask.innerText = toDo;
    toDoDiv.appendChild(newtask);
    const doneButton = document.createElement("button");
    doneButton.innerHTML = '<i class="fas fa-check"></i>';
    doneButton.classList.add("done")
    doneButton.innerText = "done";
    
    toDoDiv.appendChild(doneButton);
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML='<i class="fas fa-trash"></i>'
    deleteButton.innerText = "delete";
    deleteButton.classList.add("delete")

    toDoDiv.appendChild(deleteButton);
    myList.appendChild(toDoDiv);
    console.log(toDoDiv);
    //this empty the input after adding to the list
    myInputTodo.value = "";
  }
}

function deletetask(event) {
  const task = event.target;
  const donne = task.innerText;
  console.log(donne);
  const clickedItem = task.parentElement;
  if (donne === "delete") {
    clickedItem.remove();
  }
  if (donne === "done") {
    clickedItem.removeChild(clickedItem.childNodes[1]);
    tasksDone.appendChild(clickedItem);
  }
}