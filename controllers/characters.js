import express  from "express"; 
import fetch from "node-fetch";

const router = express.Router();

router.get('/',async(request,response)=>{
   
    const url="https://www.breakingbadapi.com/api/characters";
    const data_res=await fetch (url,{method:'get'});
    const data=await data_res.json();

    return response.render('characters',{
        data:data
    })
})

router.get('/:id',async(request,response)=>{
   const id = request.params.id;
    const url=`https://www.breakingbadapi.com/api/characters/${id}`;
    const data_res=await fetch (url,{method:'get'});
    const data=await data_res.json();
    console.log(data);
    return response.render('character_details',{
        data:data
    })
})


export default router;