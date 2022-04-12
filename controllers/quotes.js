import express  from "express"; 
import fetch from "node-fetch";

const router = express.Router();

router.get('/',async(request,response)=>{
   
    const url="https://www.breakingbadapi.com/api/quotes";
    const data_res=await fetch (url,{method:'get'});
    const data=await data_res.json();

    return response.render('quotes',{
        data:data
    })
   


})
export default router;