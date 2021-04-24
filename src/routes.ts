import Router, { request, response } from "express";
import { MessageController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsControllers";
import { UsersController } from "./controllers/UserController";

const routes = Router();

const settingsController = new SettingsController();

const usersController = new UsersController

const messageController = new MessageController

routes.post("/users", usersController.create);

routes.post("/settings", settingsController.create);

routes.post("/messages", messageController.create);
routes.get("/messages/:id", messageController.showByUser);


export {routes};