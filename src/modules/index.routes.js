import {homepage_html} from './home_page'
import {create_task} from './create_task'
import {show_tasks} from './show_tasks'
let content = document.getElementById('main-class');
let tasks={
    "Work":[],
    "Personal":[],
    "Education":[]
};
let categories =["Work","Personal","Education"];
if(localStorage.getItem("Tasks")){
    tasks = JSON.parse(localStorage.getItem("Tasks"));
}

function add_task(){
    let category = document.getElementById('categories').value;
    let current_task = document.getElementById('task_name').value;
    let date_and_time = document.getElementById('date_time').value;
    console.log(category,current_task,date_and_time);
    tasks[category].push(
        {
            "Task_Name":current_task,
            "Task_Date":date_and_time,
            "status":0
        }
    )
    localStorage.setItem("Tasks",JSON.stringify(tasks));
}
function get_completed_tasks(){
    let completed_count = 0;
    categories.forEach(
        (category)=>{
            tasks[category].forEach(
                (task)=>{
                    if(task.status==1) completed_count++;
                }
            )
        }
    )
    return completed_count;
    

}

function fetch_tasks(){
    let count=0;
    let completed = 0;
    let total = document.getElementById('number_created');
    let work = document.getElementById('work_number');
    let personal = document.getElementById('personal_number');
    let education = document.getElementById('education_number');
    let completed_tasks = document.getElementById('number_completed');
    work.innerHTML=tasks["Work"].length;
    personal.innerHTML=tasks["Personal"].length;
    education.innerHTML=tasks["Education"].length;
    count+=tasks["Work"].length+tasks["Personal"].length+tasks["Education"].length;
    total.innerHTML=count;
    completed_tasks.innerHTML=get_completed_tasks();
}
function refresh(category){
    content.innerHTML = show_tasks;
    let all_ul = document.querySelector('#all_show_tasks');
    let pending_ul = document.getElementById('pending_tasks');
    let completed_ul = document.getElementById('completed_tasks');
    let li = document.createElement('li');
    tasks[category].forEach(
        (task)=>{
            let li = document.createElement('li');
            li.innerHTML=task.Task_Name+" "+task.Task_Date;
            let li2 = document.createElement('li');
            li2.innerHTML=task.Task_Name+" "+task.Task_Date;
            all_ul.appendChild(li2);
            if(task.status==0){
                
                let checkbox = document.createElement('input');
                checkbox.setAttribute("type", "checkbox");
                checkbox.setAttribute("value", task.Task_Name+" "+task.Task_Date);
                // checkbox.inne=task.Task_Name+" "+task.Task_Date;
                let label = document.createElement('label');
                label.setAttribute("id", "task_label");
                label.innerHTML=task.Task_Name+" "+task.Task_Date;
                li.innerHTML='';
                li.appendChild(checkbox);
                li.appendChild(label);
                pending_ul.appendChild(li);
                checkbox.addEventListener('click', (event)=>{
                    let task_value = event.target.value;
                    let updated=[];
                    tasks[category].forEach((val)=>{
                        if(val.Task_Name+" "+val.Task_Date==task_value){
                            val.status=1;

                        }
                        updated.push(val);
                    })
                    tasks[category]=updated;
                    localStorage.setItem("Tasks",JSON.stringify(tasks));
                    refresh(category);
                })
            }
            else{
                completed_ul.appendChild(li);
            }
            
        }
    )
}

const router = (route) => {
    content.innerHTML='';
    
    switch(route)
    {
        case '#/' : {content.innerHTML = homepage_html;
            fetch_tasks();
            
        }
        break;

        case '#/create':{content.innerHTML= create_task;
            
            let element = document.getElementById('adding');
            element.addEventListener('click', ()=>{
                add_task();
            });}
        break;
        case '#/show_tasks/work': {content.innerHTML = show_tasks;
            refresh("Work");

            
        }
        break;
        case '#/show_tasks/personal': {content.innerHTML = show_tasks;
            refresh("Personal");
            
        }
        break;
        case '#/show_tasks/education': {content.innerHTML = show_tasks;
            refresh("Education");
            
        }
        break;
        default :
            return console.log("404!!!");
    }

};



export {router};