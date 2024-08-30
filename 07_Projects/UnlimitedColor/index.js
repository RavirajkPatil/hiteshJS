// setInterval(function(){
// },1000)

const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let COLOR = '#'
    for (let i = 0; i < 6; i++) {
        COLOR += hex[Math.floor(Math.random()*16)];
    }
    return COLOR
}
let intervalId
const startChangingColor = function () {
    if(!intervalId)
    {
        intervalId = setInterval(setBgClr,1000)
    }
    
    function setBgClr() {
        document.body.style.backgroundColor = randomColor()
    }
}
const stopChangingColor = function () {
    clearInterval(intervalId)
    intervalId = null
}
document.querySelector('#Startbtn').addEventListener
    ('click',startChangingColor)
document.querySelector('#Stopbtn').addEventListener
    ('click',stopChangingColor)