window.onload = function () {
    var btnCreate = document.getElementById('btnCreate');
    btnCreate.onclick = register;
    //btnCreate.addEventListener('click',register);   
}


var register = function () {

    var _fName = document.getElementById('txtFName');
    var _lName = document.getElementById('txtLName');
    var _pass = document.getElementById('txtPass');
    var _email = document.getElementById('txtEmail');


    if (_fName.value.trim() == "") {
        alert("Please fill first name");
        return;
    }

    if (_lName.value.trim() == "") {
        alert("Please fill last name");
        return;
    }

    if (_pass.value == "") {
        alert("Please pass3ord");
        return;
    } else {
        if (_pass.value.length < 7) {
            alert("Password too short");
            return;
        } else {
            if (!/\d/.test(_pass.value)) {
                alert('Atleast number');
                return;
            }
        }
    }

    if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(_email.value)){
        alert("Email not valid");
        return;
    }

    alert('Created succesfuyly;)');
}