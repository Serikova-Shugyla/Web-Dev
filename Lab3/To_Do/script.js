const input = document.getElementById("input_text");
const addButton = document.getElementById("add_button");
const list = document.getElementById("list");

addButton.addEventListener("click", function(event){
    event.preventDefault();

    const taskText = input.value.trim();
    if(taskText == ''){
        return;
    }

    const listItem = document.createElement("li");
    listItem.classList.add("list_item");

    const checkbox  = document.createElement("input");
    checkbox.type = "checkbox";

    const textSpan = document.createElement("span");
    textSpan.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete_button");

    const leftBlock = document.createElement("div");
    leftBlock.classList.add("left");

    leftBlock.appendChild(checkbox);
    leftBlock.appendChild(textSpan);

    listItem.appendChild(leftBlock);
    listItem.appendChild(deleteButton);

    list.appendChild(listItem);
    document.getElementById("list-container").style.display = "block";

    checkbox.addEventListener("change", function(){
        listItem.classList.toggle("completed");

    })
    deleteButton.addEventListener("click", function(){
        list.removeChild(listItem);

        if(list.children.length === 0 ){
            document.getElementById("list-container").style.display = "none";
        }
    })

    input.value = "";
})