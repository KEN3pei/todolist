const listform = document.getElementById("listForm");
const lists = document.getElementById("lists");
    
    const htmls = JSON.parse(localStorage.getItem(0));
    if (htmls) {
        lists.innerHTML += htmls;
        lists.innerHTML = lists.innerHTML.replace(/,/g, "");
    }
    

listform.addEventListener('submit', e => {
    e.preventDefault();
    
    const listname = listform.listname.value;
    // (listname);
    if (listname !== ""){
        createList(listname);
    }
    listform.reset();
    listform.style.display = "none";
});

const saveTaskToLocalStorage = (key, html) => {
    if(html){
        localStorage.setItem(key, html);
        return;
    }
    return;
}
const deleteTaskFromLocalStorage = task => {
    localStorage.removeItem(task);
    return;
}
const createList = (listname) => {
    const lists = document.getElementById("lists");
    const html = `<div class="list-range">
                        <p id="keyname" class="text-center listtitle">${listname}</p>
                        <a id="delete" class="delete-list">×</a>
                        <div class="tasks"></div>
                        <p id="addCard" class="addcard">+ カードを追加</p>
                        <form id="taskForm" class="task-form" autocomplete="off" action="javascript:void(0)">
                            <input type="text" id="listname">
                            <input type="submit" value="タスクを追加">
                        </form>
                    </div>`;
    lists.innerHTML += html;
    const arrayLists = [];
    // localstarageからデータの取得&デコード
    const items = JSON.parse(localStorage.getItem(0));
    // arrayListsにitemsを配列として設置
    if(items){
        arrayLists.push(items);
    }
    arrayLists.push(html);

    deleteTaskFromLocalStorage(0);
    saveTaskToLocalStorage(0, JSON.stringify(arrayLists)); 
}
lists.addEventListener('click', e => {
    if (e.target.classList.contains('delete-list')){
        e.target.parentElement.remove();
        // const task = e.target.previousElementSibling.textContent.trim();
        
        // console.log(lists.innerHTML);
        deleteTaskFromLocalStorage(0);
        saveTaskToLocalStorage(0, JSON.stringify(lists.innerHTML)); 
    }
});

$(document).on('submit', '#taskForm', e => {
    const task = e.target.listname.value;
    e.target.style.display = "none";
    e.target.previousElementSibling.style.display = "block";
    if (task !== ""){
        e.target.previousElementSibling.previousElementSibling.innerHTML += `<p class="task">${task}</p>`;
    }
    // const key = e.target.parentElement.childNodes[1].innerHTML;
    // const newElement = e.target.parentElement.innerHTML;
    // const newElementDom = `<div class="list-range">${newElement}</div>`;
    
    // console.log(lists.innerHTML);
    deleteTaskFromLocalStorage(0);
    saveTaskToLocalStorage(0, JSON.stringify(lists.innerHTML)); 
});

