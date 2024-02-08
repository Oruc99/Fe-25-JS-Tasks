let ad = prompt('adivizi daxil edin')

let yas = +prompt('yasivizi daxil edin')

if(yas > 18 || yas=='18'){
    console.log(`buyurun ${ad} `);
}
else if(yas<18){
    console.log('sizin yasiviz catmir');
}
else{
    console.log('error');
}