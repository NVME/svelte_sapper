
<script>
import CheckBox from './CheckBox.svelte'
import {store} from './store.js'
let items=[];
store.subscribe( value=> items=value);
function updateTodo(event){
   const id=event.detail;
   store.updateTodo(id);
}
</script>
<div class="mt-5">
    {#each items as {id,content, isCompleted} }
      <div class=""> 
       <CheckBox checked={isCompleted} text={content} id={id} on:update={updateTodo}/>       
       </div>
    {/each}
</div>