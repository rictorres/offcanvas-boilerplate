;(function(window, document, $) {

  $('.btn-sidebar-toggle').on('click', function(event) {
    event.preventDefault();

    var $this       = $(this),
        target      = $this.data('target'),
        fx          = $this.data('fx'),
        dir         = $this.data('dir'),
        $container  = $('.container');

    $('[data-target=' + target + ']').toggleClass('is-active');
    $('.' + target).toggleClass('is-active');
    $container.toggleClass('has-sidebar-open');
    $container.toggleClass('has-sidebar-' + fx);
    $container.toggleClass('has-sidebar-' + dir);
  });

}(this, this.document, this.jQuery));