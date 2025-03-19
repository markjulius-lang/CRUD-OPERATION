const schedInput = document.getElementById('schedInput');
const lettersDisplay = document.getElementById('letters');
const maxLength = 50;

// Update character count display when typing
schedInput.addEventListener('input', () => {
    const length = schedInput.value.length;
    const remaining = maxLength - length;
    lettersDisplay.textContent = `Letters: ${length} Maximum: ${remaining}`;
});

// Show modal with custom text
function showModal(message) {
    document.getElementById('modalText').textContent = message;
    document.getElementById('modal').style.display = "flex"; // Show modal
}

// Close modal
function closeModal() {
    document.getElementById('modal').style.display = "none"; // Hide modal
}

// Function to add a task
function addText() {
    // Get the input value and time/date values
    const textValue = schedInput.value;
    const time = document.getElementById('time4Input').value;
    const date = document.getElementById('dateInput').value;
    
    // If there's some text entered
    if (textValue.trim()) {
        // Create a new div to hold the added text
        const newText = document.createElement('div');
        newText.classList.add('added-text');
        
        // Create the task content with text, time, and date
        const taskContent = document.createElement('p');
        taskContent.textContent = `${textValue} (Time: ${time}, Date: ${date})`;

        // Create buttons for each task
        const actionButtons = document.createElement('div');
        actionButtons.classList.add('action-buttons');

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        
        const viewButton = document.createElement('button');
        viewButton.textContent = 'View';
        viewButton.classList.add('view-button');
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        
        // Edit button functionality
        editButton.onclick = function() {
            // Pre-fill input with current task text and time/date
            schedInput.value = textValue;
            document.getElementById('time4Input').value = time;
            document.getElementById('dateInput').value = date;
            newText.remove(); // Remove the old task item

            // Change the button to 'Update'
            const updateButton = document.createElement('button');
            updateButton.textContent = 'Update';
            updateButton.classList.add('update-button');
            updateButton.onclick = function() {
                // Update the task with new values
                const updatedTextValue = schedInput.value;
                const updatedTime = document.getElementById('time4Input').value;
                const updatedDate = document.getElementById('dateInput').value;

                // Add the updated task to the wrapper
                const updatedTask = document.createElement('div');
                updatedTask.classList.add('added-text');
                const updatedTaskContent = document.createElement('p');
                updatedTaskContent.textContent = `${updatedTextValue} (Time: ${updatedTime}, Date: ${updatedDate})`;

                // Create buttons for updated task
                const updatedActionButtons = document.createElement('div');
                updatedActionButtons.classList.add('action-buttons');

                const updatedEditButton = document.createElement('button');
                updatedEditButton.textContent = 'Edit';
                updatedEditButton.classList.add('edit-button');

                const updatedViewButton = document.createElement('button');
                updatedViewButton.textContent = 'View';
                updatedViewButton.classList.add('view-button');

                const updatedDeleteButton = document.createElement('button');
                updatedDeleteButton.textContent = 'Delete';
                updatedDeleteButton.classList.add('delete-button');

                updatedActionButtons.appendChild(updatedEditButton);
                updatedActionButtons.appendChild(updatedViewButton);
                updatedActionButtons.appendChild(updatedDeleteButton);

                updatedTask.appendChild(updatedTaskContent);
                updatedTask.appendChild(updatedActionButtons);

                document.getElementById('taskWrapper').appendChild(updatedTask);

                // Clear input fields after updating
                schedInput.value = '';
                document.getElementById('time4Input').value = '';
                document.getElementById('dateInput').value = '';

                // Show success modal after update
                showModal('Task updated successfully!');

                // Update character count display
                updateCharCount();
            };

            // Append the update button
            document.getElementById('container').appendChild(updateButton);
        };

        // View button functionality
        viewButton.onclick = function() {
            showModal(`Task: ${textValue}\nTime: ${time}\nDate: ${date}`); // Show task details in modal
        };

        // Delete button functionality
        deleteButton.onclick = function() {
            newText.remove();  // Remove the task from the list
            showModal("Task deleted successfully!"); // Show modal
        };

        // Append task content and buttons to the newText div
        actionButtons.appendChild(editButton);
        actionButtons.appendChild(viewButton);
        actionButtons.appendChild(deleteButton);

        newText.appendChild(taskContent);
        newText.appendChild(actionButtons);

        // Append the new task to the task list (wrapper)
        document.getElementById('taskWrapper').appendChild(newText);

        // Clear input fields after adding the task
        schedInput.value = '';
        document.getElementById('time4Input').value = '';
        document.getElementById('dateInput').value = '';

        // Update the character count display
        updateCharCount();
    } else {
        alert("Please enter some text!");
    }
}

// Function to reset the character count display
function updateCharCount() {
    const length = schedInput.value.length;
    const remaining = maxLength - length;
    lettersDisplay.textContent = `Letters: ${length} Maximum: ${remaining}`;
}
