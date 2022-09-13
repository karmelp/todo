//Kasutaja saab lugeda kõiki ülesandeid -
        // Ülesannete pealkirja
        const taskList = document.querySelector('.taskList');
        const tasks = [
            {title: 'Exercise 1', done: true},
            {title: 'Exercise 2', done: true},
            {title: 'Exercise 3', done: false},
        ];

        function showTask(task) {
            const li = document.createElement('li')
            li.appendChild(document.createTextNode(task.title));;
            li.setAttribute("class", "taskListItem");
            taskList.appendChild(li);
        } 

        tasks.forEach(task => {
            showTask(task)
        });

        // Kas on tehtud/tegemata.
        const isDone = () => {
            task.done === true ? console.log('Done') : console.log('Not done');
        }
        


// Kasutaja näeb, mitu ülesannet on tehtud, mitu on tegemata.


// Kasutaja saab lisada uue ülesande.


// Kasutaja saab märkida ülesande tehtuks.


// Kasutaja saab ülesande muuta ülesannet.


// Kasutaja saab ülesande kustutada.


// Kasutaja saab kõik ülesanded korraga ära kustutada.