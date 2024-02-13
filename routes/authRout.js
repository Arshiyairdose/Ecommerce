import  express, { Router }  from "express";
import {registerController,loginCotroller,testController, forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController} from "../controllers/authController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router obj
const router=express.Router()

//register method post
router.post("/register",registerController)
//login
router.post("/login",loginCotroller)
//forgot password  || post
router.post("/forgot-password",forgotPasswordController)
//testRoute
router.get("/test",requireSignIn,isAdmin, testController)

//protected user route auth
router.get ("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})
})

//protected  admin route auth
router.get ("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
})

//updateprofile
router.put("/profile",requireSignIn,updateProfileController)
//orders
 router.get("/orders",requireSignIn,getOrdersController)

 //all orders
 router.get("/all-orders",requireSignIn,isAdmin,getAllOrdersController)
// order status update
router.put(
    "/order-status/:orderId",
    requireSignIn,
    isAdmin,
    orderStatusController
  );
  
  export default router;














