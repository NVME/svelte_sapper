<script>
import SInput from '../components/SInput.svelte'
import SButton from '../components/SButton.svelte'
import SLink from '../components/SLink.svelte'
import { goto, stores } from '@sapper/app'
let userName=''
let password=''
const {session}= stores();
//import { goto} from '@sapper/app'
async function handleSubmit(event){
   event.preventDefault();
   const response= await fetch("auth/login",{
      method:'POST',
      body:JSON.stringify({user:userName, password:password}),
      headers:{
         'Content-type':'application/json'
      }
   }) 
   let errors = response.errors;
   if (errors) console.log(errors)   
    else{
       const result= await response.json()      
       if (result.user){
            $session.user=result.user;
            $session.isLogin=true;                  
            goto("/")        
       }
    }
}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>
<div class=" flex item-center justify-center">  
   <div class="my-8 shadow-xl p-8 rounded border-t-4 border-blue-400">
   <h1 class="my-4"> Please login use email or user name</h1>
   <form action="/" method="post" on:submit|preventDefault={handleSubmit}>  
        <SInput type="input" lable="User Name" bind:data={userName} />
        <SInput type="password" lable="password" bind:data={password}/>       
        <div class="flex justify-between items-center">
         <SButton text="Login"/>
         <SLink route="signup" text="Create an account?"/>
         </div>
   </form>
   </div>
</div>