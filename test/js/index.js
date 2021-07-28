var windowLogin = document.getElementById('container-all')  //окно логина
var buttonLogin = document.getElementById('enter')  //кнопка входа
var buttonOne = document.getElementById('button-one')  //кнопка фильмов
var buttonTwo = document.getElementById('button-two')  //кнопка телепередач
var windowMovies = document.getElementById('window-movies')  //окно фильмов
var windowTv = document.getElementById('tv')  //окно телепередач
var closeWindow = document.getElementById('entr')  //кнопка входа в акк
var val = document.getElementById('login')  //инпут логина
var str = document.getElementById('str')  //строка имени
var ent = document.getElementById('ent')  //окно кнопки входа
var ext = document.getElementById('exit')  // залогиненный пользователь
var text = document.getElementById('text') //название фильма
var ghost = document.getElementById('ghost')  //текст который должен появляться на картинке
var hw = document.getElementById('hollywood')  //окно фильма





//функция открытия окна входа
function windowLoginShow () {
    windowLogin.style.display = 'block'
}

//открытие окна фильмов
function filmsShow() {
    windowMovies.style.display = 'block'
    windowTv.style.display = 'none'
}

//открытие окна тв
function tvShow() {
    windowTv.style.display = 'block'
    windowMovies.style.display = 'none'
}

//закрытие окна входа
function closeOnButton () {
    windowLogin.style.display = 'none'
    ent.style.display = 'none'
    ext.style.display = 'block'
}

//берем иннер и вставляем в спан
function value () {
    var login = val.value
    str.innerHTML = login
}


function textShow () {
    ghost.style.display = 'block'
    text.style.marginTop = '5px'
}

function textGhost() {
    ghost.style.display = 'none'
    text.style.marginTop = '375px'
}




buttonLogin.addEventListener ('click', windowLoginShow)
buttonOne.addEventListener('click', filmsShow)
buttonTwo.addEventListener('click', tvShow)
closeWindow.addEventListener ('click', closeOnButton)
closeWindow.addEventListener ('click', value)
hw.addEventListener ('mouseover', textShow)
hw.addEventListener ('mouseout', textGhost)