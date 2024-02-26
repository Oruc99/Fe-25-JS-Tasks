
function show(AdSoyad) {

    let Girag_boslug = AdSoyad.trim()
    let boslug = Girag_boslug.indexOf(' ')

    let ad = Girag_boslug.slice(0,boslug)
    let soyad = Girag_boslug.slice(boslug).trim()


    console.log(ad,soyad);
    console.log(soyad,ad);


}
show('  Oruc     Baxsaliyev   ')

//biraz uzun oldu ama basga cur ede bilmedim