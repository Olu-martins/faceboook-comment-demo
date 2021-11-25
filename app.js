

const tweetForm = document.querySelector('#tweetForm');

const duser =  document.querySelector('#duser')
const dcomment = document.querySelector('#dcomment')

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const commentInput = tweetForm.elements.comment;

    addcomment(username.value, comment.value)

    usernameInput.value ="";
    commentInput.value ="";
});

const addcomment = (username, comment) =>{
    const user = document.createElement('h3')
    const newComment = document.createElement('p')
    newComment.classList = 'newcomment';

    user.append(username);
    newComment.append(comment);

    duser.append(user);
    dcomment.append(newComment);  
    
    username.value="";
    comment.value="";
}





