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
        var target, fx, dir;

        if ( event ) {
          event.preventDefault();

          target = event.target.getAttribute( 'data-target' );
          fx = event.target.getAttribute( 'data-fx' );
          dir = event.target.getAttribute( 'data-dir' );
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

      app.handleSwipe = function( event ) {
        var isOpen = document.body.classList.contains( 'has-sidebar-open' );

        if ( !isOpen ) {
          var target, fx, dir;
          if ( event.type === 'swiperight' ) {
            target = 'sidebar-left';
            fx     = 'push';
            dir    = 'toright';
          }
          else if ( event.type === 'swipeleft' ) {
            target = 'sidebar-right';
            fx     = 'slideover';
            dir    = 'toleft';
          }
          var options = {
            _target: target,
            _fx: fx,
            _dir: dir
          };
          app.openSidebar(null, options);
        }
      };

      var swipeRight = new Hammer( content, {
        drag_block_horizontal: true
      }).on( 'swiperight', function( event ) {
        app.handleSwipe( event );
      });

      var swipeLeft = new Hammer( content, {
        drag_block_horizontal: true
      }).on( 'swipeleft', function( event ) {
        app.handleSwipe( event );
      });

    };

    return app;

  })();

  if ( window.addEventListener ) {
    window.addEventListener( 'DOMContentLoaded', window.Yaww.init, false );
  }

}( this, this.document ) );