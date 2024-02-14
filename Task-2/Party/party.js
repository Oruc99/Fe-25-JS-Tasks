let name = prompt('name')
let age = +prompt('age')
let gender = prompt('gender (k/q)')

if(age>18 || age==18 ){
    if(gender=='k' || gender=='K'){
        console.log(`salam ${name} bey`);
    }
    else if(gender=='q' || gender=='Q'){
        console.log(`salam ${name} xanim`);
    }
    else{
        console.log('error');
    }
}
else if(age<18){
    console.log('sizin yasiviz catmir');
}
else{
    console.log('error');
}

