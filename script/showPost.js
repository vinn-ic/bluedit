window.addEventListener("load", async () => {
  const response = await fetch("../php/readPost.php");
  const data = await response.json();
  const postLocation = document.getElementById("ShowpostLocation");

  postLocation.innerHTML += `
    <div class="post" id="post">
        <div class="post-header">
            <span class="post-meta" id="name_Post">Postado por ${
    data.posts[0].username
  } em ${data.posts[0].time} </span>
        </div>
        <h3 class="post-title" id="_Title"> ${data.posts[0].title} <h3>
        <div class="post-content" id="_Body"><p> ${
    data.posts[0].post
  } </p> </div>
    <
  `;
});
