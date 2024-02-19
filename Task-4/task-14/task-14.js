function calc(eded) {
    let regem = eded.length
    let tersine = ''
    for(let i = regem -1 ; 0 <= i ; i--){
        tersine+= eded[i]
    }
    if(eded == tersine){
        console.log('palindrom sozdur');
    }
    else{
        console.log('palindrom soz deyil');
    }
}
let eded = prompt('soz daxil edin');
calc(eded)