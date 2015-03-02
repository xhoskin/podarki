$(document).ready(function(){
    $('.selectpicker').selectpicker();

    var makeEqualHeight = function(el){
        var maxHeight = 0;
        if ( el.length ) {
            el.each(function(){
                elHeight = $(this).height();
                if ( elHeight > maxHeight ) {
                    maxHeight = elHeight
                }
            });
            el.height( maxHeight );
        }
    }

    makeEqualHeight( $('.homepage-teasers>.teaser-item>.text') );
});

$(window).load(function(){
    if ( $('.affix-block').length ) {
        $mainContent = $('.base-grid>.main');
        $body = $('html').height()
        $('.affix-block').affix({
            offset: {
                top: function () {
                    return (this.top = $mainContent.offset().top - 20 );
                },
                bottom: function () {
                    return (this.bottom = $body - ($mainContent.offset().top + $mainContent.height()) );
                }
            }
        });
    }
});
