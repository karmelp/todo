//Kasutaja saab lugeda kõiki ülesandeid - ülesannete pealkirja, kas on tehtud/tegemata.
        const tasks = ['Ülesanne1', 'Ülesanne 2', 'Ülesanne 3'];

        function readTask() {
            const taskList = document.querySelector('.taskList');
            const li = document.createElement('li')
            li.appendChild(document.createTextNode(tasks));;
            li.setAttribute("class", "taskListItem");
            taskList.appendChild(li);
            console.log(taskList)
        } 

        tasks.forEach(task => {
            readTask()
        });


// Kasutaja näeb, mitu ülesannet on tehtud, mitu on tegemata.


// Kasutaja saab lisada uue ülesande.


// Kasutaja saab märkida ülesande tehtuks.


// Kasutaja saab ülesande muuta ülesannet.


// Kasutaja saab ülesande kustutada.


// Kasutaja saab kõik ülesanded korraga ära kustutada.