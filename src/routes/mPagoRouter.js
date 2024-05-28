const {Router} = require("express");
const {postHandlerPreference} = require("../handlers/mPagoHandlers");

const mPagoRouter = Router();


mPagoRouter.post("/", postHandlerPreference);


module.exports = mPagoRouter;

