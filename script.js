var submitForm = false;


function isNullOrWhiteSpace(str) {
    return (!str || str.length === 0 || /^\s*$/.test(str))
}
userEmail.onblur = userEmailIsVal;
function userEmailIsVal() {

    if (isNullOrWhiteSpace(userEmail.value)) {
        errorUserEmail.style = "color:red;display:block";
        errorUserEmail.innerText = "Email is required";
        return false;
    }
    else {
        errorUserEmail.style = "display:none;"
        return true;
    }
}
companyName.onblur = companyNameIsVal;
function companyNameIsVal() {

    if (isNullOrWhiteSpace(companyName.value)) {
        errorCompanyName.style = "color:red;display:block";
        errorCompanyName.innerText = "Company name is required";
        return false;
    }
    else {
        errorCompanyName.style = "display:none;"
        return true;
    }
}
password.onblur = passwordIsVal;
function passwordIsVal() {
    var passwordString = password.value;
    if (isNullOrWhiteSpace(passwordString)) {
        errorPassword.style = "color:red;display:block";
        errorPassword.innerText = "Password is required";
        return false;
    }
    else if (passwordString.length < 8) {
        errorPassword.style = "color:red;display:block";
        errorPassword.innerText = "Password length should be at least 8";
        return false;
    }
    else {
        errorPassword.style = "display:none;"
        return true;
    }
}
confirmPassword.onblur = confirmPasswordIsVal;
function confirmPasswordIsVal() {
    if (confirmPassword.value != password.value) {
        errorConfirmPassword.style = "color:red;display:block";
        errorConfirmPassword.innerText = "Passwords do not match";
        return false;
    }
    else {
        errorConfirmPassword.style = "display:none";
        return true;
    }
}
chooseState.onchange = function () {
    if (chooseState.value == "") {
        chooseState.style = "color:#8e8b8a;"
    }
    else {
        chooseState.style = "color:black;"
    }
}
chooseState.onblur = chooseStateIsVal;
function chooseStateIsVal() {
    if (isNullOrWhiteSpace(chooseState.value)) {
        errorChooseState.style = "color:red;display:block";
        errorChooseState.innerText = "Choose your state";
        return false;
    }
    else {
        errorChooseState.style = "display:none";
        return true;
    }
}
createAccount.onclick = function () {
    userEmailIsVal();
    companyNameIsVal();
    passwordIsVal();
    confirmPasswordIsVal();
    chooseStateIsVal();
    if (userEmailIsVal() && companyNameIsVal() && passwordIsVal()
        && confirmPasswordIsVal() && chooseStateIsVal()) {
        alert("Form  is submited");
    }
    else {
        event.preventDefault();
        console.log("Form is  not submited");
    }
}
