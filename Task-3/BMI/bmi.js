let kg = +prompt('kg daxil edin')
let boy = +prompt('boyunuzu daxil edin')

let bmi = kg / (boy * boy)

if(bmi <= 18.5){
    console.log('BMI azdir');
}
else if(bmi > 18.5 && bmi <= 25){
    console.log('BMI normaldir');
}
else if( bmi > 25 && bmi <= 30){
    console.log('BMI coxdur');
}
else if(bmi > 30){
    console.log('obese');
}
else{
    console.log('error');
}


console.log('kg :',kg);
console.log('boy :' ,boy);
console.log('BMI :' ,bmi);
