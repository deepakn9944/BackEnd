const express = require('express');
const router = express.Router();

const { login, signup } = require('../controllers/auth');
const {auth, isStudent, isAdmin} = require('../middlewares/auth')

router.post('/login', login);
router.post('/signup', signup);




//protected routes


router.get("/test", auth, (req, res) => {
  res.json({
    success: true,
    message: "test",
  });
});



router.get('/student', auth, isStudent, (req, res) => {
    res.json({
        success: true,
        message:'Student page'
    })
})

router.get("/Admin", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Admin page",
  });
});

module.exports = router;