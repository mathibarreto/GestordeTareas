document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                ${taskText}
                <button class="delete">Eliminar</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = '';

            const deleteButton = listItem.querySelector('.delete');
            deleteButton.addEventListener('click', function () {
                listItem.remove();
            });
        }
    });
});
