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
      ${comment.username} <br> ${comment.comment} <br> ${comment.time}<br>
    `

    commentLocation.innerHTML += `
      <button class="btnComment" id="btnReplyComment${idBtnReply}" name="button-sand">
        
          <div class="svg-wrapper-1">
        <div class="svg-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        ></path>
        </svg>
          </div>
          </div>
        <span>reply commnet</span>
        </button>

        <br><br><br>
      ` 
      idBtnReply++
 })



  for(let i=1;i<idBtnReply;i++){
    let nameId = 'btnReplyComment' + i
    const _btnReply = document.getElementById(nameId) 
    console.log(nameId)
    _btnReply.addEventListener('click', () => {
      console.log('reply comment')
  })

}
});

_btnComment.addEventListener("click",async () => {
  const _valueComment = document.getElementById('valueComment').value;
if(_valueComment.length !== 0){

  console.log(_valueComment) 
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
  }else{
    alert("escreva algo")
  } 
})


