import {db} from '../models/index'

const donorController:any = {}
const donormodel = db.models.donortable;

donorController.getdonordetails = async (req:any) => {
    try{
        console.log(await donormodel.findOne({
            ut_id : 1
        }));
        console.log(req)    
    } catch(e){
        console.log(e);
    }
    return req;
}


donorController.createdonor = async (req:any) => {
    try{
        await donormodel.create({
            
        })
    } catch(e){
        console.log(e)
    }
}

donorController.updatedonor = async (req:any) => {
    try{
        await donormodel.create({
            
        })
    } catch(e){
        console.log(e)
    }
}

donorController.inacivatedonor = async (req:any) => {
    try{
        await donormodel.update({
            
        })
    } catch(e){
        console.log(e)
    }
}

donorController.acivatedonor = async (req:any) => {
    try{
        await donormodel.update({
            
        })
    } catch(e){
        console.log(e)
    }
}

export default donorController