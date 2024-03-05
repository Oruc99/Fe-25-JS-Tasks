let red = document.getElementById('red')
let green = document.getElementById('green')
let blue = document.getElementById('blue')
let yellow = document.getElementById('yellow')
let h1 = document.getElementById('h1')
let body = document.body


red.onclick = () => {
    h1.innerText = 'color : red'
    body.style.backgroundColor = 'red'
}
green.onclick = () => {
    h1.innerText = 'color : green'
    body.style.backgroundColor = 'green'
}
blue.onclick = () => {
    h1.innerText = 'color : blue'
    body.style.backgroundColor = 'blue'
}
yellow.onclick = () => {
    h1.innerText = 'color : yellow'
    body.style.backgroundColor = 'yellow'
}