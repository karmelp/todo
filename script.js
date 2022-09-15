// Kasutaja saab lugeda kõiki ülesandeid - pealkirja ja staatust
        const tasks = [
            {title: 'Exercise 1', isDone: 'done'},
            {title: 'Exercise 2', isDone: 'not done'},
        ];


        function showTask(task) {
            const taskList = document.querySelector('.taskList'); // võta HTMList taskide konteinerelement
            const taskListItem = document.createElement('li') // loo list element taski jaoks
                taskListItem.setAttribute('class', 'taskListItem') // lisa taski list elemendile klass
            const taskPreview = document.createElement('div')
                taskPreview.setAttribute('class', 'taskPreview')
            const taskListItemStatus = document.createElement('div') //loo div element taski staatuse jaoks
                taskListItemStatus.setAttribute('class', 'taskListItemStatus') // lisa sellele klass
            const taskListItemTitle = document.createElement('div') // loo div element taski pealkirja jaoks
                taskListItemTitle.setAttribute('class', 'taskListItemTitle') // lisa sellele klass
            taskListItemTitle.textContent = task.title // pane taski pealkirja elemendi sisse tekst taski pealkirjaga
            taskListItemStatus.textContent = task.isDone // pane taski staatuse elemendi sisse tekst kas "tehtud" või "tegemata" olenevalt staatusest
            taskPreview.appendChild(taskListItemTitle) //pane taski pealkirja element taski elemendi sisse
            taskPreview.appendChild(taskListItemStatus) //pane taski staatuse element taski elemendi sisse
            taskListItem.appendChild(taskPreview)
            taskList.appendChild(taskListItem) //pane taskide konteiner elemendi sisse taski element
        }

        tasks.forEach(task => {
            showTask(task)
        });


        // Kasutaja saab lisada uue ülesande.

        // klikkides newTaskAddButton'it tee järgmist
        document.querySelector('.newTaskAddButton').onclick = function() {
            // kui input field on tühi, siis ütle inimesele, et tühjana ei saa lisada taski
            if(document.querySelector('.newTaskField input').value.length == 0){
                alert("Write a task first!")
            } else {
                // vastasel juhul võta HTMList .taskList konteiner
                const taskList = document.querySelector('.taskList'); // võta HTMList taskide konteinerelement
                const taskListItem = document.createElement('li') // loo list element taski jaoks
                    taskListItem.setAttribute('class', 'taskListItem') // lisa taski list elemendile klass
                const taskPreview = document.createElement('div')
                    taskPreview.setAttribute('class', 'taskPreview')
                const taskListItemTitle = document.createElement('div') // loo div element taski pealkirja jaoks
                    taskListItemTitle.setAttribute('class', 'taskListItemTitle') // lisa sellele klass
                
                const taskTitle = document.getElementById('newTaskInput').value; // võta input value 
                tasks.push({title: taskTitle, isDone: 'done'}) // ja saada see value arraysse
                showAllTasks();
                taskListItemTitle.textContent = taskTitle  // pane taski pealkirja elemendi sisse tekst taski pealkirjaga
                taskPreview.appendChild(taskListItemTitle) //pane taski pealkirja element taski elemendi sisse
                taskListItem.appendChild(taskPreview)
                taskList.appendChild(taskListItem) //pane taskide konteiner elemendi sisse taski element
            }
            const btn = document.getElementById('newTaskInput').value = '';
        }


// Kasutaja näeb, mitu on taske kokku.
        
        function showAllTasks() {
            // võta HTMList allTasksContainer klass
        const allTasksLabelValue = document.querySelector('.allTasksLabelValue');
        
        // loo p element - klassidega labelValue & allTasksValue
        const p = document.createElement('p');
        p.setAttribute('class', 'allTasksLabelValueNumber');
        
        // sisesta allTasksValue elemendi sisse number
        allTasksLabelValue.textContent = tasks.length;
        }



        
// Kasutaja näeb, mitu ülesannet on tehtud
        function doneTasks() {
            // võta HTMList doneTasksContainer klass
        const doneTasksLabelValue = document.querySelector('.doneTasksLabelValue');
        
        // loo p element - klassidega labelValue & allTasksValue
        const p = document.createElement('p');
            p.setAttribute('class', 'doneTasksLabelValueNumber');
        
            //for loop, et loendada kokku tehtud taskid
                let doneTasksCounter = 0;
                for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].isDone === 'done') doneTasksCounter++;
                }

        // sisesta allTasksValue elemendi sisse number
        p.textContent = doneTasksCounter;
        }
        doneTasks()


        
// Kasutaja saab märkida ülesande tehtuks.


// Kasutaja saab ülesande muuta ülesannet.


// Kasutaja saab ülesande kustutada.


// Kasutaja saab kõik ülesanded korraga ära kustutada.