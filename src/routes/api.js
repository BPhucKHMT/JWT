import express from 'express';
import apiController from '../controller/apiController.js'

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

    return app.use("/api/v1/" , router);
}

export default initApiRoutes;