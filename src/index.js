import './front-end/styles.css';
import {router} from './modules/index.routes'

console.log("Running_index.js");


if(window.location.hash=='')

{
    window.location.hash='#/'

}

window.addEventListener('load', ()=>
{
    router(window.location.hash);
})

window.addEventListener('hashchange',()=>{
    
    router(window.location.hash);
})


