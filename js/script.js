
if (typeof jQuery === 'undefined') {
    throw new Error(' JavaScript requires jQuery')
}

//initialize the variables with elements
const hamburgerIcon = document.getElementsByClassName('navbar-toggler');
const closeIconForMenu = document.getElementsByClassName('offcanvas-close');
const searchIcon = document.getElementsByClassName('sm-search-icon');
const closeIconForSearch = document.getElementsByClassName('search-close');


hamburgerIcon[0].addEventListener("click", (e) => {
    //add class
    addClass(document.getElementsByClassName('modal-backdrop')[0], 'd-show');
    //show menu
    changeCSS('offcanvas', 'transform', 'none', null);
    changeCSS('offcanvas', 'visibility', 'visible', null);

});
//click on hamburger icon to hide menu
closeIconForMenu[0].addEventListener("click", (e) => {
    //remove class
    removeClass(document.getElementsByClassName('modal-backdrop')[0], 'd-show');
    //hide menu
    changeCSS('offcanvas', 'transform', '', null);
    changeCSS('offcanvas', 'visibility', '', null);
});


//show the search bar, provided screen size is less then 768px
searchIcon[0].addEventListener("click", (e) => {
    changeCSS('container-search-outer', 'width', '100%', null);
    changeCSS('container-search-outer', 'transform', 'none', null);
    changeCSS('search-close', 'display', 'block', null);
    changeCSS('container-search', 'display', 'flex', 'important');
    changeCSS('navbar-toggler', 'display', 'none', null);
    changeCSS('navbar-brand', 'display', 'none', null);
    changeCSS('navbar-nav-right', 'display', 'none', null);

});
//close the search bar, provided screen size is less then 768px
closeIconForSearch[0].addEventListener("click", (e) => {
    changeCSS('container-search-outer', 'width', 'auto', null);
    changeCSS('container-search-outer', 'transform', '', null);
    changeCSS('search-close', 'display', '', null);
    changeCSS('container-search', 'display', '', null);
    changeCSS('navbar-toggler', 'display', '', null);
    changeCSS('navbar-brand', 'display', '', null);
    changeCSS('navbar-nav-right', 'display', '', null);

});

//to change the css property of an element 
function changeCSS(classname, property, value, rule) {
    if (rule != null) {
        document.getElementsByClassName(classname)[0].style.setProperty(property, value, rule);
    } else {
        document.getElementsByClassName(classname)[0].style.setProperty(property, value);
    }
}

//to add class on element
function addClass(element, classname) {
    element.classList.add(classname);
}

//to remove class on element
function removeClass(element, classname) {
    element.classList.remove(classname);
}