let name = prompt('name')

let gender = prompt('gender (k/q)')

if(gender=='k'){
    console.log(`salam ${name} bey`);
}
else if(gender=='q'){
    console.log(`salam ${name} xanim`);
}
else{
    console.log('error')
}