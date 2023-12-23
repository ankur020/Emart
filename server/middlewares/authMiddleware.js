import JWT from "jsonwebtoken";
import { users } from "../models/userModel.js";

//Protected Route token base

export const requireSignIn = (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    //console.log(decode)
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    console.log(req.user);
    const user = await users.findById(req.user._id);
    console.log(user.role);
    if (user.role != 1) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Error in Admin Middleware",
    });
  }
};
