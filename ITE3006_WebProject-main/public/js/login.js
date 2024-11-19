const input_form = document.querySelector("section");
let login = true;
load_form();

const account_date = [
    {
        "email": "louis@gmail.com",
        "password": "1314520"
    },
    {
        "email": "bosco@gmail.com",
        "password": "1314520"
    }
]

function load_form() {
    login ? login_form() : create_form();
}

function login_form() {
    input_form.innerHTML = /*html*/`
        <form id="login">
            <div class="size">
                <div class="box">
                    <img src="../images/login.jpeg" class="box-image">
                    <div class="login-form">
                        <div class="form-group">
                            <p class="title">Good to see you again</p>
                        </div>
                        <div class="form-group">
                            <label for="email" class="login-text">Email:</label>
                            <input type="email" name="login_email" required="required" placeholder="Enter your email: bosco@gmail.com" class= "login-input">
                        </div>
                        <div class="form-group">
                            <label for="password" class="login-text">Password:</label>
                            <input type="password" name="login_password" required="required" placeholder="Enter your password: 1314520" class="login-input">
                        </div>
                        <div class="create_account-container">
                            <span id="create_account" class="create_account_title">don’t have an account?</span>
                            <span class="create_account_title">forget password?</span>
                        </div>
                        <div id="login_message"></div>
                        <input type="submit"  class="login-button" value="Login">
                    </div>
                </div>
            </div>
        </form>
    `
    const message = document.querySelector("#login_message");

    document.querySelector("#login").addEventListener("submit", async (event) => {
        event.preventDefault();
    
        const form = event.currentTarget;
        const login_email = form.login_email.value
        const login_password = form.login_password.value
        let success = false;
    
        for (let i = 0; i < account_date.length; i++) {
            if (login_email == account_date[i].email && login_password == account_date[i].password) {
                success = true;
            };
        };
        if (!success) {
            message.innerHTML = /*html*/ `
                <div class="error_display">
                    <img class="error_icon" src="https://mweb-cdn.karousell.com/build/alert-error-2kjjYk_Edi.svg" title="">
                    <span>用戶名稱或密碼不正確</span>
                </div>
            `;
        } else {
            message.innerHTML = /*html*/ `
                <div class="success_display">
                    <i class="success_icon fa-solid fa-circle-check"></i>
                    <span>輸入正確，即將跳轉網頁^__^</span>
                </div>
            `;
            setTimeout(function () {
                window.location.href = "main.html";
            }, 2000);
        }
    });
    document.querySelector("#create_account").addEventListener('click', function() {
        login = !login;
        load_form();
    })
}

function create_form() {
    input_form.innerHTML = /*html*/`
        <form id="create">
            <div class="size">
                <div class="box">
                    <img src="../images/login.jpeg" class="box-image">
                    <div class="create-form">
                        <div class="form-group">
                            <p class="title">Create your account</p>
                        </div>
                        <div class="form-group">
                            <label for="email" class="create-text">Email:</label>
                            <input type="email" name="login_email" required="required" placeholder="Enter your email" class="create-input">
                        </div>
                        <div class="form-group">
                            <label for="password" class="create-text">Password:</label>
                            <input type="password" name="login_password" required="required" placeholder="Enter your password" class="create-input">
                        </div>
                        <div class="create_account-container">
                            <span id="back_login" class="back_login_title"><i class="fa-sharp fa-solid fa-rotate-left"></i>Back to login</span>
                        </div>
                        <div id="login_message"></div>
                        <input type="submit"  class="create-button" value="Create">
                    </div>
                </div>
            </div>
        </form>
    `
    document.querySelector("#back_login").addEventListener('click', function() {
        login = !login;
        load_form();
    })
}