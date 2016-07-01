//creates object for user

var user = {};
user.id={};
//method for adding user.id
user.logIn= function(e){
  e.preventDefault();
  if($("#form").valid()){
    var email = $("#email").val();
    var password = $("#password").val();
    user.id["email"]=email;
    user.id["password"]=password;
    $("#form")[0].reset();
  }
}
//event listener
$("#log-in-button").on("click", user.logIn);

//form validation
$().ready(()=>{
    $("#form").validate({
      rules: {
        email: {
          required:true,
          email: true
        },
        password: {
          required: true,
          minlength: 8
        }
      },
      messages: {
        email: "Please enter a valid email adress",
        password: "password must be at least 8 characters"
      }
    });
})
