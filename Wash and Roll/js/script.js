
//Navigation bar functionality
const liAbout = document.getElementById('liAbout');
const liRefund = document.getElementById('liRefund');

const sectionAbout = document.getElementById('sectionAbout');
const sectionRefund = document.getElementById('sectionRefund');


liAbout.addEventListener('click', function (event) {
    scrollTo(0, sectionAbout.offsetTop);
});

liRefund.addEventListener('click', function (event) {
    scrollTo(0, sectionRefund.offsetTop);
});


//Home button functionality
const home = document.getElementById('home');

home.addEventListener('click', function (event) {
    scrollTo(0, 0);
});


