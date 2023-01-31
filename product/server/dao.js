const store = require('../../data-base/store')
module.exports = function catalogueDAO() {
    const products = store.getInstance().getAllProducts();
    const categories = store.getInstance().getAllCategories();
    return {
        "products":products,
        "categories": categories
    }
}
module.exports = function getProductDAO(productId) {
    const product = store.getInstance().getProduct(productId);
    return {
        "product": product
    }
}
module.exports = function getCategoriesDAO() {
    const categories = store.getInstance().getAllCategories();
    return {
        "categories": categories
    }
}
module.exports = function getProductsOfCategoryDAO(categoryId) {
    const filteredProducts = store.getInstance().getProducts(categoryId);
    return {
        "products": filteredProducts
    }
}
module.exports = function searchDAO(searchString) {
    const products = store.getInstance().getAllProducts();
    const categories = store.getInstance().getAllCategories();
    let filteredCategories = categories.filter((category) => {category.c_name.toLocaleLowerCase().includes(searchString)})
    filteredCategories = filteredCategories.map((category) => {return category.c_id});
    const categoryBasedResult = products.filter((product) => {filteredCategories.includes(product.p_category)})
    const searchStringBasedResult = products.filter((product) => {product.p_name.includes(searchString)});
    let combinedSearchResult = categoryBasedResult.concat(searchStringBasedResult);
    return {
        "searchResult":combinedSearchResult
    }

}
module.exports = function getPromotionDAO(promoCode) {
    const promotion = store.getInstance().getPromotion(promoCode);
    return  {
        "promotion":promotion
    }
}
