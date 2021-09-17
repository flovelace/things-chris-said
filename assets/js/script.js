//vaiables

var mehButton = document.getElementById('meh-chris')
var shockedButton = document.getElementById('shocked-chris')
var annoyedButton = document.getElementById('annoyed-chris')
var ResetButton = document.getElementById('reset-btn')
var annoyedImg = document.getElementById('annoyed')
var shockedImg = document.getElementById('shocked')
var mehImg = document.getElementById('meh')

annoyedButton.addEventListener('click', startFun)
mehButton.addEventListener('click', startMoreFun)
shockedButton.addEventListener('click', startEvenMoreFun)
ResetButton.addEventListener('click', resetFun)

function startFun() {
    annoyedImg.classList.remove('hide')  

}

function startMoreFun() {
    mehImg.classList.remove('hide')

}

function startEvenMoreFun() {
    shockedImg.classList.remove('hide')

}

function resetFun() {
    annoyedImg.classList.add('hide')
    mehImg.classList.add('hide')
    shockedImg.classList.add('hide')

}
