
export async function GET(req){
    try{
        const token = req.cookies.get("jwtToken")?.value 
        console.log(token)
        return Response.json({message:token})

    }catch(error){
        return Response.json({error})
    }
}