let show_tasks = `
    <section id="show_tasks">
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
        <div id="showing_tasks">
            <div id="all_tasks" class="tasks_flex">
                <div id="all_tasks_heading"><h3>All Tasks</h3></div>
                <div id="all_tasks_child">
                    <ul id="all_show_tasks"></ul>
                </div>
            </div>
            <div id="pending_tasks" class="tasks_flex">
                <div id="pending_tasks_heading"><h3>Pending Tasks</h3></div>
                <div id="pending_tasks_child"><ul id="pending_tasks"></ul></div>
            </div>
            <div id="completed_tasks" class="tasks_flex">
                <div id="completed_tasks_heading"><h3>Completed Tasks</h3></div>
                <div id="completed_tasks_child"><ul id="completed_tasks">
        
                </ul></div>
            </div>
        </div>
        <footer id="footer">
            <a href="#/create"><button class="button_plus">+</button>
        </footer>
    </section>
`
export{
    show_tasks
}