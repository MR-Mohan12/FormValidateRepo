function clearErrors() {
    // Clear error messages by setting innerHTML to an empty string
    var errors = document.getElementsByClassName("formerror");
    for (var item of errors) {
      item.innerHTML = "";
    }
  }
  
  function seterror(id, error) {
    // Set an error message for the specified element
    var element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;
  }
  
  function validateForm() {
    var returnval = true;
  
    clearErrors(); // Clear any previous error messages
  
    // Perform validation and if validation fails, set the value of returnval to false
    var name = document.forms["myForm"]["fname"].value;
    if (name.length < 5) {
      seterror("name", "*Length of name is too short");
      returnval = false;
    }
    if (name.length === 0) {
      seterror("name", "*Name cannot be empty");
      returnval = false;
    }
  
    var email = document.forms["myForm"]["femail"].value;
    if (email.length > 25) {
      seterror("email", "*Length of email is too long!");
      returnval = false;
    }
  
    var phone = document.forms["myForm"]["fphone"].value;
    if (phone.length !== 10) {
      seterror("phone", "*Phone number should be 10 digits!");
      returnval = false;
    }
  
    var password = document.forms["myForm"]["fpass"].value; // Fixed the field name
    if (password.length < 6) {
      seterror("pass", "*Password should be at least 6 characters long!");
      returnval = false;
    }

    var password = document.forms["myForm"]["fpass"].value; // Fixed the field name
    if (password.search(/[a-z]/)==-1) {
      seterror("pass", "*Password should be at least one lowest characters!");
      returnval = false;
    }
    var password = document.forms["myForm"]["fpass"].value; // Fixed the field name
    if (password.search(/!\@\#|$\%\^\&\*\(\)\]/)==-1) {
      seterror("pass", "*Password should be at least one speacial characters!");
      returnval = false;
    }

    var cpassword = document.forms["myForm"]["fcpass"].value;
    if (cpassword !== password) {
      seterror("cpass", "*Password and confirm password should match!");
      returnval = false;
    }
  
    return returnval;
  }
  
