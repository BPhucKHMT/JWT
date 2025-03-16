import express from 'express';
import homeController from '../controller/homeController.js';

const router = express.Router();

/**
 * 
 * @param {*} app : express app 
 */


const initWebRoutes = (app) => {
    router.get("/" , homeController.handleHelloWorld)
    router.get("/user" , homeController.handleUserPage) //lấy từ server
    router.post("/users/create-user" , homeController.handleCreateNewUser) //đẩy dữ liệu lên server
    return app.use("/" , router);
}

export default initWebRoutes;