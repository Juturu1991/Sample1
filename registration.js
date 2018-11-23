/*
Pure JS
*/
//window.onload = function () {
//    var btnCreate = document.getElementById('btnCreate');
//    btnCreate.onclick = register;
//    //btnCreate.addEventListener('click',register);   
//}

//Document ready specified
//$(document).ready(function(){
//   $('#btnCreate').click(register);
//})

//Jquery Wrapper w/o doc ready
$(function(){
    $('#btnCreate').click(register);
});

var register = function () {

    var _fName = $('#txtFName').val(); //document.getElementById('txtFName');
    var _lName = $('#txtLName').val(); //document.getElementById('txtLName');
    var _pass = $('#txtPass').val(); //document.getElementById('txtPass');
    var _email = $('#txtEmail').val(); //document.getElementById('txtEmail');

    if (_fName.trim() == "") {
        alert("Please fill first name");
        return;
    }

    if (_lName.trim() == "") {
        alert("Please fill last name");
        return;
    }

    if (_pass == "") {
        alert("Please pass3ord");
        return;
    } else {
        if (_pass.length < 7) {
            alert("Password too short");
            return;
        } else {
            if (!/\d/.test(_pass)) {
                alert('Atleast number');
                return;
            }
        }
    }

    if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(_email.val())){
        alert("Email not valid");
        return;
    }

    /* Pure Js
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
    */

    alert('Created succesfuyly;)');
}