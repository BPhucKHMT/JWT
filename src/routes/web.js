import express from 'express';
import homeController from '../controller/homeController.js';
import apiController from '../controller/apiController.js'

const router = express.Router();

/**
 * 
 * @param {*} app : express app 
 */


const initWebRoutes = (app) => {
    router.get("/" , homeController.handleHelloWorld)
    router.get("/user" , homeController.handleUserPage) //lấy từ server
    router.post("/users/create-user" , homeController.handleCreateNewUser) //đẩy dữ liệu lên server
    router.post("/delete-user/:id" , homeController.handleDeleteUser)
    router.get("/update-user/:id" , homeController.getUpdateUserPage)
    router.post("/user/update-user" , homeController.handleUpdateUserPage)

    //rest api CRUD
    //GET -- read , POST -- create , PUT - update , Delete - Delete
    router.get("/api/test-api",apiController.testApi) 

    return app.use("/" , router);
}

export default initWebRoutes;