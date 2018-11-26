$(function () {

    var login = function () {


        var _txtEmail = $("#txtEmail").val();
        var _txtPass = $("#txtPassword").val();

        if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(_txtEmail)) {
            //alert ("Please provide valid Email address");
            $(".error").html("Please provide valid Email address");
            $(".error").show();
            return;
        }

        if (_txtPass == "") {
            //alert("Please provide valid password");
            $(".error").html("Please provide valid password");
            $(".error").show();
            return;
        }

        if (_txtEmail == "admin@gmail.com" && _txtPass == "Password1") {
            window.open("home.html?name=" + _txtEmail + "&time=" + new Date().getDate(), "_self");
        } else {
            //alert("Please provide valid credentials")
            $(".error").html("Please provide valid credentials");
            $(".error").show();
        }
    }
    $('#btnLogin').click(login);
    // var url = "home.html?name=" + $('#txtFirstName').val() + "&time=" + new Date().getDate();
    //  window.location = url;
})