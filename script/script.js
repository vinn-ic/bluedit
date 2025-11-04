function sendForPhp() {
  var user = document.getElementById("name").value;
  var pass = document.getElementById("password").value;

  fetch("php/login.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "username=" + user + "&password=" + pass,
  });
}
function sendForPhpRegister() {
  var user = document.getElementById("name").value;
  var pass = document.getElementById("password").value;

  fetch("php/register.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "username=" + user + "&password=" + pass,
  });
}

function sendForPhpPost() {
  var title = document.getElementById("postTitle").value;
  var bodyPost = document.getElementById("bodyPost").value;

  fetch("php/createPost.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "title=" + title + "&bodyPost=" + bodyPost,
  });
}
