import User from "../model/userModel.js"

export const getCurrentUser = async(req,res)=>{
    try {
        const id = req.userId
        if(!id){
            return res.status(400).send("user not found")
        }
        const user = await User.findById({id})
        return res.status(200).send(user)

    } catch (error) {
        return res.status(500).send(`getcurrent user error ${error}`)
    }
}