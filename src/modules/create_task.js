let create_task = `
<section id="create">
    <header class="default">
        <div class="heading"><a href="#/"><h1 id="to-do-heading">To-DO</h1></a></div>
        <div class="dropdown">
            <button class="dropbtn">Icon</button>
            <div class="dropdown-content">
                <ul>
                    <li><a href="#/">Home Page</a></li>
                    <li><a href="#/show_tasks">Show Tasks</a></li>
                    <li><a href="#/create">Create Tasks</a></li>
                </ul>
            </div>
        </div>
    </header>
    <div id="items">
        <div id="create_heading"><h3>Add New Task</h3></div>
        <div id="category">
            <select name="Categories" id="categories">
                <option value="Work">Work Projects</option>
                <option value="Personal">Personal Task</option>
                <option value="Education">Education</option>
            </select>
        </div>
        <input type="text" placeholder="Enter task name" id="task_name">
        <input type="datetime-local" name="data" id="date_time">
        <button type="submit" class="button" id="adding">Add New Task</button> 
    </div>
    
</section>
`

export{
    create_task, 
}