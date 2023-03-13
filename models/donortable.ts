export const donortablemodel = (sequelize:any, DataTypes:any) => {
    const donortable = sequelize.define('donortable',
    {
        dt_id: {
            primaryKey: true,
            type: DataTypes.BIGINT,
            autoIncrement: true,
        },
        dt_userid: DataTypes.BIGINT,
        dt_bloodgroup: DataTypes.STRING,
        dt_pincode: DataTypes.INTEGER,
        dt_email: DataTypes.STRING,
        dt_isActive: DataTypes.BOOLEAN,
        dt_blob: DataTypes.BLOB,
        dt_dob: DataTypes.DATE,
        dt_lastDonatedDate: DataTypes.DATE,
        dt_gender: DataTypes.STRING
    },
    {
        freezeTableName: true,
        timestamps: true
    });
    return donortable
}