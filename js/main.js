var task = document.getElementById("task") ; 
var myButton = document.getElementById("myButton")
var myButtonDel = document.getElementById("myButtonDel")
var taskContainer = [];

// add task to list 
function addTask(){
    var taskValue = task.value ;
    if(taskValue != "")
    {
        taskContainer.push(taskValue)
        cleanUp();
        displayTasks()
        localStorage.setItem("myTasks" , JSON.stringify(taskContainer));
    }else
    {
        alert("Task Can't Be Empty")
    }
}myButton.addEventListener("click" , addTask)


if(localStorage.getItem("myTasks")==null)
{
    taskContainer = [] ;
}

else{
    taskContainer = JSON.parse(localStorage.getItem("myTasks")) ;
    displayTasks();
}
// display tasks 
function displayTasks(){
    var myTasks = "";
    for(var i = 0 ; i<taskContainer.length ; i++)
    {
        myTasks +=
        `
        <tr>
        <td>${taskContainer[i]} <i class="fa fa-circle-xmark" onclick="deleteTask(${i})"></i></td>
        </tr>
        `
    }document.getElementById("tBody").innerHTML= myTasks;

}

// delete task 
function deleteTask(i){
    taskContainer.splice(i , 1)
    localStorage.setItem("myTasks" , JSON.stringify(taskContainer));
    displayTasks();

}

// delete all tasks 
function deleteAll(){
    taskContainer.splice(0)
    localStorage.setItem("myTasks" , JSON.stringify(taskContainer));
    displayTasks()
}
myButtonDel.addEventListener("click" , deleteAll)

// click on task to make it as completed 
///////////////////////////////////////////////////////////////

// clear input value from input 
function cleanUp(){
    task.value= "";
}

// add task on pressing key """""""Enter"""""""
document.addEventListener("keydown" , function(keyinfo){
    if(keyinfo.keyCode == 13)
    {
        addTask()
    }
})