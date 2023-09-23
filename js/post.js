function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayPosts(data))
}


function displayPosts(post){
    console.log(post);
    const postContainer=document.getElementById('post-container');
    for (const iterator of post) {
        console.log(iterator);

        const PostDiv=document.createElement('div');
        PostDiv.classList.add('iterator');
        PostDiv.innerHTML=`
        <h4>User ${iterator.userId}</h4>
        <h5>Post: ${iterator.title}</h5>
        <p>Post description ${iterator.body}</p>
         `;
         postContainer.appendChild(PostDiv);
    }

}
loadPost();