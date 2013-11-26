;(function(window, document, $) {

  var $container = $('.container'),
      $body      = $('body');

  function closeSidebar(event) {
    if ( $(event.target).hasClass('container') ) {
      $container.removeClass('has-sidebar-toright');
      $container.removeClass('has-sidebar-toleft');
      $container.removeClass('has-sidebar-push');
      $container.removeClass('has-sidebar-slideover');
      $('.btn-sidebar-toggle').removeClass('is-active');
      $('.sidebar').removeClass('is-active');
      setTimeout( function() {
        $body.removeClass('has-sidebar-open');
      }, 400);
      $container.off('click', closeSidebar);
    }
  }

  $('.btn-sidebar-toggle').on('click', function(event) {
    event.preventDefault();

    var $this       = $(this),
        target      = $this.data('target'),
        fx          = $this.data('fx'),
        dir         = $this.data('dir');

    $('[data-target=' + target + ']').toggleClass('is-active');
    $('.' + target).toggleClass('is-active');
    $body.toggleClass('has-sidebar-open');
    $container.toggleClass('has-sidebar-' + fx);
    $container.toggleClass('has-sidebar-' + dir);

    setTimeout( function() {
      if ( $body.hasClass('has-sidebar-open') ) {
        $container.on('click', closeSidebar);
      }
    }, 25);

  });

}(this, this.document, this.jQuery));