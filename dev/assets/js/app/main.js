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

  window.OffCanvas = (function() {

    var _init      = false,
        app        = {},
        container  = $$( '#container' ),
        content    = $$( '#content' ),
        eventType  = Modernizr.touch ? 'touchstart' : 'click';

    app.init = function() {

      if ( _init ) {
        return;
      }
      _init = true;

      app.closeSidebar = function( event ) {
        if ( event.target.classList.contains( 'content' ) || event.target.classList.contains( 'content-bar' ) ) {
          container.classList.remove( 'has-sidebar-toright', 'has-sidebar-toleft', 'has-sidebar-push', 'has-sidebar-slideover' );
          [].forEach.call( $( '.btn-sidebar-toggle.is-active' ), function( elem ) {
            elem.classList.remove( 'is-active' );
          });
          $$( '.sidebar.is-active' ).classList.remove( 'is-active' );
          setTimeout( function() {
            document.body.classList.remove( 'has-sidebar-open' );
          }, 400 );
          [].forEach.call( $( '.content, .content-bar' ), function( elem ) {
            elem.removeEventListener( eventType, app.closeSidebar, false );
          });
        }
      };

      app.openSidebar = function( event, options ) {
        var srcElem, target, fx, dir;

        if ( event ) {
          event.preventDefault();

          srcElem = event.target;

          if ( !event.target.classList.contains( 'btn-sidebar-toggle' ) ) {
            srcElem = event.target.offsetParent;
          }

          target = srcElem.getAttribute( 'data-target' );
          fx     = srcElem.getAttribute( 'data-fx' );
          dir    = srcElem.getAttribute( 'data-dir' );
        }
        else if ( options ) {
          target = options._target;
          fx     = options._fx;
          dir    = options._dir;
        }
        else {
          return;
        }

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
              elem.addEventListener( eventType, app.closeSidebar, false );
            });
          }
        }, 25 );
      };

      [].forEach.call( $( '.btn-sidebar-toggle' ), function( elem ) {
        elem.addEventListener( eventType, app.openSidebar, false );
      });

    };

    return app;

  })();

  if ( window.addEventListener ) {
    window.addEventListener( 'DOMContentLoaded', window.OffCanvas.init, false );
  }

}( this, this.document ) );