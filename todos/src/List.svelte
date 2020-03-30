
<script>
import CheckBox from './CheckBox.svelte'
import {store} from './store.js'
let items=[];
store.subscribe( state=> items=state.items);
function updateTodo(event){
   const {id, completed} =event.detail;   
   store.updateTodo(id,completed);
}
</script>
<div class="mt-5">
    {#each items as {id,content, isCompleted} }
      <div class=""> 
       <CheckBox checked={isCompleted} text={content} id={id} on:update={updateTodo}/>       
       </div>
    {/each}
</div>