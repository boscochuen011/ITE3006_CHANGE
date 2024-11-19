function handleSubmit(event) {
    event.preventDefault();
    alert("Your form has been submitted!");
}

const form = document.getElementById("myForm");
form.addEventListener("submit", handleSubmit);

(function() {
const form = document.querySelector('#myForm');
const checkboxes = form.querySelectorAll('input[type=checkbox]');
const checkboxLength = checkboxes.length;
const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

function init() {
if (firstCheckbox) {
    for (let i = 0; i < checkboxLength; i++) {
        checkboxes[i].addEventListener('change', checkValidity);
    }

    checkValidity();
}
}

function isChecked() {
for (let i = 0; i < checkboxLength; i++) {
    if (checkboxes[i].checked) return true;
}

return false;
}

function checkValidity() {
const errorMessage = !isChecked() ? 'At least one checkbox must be selected.' : '';
firstCheckbox.setCustomValidity(errorMessage);
}

init();
})();