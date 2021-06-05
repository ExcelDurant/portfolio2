import anime from './../../node_modules/animejs/lib/anime.es.js';
// const anime = require('./../../node_modules/animejs');

let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
});

tl.add({
    targets: '#logo-container1',
    translateX: 0,
    duration: 15000,
});

tl.add({
    targets: '#navlist1 .navlink',
    translateX: 0,
    delay: anime.stagger(2000)
});

anime({
    targets: '#logo-container2',
    // color:  'red',
    rotate: 360,
    loop: true,
    duration: 15000,
    delay: 5000,
    easing: 'linear'
    // direction: 'alternate',
    // easing: 'easeInOutSine'
});

//   anime({
//     targets: 'div',
//     translateX: 250,
//     rotate: '1turn',
//     backgroundColor: '#FFF',
//     duration: 800
//   });