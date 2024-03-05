let num1 = document.getElementById('num1')
let operator = document.getElementById('operator')
let num2 = document.getElementById('num2')

let show = document.getElementById('show')
let btn = document.getElementById('btn')


btn.onclick = () =>{
    let num_one_value = Number(num1.value)
    let num_two_value = Number(num2.value)

    switch(operator.value){
        case '+':
            show.value = num_one_value + num_two_value
            break;
        case '-':
            show.value = num_one_value - num_two_value
            break;
        case '*':
            show.value = num_one_value * num_two_value
            break;
        case '/':
            show.value = num_one_value / num_two_value
    }
}

