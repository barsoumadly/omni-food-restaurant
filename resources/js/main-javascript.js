/*----------------------*/
/* Main Variables */
/*----------------------*/
let customer1 = document.querySelector('.customer1');
let customer2 = document.querySelector('.customer2');
let customer3 = document.querySelector('.customer3');
let customerNumber = 3;
let stopAnimation = false;

// Main Navgation Bar
$('.section-introduction').waypoint(function (direction) {
    if (direction === 'down') {
        $('.main').addClass('sticky');
    } else {
        $('.main').removeClass('sticky');
    }
}, {
    offset: '60px'
});

// Navgation Bar Links
document.querySelector('.nav-1').addEventListener('click', function () {
    $('html , body').animate({scrollTop: $('.section-introduction').offset().top}, 1000);
});
document.querySelector('.nav-2').addEventListener('click', function () {
    $('html , body').animate({scrollTop: $('.section-order').offset().top}, 1000);
});
document.querySelector('.nav-3').addEventListener('click', function () {
    $('html , body').animate({scrollTop: $('.section-cities').offset().top}, 1000);
});
document.querySelector('.nav-4').addEventListener('click', function () {
    $('html , body').animate({scrollTop: $('.section-booking').offset().top}, 1000);
});
document.querySelector('.nav-5').addEventListener('click', function () {
    document.location.href = "../index.html"
});
document.querySelector('.nav-6').addEventListener('click', function () {
    document.location.href = "./menu.html"
});
document.querySelector('.nav-7').addEventListener('click', function () {
    document.location.href = "./gallery.html"
});

// Buttons
document.querySelector('.btn-full').addEventListener('click', function () {
    $('html , body').animate({scrollTop: $('.section-menu').offset().top}, 1000);
});
document.querySelector('.btn-ghost').addEventListener('click', function () {
    $('html , body').animate({scrollTop: $('.section-discover').offset().top}, 1000);
});
document.querySelector('.btn1').addEventListener('click', function () {
    customer1.style.display = 'block';
    customer2.style.display = 'none';
    customer3.style.display = 'none';
    document.querySelector('.btn1').id = 'active';
    document.querySelector('.btn2').id = '';
    document.querySelector('.btn3').id = '';
    stopAnimation = true;
});
document.querySelector('.btn2').addEventListener('click', function () {
    customer2.style.display = 'block';
    customer1.style.display = 'none';
    customer3.style.display = 'none';
    document.querySelector('.btn2').id = 'active';
    document.querySelector('.btn1').id = '';
    document.querySelector('.btn3').id = '';
    stopAnimation = true;
});
document.querySelector('.btn3').addEventListener('click', function () {
    customer3.style.display = 'block';
    customer1.style.display = 'none';
    customer2.style.display = 'none';
    document.querySelector('.btn3').id = 'active';
    document.querySelector('.btn1').id = '';
    document.querySelector('.btn2').id = '';
    stopAnimation = true;
});

// Animation On Scroll
$('.advantages').waypoint(function (direction) {
    $('.advantages').addClass('animated fadeInLeft');
}, {
    offset: '50%'
});
$('.main-head').waypoint(function (direction) {
    $('.main-head').addClass('animated fadeInUp')
}, {
    offset: '50%'
});
$('.mobile-photo').waypoint(function (direction) {
    $('.mobile-photo').addClass('animated fadeInUpBig')
}, {
    offset: '50%'
});
$('.menu').waypoint(function (direction) {
    $('.menu').addClass('animated bounceIn')
}, {
    offset: '50%'
});
$('.meals-column1').waypoint(function (direction) {
    $('.meals-column1').addClass('animated fadeInDown')
}, {
    offset: '50%'
});
$('.meals-column2').waypoint(function (direction) {
    $('.meals-column2').addClass('animated fadeInDown')
}, {
    offset: '50%'
});
$('.meals-column3').waypoint(function (direction) {
    $('.meals-column3').addClass('animated fadeInDown')
}, {
    offset: '50%'
});
$('.city-1').waypoint(function (direction) {
    $('.city-1').addClass('animated pulse')
}, {
    offset: '50%'
});
$('.city-2').waypoint(function (direction) {
    $('.city-2').addClass('animated pulse')
}, {
    offset: '50%'
});
$('.city-3').waypoint(function (direction) {
    $('.city-3').addClass('animated pulse')
}, {
    offset: '50%'
});
$('.city-4').waypoint(function (direction) {
    $('.city-4').addClass('animated pulse')
}, {
    offset: '50%'
});

// Section 2 Meals
function addButton(value) {
    document.querySelector('.btn-buy' + value).style.display = 'block'
    document.querySelector('.btn-buy' + value).addEventListener('click', function () {
        $('html , body').animate({scrollTop: $('.section-booking').offset().top}, 1000);
    });

}

function removeButton(value) {
    document.querySelector('.btn-buy' + value).style.display = 'none'
}

// Section 6 Customers
function startSlideShow() {
    if (!stopAnimation) {
        switch1();
        setTimeout(startSlideShow, 5000);
    }
}

startSlideShow();

function switch1() {
    if (customerNumber === 1) {
        customer1.style.display = 'none';
        customer2.style.display = 'block';
        document.querySelector('.btn2').id = 'active';
        document.querySelector('.btn1').id = '';
        customerNumber = 2;
    } else if (customerNumber === 2) {
        customer2.style.display = 'none';
        customer3.style.display = 'block';
        document.querySelector('.btn3').id = 'active';
        document.querySelector('.btn2').id = '';
        customerNumber = 3
    } else {
        customer3.style.display = 'none';
        customer1.style.display = 'block';
        document.querySelector('.btn1').id = 'active';
        document.querySelector('.btn3').id = '';
        customerNumber = 1
    }
}

function switch2() {
    if (customerNumber === 1) {
        customer1.style.display = 'none';
        customer3.style.display = 'block';
        document.querySelector('.btn3').id = 'active';
        document.querySelector('.btn1').id = '';
        customerNumber = 3;
    } else if (customerNumber === 3) {
        customer3.style.display = 'none';
        customer2.style.display = 'block';
        document.querySelector('.btn2').id = 'active';
        document.querySelector('.btn3').id = '';
        customerNumber = 2
    } else {
        customer2.style.display = 'none';
        customer1.style.display = 'block';
        document.querySelector('.btn1').id = 'active';
        document.querySelector('.btn2').id = '';
        customerNumber = 1
    }
}

document.querySelector('.switch1').addEventListener('click', function () {
    stopAnimation = true;
    switch1();
});
document.querySelector('.switch2').addEventListener('click', function () {
    stopAnimation = true;
    switch2()
});