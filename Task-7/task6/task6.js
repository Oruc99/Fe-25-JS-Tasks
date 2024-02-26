// .Remove all exclamation
// Funksiya yazın.Arqument olaraq string alsın,sözün içərisindəki bütün nida 
//işarələrini silsin və sözün sonuna bir ədəd nida işarəsi əlavə etsin.
// məsələn:
// He!llo! !!FE-25 // 

function show(text) {
    let uzunlug = text.length-1
    let soz = '';
    for(let i = 0 ; uzunlug >= i ; i++){
        if(text[i]=='!'){
            continue;
        }
        soz+=text[i]
    }
    console.log(soz+'!');
}
show('!He!llo! !!FE-25!')

