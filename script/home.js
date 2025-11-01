
const ShowUserLocation = document.getElementById("showUser");

const userActionsLocation = document.getElementById("user-actions")

const btnSair_ = document.getElementById("btnSair")
const btnLogin_ = document.getElementById("btnLogin")
const btnCd_ = document.getElementById("btnCd")


window.addEventListener('load', async () => {
  const response = await fetch('../php/readPost.php')
  const data = await response.json()

  const postLocation = document.getElementById("postLocation");


  data.posts.forEach(post => {
    postLocation.innerHTML += `
    <div class="post" id="post">
        <div class="post-header">
            <span class="post-meta" id="name_Post">Postado por ${post.username} em ${post.time} </span>
        </div>
        <h3 class="post-title" id="_Title"> ${post.title} </h3>
        <div class="post-content" id="_Body"><p> ${post.post} </p> </div>
    </div>
`
  });

  checkUser()

  btnSair_.addEventListener('click', () => {
    console.log('saindo...')
    window.location.href = '../index.html'


    fetch('php/sair.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'userActions=sair'
    })

  });

})

async function checkUser() {
  const responseCurrentUser = await fetch("../php/currentUser.php")
  const dataCurrentUser = await responseCurrentUser.json()


  ShowUserLocation.innerHTML = dataCurrentUser.currentUser;
  console.log(dataCurrentUser.currentUser);
  if (dataCurrentUser.currentUser && dataCurrentUser.currentUser.trim() !== ' ') {
    console.log("executando if")
    btnSair_.style.display = 'block'
    btnLogin_.style.display = 'none'
    btnCd_.style.display = 'none'

  } else {
    btnSair_.style.display = 'none'
    btnLogin_.style.display = 'block'
    btnCd_.style.display = 'block'

  }

}





//const titlePostDiv = document.getElementById("PostTitle");
//const bodyPost = document.getElementById("PostBody");
//const userPost = document.getElementById("userPost");

//titlePostDiv.innerHTML = data.posts[0].title

//bodyPost.innerHTML = '<p>' + data.posts[0].post + "</p>";

//userPost.innerHTML = 'Postado por ' + data.posts[0].username + ' em ' + data.posts[0].time


