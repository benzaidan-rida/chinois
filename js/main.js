$(document).ready(()=>{
    /*-------- NAVBAR JS CODE --------------------*/
    $('nav.main-nav .nav-mobile-btn , nav.main-nav ul.nav .nav-header .btn-nav-close').on('click', function(){
        $('nav.main-nav ul.nav').toggleClass('active');
    });
});