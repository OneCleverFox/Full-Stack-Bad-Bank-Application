const ctx = {
    "accounts": [
        {
        "name": "ralf",
        "email": "ralle.jacob84@googglemail.com",
        "balance": 0,
        "password": "123456"
        }
    ]
}

function create(){
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const status = document.getElementById('status');

    ctx.accounts.push({
        name:       name.value,
        email:      email.value,
        passsword:  password.value,
        balance:    0,
    });

    //update status & clear form
    name.value = "";
    email.value = "";
    password.value = "";
    status.innerHTML = "Accunt Ceated!";
}