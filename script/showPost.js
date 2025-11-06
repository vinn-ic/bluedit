window.addEventListener("load", async () => {
  const url = new URLSearchParams(window.location.search)
  let id = url.get("PostId")
  id--
  console.log(id)


  const response = await fetch("../php/readPost.php");
  const data = await response.json();
  const postLocation = document.getElementById("ShowpostLocation");

  postLocation.innerHTML += `
    <div class="post" id="post">
        <div class="post-header">
            <span class="post-meta" id="name_Post">Postado por ${data.posts[id].username
    } em ${data.posts[id].time} </span>
        </div>
        <h3 class="post-title" id="_Title"> ${data.posts[id].title} <h3>
        <div class="post-content" id="_Body"><p> ${data.posts[id].post
    } </p> </div>
  `
});
