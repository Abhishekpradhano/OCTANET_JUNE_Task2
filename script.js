const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("listcontainer");
function addTask(){
    if(inputBox.value === '')
    {
        alert("Please enter a task");
    }
    else
    {
     let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "X";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

