;(function(window, document, $) {

  $('html').removeClass('no-js');

  $('.btn-sidebar-toggle').on('click', function() {
    var target = $(this).data('target'),
        fx     = $(this).data('fx'),
        dir    = $(this).data('dir');

    $('.' + target).toggleClass('sidebar-active'); // toggle active class on the sidebar
    $('.container').toggleClass('sidebar-open'); // toggle open class on the container
    $('.container').toggleClass('sidebar-' + fx);
    $('.container').toggleClass('sidebar-' + dir);
  });

}(this, this.document, this.jQuery));