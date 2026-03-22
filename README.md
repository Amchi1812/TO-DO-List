# To-Do List Web Application

A modern and responsive To-Do List web application for managing daily tasks.  
The application allows users to easily add, organize, complete, and remove tasks through a clean and intuitive interface.

## Features

- Add new tasks directly from the **main (home) page**
- **Last added task preview** displayed on the home page

### All Tasks Page
Displays the complete list of tasks with options to:
- Mark tasks as completed
- Delete tasks permanently
- Tasks can also be **edited**

### Completed Tasks Page
Displays only tasks that are marked as finished:
- Tasks can be **unchecked** to move them back to active tasks
- Tasks can also be **deleted**
- Tasks can also be **edited**

### Unfinished Tasks Page
Displays tasks that are not yet completed:
- Tasks can be **marked as completed**
- Tasks can be **deleted**
- Tasks can also be **edited**

- **Responsive design** that adapts to different screen sizes for better usability on desktop and mobile devices

## Data Persistence

Since the application contains multiple pages and needs to preserve user data, it uses the **Web Storage API (`localStorage`)**.

This allows tasks to be stored directly in the browser, ensuring that the task list remains saved even after refreshing or reopening the page.

## Technologies Used

- HTML
- CSS
- JavaScript
- Browser Local Storage API
