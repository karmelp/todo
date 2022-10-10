// Array
let tasks = [
    { title: "Exercise 1", isDone: true },
    { title: "Exercise 2", isDone: false },
];
  
// Loo funktsioon, mis tagastab status button elemendi
function getStatusBtnElement(task) {
    // loo i element ülesande staatuse nupu ikooni jaoks
    const statusIconEl = document.createElement("i");
    // lisa statusIconEl i elemendile klass
    statusIconEl.className = "fa-solid fa-circle-check button taskStatusButton";
    // lisa statusIconEl i elemendile pealkirja atribuut
    statusIconEl.setAttribute("task-title", task.title);
    // lisa statusIconEl i elemendile onclick funktsioon
    statusIconEl.onclick = () => toggleTaskStatus(statusIconEl);
  
    // tagasta statusIconEl i element
    return statusIconEl;
}
  
// Loo funktsioon, mis tagastab delete button elemendi
function getDeleteBtnElement(task) {
    // loo list element ülesande kustutamise nupu jaoks
    const deleteTaskEl = document.createElement("li");
    // loo i element ülesande kustutamise nupu ikooni jaoks
    const deleteTaskIconEl = document.createElement("i");
    deleteTaskIconEl.className = "fa-solid fa-trash button deleteTaskBtn";
    // lisa deleteTaskIconEl i elemendile onclick funktsioon
    deleteTaskIconEl.onclick = () => deleteTask(task);
  
    deleteTaskEl.appendChild(deleteTaskIconEl);
    // tagasta deleteTaskEl i element
    return deleteTaskEl;
}
  
// Loo funktsioon, mis tagastab edit button elemendi
function getEditBtnElement(task) {
    // loo list element ülesande kustutamise nupu jaoks
    const editTaskEl = document.createElement("li");
    // loo i element ülesande muutmise nupu ikooni jaoks
    const editTaskTitleBtn = document.createElement("i");
    // lisa editTaskTitleBtn i elemendile klass
    editTaskTitleBtn.className = "fa-solid fa-pen-to-square button editTaskBtn";
    // lisa editTaskTitleBtn i elemendile pealkirja atribuut
    editTaskTitleBtn.setAttribute("task-title", task.title);
    // lisa editTaskTitleBtn i elemendile onclick funktsioon
    editTaskTitleBtn.onclick = onEditTaskTitleBtnClick;
  
    editTaskEl.appendChild(editTaskTitleBtn);
    // tagasta editTaskEl i element
    return editTaskTitleBtn;
}

const modalEl = document.querySelector(".modalOverlay");
  
function showModal() {
    modalEl.style.display = "flex";
}
  
function closeModal() {
    modalEl.style.display = "none";
}
  
function onEditTaskTitleBtnClick(event) {
    const oldTaskTitle = event.target.getAttribute("task-title");
    showModal();
  
    document.querySelector(".saveNewTaskTitleBtn").onclick = () => {
      const editedTaskTitle = document.getElementById("editTaskInput").value;
  
      onSaveNewTaskTitleBtn(oldTaskTitle, editedTaskTitle);
    };
}
  
function onSaveNewTaskTitleBtn(oldTaskTitle, editedTaskTitle) {
    tasks = tasks.map((task) => {
        if (task.title === oldTaskTitle) {
            return { title: editedTaskTitle, isDone: task.isDone };
        } else {
            return task;
        }
    });
    // tühjenda input editTaskInput field peale uue ülesande lisamist
    document.getElementById("editTaskInput").value = "";
  
    closeModal();
    showAllTasks();
}
  
// Loo funktsioon, mis tagastab task title elemendi
function getTaskTitleElement(taskTitle) {
    // loo div element ülesande pealkirja jaoks
    const taskTitleEl = document.createElement("div");
    // lisa taskTitleEl div elemendile pealkirja atribuut
    taskTitleEl.setAttribute("task-title", taskTitle);
    // pane taskTitleEl div elemendi sisse ülesande pealkiri
    taskTitleEl.textContent = taskTitle;
  
    // tagasta taskTitleEl div element
    return taskTitleEl;
}
  
// Loo funktsioon, mis paneb tehtuks märgitud taskile teised stiilid
function markTaskAsDone(statusIcon, taskTitle) {
    statusIcon.style.color = "#42b883";
    taskTitle.style.textDecoration = "line-through";
    taskTitle.style.textDecorationThickness = "2px";
}
  
// Kasutaja saab lugeda kõiki ülesandeid - pealkirja ja staatust
function showTask(task) {
    // võta HTMList ülesannete konteinerelement
    const taskListEl = document.querySelector(".taskList");
    const taskListItemContainerEl = document.createElement("div");
    taskListItemContainerEl.setAttribute("class", "taskListItemContainer");
  
    // kasuta getStatusBtnElement funktsiooni showTask funkstiooni sees
    const taskStatusEl = getStatusBtnElement(task);
    // kasuta getTaskTitleElement funktsiooni showTask funkstiooni sees
    const taskTitleEl = getTaskTitleElement(task.title);
    // kasuta editTaskEl funktsiooni showTask funkstiooni sees
    const editTaskEl = getEditBtnElement(task);
    // kasuta getDeleteBtnElement funktsiooni showTask funkstiooni sees
    const deleteTaskEl = getDeleteBtnElement(task);
    // loo unordered list element ülesande tööriistade jaoks
    const taskToolsEl = document.createElement("ul");
    // lisa ülesande tööriistade unordered list elemendile klass
    taskToolsEl.className = "taskTools";
  
    // kui task on tehtud
    if (task.isDone) {
      // kasuta markTaskAsDone funktsiooni
      markTaskAsDone(taskStatusEl, taskTitleEl);
    }
  
    // pane deleteTaskEl element taskToolsEl elemendi sisse
    taskToolsEl.append(editTaskEl, deleteTaskEl);
    // kasuta el.append(), kui on elemendile vaja panna mitu last
    taskListItemContainerEl.append(taskStatusEl, taskTitleEl, taskToolsEl);
    // kasuta el.appendChild(), kui on elemendile vaja panna üks laps
    taskListEl.appendChild(taskListItemContainerEl);
}
  
