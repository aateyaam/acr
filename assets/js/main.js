// Preloader    

// dom is loaded
jQuery(document).ready(function ($) {
    
    // fade out preloader
    $('#preloader').fadeOut('slow', function () { $(this).remove(); });
});