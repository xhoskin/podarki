$(document).ready(function(){
     $('.selectpicker').selectpicker();
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