// Kasutaja saab märkida ülesande tehtuks.
function toggleTaskStatus(el) {
    // käi läbi kõik taskid
    tasks.map((task) => {
        // kui taski title on see, millel klikiti...
        if (task.title === el.getAttribute("task-title")) {
        // muuda taski staatus vastupidiseks
        task.isDone = !task.isDone;
        }
    });
  
    // joonista uuesti kõik tehtud ülesanded
    showNumberOfDoneTasks();
    // joonista uuesti kõik ülesanded
    showAllTasks();
}
  
// Kasutaja näeb kõiki ülesandeid
function showAllTasks() {
    //tühjenda HTMLis taskide konteiner
    const taskListEl = document.querySelector(".taskList");
    taskListEl.innerHTML = "";
  
    // kui ülesandeid pole
    if (tasks.length == 0) {
      // käivita getTaskListMessage funktsioon
      getTaskListMessage();
    }
  
    // joonista HTML element iga taski jaoks
    tasks.forEach((task) => {
      showTask(task);
    });
}
  
// Kasutaja saab lisada uue ülesande.
function onAddNewTaskBtnClick() {
    // kui newTaskField input on tühi...
    if (document.querySelector(".newTaskField input").value.length == 0) {
        // siis ütle inimesele, et tühjana ei saa ülesannet lisada
        alert("Write a task first!");
    } else {
        // võta newTaskField input väärtus
        const taskTitle = document.getElementById("newTaskInput").value;
        // lisa newTaskField input väärtus arraysse objektina
        tasks.push({ title: taskTitle, isDone: false });
        // joonista uuesti tehtud ülesannete number
        showNumberofAllTasks();
        // joonista uuesti kõik ülesanded
        showAllTasks();
    }
    // tühjenda input newTaskInput field peale uue ülesande lisamist
    document.getElementById("newTaskInput").value = "";
  }
  
// Kasutaja näeb, mitu on ülesandeid kokku.
function showNumberofAllTasks() {
    // võta HTMList allTasksCount klass
    const allTasksCount = document.querySelector(".allTasksCount");
    // sisesta allTasksCount elemendi sisse number
    allTasksCount.textContent = tasks.length;
}
  
// Kasutaja näeb, mitu ülesannet on tehtud.
function showNumberOfDoneTasks() {
    // võta HTMList doneTasksCount klass
    const doneTasksCount = document.querySelector(".doneTasksCount");
    //for loop, et loendada kokku tehtud ülesanded
    let doneTasksCounter = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].isDone === true) doneTasksCounter++;
    }
  
    // sisesta doneTasksCount elemendi sisse number
    doneTasksCount.textContent = doneTasksCounter;
}
  
// Kasutaja saab ülesande kustutada.
function deleteTask(task) {
    const deleteIndex = tasks.indexOf(task);
    tasks.splice(deleteIndex, 1);
  
    // joonista uuesti kõik ülesanded
    showAllTasks();
    // joonista uuesti mitu ülesannet tehtud on
    showNumberOfDoneTasks();
    // joonista uuesti mitu ülesannet on kokku
    showNumberofAllTasks();
}
  
// Kasutaja saab kõik ülesanded korraga ära kustutada.
function deleteAllTasks() {
    const deleteIndex = tasks;
    tasks.splice(deleteIndex, tasks.length);
  
    // joonista uuesti kõik ülesanded
    showAllTasks();
    // joonista uuesti mitu ülesannet tehtud on
    showNumberOfDoneTasks();
    // joonista uuesti mitu ülesannet on kokku
    showNumberofAllTasks();
}
  
// Teadaanne, kui ülesandeid pole
function getTaskListMessage() {
    // võta HTMList ülesannete konteinerelement
    const taskListEl = document.querySelector(".taskList");
    // loo div element sõnumi jaoks
    const taskListMessageContainerEl = document.createElement("div");
    // lisa taskListMessageContainerEl div elemendile klass
    taskListMessageContainerEl.className = "taskListMessage";
    // loo p element sõnumi pealkirja jaoks
    const taskListMessageTextEl = document.createElement("p");
    taskListMessageTextEl.innerHTML = "Your task list is empty";
    const taskListMessageIconEl = document.createElement("i");
    taskListMessageIconEl.className =
      "fa-solid fa-clipboard-check taskListMessageIcon";
  
    taskListMessageContainerEl.append(
        taskListMessageTextEl,
        taskListMessageIconEl
    );
    // pane taskListMessageContainerEl element taskListEl elemendi sisse
    taskListEl.appendChild(taskListMessageContainerEl);
}
  
// vajutades .deleteAllTasksBtn'it aktiveerub deleteAllTasks funktsioon
document.querySelector(".deleteAllTasks").onclick = deleteAllTasks;

// vajutades .addNewTaskButton'it aktiveerub onAddNewTaskBtnClick funktsioon
document.querySelector(".addNewTaskButton").onclick = onAddNewTaskBtnClick;
  
document.querySelector(".modalCloseButton").onclick = closeModal;
  
// näita kohe, kui kasutaja äppi saabub, mitu ülesannet nimekirjas on
showNumberofAllTasks();
// näita kohe, kui kasutaja äppi saabub, mitu ülesannet tehtud on
showNumberOfDoneTasks();
showAllTasks();
  
