<script>	
import SLink from '../components/SLink.svelte'
import { stores } from '@sapper/app'
const {session}= stores();

</script>
<section>
   <div class="bg-white pt-4 flex  justify-center md:justify-between items-baseline">
      <div class="md:w-2/3 ">
      <a href="/" >
      <img src='surveynow.png' alt="surveynow" class="w-48 md:ml-5 md:w-56 "/>
      </a>
      </div>   
      <div class="hidden md:flex md:justify-evenly md:items-center md:w-1/6"> 
      {#if !$session.isLogin} 
      <SLink route="" text="Home" className="border-b-2 md:border-blue-400 px-2" />
      <SLink route="faq" text="How is works" className="border-b-2 border-blue-400 px-2 " />
      {:else}
        <SLink route="profile" text={$session.user} className="border-b-2 md:border-blue-400 px-2" />
        <SLink route="logout" text="Logout" className="border-b-2 border-blue-400 px-2 " />
      {/if}
      </div>
      <div class=" w-1/6 xl:w-1/6">
      </div>
   </div>
</section>
<main class="bg-white py-5" >
  <slot />
</main>
<footer>
   <div class="p-3 text-gray-800 text-center">
     <p>Survey Now &trade; | {new Date().getFullYear()} reserved  </p>
   </div>   
</footer>