// ie polifill
Object.keys = Object.keys || function(
    o, // object
    k, // key
    r  // result array
) {
    // initialize object and result
    r = [];
    // iterate over object keys
    for (k in o)
        // fill result array with non-prototypical keys
        r.hasOwnProperty.call(o, k) && r.push(k);
    // return result
    return r
};

$(document).ready(function(){

    // custom controls
    $('.selectpicker').selectpicker();
    $('input[type="radio"]').ezMark();

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

    makeEqualHeight( $('.teasers>.teaser-item>.text') );

    function centerModals(modals) {
        $(modals).each(function() {
            var $clone = $(this).clone().css('display', 'block').appendTo('body');
            var top    = Math.round(($clone.outerHeight() - $clone.find('.modal-content').outerHeight()) / 2);

            $clone.remove();

            $(this).find('.modal-content').css('margin-top', (top > 0 ? top : 0));
        });
    }

    var $modals = $('div.modal');

    if ($modals.length) {
        $modals.on('show.bs.modal', function() {
            centerModals(this);
        });

        $(window).on('resize', function() {
            centerModals($modals);
        });
    }


    $( '#product-pics-slider').sliderPro({
        width:               595,
        height:              460,
        responsive:          false,
        thumbnailsPosition:  'left',
        thumbnailArrows:     true,
        thumbnailWidth:      95,
        thumbnailHeight:     80,
        fadeThumbnailArrows: false,
        buttons:             false,
        autoplay:            false,
        init: function(){
            $('.product-pics-slider .sp-thumbnail-arrows').appendTo( $('.product-pics-slider') );
        }
    });

    $( '#product-pics-slider .sp-image' ).parent( 'a' ).on( 'click', function( event ) {
        event.preventDefault();

        // check if the clicked link is also used in swiping the slider
        // by checking if the link has the 'sp-swiping' class attached.
        // if the slider is not being swiped, open the lightbox programmatically,
        // at the correct index
        if ( $( '#product-pics-slider' ).hasClass( 'sp-swiping' ) === false ) {
            $.fancybox.open( 
                $( '#product-pics-slider .sp-image' ).parent( 'a' ),
                { 
                    index: $( this ).parents( '.sp-slide' ).index(),
                padding: 30,
                margin:  50 
                } 
                );
        }
    });

    var productsSlider = $('#products-slider');
    productsSlider.owlCarousel({
        items : 4,
        navigation: true,
        rewindNav:  false,
        pagination: true,
        navigationText: ['<span class="glyphicon glyphicon-chevron-left"></span>','<span class="glyphicon glyphicon-chevron-right"></span>']
    });

    var reviewsSlider = $('#reviews-slider');
    reviewsSlider.owlCarousel({
        singleItem: true,
        navigation: true,
        rewindNav:  false,
        pagination: true,
        navigationText: ['<span class="glyphicon glyphicon-chevron-left"></span>','<span class="glyphicon glyphicon-chevron-right"></span>']
    });

    var homepageSlider = $('#homepage-slider');
    homepageSlider.owlCarousel({
        singleItem: true,
        navigation: true,
        rewindNav:  false,
        pagination: true,
        navigationText: ['<span class="glyphicon glyphicon-chevron-left"></span>','<span class="glyphicon glyphicon-chevron-right"></span>']
    });

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
