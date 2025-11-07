const _btnComment = document.getElementById('btnComment')
const url = new URLSearchParams(window.location.search)
let id = url.get("PostId")
let idBtnReply = 1;


window.addEventListener("load", async () => {
  
  const response = await fetch("../php/readPost.php", {
    method: "POST",
    headers: {
       "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "post-id="+ id

  });
  id--
  const data = await response.json();
  const postLocation = document.getElementById("ShowpostLocation");
  postLocation.innerHTML += `
    <div class="post" id="post">
        <div class="post-header">
            <span class="post-meta" id="name_Post">Postado por ${data.posts[0].username
    } em ${data.posts[0].time} </span>
        </div>
        <h3 class="post-title" id="_Title"> ${data.posts[0].title} <h3>
        <div class="post-content" id="_Body"><p> ${data.posts[0].post
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
      ${comment.username} <br> ${comment.comment} <br> ${comment.time}      <br><br><br>
    `

    commentLocation.innerHTML += `
      <button class="btnReplyComment" id="btnReplyComment${idBtnReply}">reply comment</button>
        <br>
      ` 
      idBtnReply++
 })
});

_btnComment.addEventListener("click",async () => {
  const _valueComment = document.getElementById('valueComment').value;
 
 console.log("mandar comment") 
   const res = await fetch("php/createComment.php", { 
    method: "POST",
     headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "comment=" + _valueComment + "&post-id="+ id,
  })
  const action = res.json()
  if(typeof action !== 'undefined'){
      window.location.reload()
  }
})

//for(let i=1;i<=idBtnReply;i++){
//  let nameId = 'btnReplyComment' + i
//  console.log(nameId)
//  const _btnReply = document.getElementById(nameId)
//  
//  _btnReply.addEventListener('click', () => {
//    console.log('reply comment')
//  })

//}
