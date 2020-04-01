<script>
   export let lable="";
   export let type="";
   export let data=""
   let id=lable.replace(' ', '_').toLowerCase();
   let name=id;
   function handChange(event){     
      data=event.target.value
   }

</script>
 <div class="flex flex-col mb-4 w-full">
    <lable for={name} class="mb-2 font-bold uppercase text-gray-700 text-md">{lable}</lable>
    <input id={id} name={name} type= {type} class="border py-2 px-3 text-gray-700" 
        on:change={handChange} required 
    />
 </div>