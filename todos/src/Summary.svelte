<script >
import {store} from './store.js'
 let todo=0;
 let total=0;
 let completed=0;
store.subscribe(state=>{
     todo=state.todo;
     total=state.total;
     completed=state.completed;
});
</script>

<div class="py-2 text-gray-700">
 Total:{total} | Completed: { completed} | Todo: {todo}
</div>