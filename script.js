const feed = document.getElementsByClassName('home__feed')[0];
const postTemplate = document.getElementsByClassName('home__post')[0];


//add new posts
const input = document.getElementById('postIn');
document.querySelector('#form').addEventListener('submit', (e) =>{
    e.preventDefault;

    let post = postTemplate.cloneNode(true);
    let text = post.firstChild.nextSibling.nextSibling.nextSibling;
    text.innerHTML = input.value;
    feed.appendChild(post);

    document.getElementById('form').reset();
});
