import userService from '../service/userService.js'

const handleHelloWorld = (req , res) =>
    {
        return res.render("home.ejs")
    }
const handleUserPage =  async (req , res) =>
{
    //model => get data from database
    let userList = await  userService.getUserList(); // lấy list dữ liệu từ data base
    //await userService.deleteUser(3);
    return res.render("user.ejs" ,{userList});
}

    const handleCreateNewUser = (req ,res) => {
        let email = req.body.email;
        let password = req.body.password;
        let username =req.body.username;

         userService.createNewUser(email , password , username);
        return res.redirect("/user"); //refresh page
    }

    const handleDeleteUser = async (req,res) =>
    {
       

        await userService.deleteUser(req.params.id)
        return res.redirect("/user")
    }

    const getUpdateUserPage  =  async (req ,res)=>
    {
        let id =req.params.id;
        let user =await  userService.getUserById(id);
        let userData = {};
        userData = user;
        // if(user && user.length >0)
        // {
        //     userData = user[0];
        // }
        console.log(userData)
        return res.render("user-update.ejs" , {userData})
    }

    const handleUpdateUserPage =  async (req,res)=>
    {
        let email = req.body.email;
        let username = req.body.username;
        let id = req.body.id;
        await userService.updateUserInfor(email ,username  , id);
        console.log(req.body)
        return res.redirect("/user");
    }
    
module.exports ={
    handleHelloWorld,
    handleUserPage,
    handleCreateNewUser,
    handleDeleteUser,
    getUpdateUserPage,
    handleUpdateUserPage
}