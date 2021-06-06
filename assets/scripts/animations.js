// import anime from './../../node_modules/animejs/lib/anime.es.js';
// const anime = require('./../../node_modules/animejs');

let excel = document.querySelector('.excel-container');
let service = document.querySelector('.service-container');
let works = document.querySelector('.works-grid');
let tools = document.querySelector('.tools-container .icons-container');
let contact = document.querySelector('.form-container');
let excelOffset = excel.getBoundingClientRect().top - 700;
let serviceOffset = service.getBoundingClientRect().top + 200;
let worksOffset = works.getBoundingClientRect().top - 400;
let toolsOffset = tools.getBoundingClientRect().top - 400;
let contactOffset = contact.getBoundingClientRect().top - 400;
window.onscroll = function() {scrollFunction()};

let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
});

tl.add({
    targets: '#logo-container1',
    translateX: 0
})

.add({
    targets: '#navlist1 a',
    translateX: 0
})

.add({
    targets:'.home-container',
    opacity: 1
})

anime({
    targets: '#logo-container2',
    rotate: 360,
    loop: true,
    duration: 15000,
    delay: 5000,
    easing: 'linear'
});

anime({
    targets:'.service-sec .txt-container',
    opacity: 1
});

let scrollMe = anime({
    targets:'.excel-container',
    opacity: 1,
    translateY: 0,
    autoplay:false,
});

let scrollMe2 = anime({
    targets:'.service-container .txt-container',
    opacity:1,
    autoplay:false
});

let scrollMe3 = anime({
    targets:'.works-grid',
    opacity:1,
    autoplay:false
});

let scrollMe4 = anime({
    targets:'.tools-container .icons-container',
    opacity:1,
    autoplay:false
});

let scrollMe5 = anime({
    targets:'.form-container',
    opacity:1,
    autoplay:false
});
 


function scrollFunction() {
    let w = window.scrollY;
    console.log(w, excelOffset);
    if(w >= excelOffset) {
        console.log("equals");
        scrollMe.play();
    }
    if(w >= serviceOffset) {
        console.log("equals2");
        scrollMe2.play();
    }
    if(w >= worksOffset) {
        scrollMe3.play();
    }
    if(w >= toolsOffset) {
        scrollMe4.play();
    }
    if(w >= contactOffset) {
        scrollMe5.play();
    }
}

// icons.addEventListener('mouseover', ()=>{

// })