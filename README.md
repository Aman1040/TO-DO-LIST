# TO-DO-LIST
 Implementing a todo list using JavaScript, HTML, and CSS is a common and practical project for web development. 

Certainly! Your HTML, CSS, and JavaScript code implements a simple to-do list with a user interface divided into two sections: pending tasks and completed tasks. Let's break down the structure and functionality of your code:

HTML Structure:
The HTML structure consists of a container div containing four items (head, Enter, pending, completed).
The head section contains the title "TO DO LIST".
The Enter section contains an input field with the id data to input new tasks and a button to add tasks.
The pending section displays pending tasks with an ordered list (ol) having the id container.
The completed section displays completed tasks with an ordered list (ol) having the id completedcontainer.
CSS:
CSS is used to style the layout. It sets the height and width of the body to 100%.
The container class is styled to create a grid layout with rows and columns for the UI elements.
Each item within the container has a black border and is centered with flexbox.
JavaScript:
Your JavaScript code includes examples of loops, functions, and the logic for handling the to-do list.
It has a commented-out section with examples of different types of loops (while, for, for...in, for...of).
There's a commented-out section showing an example of iterating over an object.
The viewtask function displays pending tasks in the HTML using a loop and inserts buttons for each task to mark it as completed.
The viewcompletetask function displays completed tasks in the HTML.
The completedtask function moves a task from the pending list to the completed list when the corresponding button is clicked.
The addtask function adds a new task to the pending list when the "Add" button is clicked.




