//Kasutaja saab lugeda kõiki ülesandeid -
        // Ülesannete pealkirja
        const tasks = [
            {title: 'Exercise 1', isDone: 'done'},
            {title: 'Exercise 2', isDone: 'done'},
            {title: 'Exercise 3', isDone: 'not done'},
        ];

        function showTask(task) {
            // vöta HTMList tasklist klassiga element
            const taskList = document.querySelector('.taskList')
            
            // loo list item staatuse jaoks
            const taskStatusText = document.createElement("li");

            // loo list item pealkirja jaoks
            const taskTitleText = document.createElement("li");

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
        } 

        tasks.forEach(task => {
            showTask(task)
        });



// Kasutaja näeb, mitu ülesannet on tehtud, mitu on tegemata.


// Kasutaja saab lisada uue ülesande.


// Kasutaja saab märkida ülesande tehtuks.


// Kasutaja saab ülesande muuta ülesannet.


// Kasutaja saab ülesande kustutada.


// Kasutaja saab kõik ülesanded korraga ära kustutada.