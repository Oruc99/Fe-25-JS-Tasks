// 11. funksiya yazın ad və soyad alsın və aşağıdakı kimi nəticə versin
// nameFormat(str) —> Ramin Mammadzada-=> M. Ramin

let nameFormat = (str) => {
    let adSoyad = str.trim()

    let boslug = adSoyad.indexOf(' ')

    let ad = adSoyad.slice(0,boslug)
    let soyad = adSoyad.slice(boslug)

    let result = soyad.trim()[0] + '.' +' '+ ad 


    console.log(result);


}
nameFormat('Ramin Mammadzada')
