// Kasutaja saab lugeda kõiki ülesandeid - pealkirja ja staatust
const tasks = [
    {title: 'Exercise 1', isDone: 'done'},
    {title: 'Exercise 2', isDone: 'not done'},
];

function showTask(task) {
    // võta HTMList ülesannete konteinerelement
    const taskListEl = document.querySelector('.taskList');
    // loo list element ülesande jaoks
    const taskListItemEl = document.createElement('li')
    // lisa ülesande list elemendile klass
    taskListItemEl.setAttribute('class', 'taskListItem')
    // loo div element ülesannet koondava konteineri jaoks
    const taskListItemContainerEl = document.createElement('div')
    // lisa ülesannet koondava konteineri div elemendile klass
    taskListItemContainerEl.setAttribute('class', 'taskPreview')
    //loo div element ülesande staatuse jaoks
    const taskStatusEl = document.createElement('div')
    // lisa ülesande staatuse div elemendile klass
    taskStatusEl.setAttribute('class', 'taskStatus')
    // loo div element ülesande pealkirja jaoks
    const taskTitleEl = document.createElement('div')
    // lisa ülesande pealkirja div elemendile klass
    taskTitleEl.setAttribute('class', 'taskTitle')
    // pane ülesande pealkirja elemendi sisse ülesande pealkiri
    taskTitleEl.textContent = task.title
    // pane ülesande staatuse elemendi sisse tekst kas "tehtud" või "tegemata" olenevalt staatusest
    taskStatusEl.textContent = task.isDone
    // pane taski pealkirja element taski elemendi sisse
    taskListItemContainerEl.appendChild(taskTitleEl)
    // pane ülesande staatuse element ülesannet koondava elemendi sisse
    taskListItemContainerEl.appendChild(taskStatusEl)
    // pane ülesannet koondav element ülesande list elemendi sisse
    taskListItemEl.appendChild(taskListItemContainerEl)
    //pane ülenda list element ülesannete konteinerelemendi sisse
    taskListEl.appendChild(taskListItemEl)
}

const showAllTasks = () => {
    const taskListEl = document.querySelector(".taskList");
    taskListEl.innerHTML = "";

    tasks.forEach(task => {
    showTask(task)
    });
}

showAllTasks()

// Kasutaja saab lisada uue ülesande

// klikkides addNewTaskButton'it tee järgmist
document.querySelector('.addNewTaskButton').onclick = function() {
    // kui newTaskField input on tühi, siis ütle inimesele, et tühjana ei saa ülesannet lisada
    if(document.querySelector('.newTaskField input').value.length == 0){
        alert("Write a task first!")
    } else {
        // võta newTaskField input väärtus
        const taskTitle = document.getElementById('newTaskInput').value
        // lisa newTaskField input väärtus arraysse objektina
        tasks.push({title: taskTitle, isDone: 'done'})
        showNumberofAllTasks()
        showAllTasks()
    }
    // tühjenda input newTaskInput field peale uue ülesande lisamist 
    document.getElementById('newTaskInput').value = ''
}


// Kasutaja näeb, mitu on taske kokku.
        
function showNumberofAllTasks() {
    // võta HTMList allTasksContainer klass
    const allTasksCount = document.querySelector('.allTasksCount');
    // sisesta allTasksValue elemendi sisse number
    allTasksCount.textContent = tasks.length;
}



        
// Kasutaja näeb, mitu ülesannet on tehtud

        
// Kasutaja saab märkida ülesande tehtuks.


// Kasutaja saab ülesande muuta ülesannet.


// Kasutaja saab ülesande kustutada.


// Kasutaja saab kõik ülesanded korraga ära kustutada.