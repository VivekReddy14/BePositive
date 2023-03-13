export const usertablemodel = (sequelize:any, DataTypes:any) => {
    const usertable = sequelize.define('usertable',
    {
        ut_id: {
            primaryKey: true,
            type: DataTypes.BIGINT,
            autoIncrement: true,
        },
        ut_firstname: DataTypes.STRING,
        ut_lastname: DataTypes.STRING,
        ut_phone: DataTypes.STRING,
        ut_email: DataTypes.STRING,
        ut_password: DataTypes.STRING,
        ut_isActive: DataTypes.BOOLEAN,
        ut_blob: DataTypes.BLOB,
        ut_dob: DataTypes.DATE,
        ut_gender: DataTypes.STRING
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return usertable
}