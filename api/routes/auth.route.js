import express from 'express'
import { singup } from '../controllers/auth.controller.js';

const Router = express.Router();

Router.post("/signup",singup)

export default Router;