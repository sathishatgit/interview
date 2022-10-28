let i=0;
function add()
{
    let val=document.getElementById('in').value;
    if(val.trim()!=="")
    {
    let table = document.getElementById("table");
    let row = table.insertRow(0);
    let task=row.insertCell(0)
    let button=row.insertCell(1)
    task.innerHTML=`<div class='task${i} back' id='task${i}d'>${val}</div>`;
    button.innerHTML=`<div ><button class='task${i}' value='task${i}' onclick="del(value)">Delete</button> <button class='task${i}' value='task${i}d' onclick="edit(value)">Edit</button></div>`
    document.getElementById('in').value="";
    i++;
    }
    else
    alert("Invalid Input")
}
function del(val)
{
    const boxes = document.querySelectorAll(`.${val}`);
    boxes.forEach(box => {
      box.remove();
    });
    
}
function edit(val)
{
    document.getElementById('in').value=document.getElementById(`${val}`).textContent;
    del(val.slice(0,-1));
}