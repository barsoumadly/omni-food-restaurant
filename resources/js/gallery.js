// Main Variables
let first = document.querySelectorAll('.gallery-photos1');
let second = document.querySelectorAll('.gallery-photos2');
let third = document.querySelectorAll('.gallery-photos3');
let chief1 = document.querySelector('.chief1');
let chief2 = document.querySelector('.chief2');
let chief3 = document.querySelector('.chief3');
let chiefNumber = 1

// Navgation Bar Links
document.querySelector('.nav-5').addEventListener('click', function () {
    document.location.href = "./index.html"
});
document.querySelector('.nav-6').addEventListener('click', function () {
    document.location.href = "./menu.html"
});
document.querySelector('.nav-7').addEventListener('click', function () {
    document.location.href = "./gallery.html"
});

// Main Navgation Bar
$('.section-gallery').waypoint(function (direction) {
    if (direction === "down") {
        $('.main').addClass('sticky');
    } else {
        $('.main').removeClass('sticky');
    }
}, {
    offset: '60px'
});

document.querySelector('.btn1').addEventListener('click', function () {
    chief1.style.display = 'block';
    chief2.style.display = 'none';
    chief3.style.display = 'none';
    document.querySelector('.btn1').id = 'active';
    document.querySelector('.btn2').id = '';
    document.querySelector('.btn3').id = ''
});
document.querySelector('.btn2').addEventListener('click', function () {
    chief2.style.display = 'block';
    chief1.style.display = 'none';
    chief3.style.display = 'none';
    document.querySelector('.btn2').id = 'active';
    document.querySelector('.btn1').id = '';
    document.querySelector('.btn3').id = ''
});
document.querySelector('.btn3').addEventListener('click', function () {
    chief3.style.display = 'block';
    chief1.style.display = 'none';
    chief2.style.display = 'none';
    document.querySelector('.btn3').id = 'active';
    document.querySelector('.btn1').id = '';
    document.querySelector('.btn2').id = '';
});

// Button 1
function firstPhotos() {
    first[0].style.display = 'block';
    first[1].style.display = 'block';
    first[2].style.display = 'block';
    first[3].style.display = 'block';
    first[4].style.display = 'block';
    first[5].style.display = 'block';
    second[0].style.display = 'none';
    second[1].style.display = 'none';
    second[2].style.display = 'none';
    second[3].style.display = 'none';
    second[4].style.display = 'none';
    second[5].style.display = 'none';
    third[0].style.display = 'none';
    third[1].style.display = 'none';
    third[2].style.display = 'none';
    third[3].style.display = 'none';
    third[4].style.display = 'none';
    third[5].style.display = 'none';
    document.querySelector('.photos1').id = 'active';
    document.querySelector('.photos2').id = '';
    document.querySelector('.photos3').id = '';
}
// Button 2
function secondPhotos() {
    second[0].style.display = 'block';
    second[1].style.display = 'block';
    second[2].style.display = 'block';
    second[3].style.display = 'block';
    second[4].style.display = 'block';
    second[5].style.display = 'block';
    first[0].style.display = 'none';
    first[1].style.display = 'none';
    first[2].style.display = 'none';
    first[3].style.display = 'none';
    first[4].style.display = 'none';
    first[5].style.display = 'none';
    third[0].style.display = 'none';
    third[1].style.display = 'none';
    third[2].style.display = 'none';
    third[3].style.display = 'none';
    third[4].style.display = 'none';
    third[5].style.display = 'none';
    document.querySelector('.photos2').id = 'active';
    document.querySelector('.photos1').id = '';
    document.querySelector('.photos3').id = '';
}

// Button 3
function thirdPhotos() {
    second[0].style.display = 'none';
    second[1].style.display = 'none';
    second[2].style.display = 'none';
    second[3].style.display = 'none';
    second[4].style.display = 'none';
    second[5].style.display = 'none';
    first[0].style.display = 'none';
    first[1].style.display = 'none';
    first[2].style.display = 'none';
    first[3].style.display = 'none';
    first[4].style.display = 'none';
    first[5].style.display = 'none';
    third[0].style.display = 'block';
    third[1].style.display = 'block';
    third[2].style.display = 'block';
    third[3].style.display = 'block';
    third[4].style.display = 'block';
    third[5].style.display = 'block';
    document.querySelector('.photos3').id = 'active';
    document.querySelector('.photos1').id = '';
    document.querySelector('.photos2').id = '';
}

// Section 6 Cheif
document.querySelector('.switch1').addEventListener('click', function () {
    if (chiefNumber === 1) {
        chief1.style.display = 'none';
        chief2.style.display = 'block';
        document.querySelector('.btn2').id = 'active2';
        document.querySelector('.btn1').id = '';
        chiefNumber = 2;
    } else if (chiefNumber === 2) {
        chief2.style.display = 'none';
        chief3.style.display = 'block';
        document.querySelector('.btn3').id = 'active2';
        document.querySelector('.btn2').id = '';
        chiefNumber = 3
    } else {
        chief3.style.display = 'none';
        chief1.style.display = 'block';
        document.querySelector('.btn3').id = 'active2';
        document.querySelector('.btn2').id = '';
        chiefNumber = 1
    }
});
document.querySelector('.switch2').addEventListener('click', function () {
    if (chiefNumber === 1) {
        chief1.style.display = 'none';
        chief3.style.display = 'block';
        document.querySelector('.btn3').id = 'active2';
        document.querySelector('.btn1').id = '';
        chiefNumber = 3;
    } else if (chiefNumber === 3) {
        chief3.style.display = 'none';
        chief2.style.display = 'block';
        document.querySelector('.btn2').id = 'active2';
        document.querySelector('.btn3').id = '';
        chiefNumber = 2
    } else {
        chief2.style.display = 'none';
        chief1.style.display = 'block';
        document.querySelector('.btn1').id = 'active2';
        document.querySelector('.btn2').id = '';
        chiefNumber = 1
    }
});
$('.main-head').waypoint(function (direction) {
    $('.main-head').addClass('animated fadeInUp')
}, {
    offset: '50%'
});