// 5.Funksiya yazın.Arqument olaraq aldığı sözün içərisində rəqəmləri seçsin və geri qaytarsın.
// Məsələn: "hell5o wor6ld" -> 56
// getNumberFromString(number)

function getNumberFromString(number) {
    let uzunlug = number.length-1
    let num = ''

    for(let i = 0 ; uzunlug >= i ; i++){
        switch(number[i]){
            case '0':
                num+='0'
                break;
            case '1':
                num+='1'
                break;
            case '2':
                num+='2'
                break;
            case '3':
                num+='3'
                break;
            case '4':
                num+='4'
                break;
            case '5':
                num+='5'
                break;
            case '6':
                num+='6'
                break;
            case '7':
                num+='7'
                break;
            case '8':
                num+='8'
                break;
            case '9':
                num+='9'
                break;
            default:
        }
    }
    console.log(num);
}
getNumberFromString('dh11g0gvd1e d5 dce33 cr')

