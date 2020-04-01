<script>
import SInput from '../components/SInput.svelte'
import SButton from '../components/SButton.svelte'
import SLink from '../components/SLink.svelte'
</script>
<svelte:head>
<title>Sign Up</title>
</svelte:head>
<div class="flex justify-center items-center">
   <div class="mt-8 shadow-xl p-8 rounded border-t-4 border-blue-400">
   <h1 class="my-4"> Please create an account </h1>
  <form >
    <SInput type="input" lable="User Name"/>
    <SInput type="email" lable="Email"/>
    <SInput type="password" lable="Password"/>
    <div class="flex justify-between items-center">    
       <SButton text="Create"/>
        <SLink route="login" text="Already have an account?"/>
       
    </div>
  </form>
  </div>
  </div>