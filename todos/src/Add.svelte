<script>
    import {store} from './store.js'
    let task="";
     function handleClick(){
       store.addTodo(task);
       task='';
     }
</script>
<div class="my-3 flex justify-start">
  <input type='input' bind:value={task} class=" w-full shadow-xs text-xs pl-2 rounded hover:bg-gray-100 border-gray-400 border p-1" placeholder="Please add a todo item here ..." />
  <button on:click={handleClick} class=" bg-blue-800 mx-1 shadow-xs rounded text-white p-1 hover:bg-blue-700">Add</button>
</div>