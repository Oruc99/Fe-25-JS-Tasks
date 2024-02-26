// 10.Funksiya yaradin, ilk characterimizi deyisek: ilkHerfiDeyis(soz, ilkHerf)
// ilkHerfiDeyis('Qara', "Y") // Yara

function ilkHerfiDeyis(soz,ilkHerf) {
    let sozBoslug = soz.trim()
    sozBoslugDeyisdi = sozBoslug.replace(sozBoslug[0],ilkHerf) 

    console.log(sozBoslugDeyisdi);
}
ilkHerfiDeyis('Qara','Y')