// Main Navgation Bar
$('.section-introduction').waypoint(function (direction) {
    if (direction == "down") {
        $('.main').addClass('sticky');
    } else {
        $('.main').removeClass('sticky');
    }
}, {
    offset: '60px'
});

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

// Animation On Scroll
$('.main-head').waypoint(function (direction) {
    $('.main-head').addClass('animated fadeInDown')
}, {
    offset: '50%'
});
$('.lunch-menu').waypoint(function (direction) {
    $('.lunch-menu').addClass('animated bounceIn')
}, {
    offset: '50%'
});
$('.dinner-menu').waypoint(function (direction) {
    $('.dinner-menu').addClass('animated bounceIn')
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
$('.meals-column4').waypoint(function (direction) {
    $('.meals-column4').addClass('animated fadeInDown')
}, {
    offset: '50%'
});
$('.meals-column5').waypoint(function (direction) {
    $('.meals-column5').addClass('animated fadeInDown')
}, {
    offset: '50%'
});
$('.meals-column6').waypoint(function (direction) {
    $('.meals-column6').addClass('animated fadeInDown')
}, {
    offset: '50%'
});
