import express from 'express'
import { signup , signin} from '../controllers/auth.controller.js';

const Router = express.Router();

Router.post("/signup",signup)
Router.post("/signin",signin)

export default Router;