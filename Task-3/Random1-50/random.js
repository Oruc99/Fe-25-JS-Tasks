let random_reqem = Math.round(Math.random()*50)

let user = +prompt('1-50 ye qeder reqem daxil edin ')
let cehd = 1

let capital_bank = 0

while (user !== random_reqem) {
    if(user > random_reqem){
    user = +prompt('asagi dusun ')
    }
    else if(user < random_reqem){
    user = +prompt('yuxari galxin')
    }
    else{
    user = +prompt('1-50 ye qeder reqem daxil edin')
    }
    cehd++
}

console.log('Cehd :', cehd);

if(cehd == 1){
    capital_bank = 1000
}
else if(cehd == 2 || cehd == 3 || cehd == 4 || cehd == 5){
    capital_bank = 750
}
else if(cehd== 6 || cehd == 7 || cehd == 8 || cehd == 9){
    capital_bank = 250
}
else if(cehd>=10){
    capital_bank = 'sizin 250 manat borcunuz var'
}
else{

}
console.log('Capital bank :',capital_bank)
console.log('Random reqem :' , random_reqem);

