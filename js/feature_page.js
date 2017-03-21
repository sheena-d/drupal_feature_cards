(function($) {
  $(document).ready(function() {
    $('#fullpage').fullpage({
      //Navigation
      menu: '#menu',
      lockAnchors: false,
      navigation: false,

      //Scrolling
      css3: true,
      scrollingSpeed: 700,
      autoScrolling: true,
      fitToSection: true,

      //Design
      controlArrows: true,
      verticalCentered: true,
      fixedElements: '#header, .footer',

      //Custom selectors
      sectionSelector: '.section',
      slideSelector: '.slide',

      lazyLoading: true,

    });
  });
})(jQuery);
