const express = require("express");
const router = express.Router();

const { login , signup } = require("../Controllers/Auth");
const {auth, isStudent,isAdmin} = require("../middlewares/auth");

router.post("/login",login);
router.post("/signup",signup);

//testing Protected Routes for Single Middleware
router.get("/test",auth , (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Tests'
    });
});

//protected route for student
router.get("/student" , auth , isStudent , (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Students',
    });
})

//protected route for admin
router.get("/admin", auth, isAdmin, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Admin',
    });
});

module.exports = router;