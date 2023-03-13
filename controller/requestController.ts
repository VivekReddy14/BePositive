import {db} from '../models/index'

const requestController:any = {}
requestController.getrequestdetails = async (req:any) => {
    try{
        console.log(await db.models.requesttable.findOne({
            ut_id : 1
        }));
        console.log(db.models.requesttable)    
    } catch(e){
        console.log(e);
    }
    return db;
}


requestController.createrequest = async (req:any) => {
    try{
        await db.models.requesttable.create({
            
        })
    } catch(e){
        console.log(e)
    }
}

requestController.updaterequest = async (req:any) => {
    try{
        await db.models.requesttable.create({
            
        })
    } catch(e){
        console.log(e)
    }
}

requestController.inacivaterequest = async (req:any) => {
    try{
        await db.models.requesttable.update({
            
        })
    } catch(e){
        console.log(e)
    }
}

requestController.acivaterequest = async (req:any) => {
    try{
        await db.models.requesttable.update({
            
        })
    } catch(e){
        console.log(e)
    }
}

export default requestController