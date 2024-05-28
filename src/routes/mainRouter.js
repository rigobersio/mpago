const { Router } = require("express");
const mPagoRouter = require("./mPagoRouter");



const mainRouter = Router();

mainRouter.use("/mpago", mPagoRouter);




module.exports = mainRouter;
