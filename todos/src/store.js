import {writable} from 'svelte/store'

function createStore(){

    const {subscribe ,update }= writable(initiStore());
    return {
        subscribe,
        addTodo:(todo)=>{          
            update(state=>{
             return  { ...state,
                items:  [
                          ...state.items,
                             {
                            id:state.items.length+1,
                            content:todo,
                            isCompleted:false
                            }                            
                       ],
                total:state.total+1,
                todo:state.todo+1
             }
            }
          );
        },
        updateTodo:(id, isCompleted)=>{
            update(state=>{
                return {
                ...state,
                   items:state.items.map(item=>item.id===id? {...item,isCompleted:!item.isCompleted}:item) ,
                   todo: isCompleted?state.todo-1:state.todo+1,
                   completed:isCompleted?state.completed+1:state.completed-1
                }
            }                         
         );
        }
    }

}

function initiStore(){
    return  {
        items: [
        {
           id:1,
            content:"This is my first todo item :)",
            isCompleted:false
        },
        {
            id:2,
            content:"This is my second todo item",
            isCompleted:true
        }
    ],
    total:2,
    completed:1,
    todo:1
  }
}

export const store=createStore()