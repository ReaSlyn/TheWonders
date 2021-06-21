window.onload = () => {
    var z = location.pathname.substring(location.pathname.lastIndexOf('_')+1);
    var bullet = document.querySelector('.on');
    var back = document.querySelector('.back');
    var slider = document.querySelector('.slider');
    var skip = document.querySelector('.skip');
    var path = z.replace('.html', '');
    if ( path == "1" ) {
        back.style.visibility = 'hidden';
    };
    if ( path == "2" ) {
        bullet.style.order = 3;
    };
    if ( path == "3" ) {
        bullet.style.order = 4;
    };
    if ( path == "4" ) {
        bullet.style.order = 5;
    };
    if ( path == "5" ) {
        bullet.style.order = 6;
    };
    if ( path == "6" ) {
        bullet.style.order = 7;
    };
    if ( path == "result" ) {
        skip.style.visibility = 'hidden';
        slider.style.visibility = 'hidden'
    };
};