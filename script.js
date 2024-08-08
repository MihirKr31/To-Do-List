let inputs = document.getElementById("input");
let text = document.querySelector(".text");


function Add()
{
    if(inputs.value=="")
    {
        alert("Please enter a task");
    }
    else
    {
        let newTask = document.createElement("ul");
        newTask.innerHTML = `${inputs.value}   <i class="fa fa-trash"></i>
        `;
        text.appendChild(newTask);
        inputs.value="";
        newTask.querySelector("i").addEventListener("click",remove);
        function remove()
        {
            newTask.remove();
        }
    }
}

