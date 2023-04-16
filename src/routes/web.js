import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

const initWebRouter = (app) => {
  router.get("/", homeController.getHomepage);
  return app.use("/", router);
};

module.exports = initWebRouter;
