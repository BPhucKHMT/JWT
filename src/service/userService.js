import bcrypt from 'bcryptjs'; // mã hóa mật khẩu
const salt = bcrypt.genSaltSync(10); // tham số mã hóa mật khẩu
// get the client
import mysql from 'mysql2/promise';

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
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird,
      });

 
         try {
            const [rows, fields] = await connection.execute(
                'INSERT INTO users (email , password , username) VALUES (? , ? ,?)',[email,hashPass,username]
               );
             return rows; //trả về hàng dữ liệu
        }
        catch(error)
        {
            console.log(error);
        }
}

const getUserList = async() => {

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird,
      });


    try {
        const [rows, fields] = await connection.execute(
            'SELECT * from users'
           );
         return rows; //trả về hàng dữ liệu
    }
    catch(error)
    {
        console.log(error);
    }
}

const deleteUser = async (id) =>
{
    
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird,
      });

        try {
            const [rows, fields] = await connection.execute(
                'DELETE FROM users WHERE id = ?',[id]
               );
             return rows; //trả về hàng dữ liệu
        }
        catch(error)
        {
            console.log(error);
        }
}
    const getUserById = async (id) =>
    {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'jwt',
            Promise: bluebird,
          });
    
            try {
                const [rows, fields] = await connection.execute(
                    'SELECT * FROM users WHERE id = ?',[id]
                   );
                 return rows; //trả về hàng dữ liệu
            }
            catch(error)
            {
                console.log(error);
            }

    }

    const updateUserInfor = async (email ,username ,id)=> {
    const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
    Promise: bluebird,
  });

    try {
        const [rows, fields] = await connection.execute(
            'UPDATE users SET email = ? , username = ? WHERE id = ?',[email,username ,id]
           );
         return rows; //trả về hàng dữ liệu
    }
    catch(error)
    {
        console.log(error);
    }
    }


module.exports = {
    createNewUser,
    getUserList,
    deleteUser,
    getUserById,
    updateUserInfor
}