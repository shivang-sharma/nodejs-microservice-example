var database = (function database() {
    var instance;
    class DatabaseSingleton {
        categories = [
            {
                "c_id":"C101",
                "c_name":"Electronics"
            },
            {
                "c_id":"C102",
                "c_name":"Shoes"
            },
            {
                "c_id":"C103",
                "c_name": "Furnitures"
            }
        ]
        products = [
            {
                "p_id":"P101",
                "p_name":"iQOO Neo 6 5G",
                "p_category":"C101",
                "p_price": 31000
            },
            {
                "p_id":"P102",
                "p_name": "Oven",
                "p_category":"C101",
                "p_price":15000
            },
            {
                "p_id":"P103",
                "p_name":"Nike",
                "p_category":"C102",
                "p_price":2300
            },
            {
                "p_id":"P104",
                "p_name":"Jordan",
                "p_category":"C102",
                "p_price":5600
            },
            {
                "p_id":"P105",
                "p_name":"Table",
                "p_category":"C103",
                "p_price":2450
            },
            {
                "p_id":"P106",
                "p_name":"Ergonomics Chair",
                "p_category":"C103",
                "p_price":1890
            }
        ]
        inventory = [
            {
                "p_id":"P101",
                "stock":"10"
            },
            {
                "p_id":"P102",
                "stock":"3"
            },
            {
                "p_id":"P103",
                "stock":"20"
            },
            {
                "p_id":"P104",
                "stock":"0"
            },
            {
                "p_id":"P105",
                "stock":"7"
            },
            {
                "p_id":"P106",
                "stock":"10"
            }
        ]
        promotions = [
            {
                "promo_code": "CFXIWP01",
                "discount":"10%",
                "category":"C102"
            }
        ]
        getAllProducts() {
            return products;
        }
        getAllCategories() {
            return categories;
        }    
        getProduct(productId) {
            const product = this.products.find((product) => {product.p_id == productId});
            return product;
        }
        getProducts(categoryId) {
            const filteredProducts = this.products.filter((product, index) => {product.p_category == categoryId});
            return filteredProducts;
            this.products.filter((product) => {
               product.p_category
            })
        }
        getPromotion(promotCode) {
            const promotion = this.promotions.find((promotion) => {promotion.promo_code == promotCode});
            return promotion;
        }
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = new DatabaseSingleton();
            }
            return instance;
        }
    }
})();
module.exports = database;