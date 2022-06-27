// let onsubmit = document.getElementById('adding').addEventListener('click', show_task());

function show_task(){
    let category = document.getElementById('categories');
    let category_value = category.value;
    console.log(category_value);
}

export{
    show_task
}