import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  getAllProducts,
  getSingleProducts,
  productPhotoController,
  deleteProductController,
  updateProductController,
  productFilterController
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

//ROUTES

//Create Product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//Get All Products
router.get("/get-products", getAllProducts);

//Get single Product
router.get("/get-products/:slug", getSingleProducts);

//Get Photo
router.get("/product-photo/:pid", productPhotoController);

//Delete Product
router.delete("/delete-product/:id", requireSignIn, isAdmin, deleteProductController);

//Update Product
router.put(
  "/update-product/:id",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//Product Filter
router.post("/product-filters",productFilterController)

export default router;
