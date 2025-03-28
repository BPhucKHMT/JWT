import express from 'express';
import apiController from '../controller/apiController.js'
import userController from '../controller/userController.js'

const router = express.Router();

/**
 * 
 * @param {*} app : express app 
 */


const initApiRoutes = (app) => {
    //rest api CRUD
    //GET -- read , POST -- create , PUT - update , Delete - Delete
    router.get("/test-api",apiController.testApi) 
    router.post("/register" , apiController.handleRegister)
    router.post("/login", apiController.handleLogin);

    router.get("/user/read",userController.readFunc);
    router.post("/user/create",userController.createFunc);
    router.put("/user/update",userController.updateFunc);
    router.delete("/user/delete",userController.deleteFunc);



    return app.use("/api/v1/" , router);
}

export default initApiRoutes;