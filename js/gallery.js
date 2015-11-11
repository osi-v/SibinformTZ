//      НАЧАЛЬНЫЕ ЗНАЧЕНИЯ
var menu = document.getElementById("menu-preview");
var colorborder = "rgb(231, 76, 60)";
var offset = 121;
var images = document.getElementById("menu-preview").getElementsByTagName("img");
var currentImg = 0;
document.getElementById("mainimage").src = images[currentImg].src;
images[0].style.borderColor = colorborder;
prev = document.getElementById("prevbtn");
prev.onclick = function () {
    prevchangeImg(event);
};
next = document.getElementById("nextbtn");
next.onclick = function () {
    nextchangeImg(event);
};
goto = document.getElementById("menu-preview");
goto.onclick = function () {
    changeImg(event);
};

//      ФУНКЦИИ ПЕРЕХОДА
function prevchangeImg(event) {
    if (currentImg >= 0) {
        if (currentImg < images.length - 1) {
            menu.scrollLeft = menu.scrollLeft - offset;
        }
        document.getElementById("mainimage").src = images[currentImg - 1].src;
        clear();
        currentImg = currentImg - 1;
        images[currentImg].style.borderColor = colorborder;
        checknav();
    }
}

function nextchangeImg(event) {
    if (currentImg >= 0) {
        if (currentImg >= 1) {
            menu.scrollLeft = menu.scrollLeft + offset;
        }
        document.getElementById("mainimage").src = images[currentImg + 1].src;
        clear();
        currentImg = currentImg + 1;
        images[currentImg].style.borderColor = colorborder;
        checknav();
    }
}

//      СБРОС ЦВЕТА ГРАНИЦ
function clear() {
    for (var i = 0; i < images.length; i++) {
        images[i].style.borderColor = '#E5E5E5';
    }
}

//      НАЖАТИЕ НА ИЗОБРАЖЕНИЕ
function changeImg(event) {
    event = event || window.event;
    var targetElement = event.target || event.srcElement;
    if (targetElement.tagName == "IMG") {
        document.getElementById("mainimage").src = targetElement.src;
        clear();
        targetElement.style.borderColor = colorborder;
        for (var i = 0; i < images.length; i++) {
            if (images[i].style.borderColor == colorborder) {
                currentImg = i;
                checknav();
            }
        }
    }
}

//      ПРОВЕРКА НАВИГАЦИИ
function checknav() {
    if (currentImg == 0) {
        prev.className = " ";
        prev.className = "leftbutton disabled";
    } else {
        prev.className = " ";
        prev.className = "leftbutton";
    }
        if (currentImg == images.length-1) {
        next.className = " ";
        next.className = "rightbutton disabled";
    } else {
        next.className = " ";
        next.className = "rightbutton";
    }
}