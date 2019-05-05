window.addEventListener('scroll', function() {
    /* console.log(window.scrollY); */
    var header = document.querySelector('#cabezera');
    var nav = document.querySelector('#navbar');
    var title = document.querySelectorAll('.titulo')[0];
    var titleFotografia = document.querySelectorAll('.fotografia')[0];
    if (window.scrollY >= '100') {
        header.style.boxShadow = 'inset 0 -400px 200px rgba(0,0,0, .77)';
        header.style.transition = 'ease-in .5s';
    } else if (window.scrollY < '100') {
        header.style.boxShadow = 'none';
        header.style.transition = '.3s';
    }
    if (window.scrollY >= '500') {
        nav.style.height = '50px';
        nav.style.transition = '.3s';
        title.style.fontSize = '35px';
        title.style.transition = '.34s';
        titleFotografia.style.display = 'none';
    } else if (window.scrollY < '500') {
        nav.style.height = '130px';
        nav.style.transition = '.3s';
        title.style.fontSize = '80px';
        title.style.transition = '.34s';
        titleFotografia.style.display = 'inline';
    }
})