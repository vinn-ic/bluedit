const postLocation = document.getElementById("postLocation");

const ShowUserLocation = document.getElementById("showUser");

const userActionsLocation = document.getElementById("user-actions")

const response = await fetch('../php/readPost.php')
const data = await response.json();

const responseCurrentUser = await fetch("../php/currentUser.php")
const dataCurrentUser = await responseCurrentUser.json()


postLocation.innerHTML = ''
ShowUserLocation.innerHTML = dataCurrentUser.currentUser;

if(dataCurrentUser.currentUser != ' '){
    userActionsLocation.innerHTML = "<button id='btnSair'>sair</button>"
    const btn = document.getElementById('btnSair');
    btn.addEventListener('click',()=>{
        console.log('saindo...')


        fetch('php/sair.php', {
            method:'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:'userActions=sair'
        }) 
    });
}else{
    userActionsLocation.innerHTML = ''
}

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



//const titlePostDiv = document.getElementById("PostTitle");
//const bodyPost = document.getElementById("PostBody");
//const userPost = document.getElementById("userPost");

//titlePostDiv.innerHTML = data.posts[0].title

//bodyPost.innerHTML = '<p>' + data.posts[0].post + "</p>";

//userPost.innerHTML = 'Postado por ' + data.posts[0].username + ' em ' + data.posts[0].time


