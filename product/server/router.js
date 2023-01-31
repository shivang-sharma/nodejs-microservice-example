const express = require('express');
const controller = require('./controller');

const productRouter = express.Router();

productRouter.get("/catalogue", controller.catalogue);
productRouter.get("/:id", controller.getProduct);
productRouter.get("/categories", controller.getCategories);
productRouter.get("/category/:category", controller.getProductOfCategory);
productRouter.get("/search", controller.search);
productRouter.get("/promotions/:promoCode", controller.getPromotion);

module.exports = productRouter;

