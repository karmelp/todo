// Kasutaja saab lugeda kõiki ülesandeid - pealkirja ja staatust
const tasks = [
    {title: 'Exercise 1', isDone: true},
    {title: 'Exercise 2', isDone: false},
];

function showTask(task) {
    // võta HTMList ülesannete konteinerelement
    const taskListEl = document.querySelector('.taskList');
    // loo div element ülesannet koondava konteineri jaoks
    const taskListItemContainerEl = document.createElement('div')
    // lisa ülesannet koondava konteineri div elemendile klass
    taskListItemContainerEl.setAttribute('class', 'taskListItemContainer')
    // loo nupp element ülesande staatuse jaoks
    const taskStatusEl = document.createElement('button')
    // lisa ülesande staatuse div elemendile klass
    taskStatusEl.setAttribute('class', 'button taskStatusButton buttonIcon')
    // lisa ülesande staatuse div elemendile pealkirja attribuut
    taskStatusEl.setAttribute("task-title", task.title);
    // lisa igale taskStatusEl elemendile onclick funktsioon
    taskStatusEl.onclick = () => toggleTaskStatus(taskStatusEl);
    // loo i element ülesande staatuse nupu ikooni jaoks
    const statusIconEl = document.createElement('i')
    // lisa i elemendile klass
    statusIconEl.setAttribute('class', 'icon fa-solid fa-circle-check button_icon')
    // loo div element ülesande pealkirja jaoks
    const taskTitleEl = document.createElement('div')
    // lisa ülesande pealkirja div elemendile klass
    taskTitleEl.setAttribute('class', 'taskTitle')
    // lisa ülesande pealkirja div elemendile pealkirja attribuut
    taskTitleEl.setAttribute("task-title", task.title);
    // pane ülesande pealkirja elemendi sisse ülesande pealkiri
    taskTitleEl.textContent = task.title
    // kui task on tehtud, muuda staatuse nupu värvi sellel klikkides ja titleile tee kriips peale
    if (task.isDone) {
        statusIconEl.style.color = "#42b883";
        taskTitleEl.style.textDecoration = "line-through";
        taskTitleEl.style.textDecorationThickness = "2px";
    }
    // loo unordered list element 
    const taskToolsEl = document.createElement('ul')
    // lisa unordered list elemendile klass
    taskToolsEl.setAttribute('class', 'taskTools')
    // loo button element ülesande kustutamise jaoks
    const taskDeleteEl = document.createElement('button')
    // lisa ülesande kustutamise nupu elemendile klass
    taskDeleteEl.setAttribute('class', 'button taskDelete buttonIcon')
    // lisa igale taskDeleteEl nupu elemendile onclick funktsioon
    taskDeleteEl.onclick = () => taskDelete(task);
    // loo span element ülesande kustutamise nupu jaoks
    const deleteTaskButton_iconEl = document.createElement('span')
    // lisa span elemendile klass
    deleteTaskButton_iconEl.setAttribute('class', 'button_icon')
    // loo i element ülesande kustutamise nupu ikooni jaoks
    const deleteTaskIconEl = document.createElement('i')
    // lisa i elemendile klass
    deleteTaskIconEl.setAttribute('class', 'icon fa-solid fa-trash')
    // pane span element ülesande staatuse nupu sisse
    taskStatusEl.appendChild(statusIconEl)
    // pane ülesande staatuse nupp ülesannet koondava konteineri div elemendi sisse
    taskListItemContainerEl.appendChild(taskStatusEl)
    // pane ülesande pealkirja element ülesannet koondava konteineri div elemendi sisse
    taskListItemContainerEl.appendChild(taskTitleEl)
    // pane deleteTaskIconEl i element deleteTaskButton_iconEl span elemendi sisse
    deleteTaskButton_iconEl.appendChild(deleteTaskIconEl)
    // pane deleteTaskButton_iconEl span element taskDeleteEl button elemendi sisse
    taskDeleteEl.appendChild(deleteTaskButton_iconEl)
    // pane taskDeleteEl list item element taskTools unordered list elemendi sisse
    taskToolsEl.appendChild(taskDeleteEl)
    // pane taskTools unordered list element ülesannet koondava konteineri div elemendi sisse
    taskListItemContainerEl.appendChild(taskToolsEl)
    //pane ülesanda list element ülesannete konteinerelemendi sisse
    taskListEl.appendChild(taskListItemContainerEl)
}

// Kasutaja saab märkida ülesande tehtuks.
const toggleTaskStatus = el => {
    // käi läbi kõik taskid
    tasks.map((task) => {
      // kui taski title on see, millel klikiti, muuda taski staatus vastupidiseks
      if (task.title === el.getAttribute("task-title")) {
        task.isDone = !task.isDone;
      }
    });
    
    showNumberofDoneTasks()
    // joonista uuesti kõik taskid
    showAllTasks();
};

const showAllTasks = () => {
    //tühjenda HTMLis taskide konteiner
    const taskListEl = document.querySelector(".taskList");
    taskListEl.innerHTML = "";

    // joonista HTML element iga taski jaoks
    tasks.forEach(task => {
    showTask(task)
    });
}

showAllTasks() // KUSTUTA ÄRA, KUI MOCK DATAT ENAM VAJA POLE

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
        tasks.push({title: taskTitle, isDone: false})
        showNumberofAllTasks()
        showAllTasks()
    }
    // tühjenda input newTaskInput field peale uue ülesande lisamist 
    document.getElementById('newTaskInput').value = ''
}

// Kasutaja näeb, mitu on ülesandeid kokku.
function showNumberofAllTasks() {
    // võta HTMList allTasksContainer klass
    const allTasksCount = document.querySelector('.allTasksCount');
    // sisesta allTasksValue elemendi sisse number
    allTasksCount.textContent = tasks.length;
}

// näita kohe, kui kasutaja äppi saabub, mitu taski nimekirjas on
showNumberofAllTasks();

// Kasutaja näeb, mitu ülesannet on tehtud
function showNumberofDoneTasks() {
    // võta HTMList doneTasksCount klass
    const doneTasksCount = document.querySelector('.doneTasksCount');
    //for loop, et loendada kokku tehtud ülesanded
    let doneTasksCounter = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].isDone === true) doneTasksCounter++;
    }
    // sisesta doneTasksValue elemendi sisse number
    doneTasksCount.textContent = doneTasksCounter;
}

// näita kohe, kui kasutaja äppi saabub, mitu taski tehtud on
showNumberofDoneTasks()

// Kasutaja saab ülesande kustutada.

function taskDelete(task) {
    const deleteIndex = tasks.indexOf(task)
    tasks.splice(deleteIndex, 1);
    showAllTasks()
    showNumberofDoneTasks()
    showAllTasks()

}

// klikkides taskDelete buttonit tee järgmist


// Kasutaja saab muuta ülesannet.

// Kasutaja saab kõik ülesanded korraga ära kustutada.