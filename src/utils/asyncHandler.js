import res from "express/lib/response"

const asyncHandler = (requestHandler)=>{
    (res,req,next)=>{
        Promise.resolve(requestHandler(res,req,next)).catch(next)
    }
}

export{asyncHandler}


// const asyncHandler = (fn) => async(req,res,next)=>{
//     try{
//         await fn(req,res,next)

//     }
//     catch(err){
//         res.status(err.code|| 500).json({
//             success:false,
//             message:err.message || "Internal server error"
//         })
//     }
// }