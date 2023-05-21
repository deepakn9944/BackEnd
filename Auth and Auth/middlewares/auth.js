require("dotenv").config();
const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
    try {
      console.log("cookie", req.cookies.token);
      console.log("body", req.body.token);
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ","");

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'token not found'
            })
        }

        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;
        } catch (error) {
               res.status(401).json({
               success: false,
               message: "Invalid token",
             });
        }

        next();


    } catch (error) {
        console.error(error);
        res.status(401).json({
            success: false,
            message: 'something went wrong'
        })
    }
}


exports.isStudent = (req, res, next) => {
    try {
        if (req.user.role != 'Student') {
            return res.status(401).json({
              success: false,
              message: "This route is protected for student",
            });
        }
        next();
    } catch (error) {
          console.error(error);
          res.status(401).json({
            success: false,
            message: "User role cannot be verified",
          });
    }
}


exports.isAdmin = (req, res, next) => {
  try {
    if (req.user.role != "Admin") {
      return res.status(401).json({
        success: false,
        message: "This route is protected for Admin",
      });
      }
       next();
  } catch (error) {
    console.error(error);
    res.status(401).json({
      success: false,
      message: "User role cannot be verified",
    });
  }
};