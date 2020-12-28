// function get_todos()
// {
//     var todos = new Array;
//     var todos_str = localStorage.getItem('todo');
//     if (todos_str !== null)
//     {
//         todos = JSON.parse(todos_str);
//     }
//     return todos;
// }
function add()
{
    var task = document.getElementById('in').value;
    console.log(task)
    var request = new XMLHttpRequest();
    var url = "http://localhost:5000/add";
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(task)
    request.onreadystatechange = () => {
        console.log( request.responseText)
    }
    // var todos = get_todos();
    // todos.push(task);
    // localStorage.setItem('todo', JSON.stringify(todos));

    // show();

    return false;
}
function clearDeafult(a)
{
    if (a.defaultValue == a.value)
    {
        a.value = ""
        }
};
function remove()
{
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos))
    show();

    return false;
}
function show()
{
    var todos = get_todos();
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++)
    {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">Delete</button> </li>';
    };
    html += '</ul>'
    
    document.getElementById('todos').innerHTML = html;
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++)
    {
        buttons[i].addEventListener('click',remove)  
    };
    
}
document.getElementById('btn').addEventListener('click', add);