//https://sapper.svelte.dev/docs#Server_routes

export async function post(req, resp){
   const {user}= req.body  
   resp.setHeader('Content-Type', 'application/json');
   resp.end(JSON.stringify({user:user}));
}