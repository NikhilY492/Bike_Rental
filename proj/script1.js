var username = localStorage.getItem("username");
  var dispElement = document.getElementById("disp");
  dispElement.textContent = "Welcome, " + username + "!";