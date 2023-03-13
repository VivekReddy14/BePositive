import {db} from '../models/index'

const userController:any = {}
userController.getuserdetails = async (req:any) => {
    try{
        console.log(await db.models.usertable.findOne({
            ut_id : 1
        }));
        console.log(db.models.usertable)    
    } catch(e){
        console.log(e);
    }
    return db;
}


userController.createuser = async (req:any) => {
    try{
        await db.models.usertable.create({
            
        })
    } catch(e){
        console.log(e)
    }
}

userController.updateuser = async (req:any) => {
    try{
        await db.models.usertable.create({
            
        })
    } catch(e){
        console.log(e)
    }
}

userController.inacivateuser = async (req:any) => {
    try{
        await db.models.usertable.update({
            
        })
    } catch(e){
        console.log(e)
    }
}

userController.acivateuser = async (req:any) => {
    try{
        await db.models.usertable.update({
            
        })
    } catch(e){
        console.log(e)
    }
}

export default userController