function numCounter(text) {
    let simvol = text.length;
    let boslug = 0;

    for(let i = 0 ; i < simvol ; i++){
        if(text[i]==' '){
            boslug+=1
        }
}
console.log(simvol-boslug);
}
numCounter('Salam olsun Fe-25')