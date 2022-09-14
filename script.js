// Kasutaja saab lugeda kõiki ülesandeid - pealkirja ja staatust
        const tasks = [
            {title: 'Exercise 1', isDone: 'done'},
            {title: 'Exercise 2', isDone: 'done'},
            {title: 'Exercise 3', isDone: 'not done'},
        ];

        function showTask(task) {
            const taskList = document.querySelector('.taskList'); // võta HTMList taskide konteinerelement
            const taskListItem = document.createElement('li') // loo list element taski jaoks
                taskListItem.setAttribute('class', 'taskListItem') // lisa taski list elemendile klass
            const taskListItemStatus = document.createElement('div') //loo div element taski staatuse jaoks
                taskListItemStatus.setAttribute('class', 'taskListItemStatus') // lisa sellele klass
            const taskListItemTitle = document.createElement('div') // loo div element taski pealkirja jaoks
                taskListItemTitle.setAttribute('class', 'taskListItemTitle') // lisa sellele klass
            taskListItemTitle.textContent = task.title // pane taski pealkirja elemendi sisse tekst taski pealkirjaga
            taskListItemStatus.textContent = task.isDone // pane taski staatuse elemendi sisse tekst kas "tehtud" või "tegemata" olenevalt staatusest
            taskListItem.appendChild(taskListItemTitle) //pane taski pealkirja element taski elemendi sisse
            taskListItem.appendChild(taskListItemStatus) //pane taski staatuse element taski elemendi sisse
            taskList.appendChild(taskListItem) //pane taskide konteiner elemendi sisse taski element
        }

        tasks.forEach(task => {
            showTask(task)
        });


// Kasutaja näeb, mitu ülesannet on tehtud, mitu on taske kokku.
        
        function allTasks() {
            // võta HTMList allTasksContainer klass
        const allTasksLabelValue = document.querySelector('.allTasksLabelValue');
        
        // loo p element - klassidega labelValue & allTasksValue
        const p = document.createElement('p');
            p.setAttribute('class', 'allTasksLabelValueNumber');

        // sisesta allTasksValue elemendi sisse number
        const allTasksLabelValueNumber = document.createTextNode(3);

        // pane allTasksValue element allTasksContainer'i sisse
        allTasksLabelValue.appendChild(allTasksLabelValueNumber);
        }
        allTasks();


        function doneTasks() {
            // võta HTMList allTasksContainer klass
        const doneTasksLabelValue = document.querySelector('.doneTasksLabelValue');
        
        // loo p element - klassidega labelValue & allTasksValue
        const p = document.createElement('p');
            p.setAttribute('class', 'doneTasksLabelValueNumber');

        // sisesta allTasksValue elemendi sisse number
        const doneTasksLabelValueNumber = document.createTextNode(1);

        // pane allTasksValue element allTasksContainer'i sisse
        doneTasksLabelValue.appendChild(doneTasksLabelValueNumber);
        }
        doneTasks();

       


// Kasutaja saab lisada uue ülesande.


// Kasutaja saab märkida ülesande tehtuks.


// Kasutaja saab ülesande muuta ülesannet.


// Kasutaja saab ülesande kustutada.


// Kasutaja saab kõik ülesanded korraga ära kustutada.