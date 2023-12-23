import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createCategoryController,
  updateCategoryController,
  categoryController,
  singleCategoryController,
  deleteCategory
} from "../controllers/categoryController.js";

const router = express.Router();

//routes

//create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//Get all category
router.get("/categories", categoryController);

//Get single category
router.get("/single-category/:slug", singleCategoryController);

//delete Category
router.delete("/delete-category/:id", requireSignIn, isAdmin, deleteCategory);

export default router;
