var BASE_URL = 'https://backend.grailhq.com/api/';

var API = {
    CREATE_ACCOUNT: BASE_URL + 'create_account/',
}

function sendEmail (){
    document.getElementById('install').style.display = "flex";
    document.getElementById('email').style.display = "none";

    let email = document.getElementById('email-data').value;
    let request = new XMLHttpRequest();
    let api = API.CREATE_ACCOUNT;

    request.open('POST', api, true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send('email='+email);
}