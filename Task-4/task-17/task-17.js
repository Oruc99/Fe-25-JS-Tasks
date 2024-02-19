function calc(metin,herif) {
    let regem = metin.length
    let say = 0

    for(let i = 0 ; i <= regem-1 ; i++){
        if(metin[i]==herif){
            say++
        }
    }
    console.log('metin :',metin);
    console.log('herif :' , herif);
    console.log(say);
}
let metin = prompt('metin daxil edin');
let herif = prompt('herif daxil edin');
calc(metin,herif)