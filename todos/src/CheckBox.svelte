<script>
import {createEventDispatcher} from 'svelte'
   export let checked=false;
   export let id=0;
   export let text=''
   const dispatch= createEventDispatcher();
   function updateTodo(){
     dispatch('update',
        id
     )
   }
</script>
<style>
   input:checked+svg{
       display:block
   }
</style>
<div class="my-1 py-1 flex items-center">
  <div class="bg-white border h-5 w-5 rounded border-gray-400 flex flex-shrink-0 justify-center items-center">  
  <input type="checkbox" class=" opacity-0 absolute" checked={checked} on:change={updateTodo}/>
    <svg class="fill-current hidden w-4 h-4 text-gray-700 pointer-events-none" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
  </div>
  <p class="pl-2 text-gray-800">{text}</p>
</div>
