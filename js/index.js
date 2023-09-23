// console.log('inside index js');

function loadUsers2(){
    // console.log('button handeler');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>displayUser(data))
}
function displayUser(data){
    const ul=document.getElementById('users-list');
   for (const  iterator of data) {
    console.log(iterator.name);
    const li=document.createElement('li');
    li.innerText=iterator.name;
    ul.appendChild(li);
    
   }
}