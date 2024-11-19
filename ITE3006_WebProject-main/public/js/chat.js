const chat_list = document.querySelector(".chat_user_list");
const message_box = document.querySelector(".chat_massage_loop");
const input_message = document.querySelector('.message_input');
let chat_id = 0;

const product_data = [
    {
        "name": "Apple Macbook Air",
        "price": 1200,
        "photo": ["macbook.jpg", "macbook-1.jpg", "macbook-2.jpg"],
        "type": "Electronics",
        "user_id": 1
    },
    {
        "name": "Nike Running Shoes",
        "price": 100,
        "photo": ["nikeShoes.jpeg", "nikeShoes-1.jpg", "nikeShoes-2.jpg"],
        "type": "Fashion",
        "user_id": 1
    },
    {
        "name": "Toyota Corolla",
        "price": 18000,
        "photo": ["toyotaCorolla.jpg", "toyotaCorolla-1.jpg"],
        "type": "Cars",
        "user_id": 1
    }
]

const user_data = [
    {
        "name": "LouisKwok",
        "icon": "image0.jpg"
    },
    {
        "name": "Bosco",
        "icon": "cat.png"
    }
]

const contact_user = [
    {
        "product_id": 0,
        "user_id": 0
    }
]

setChatList();

function setChatList() {
    for (let i = 0; i < contact_user.length; i++) {
        chat_list.innerHTML += /*html*/ `
            <div class="chat_user_date">
                <img class="user_icon" src="../images/${user_data[contact_user[i].user_id].icon}">
                <div class="user_message_container">
                    <span class="user_name">${user_data[contact_user[i].user_id].name}</span>
                    <span class="product_title">${product_data[contact_user[i].product_id].name}</span>
                    <span class="user_last_message">I'm interested!</span>
                </div>
                <div class="day_photo">
                    <div class="message_list_day">yesterday</div>
                    <img class="product_photo" src="../images/Macbook.jpg">
                </div>
            </div>
        `
    }
}

input_message.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && input_message.value != "") {
        console.log(123)
        message_box.innerHTML += /*html*/ `
        <div class="send_message_container">
            <span class="send_message">${input_message.value}</span>
        </div>
        `
        input_message.value = "";
    }
});