// 7.Funksiya yazın,qəbul etdiyi parametrin baş hərfini böyütsün və ekarana yazdırsın
// /

function show(soz) {
    let sozBoslug = soz.trim()

    soz = sozBoslug[0].toUpperCase() + sozBoslug.slice(1)

    console.log(soz);


}
show('hello')