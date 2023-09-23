const loadUser3 = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res=>res.json())
    .then(data=>displayUser5(data))
}

const displayUser5 = user=>{
    console.log(user);
    const genderTag=document.getElementById('gender');
 
    genderTag.innerText=user.results[0].gender;
    const nameTag=document.getElementById('name');
    nameTag.innerText=user.results[0].name.title +' '+ user.results[0].name.first +' '+ user.results[0].name.last;
    console.log(user.results[0].gender);
}

loadUser3();