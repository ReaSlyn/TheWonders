var z = location.pathname.substring(location.pathname.lastIndexOf('/')+1);
window.onload = () => { document.querySelectorAll(".icon_footer").forEach((element) => {

    var id = element.id.substring(element.id.lastIndexOf('_')+1);
    var path_maj = z.replace('.html', '');
    var path = path_maj.toLowerCase()
    if ( id == path ) {
        element.className += ' active';
    }
});
}