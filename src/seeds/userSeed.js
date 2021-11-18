require('dotenv').config()
require('../../dataBaseConnection');
const userDao = require("../data-access/userDao");
const { hashPassword } = require('../helpers/password')
const data = [
    {
        'fullName': 'Favour Smith',
        'email': 'favour@gmail.com',
        'password': 'admin',
        'role': 'admin'
    }
];

const seedData = async () => {
    try { 
       const emailExist = await userDao.findByEmail(data[0].email);
       if (emailExist) return console.log('Admin already exists'); ;
        // if user does not exist, create the user
      const userCreated = await userDao.create({
        fullName: data[0].fullName,
        email: data[0].email,
        password: await hashPassword(data[0].password),
        role:  data[0].role
      });
      // if user failed to create, throw error
      if (!userCreated) throw new Error("Admin not Created");
      console.log('Admin successfully created');
      //console.log("Admin has been successfully created");
        
    } catch (error) {
        throw new Error(error.message);
    }
} 

seedData();