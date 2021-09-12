import  Sequelize  from "sequelize";

export const sequelize =new Sequelize(
    'd9eak2gnvimdn8',
    'btpoftnrnyzpiq',
    '8ec95eb5230c8ed297d65ac65247cddf8343bde48dc1337fc1338704e178ca72',
    {
        host: 'ec2-52-7-159-155.compute-1.amazonaws.com',
        dialect: "postgres",
        dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false
            }
          }
    }
    
)