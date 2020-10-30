const feed = document.getElementsByClassName('home__feed')[0];
const postTemplate = document.getElementsByClassName('home__post')[0];

const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];


//add new posts
const input = document.getElementById('postIn');
document.querySelector('#form').addEventListener('submit', (e) =>{
    e.preventDefault;

    //error checking for empty input
    if (input.value.length == 0){
        alert('You must write a post!');
    }

    else{
        let post = postTemplate.cloneNode(true);
        let text = post.firstChild.nextSibling.nextSibling.nextSibling;
        text.innerHTML = input.value;

        let timestamp = post.firstChild.nextSibling.lastChild.previousSibling.lastChild.previousSibling;
        let date = new Date();
        let time = (date.getHours() > 12)? date.getHours() - 12 : date.getHours();
        let timeType = (date.getHours() > 12)? 'PM': 'AM';

        timestamp.innerHTML = `${monthNames[date.getMonth()]} ${date.getDate()} at ${time}:${date.getMinutes()} ${timeType}`;
        feed.appendChild(post);
    }

    document.getElementById('form').reset();

});
