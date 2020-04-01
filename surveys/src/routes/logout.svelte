<script >
  import {goto, stores} from '@sapper/app'
     const {session} =stores();      
      $session.user=null  ;
      $session.isLogin=false;
     goto('login');    

</script>
