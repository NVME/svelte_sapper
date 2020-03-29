<script >
import {store} from './store.js'
 let todos=[];
store.subscribe(items=>todos=items);

</script>

<div class="py-2">
 Total:{todos.length} | Completed: { todos.filter(t=>t.isCompleted).length} | Todo: {todos.filter(t=>!t.isCompleted).length}
</div>