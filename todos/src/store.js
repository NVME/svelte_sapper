import {writable} from 'svelte/store'

function createStore(){

    const {subscribe ,update }= writable(initiStore());
    return {
        subscribe,
        addTodo:(todo)=>{          
            update(items=>[...items,{
                id:items.length+1,
                content:todo,
                isCompleted:false
            }]);
        },
        updateTodo:(id)=>{
            update(items=>items.map(item=>
                   item.id===id? {...item,isCompleted:!item.isCompleted}:item
                )                          
         );
        }
    }

}

function initiStore(){
    return [
        {
           id:1,
            content:"This is my first todo item cccfdffffffffffffff  ",
            isCompleted:false
        },
        {
            id:2,
            content:"This is my second todo item",
            isCompleted:true
        }
    ]
}

export const store=createStore()