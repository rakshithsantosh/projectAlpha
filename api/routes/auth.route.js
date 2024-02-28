import express from 'express'
import { signup , signin, google, signout} from '../controllers/auth.controller.js';

const Router = express.Router();

Router.post("/signup",signup)
Router.post("/signin",signin)
Router.post("/google",google)
Router.get('/signout',signout)

export default Router;