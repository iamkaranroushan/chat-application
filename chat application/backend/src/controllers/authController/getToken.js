

const getToken = async(req, res) => {

   try{
    const cookie = req.cookies?.jwtToken || "no cookie found"
    console.log("this ", cookie)
    return res.json({cookie})
   } catch(error){
    console.log(error);
    return res.json({"token": error.message})
   }
}

export default getToken