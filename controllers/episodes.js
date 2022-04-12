import express  from "express"; 
import fetch from "node-fetch";

const router = express.Router();

router.get('/',async(request,response)=>{
   
    const url="https://www.breakingbadapi.com/api/episodes";
    const data_res=await fetch (url,{method:'get'});
    const data=await data_res.json();

    return response.render('episodes',{
        data:data
    })
   


})
export default router;