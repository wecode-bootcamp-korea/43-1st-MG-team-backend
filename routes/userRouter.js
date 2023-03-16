const express = require("express");
const userController = require("../controllers/userController");
const { loginRequired } = require("../utils/auth");
const router = express.Router();

router.post("/signup", userController.signUp);
router.post("/signin", userController.signIn);
router.patch("/info", loginRequired, userController.updateUserInfo);
router.get("/cart", loginRequired, userController.cartInfo);
router.post('/cart',loginRequired,userController.createCart);
router.patch('/cart/:cartId',loginRequired, userController.updateCart);


module.exports = {
  router,
};
