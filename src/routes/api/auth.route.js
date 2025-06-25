const express = require("express");
const authController = require("@/controllers/api/auth.controller");
const router = express.Router();
const checkAuth = require("@/middlewares/checkAuth");

router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/me", checkAuth, authController.me);
router.post("/refresh", authController.refreshToken);
// router.post("/forgot-password", authController.sendForgotEmail);
// router.post("/logout", authController.logout);
// router.get("/verify-email", authController.verifyEmail);

module.exports = router;
