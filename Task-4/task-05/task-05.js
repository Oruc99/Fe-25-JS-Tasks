function calc(a,b,operator) {
    if (operator=='+') {
        console.log(`${a} + ${b} = `, a+b);
    }
    else if (operator=='-'){
        console.log(`${a} - ${b} = `, a-b);
    }
    else if(operator=='*'){
        console.log(`${a} * ${b} = `, a*b);
    }
    else if(operator=='/'){
        console.log(`${a} / ${b} = `, a/b);
    }
    else{
        console.log('error');
    }
}

let a = +prompt('a regemi daxil edin')
let b = +prompt('b regemi daxil edin')
let operator = prompt('operator daxil edin (+,-,*,/)');

calc(a,b,operator)