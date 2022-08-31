function showMenu() {
  var menu = document.getElementById("menuItems");
  if (menu.style.display=="inline") {
    menu.style.display="none";
  } else {
    menu.style.display="inline";
  }
}

function submitForm() {
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var message=document.getElementById("message").value;
  alert("Your message was submitted. Thank you, "+name+"!");
}
