//creates object for user

var user = {};
user.id={};

user.logIn= function(e){
  var email = $("#email").val();
  var password = $("#password").val();
  user.id["email"]=email;
  user.id["password"]=password;
  $("#form")[0].reset();
}

$("#log-in-button").on("click", user.logIn());
