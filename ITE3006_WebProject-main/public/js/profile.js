const product = document.querySelector(".product-box-display");
const productData = [
    {
        "name": "Apple Macbook Air",
        "price": 1200,
        "photo": ["macbook.jpg", "macbook-1.jpg", "macbook-2.jpg"],
        "type": "Electronics",
        "userID": 1
    },
    {
        "name": "Nike Running Shoes",
        "price": 100,
        "photo": ["nikeShoes.jpeg", "nikeShoes-1.jpg", "nikeShoes-2.jpg"],
        "type": "Fashion",
        "userID": 1
    },
    {
        "name": "Toyota Corolla",
        "price": 18000,
        "photo": ["toyotaCorolla.jpg", "toyotaCorolla-1.jpg"],
        "type": "Cars",
        "userID": 1
    },
    {
        "name": "Honda Civic",
        "price": 22000,
        "photo": ["hondaCivic.jpg", "hondaCivic-1.jpg", "hondaCivic-2.jpg"],
        "type": "Cars",
        "userID": 10
    },
    {
        "name": "Gucci Handbag",
        "price": 1200,
        "photo": ["gucciHandbag.jpg", "gucciHandbag-1.jpg", "gucciHandbag-2.jpg"],
        "type": "Fashion",
        "userID": 1
    },
]

function setProduct() {
    for (let i = 0; i < productData.length; i++) {
        product.innerHTML += /*html*/ `
            <div class="product-box">
                <a href="./product.html?id=${i}">
                    <img src="../images/${productData[i].photo[0]}" class="product-image">
                </a>
                <div class="product-text">
                    <span class="product-name">${productData[i].name.substring(0,17)}</span>
                    <span class="product-cost">HK$${productData[i].price}/day</span>
                </div>
            </div>
        `
    }
}

setProduct();