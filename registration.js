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
$(function () {
    $('#btnCreate').click(register);
});

var register = function () {
    //$(".error").html('');
    $(".error").hide();
    $(".error").empty();
    var _fName = $('#txtFName').val(); //document.getElementById('txtFName');
    var _lName = $('#txtLName').val(); //document.getElementById('txtLName');
    var _email = $('#txtEmail').val(); //document.getElementById('txtEmail');
    var _pass = $('#txtPass').val(); //document.getElementById('txtPass');

    if (_fName.trim() == "") {
        //alert("Please provide first name");
        $(".error").html("Please provide first name");
        $(".error").show();
        return;
    }

    if (_lName.trim() == "") {
        //alert("Please provide last name");
        $(".error").html("Please provide last name");
        $(".error").show();
        return;
    }

    if(_email.trim() == ""){
        $(".error").html("Please provide Email address");
        $(".error").show();
        return;
    }
    else{
    if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(_email)) {
        //alert("Email not valid");
        $(".error").html("Email not valid");
        $(".error").show();
        return;
    }
}

    if (_pass == "") {
        //alert("Please provide password");
        $(".error").html("Please provide password");
        $(".error").show();
        return;
    } else {
        if (!/\d/.test(_pass)) {
            //alert('Atleast a number');
            $(".error").html("Provide atleast a number");
            $(".error").show();
            return;
        } else {
            if (_pass.length < 7) {
                //alert("Password too short");
                $(".error").html("Password too short");
                $(".error").show();
                return;
            }
        }

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

    //alert('Created succesfully;)');
}