import {date} from './date_time';
let d=date;
let s=d[0]+" "+d[1]+" "+d[2];
const homepage_html=`
<section class="home-page">
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
    <div id="name_date">
        <div><h2>Hello Dipesh</h2></div>
        <div id="date_time">${s}</div>
    </div>
    <div class="homepage_items">
        <div id="task_info">
            <div class="contains_task">
               <p id="created_numer"><span id="number_created">0</span> Created Tasks</p>
            </div>
            <div class="contains_task">
                <p id="created_numer"><span id="number_completed">35</span> Completed Tasks</p>
            </div>
        </div>
        <div class="task_types">
            <a href="#/show_tasks/work" id="type_items" class="work">
                <p id="type_name">Work</p>
                <p id="type_numbers"><span id="work_number">20</span> Tasks</p>
            </a>
            <a href="#/show_tasks/personal" id="type_items" class="personal">
                <p id="type_name">Personal</p>
                <p id="type_numbers"><span id="personal_number">25</span> Tasks</p>
            </a>
            <a href="#/show_tasks/education" id="type_items" class="education">
                <p id="type_name">Education</p>
                <p id="type_numbers"><span id="education_number">23</span> Tasks</p>
            </a>
        </div>
    </div>
    <footer id="footer">
        <a href="#/create"><button class="button_plus">+</button>
    </footer>

</section>
`;
export{
    homepage_html
}