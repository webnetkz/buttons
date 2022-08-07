let app = 'Web-stopwatch';
    company = 'WebNet.kz';
    app_code = 'com.webnet.webstopwatch';
    email = 'dbqqbq@gmail.com';
    date = '2021-12-22';

document.head.title = app;

let app_names = document.querySelectorAll('.app_name');
let companies = document.querySelectorAll('.company');
let app_codes = document.querySelectorAll('.app_code');
let emails = document.querySelectorAll('.email');
let dates = document.querySelectorAll('.date');

for(let el of app_names) {
    el.innerHTML = app;
}

for(let el of companies) {
    el.innerHTML = company;
}

for(let el of app_codes) {
    el.innerHTML = app_code;
}

for(let el of dates) {
    el.innerHTML = date;
}

for(let el of emails) {
    el.innerHTML = email;
}