const user={id:1, name:'gorib amir', job:'actor'};
console.log(user);
const stringified= JSON.stringify(user);

console.log(stringified);

const shop={
    owner:'alia',
    address:{
        street:'kochukhet',
        city:'ranbir',
        country:'Bd',
    },
    products:['laptop','mic','monitor','keyboard'],
    revenue:45000,
    isOpen:true,
    isNew:false
}
console.log(shop);
const stringified1=JSON.stringify(shop);
console.log(stringified1);