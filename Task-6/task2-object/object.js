const user1 = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
       street: "Kulas Light",
       suite: "Apt. 556",
       city: "Gwenborough",
       zipcode: "92998-3874",
          geo: {
             lat: "-37.3159",
             lng: "81.1496"
        }
    }
}

let user2 = {...user1}

user2.name = user1.username

console.log(user1);
console.log(user2);

//taski tam basa dusmedim bele elemek lazim idi?  