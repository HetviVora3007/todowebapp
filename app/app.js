console.log("ToDo list");

window.onload = function show() {
    let list = localStorage.getItem('list');
    if (list == null) {
        listobj = [];
    }
    else {
        listobj = JSON.parse(list);
    }
    let html = '';
    listobj.forEach(function (element, index) {
        html += `
        <div class="card-body">
            <p class="text" >${element}</p>
            <button class="btn" id="${index}" onclick="deleteNote(this.id)">Delete</button>
            <!-- <p class="card-text">klasdfj</p> -->
        </div>`

    });
    let listdata = document.getElementById('listdata');
    if (listobj.length != 0) {
        listdata.innerHTML = html;
    }
    else {
        listdata.innerHTML = '<p>Nothing To Show! Click On Add Button</p>';
    }
}

function AddHandler() {
    let input = document.getElementById('myInput');
    let list = localStorage.getItem('list');
    console.log(list);
    if (list == null) {
        listobj = [];
    } else {
        listobj = JSON.parse(list);
    }
    if (input.value.trim().length===0) {
         return alert('Please Enter Value');
    }
    listobj.push(input.value);
    console.log(input.value);
    localStorage.setItem('list', JSON.stringify(listobj));
    input.value = '';
    showHandler();
}

function showHandler() {
    let list = localStorage.getItem('list');
    console.log(list);
    if (list == null) {
        listobj = [];
    }
    else {
        listobj = JSON.parse(list);
    }
    let html = '';
    listobj.forEach(function (element, index) {
        html += `
        <div class="card-body">
            <p class="text" >${element}</p>
            <button class="btn" id="${index}" onclick="deleteNote(this.id)">Delete</button>
            <!-- <p class="card-text">klasdfj</p> -->
        </div>`

    });
    let listdata = document.getElementById('listdata');
    if (listobj.length != 0) {
        listdata.innerHTML = html;
    }
    else {
        listdata.innerHTML = '<p>Nothing To Show! Click On Add Button</p>';
    }
}

function deleteNote(index) {
    let list = localStorage.getItem('list');
    if (list == null) {
        listObj = [];
    }
    else {
        listObj = JSON.parse(list);
    }
    listObj.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(listObj));
    showHandler();
}
