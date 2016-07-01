//creates object for user

var user = {};
user.id={};

user.logIn= function(){
  var email = $("#email").val();
  var password = $("#password").val();
  user.id["email"]=email;
  user.id["password"]=password;
}

$("#log-in-button").on("click",logIn());
