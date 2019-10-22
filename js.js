


// document.getElementById('add').onclick = function() {
//     let task = document.getElementById('task').value;

//     document.getElementById('out').innerHTML += `<li>${task}</li>`;
//     document.getElementById('out').style.color = 'red';

// }

document.getElementById('add').onclick = function() {
    let task = document.getElementById('task').value;

    var todoList = {};
    todoList.data = task;
    todoList.check = false;

    if(todoList.check == true) {
        document.getElementById('out').style.color = 'green';
    }

    document.getElementById('checkbox').onclick = function() {
        document.getElementById('out').style.color = 'red';
    }

    

    document.getElementById('out').innerHTML += `<li><input type="checkbox" id="checkbox">${todoList.data} </li>`;
    

}

