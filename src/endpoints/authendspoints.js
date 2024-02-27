import { login,signup,verifyOTPAndUpdatePassword,generateAndSendOTP,changepassword, getAllUsers,deleteUserById,updateUserById, } from "../authentication/index.js";

import  express from "express";
const authRouter = express.Router();
authRouter.post("/login", login);
authRouter.post("/signup", signup);
authRouter.post("/verifyOTPAndUpdatePassword", verifyOTPAndUpdatePassword);
authRouter.post("/generateAndSendOTP", generateAndSendOTP);
authRouter.delete("/deleteUserById/:id", deleteUserById);
authRouter.put("/updateUserById/:id", updateUserById);
authRouter.get("/getAllUsers", getAllUsers);
authRouter.post("/changepassword", changepassword);
export default authRouter;
