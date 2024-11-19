const input_form = document.querySelector(".edit_box");
let function_name = "edit";
load_form();

document.querySelector(".edit_button").addEventListener('click', function() {
    function_name = "edit"
    load_form();
})
document.querySelector(".change_password_button").addEventListener('click', function() {
    function_name = "change"
    load_form();
})

function load_form() {
    if (function_name == "edit") {
        edit_form();
    } else {
        change_password_form();
    }
}

function edit_form() {
    input_form.innerHTML = /*html*/`
        <span class="edit_title">Edit profile</span>
        <span class="edit_photo_title">Profile photo</span>
        <div class="profile_photo_size">
        <div class="myprofile-display">
            <img src="../images/cat.png" alt="myprofile_image" class="myprofile-image">
        </div>
            <div class="photo_text">
            <p>Clear frontal face photos are an important way for buyers 
                and sellers to learn about each other.</p>
            <input type="file" id="select-button" class="hidden-input" name="filename">
            <label for="select-button" class="select_photo_button">Select Photo</label>
        </div>
        </div>
        <span class="edit_public_profile">Public profile</span>
        <form>
        <div class="public_profile_size">
            <input type="text" id="username" name="username" placeholder="Username">
            <input type="email" id="email" name="email" placeholder="Email">
            <select id="location" class="select-location">
                <option value="HK">Hong Kong</option>
                <option value="TW">Tai Wan</option>
                <option value="JP">Japan</option>
                <option value="MU">Macau</option>
            </select>
            <textarea rows="5" id="bio" name="bio" placeholder="Bio"></textarea>
            <button type="submit" class="edit_save_button">Save changes</button>
        </div>
        </form>
    `
}

function change_password_form() {
    input_form.innerHTML = /*html*/`
        <h2>Change password</h2>
        <form>
            <div class="public_profile_size">
            <input type="password" id="username" name="Current password" placeholder="Current password">
            <input type="password" id="email" name="New password" placeholder="New password">
            <input type="password" id="location" name=" Confirm password" placeholder="Confirm password">
            <button type="submit" class="edit_save_button">Save changes</button>
            </div>
        </form>
        </div>
    `
}