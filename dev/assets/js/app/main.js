;(function( window, document, undefined ) {

  // Cache the querySelector/All for easier and faster reuse.
  // It's actually slower (http://jsperf.com/queryselector-cache-vs-getelementbyid-cache)
  // but should be more than enough for this purpose.

  window.$    = document.querySelectorAll.bind( document );
  window.$$   = document.querySelector.bind( document );


  Modernizr.load({
    test: Modernizr.classlist,
    nope: 'assets/js/shim/classlist.js'
  });


  /* =============================================================================
    Application
  ================================================================================ */

  window.Yaww = (function() {

    var _init      = false,
        app        = {},
        container  = $$( '#container' ),
        content    = $$( '#content' );

    app.init = function() {

      if ( _init ) {
        return;
      }
      _init = true;

      app.closeSidebar = function( event ) {
        if ( event.target.classList.contains( 'content' ) || event.target.classList.contains( 'content-bar' ) ) {
          container.classList.remove( 'has-sidebar-toright' );
          container.classList.remove( 'has-sidebar-toleft' );
          container.classList.remove( 'has-sidebar-push' );
          container.classList.remove( 'has-sidebar-slideover' );
          [].forEach.call( $( '.btn-sidebar-toggle.is-active' ), function( elem ) {
            elem.classList.remove( 'is-active' );
          });
          $$( '.sidebar.is-active' ).classList.remove( 'is-active' );
          setTimeout( function() {
            document.body.classList.remove( 'has-sidebar-open' );
          }, 400 );
          [].forEach.call( $( '.content, .content-bar' ), function( elem ) {
            elem.removeEventListener( 'click', app.closeSidebar, false );
          });
        }
      };

      app.openSidebar = function( event ) {
        event.preventDefault();

        var target = event.target.getAttribute( 'data-target' ),
            fx = event.target.getAttribute( 'data-fx' ),
            dir = event.target.getAttribute( 'data-dir' );

        [].forEach.call( $( '[data-target=' + target + ']' ), function( elem ) {
          elem.classList.toggle( 'is-active' );
        });
        $$( '.' + target ).classList.toggle( 'is-active' );
        document.body.classList.toggle( 'has-sidebar-open' );
        container.classList.toggle( 'has-sidebar-' + fx );
        container.classList.toggle( 'has-sidebar-' + dir );

        setTimeout( function() {
          if ( document.body.classList.contains( 'has-sidebar-open' ) ) {
            [].forEach.call( $( '.content, .content-bar' ), function( elem ) {
              elem.addEventListener( 'click', app.closeSidebar, false );
            });
          }
        }, 25 );
      };

      [].forEach.call( $( '.btn-sidebar-toggle' ), function( elem ) {
        elem.addEventListener( 'click', app.openSidebar, false );
      });
    };

    return app;

  })();

  if ( window.addEventListener ) {
    window.addEventListener( 'DOMContentLoaded', window.Yaww.init, false );
  }

}( this, this.document ) );