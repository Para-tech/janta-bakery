

function orderNow() {
  alert("Thank you! Please visit our bakery or call us to place your order.");
}


function submitForm() {


  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();


  var response = document.getElementById("form-response");


  if (name === "" || email === "" || message === "") {
    response.innerText = "Please fill all fields.";
    return;
  }

  response.innerText = "Thank you " + name + "! We will contact you soon.";


  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}