//trigger this on clicking create button
function createtodo(){
    var newTodoobj = document.getElementById('inputtext'); 
    var newTodo = newTodoobj.value;
    //push todos to array as and when they are created and displayed.
    if(newTodo!==""){
        updateDisplay(newTodo);
        document.getElementById('inputtext').value = "";

    } else{
        alert("enter a todo")
    };
}

//add new todos
function updateDisplay(newTodo) {
//create a div for all todos and append checkbox, textbox, edit and delete buttons
    var todosDiv= document.getElementById("todosDiv");

        let singleTodoDiv = document.createElement("div");
        singleTodoDiv.classList.add("listContainer");
        singleTodoDiv.setAttribute("id", "todobox")
        
        todosDiv.appendChild(singleTodoDiv);

        //checkbox
        let checkdiv = document.createElement("div");
        checkdiv.classList.add("firstListContainer");
        let checkelement =document.createElement("input");
        checkelement.classList.add("checkbox");
        checkelement.setAttribute("name", "type");
        checkelement.setAttribute("type", "checkbox");

        checkdiv.appendChild(checkelement);

        //input element for editing
        let textdiv = document.createElement("div");
        textdiv.classList.add("secondListContainer")
        inputelement= document.createElement("input");
        inputelement.setAttribute("type", "text");
        inputelement.setAttribute("class", "todotext");
        inputelement.value = newTodo;
        inputelement.setAttribute("disabled", "true");
        inputelement.setAttribute("id", "autoresizing");

        textdiv.appendChild(inputelement);

        //edit button
        let editdiv = document.createElement("div");
        editdiv.classList.add("thirdListContainer");
        let editButton = document.createElement("button");
        editButton.textContent ="Edit";
        editButton.classList.add( "btn", "btn-secondary", "editButton");
        editButton.setAttribute("id", "todoEditButton");

        editdiv.appendChild(editButton);

        //save button
        let saveButton = document.createElement("button");
        saveButton.textContent ="Save";
        saveButton.classList.add( "btn", "btn-secondary", "saveButton");
        saveButton.setAttribute("id", "todosaveButton");


        //event listner for hover
        singleTodoDiv.addEventListener('mouseenter', function () {
            editButton.style.visibility = "visible";
        })
        singleTodoDiv.addEventListener('mouseleave',  function () {
            editButton.style.visibility = "hidden";
        });


        //edit option along with save working
        editButton.addEventListener("click", function(){
            console.log(this)
            this.parentElement.parentElement.children[1].firstChild.disabled = false;
            // inputelement.setAttribute("disabled", false);
            this.remove();
            editdiv.append(saveButton);
        });

        saveButton.addEventListener("click", function(){
        inputelementAfter = saveButton.parentElement.parentElement.children[1].firstChild
        if (inputelementAfter.value !== ""){
            saveButton.parentElement.parentElement.children[1].firstChild.disabled = true;
            saveButton.remove();
            editdiv.append(editButton);
        }
        else{
            alert("ToDo Empty! enter ToDo")
        }
        
        });
       
        //delete button
        let deletediv = document.createElement("div");
        deletediv.classList.add("fourthListContainer");
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("btn", "btn-danger", "deleteButton");
        deleteButton.setAttribute("id", "tododeletebutton");


        //event listner for hover
        singleTodoDiv.addEventListener('mouseenter', function () {
            deleteButton.style.visibility = "visible";
        })
        singleTodoDiv.addEventListener('mouseleave',  function () {
            deleteButton.style.visibility = "hidden";
        });

        //DELETE option working
        deleteButton.addEventListener('click', function(event){
            this.parentElement.parentElement.remove();
            checkIfNoElements();
        });

        deletediv.appendChild(deleteButton);

        //append all buttons to a div
        todosDiv.lastChild.appendChild(checkdiv);
        todosDiv.lastChild.appendChild(textdiv);
        todosDiv.lastChild.appendChild(editdiv);
        todosDiv.lastChild.appendChild(deletediv);


        // document.getElementById('inputtext').value = "";
        checkIfNoElements();
}

//delete all
document.querySelector(".deleteAllButton").addEventListener("click", function(){

    if(confirm("Are you sure you want to delete ALL ToDos?")){
        console.log(document.querySelector("#todosDiv"));
        while (todosDiv.firstChild) {
                todosDiv.removeChild(todosDiv.lastChild);
            }
        console.log(document.querySelector("#todosDiv"));
        
    }
    else{
        return false;
    }
 
    checkIfNoElements();
})

//delete selected items only. along with confirmation to delete. 
document.querySelector('.deleteSelectedButton').addEventListener('click', function() {
    
    if(confirm("Are you sure you want to delete all selected ToDos?")){
        var boxes = document.querySelectorAll(".checkbox");
        // console.log(boxes.length)
        for(var j =0; j< boxes.length; j++){
            var box = boxes[j];
            if (boxes[j].checked){
                box.parentElement.parentElement.remove();
            }
        }
    }
    else{
        return false;
    }
    checkIfNoElements();
});



//make delete selected and delete all visible only when it has items
function checkIfNoElements(){

    if((document.querySelector("#todosDiv").childNodes).length>0){
        // document.querySelector(".third").style.visibility = "visible";
        document.querySelectorAll(".multidel")[0].style.visibility = "visible";
        document.querySelectorAll(".multidel")[1].style.visibility = "visible";
    }
    else{
        // document.querySelector(".third").style.visibility = "hidden";
        document.querySelectorAll(".multidel")[0].style.visibility = "hidden";
        document.querySelectorAll(".multidel")[1].style.visibility = "hidden";
    }
    
}




