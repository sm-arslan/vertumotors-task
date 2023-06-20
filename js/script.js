if (typeof jQuery === 'undefined') {
    throw new Error(' JavaScript requires jQuery')
}

var screenWidth = $(document).width(); 
//click on hamburger icon to show menu
$('.navbar-toggler').on('click', (e)=>{
    //add class
    $('.modal-backdrop').addClass('d-show');
    //show menu
    changeCSS('.offcanvas', 'transform', 'none');
    //
    changeCSS('.offcanvas', 'visibility', 'visible');
    
});
//click on hamburger icon to hide menu
$('.offcanvas-close').on('click', (e)=>{
    //remove class
    $('.modal-backdrop').removeClass('d-show');
    //hide menu
    changeCSS('.offcanvas', 'transform', '');
    //
    changeCSS('.offcanvas', 'visibility', '');
});


//
$('.sm-search-icon').on('click', (e)=>{
    changeCSS('.container-search-outer', 'width', '100%');
    changeCSS('.container-search-outer', 'transform', 'none');
    changeCSS('.search-close', 'display', 'block');
    
    $('.container-search').attr('style', 'display: flex !important');
    
    changeCSS('.navbar-toggler', 'display', 'none');
    changeCSS('.navbar-brand', 'display', 'none');
    changeCSS('.navbar-nav-right', 'display', 'none');
    
});
$('.search-close').on('click', (e)=>{
    changeCSS('.container-search-outer', 'width', 'auto');
    changeCSS('.container-search-outer', 'transform', '');
    changeCSS('.search-close', 'display', '');
    changeCSS('.container-search', 'display', '');

    changeCSS('.navbar-toggler', 'display', '');
    changeCSS('.navbar-brand', 'display', '');
    changeCSS('.navbar-nav-right', 'display', '');

});

//function to change the css property of an element 
function changeCSS(classname, property, value){
    $(classname).css(property, value);
}