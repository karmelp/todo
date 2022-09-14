//Kasutaja saab lugeda kõiki ülesandeid -
        // Ülesannete pealkirja
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

       /* function showTask(task) {
            // vöta HTMList tasklist klassiga element
            const taskList = document.querySelector('.taskList')
            
            // loo list item staatuse jaoks
            const taskStatusText = document.createElement("li");

            // loo list item pealkirja jaoks
            const taskTitleText = document.createElement("li");

                // loo div nimega taskPreview
                const taskPreview = document.createElement("div")
                // loo class taskPreview
                taskPreview.setAttribute("class", "taskPreview")

            // pane pealkirja list itemi sisse lapselement, mis on tekst "text.title"
            taskTitleText.appendChild(document.createTextNode(task.title));

            // pane staatuse list itemi sisse lapselement, mille tekst on kas "tehtud" vöi "tegemata" olenevalt staatusest
            taskStatusText.appendChild(document.createTextNode(task.isDone));

            // lisa pealkirja elemendile klass "taskListItem"
            taskTitleText.setAttribute("class","taskListItem");

            // lisa staatuse elemendile klass "taskListItem"
            taskStatusText.setAttribute("class", "taskListItem")

            // lisa tasklist klassiga elemendile pealkirja element
            taskList.appendChild(taskTitleText);

            // Lisa tasklist klassiga elemendile staatuse element
            taskList.appendChild(taskStatusText)

                //lisa taskPreview klassiga divi sisse lapseelemendid
                taskPreview.appendChild(li)
        } 
        */

        tasks.forEach(task => {
            showTask(task)
        });



// Kasutaja näeb, mitu ülesannet on tehtud, mitu on tegemata.


// Kasutaja saab lisada uue ülesande.


// Kasutaja saab märkida ülesande tehtuks.


// Kasutaja saab ülesande muuta ülesannet.


// Kasutaja saab ülesande kustutada.


// Kasutaja saab kõik ülesanded korraga ära kustutada.