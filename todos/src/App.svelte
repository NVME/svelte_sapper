<script> 
   import AddTodo from './Add.svelte';
   import List from './List.svelte';
   import Summary from './Summary.svelte'
   let name ="ewan";
</script>
<div class="flex justify-center ">     
   <div class="w-full max-w-md my-10 bg-white rounded border-solid border-1 border-gray-800 p-4 shadow-md ">
   <center class="text-gray-700" >
    <h2><b>My Todo List</b></h2>
   </center>
   <AddTodo/>
   <List/>
   <Summary/>
   </div>
</div>