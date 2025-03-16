import bcrypt from 'bcryptjs'; // mã hóa mật khẩu
const salt = bcrypt.genSaltSync(10); // tham số mã hóa mật khẩu
// Get the client
import mysql from'mysql2';

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'jwt',
});


const hashUserPassword = (userPassword)=>
{
    let hashPassword = bcrypt.hashSync(userPassword ,salt); // băm mật khẩu
    return hashPassword;
}

const createNewUser = (email , password , username)=>{
    let hashPass = hashUserPassword(password); // mã hóa password


    connection.query(
        'INSERT INTO users (email , password , username) VALUES (? , ? ,?)',[email,hashPass,username],
        function (err, results, fields) {
                if(err)
                {
                    console.log(err);
                }
         }
         );
}

const getUserList = () => {
    let users =[];
    connection.query(
        'SELECT * from users',
            function (err, results, fields) {
            if(err)
            {
                console.log(err);
            }
            console.log("check result ", results );
         }
         );
}

module.exports = {
    createNewUser,
    getUserList
}