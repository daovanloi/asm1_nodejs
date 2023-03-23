import User from "../models/user";

export const signup = async(req,res)=>{
    try{
   
        const {name,email,password,confirmPassword} = req.body;
        const userExists=await User.findOne({email});
        if(userExists){
            return res.status(400).json({
                message:"User da ton tai"
            });
        }
        const user =await User.create(req.body);
        return res.status(201).json({
            message:"Da Dang Ky Thanh Cong",
            user,
        });

    }
    
    catch (error){
        
    }
    

};
