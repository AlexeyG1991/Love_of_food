"use strict"

// Ждем загрузку контента
window.onload = function () {
    // const parallax = document.querySelector('.wrapper');
    const parallax = document.querySelector('.header');

    if (parallax) {
        const one = document.querySelector('.images-parallax__one');
        const two = document.querySelector('.images-parallax__two');

        // Коэффициенты
        const forOne = 5;
        const forTwo = 8;

        // Скорость анимации
        const speed = 0.05;

        // Обьявление переменных
        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            // Передаём стили
            one.style.cssText = `transform: translate(${positionX / forOne}%,${positionY / forOne}%);`;
            two.style.cssText = `transform: translate(${positionX / forTwo}%,${positionY / forTwo}%);`;

            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        parallax.addEventListener("mousemove", function (e) {
            // Получение ширины и высоты блока
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            // Ноль по средине
            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            // Полечаем проценты
            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxWidth * 100;
        });
    }
}

// -------------------------------------------------------------------
let bg = document.querySelectorAll('.images-parallax__three, .images-parallax__eight');
for (let i = 0; i < bg.length; i++) {
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg[i].style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
    });
}
// -------------------------------------------------------------------
let bg2 = document.querySelectorAll('.images-parallax__foure, .images-parallax__six');
for (let i = 0; i < bg2.length; i++) {
    window.addEventListener('mousemove', function (e) {
        let y = e.clientX / window.innerWidth;
        let x = e.clientY / window.innerHeight;
        bg2[i].style.transform = 'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)';
    });
}
// -------------------------------------------------------------------
let bg3 = document.querySelectorAll('.images-parallax__five, .images-parallax__seven');
for (let i = 0; i < bg3.length; i++) {
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg3[i].style.transform = 'translate(-' + x * 35 + 'px, -' + y * 35 + 'px)';
    });
}

// -------------------------------------------------------------------
document.querySelector('.select').addEventListener('click', () => {
    document.querySelector('.footer-container__info-item_language').classList.toggle('active');
});

// -------------------------------------------------------------------
// переключение языков
const select = document.querySelector('select');
const allLang = ['en', 'ru', 'ua'];

select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}

changeLanguage();


// -------------------------------------------------------------------
// появление текстра
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        } else {
            change.target.classList.remove('element-show');
        }
    });
}

let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.title');

for (let elm of elements) {
    observer.observe(elm);
}