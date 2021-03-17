import React from 'react'
import '../css/toDoList.css'

// Icons ================
// import { AiOutlineCheckSquare } from "react-icons/ai";
// import { AiFillCheckSquare } from "react-icons/ai";
// import { BsX } from "react-icons/bs";
import { BsPlusCircle } from "react-icons/bs"
const UNCHECK = '<svg job="complete" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="i-complete" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>'
const CHECK = '<svg job="complete" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="i-complete" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM695.5 365.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L308.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H689c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>'
const DELETE = '<svg job="delete" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="i-delete" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"></path></svg>'
        
class toDoList extends React.Component {
    componentDidMount() {

        // ============= ADD ITEMS TO LIST ============= //
        const list = document.getElementById('td-list');
        const input = document.getElementById('td-input')

        let LIST = []
        let id = 0

        const addToDo = (toDo, id, done, trash) => {
            if (trash) { return; }
            const DONE = done? CHECK : UNCHECK;
            const LINE_THROUGH = done? 'lineThrough': '';
            
            const text = `<li class="td-item" job="complete">
                ${DONE} 
                <p class="td-itemName ${LINE_THROUGH}" job="complete">${toDo}</p>
                ${DELETE}
            </li>`
            const position = 'beforeend'
            list.insertAdjacentHTML(position, text)
        }
        
        input.addEventListener('keyup', function(event){
            if (event.keyCode == 13) {
                const toDo = input.value
                if (toDo) {
                    console.log(toDo)
                    addToDo(toDo, id, false, false);
                    LIST.push({
                        name: toDo,
                        id: id,
                        done: false,
                        trash: false
                    });
                    console.log(LIST)
                    input.value = ''; 
                    // increase id
                    id++;
                }
            }
        });

        // ============= COMPLETE ITEM / DELETE ITEM ============= //
        function completeToDo (element) {
            // element.classList.toggle(CHECK);
            // element.classList.toggle(UNCHECK);
            // element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH);
            // LIST[element.id].done = LIST[element.id].done ? false : true;
        }
        
        function removeToDo (element) {
            element.parentNode.parentNode.removeChild(element.parentNode);
            // LIST[element.id].trash = true;
            console.log(element.parentNode.parentNode)
        }
        
        list.addEventListener('click', function(event) {
            let element = event.target;
            const elementJOB = event.target.attributes.job.value;
            if (elementJOB == "complete") {
                completeToDo(element);
            }else if (elementJOB == "delete") {
                removeToDo(element);
            }
            // console.log(event.target.attributes.job.value)
            // //console.log(event.target)
            // console.log(LIST)
        })



    }
    render() {
        return (
            <div className="toDoListContainer" job="none">
                <div className="titleCont" job="none">
                    <h3 className="td-title">Tasks</h3>
                </div>
                <div className="listCont" job="none">
                    <ul className="td-list" id="td-list" job="none">
                        {/* Insert List Items Here */}
                    </ul>
                </div>
                <div className="add-to-do" job="none">
                    {/* trigger 'addToDo' function  */}
                    <BsPlusCircle className="i-input"/>
                    <input className="td-input" id="td-input" type="text" placeholder="Add task"></input>
                    
                </div>
            </div>
        );   
    }    
}

// const input = document.getElementById('td-input')
// input.addEventListener('keyup', function(event){
//     if (event.keyCode == 13) {
//         const toDo = input.value
//         // check if input.value is not empty
//         if (toDo) {
//             addToDo(toDo, id, false, false);
//             LIST.push({
//                 name: toDo,
//                 id: id,
//                 done: false,
//                 trash: false
//             });
//             // clear input.value
//             input.value = ''; 
//             // increase id
//             id++;
//         }
//     }
// });

export default toDoList;

// ========= Graveyard ========= //

// checkbox unshaded 
    // <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="i-complete" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    //  <path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path>
    //  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
    // </svg>

    // <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="i-complete" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>

// checkbox shaded 
    // <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="i-complete" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    //     <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM695.5 365.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L308.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H689c6.5 0 10.3 7.4 6.5 12.7z"></path>
    // </svg>

// delete X 
    // <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="i-delete" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    //     <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"></path>
    //     <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"></path>
    // </svg>