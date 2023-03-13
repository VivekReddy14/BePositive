import  { Sequelize ,DataTypes }  from "sequelize";
import  { coredbConfig }  from '../config/dbconfig';
import { usertablemodel } from './usertable';
import { donortablemodel } from './donortable';
import { requesttablemodel } from './requesttable';

const sequelize:Sequelize = new Sequelize(coredbConfig.DATABASE, coredbConfig.USER, coredbConfig.PASSWORD, {
    host: coredbConfig.HOST,
    dialect: 'mysql'
});

const db:any = {}
db.sequelize = sequelize;
db.models = {};
(async()=>{
    try{
        db.models.usertable = usertablemodel(sequelize, DataTypes);
        db.models.donortable = donortablemodel(sequelize, DataTypes);
        db.models.requesttable = requesttablemodel(sequelize, DataTypes);
    } catch(e){
        console.log(e);
    }
})();


export {db}
