import bcrypt from 'bcryptjs'; // mã hóa mật khẩu
const salt = bcrypt.genSaltSync(10); // tham số mã hóa mật khẩu
// get the client
import mysql from 'mysql2/promise';
import db from '../models/index.js'

// get the promise implementation, we will use bluebird
import bluebird from 'bluebird';

// create the connection, specify bluebird as Promise



const hashUserPassword = (userPassword)=>
{
    let hashPassword = bcrypt.hashSync(userPassword ,salt); // băm mật khẩu
    return hashPassword;
}

const createNewUser = async (email , password , username)=>{
    let hashPass = hashUserPassword(password); // mã hóa password
  
         try {
           await db.User.create({
                username:username,
                email:email,
                password:hashPass
            })
        }
        catch(error)
        {
            console.log(error);
        }
}

const getUserList = async() => {
    //test user list
    let newUser = await db.User.findOne({
        where: {id:1},
        attributes: ["id" , "username" ,"email"],
        include: {model:db.Group , attributes:["name" , "description"] },
        raw :true,
        nest:true // cùng tên thì gộp thành 1 object
    })

    // let roles =  await db.Group.findOne({
    //     where:{id:1},
    //     include: {model:db.Role},
    //     raw:true,
    //     nest:true
    // })

    let r =await db.Role.findAll({
        include: {model:db.Group , where: {id:1}},
        raw:true,
        nest:true
    })
    console.log("check user" , newUser)
    console.log("check roles" , r)


    let users =[];
    users = await db.User.findAll();
    return users;
}

const deleteUser = async (userId) =>
{
    await db.User.destroy({
        where:{id:userId}
    })
   
}
const getUserById = async (id) =>
{
        let user = {};
        user = await db.User.findOne ({
            where: {id:id}
        })
        return user;
    
         

 }

const updateUserInfor = async (email ,username ,id)=> {
    await db.User.update(
        { email: email ,
          username:username
        },
        {
          where: {
            id: id
          },
        },
      );
  
    }


module.exports = {
    createNewUser,
    getUserList,
    deleteUser,
    getUserById,
    updateUserInfor
}