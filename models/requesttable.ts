export const requesttablemodel = (sequelize:any, DataTypes:any) => {
    const requesttable = sequelize.define('requesttable',
    {
        rt_id: {
            primaryKey: true,
            type: DataTypes.BIGINT,
            autoIncrement: true,
        },
        rt_patientname: DataTypes.STRING,
        rt_pocname: DataTypes.STRING,
        rt_patientmobile: DataTypes.STRING,
        rt_pocmobile: DataTypes.STRING,
        rt_userid: DataTypes.BIGINT,
        rt_bloodgroup: DataTypes.STRING,
        rt_pincode: DataTypes.INTEGER,
        rt_pocemail: DataTypes.STRING,
        rt_statusid: DataTypes.INTEGER,
        rt_isActive: DataTypes.BOOLEAN,
        rt_isfulfilled: DataTypes.BOOLEAN,
        rt_blob: DataTypes.BLOB,
        rt_gender: DataTypes.STRING,
        rt_isgenderrequired: DataTypes.BOOLEAN,
        rt_requiredgender: DataTypes.STRING,
        rt_age: DataTypes.INTEGER,
        rt_isgagerequired: DataTypes.BOOLEAN,
        rt_requiredage: DataTypes.STRING,
        rt_donatedbyuserid: DataTypes.BIGINT
    },
    {
        freezeTableName: true,
        timestamps: true
    });
    return requesttable
}