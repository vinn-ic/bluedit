window.addEventListener("load", async () => {
  const url = new URLSearchParams(window.location.search)
  let id = url.get("PostId")
  id--
  
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
  id++
  const commentLocation = document.getElementById('commentLocation')

   const responseComment = await fetch("php/readComment.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "post-id="+ id,
  });
  
  const dataComment = await responseComment.json()
  dataComment.comments.forEach((comment) => {
    commentLocation.innerHTML += `
      ${comment.username} <br> ${comment.comment} <br> ${comment.time} <br><br><br>
      
    `
 })


});


