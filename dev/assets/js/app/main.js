;(function(window, document, $) {

  $('.btn-sidebar-toggle').on('click', function() {
    var target = $(this).data('target'),
        fx     = $(this).data('fx'),
        dir    = $(this).data('dir');

    $('.' + target).toggleClass('is-active'); // toggle active class on the sidebar
    $('.container').toggleClass('has-sidebar-open'); // toggle open class on the container
    $('.container').toggleClass('has-sidebar-' + fx);
    $('.container').toggleClass('has-sidebar-' + dir);
  });

}(this, this.document, this.jQuery));