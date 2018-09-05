$(document).ready(function() {
    $('#fullpage').fullpage({
        scrollingSpeed: 900,
        autoScrolling: false,

        onLeave: function(index, nextIndex, direction) {
            // if we're on the white pages (top and bottom panels)
            // then change colors
            if ([1,7].indexOf(nextIndex) == -1) {
                $('#fp-nav').addClass('invert');
            }
            else {
                $('#fp-nav').removeClass('invert');
            }    
        },
    });
});