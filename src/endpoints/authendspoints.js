import { login,signup,verifyOTPAndUpdatePassword,generateAndSendOTP,changepassword, getAllUsers,deleteUserById,updateUserById, } from "../authentication/index.js";
import  express from "express";
import { verifyingtoken } from "../utils/jwtfunctions.js";
const authRouter = express.Router();
authRouter.post("/login", login);
authRouter.post("/signup", signup);
authRouter.post("/reset", verifyOTPAndUpdatePassword);
authRouter.use(verifyingtoken)
authRouter.post("/forget", generateAndSendOTP);
authRouter.delete("/deleteUserById/:id", deleteUserById);
authRouter.patch("/updateUserById/:id", updateUserById);
authRouter.get("/getAllUsers", getAllUsers);
authRouter.post("/change", changepassword);
export default authRouter;
