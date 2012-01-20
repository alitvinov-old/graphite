(function ($) {

  Drupal.behaviors.tempField = {
    attach: function (context, settings) {
      $('.form-item, div.form-wrapper, .vertical-tabs-panes-wrap, .text-format-wrapper').each(function() {
        $prev = $(this).prev();
        $next = $(this).next();
        
        if (!$prev.is('div.form-item, div.form-wrapper, .vertical-tabs-panes-wrap, .text-format-wrapper')) {
          $(this).addClass('first');
        }
        
        if (!$next.is('div.form-item, div.form-wrapper, .vertical-tabs-panes-wrap, .text-format-wrapper')) {
          $(this).addClass('last');
        }
        
      });
    }
  };
  
  /*
  Drupal.behaviors.graphiteParent = {
    _attach: function (context, settings) {

        Drupal.overlay.open = function (url) {
          // Just one overlay is allowed.
          if (this.isOpen || this.isOpening) {
            return this.load(url);
          }
          this.isOpening = true;
          // Store the original document title.
          this.originalTitle = document.title;
        
          // Create the dialog and related DOM elements.
          this.create();
        
          this.isOpening = false;
          this.isOpen = true;
          $(document.documentElement).addClass('overlay-open');
          this.makeDocumentUntabbable();
        
          // Allow other scripts to respond to this event.
          $(document).trigger('drupalOverlayOpen');
        
          return this.load(url);
        
        };
        
        Drupal.overlay.create = function () {
          this.$container = $(Drupal.theme('overlayContainer'))
            .appendTo(document.body);
        
          // Overlay uses transparent iframes that cover the full parent window.
          // When the overlay is open the scrollbar of the parent window is hidden.
          // Because some browsers show a white iframe background for a short moment
          // while loading a page into an iframe, overlay uses two iframes. By loading
          // the page in a hidden (inactive) iframe the user doesn't see the white
          // background. When the page is loaded the active and inactive iframes
          // are switched.
          this.activeFrame = this.$iframeA = $(Drupal.theme('overlayElement'))
            .appendTo(this.$container);
        
          this.inactiveFrame = this.$iframeB = $(Drupal.theme('overlayElement'))
            .appendTo(this.$container);
        
          this.$iframeA.bind('load.drupal-overlay', { self: this.$iframeA[0], sibling: this.$iframeB }, $.proxy(this, 'loadChild'));
          this.$iframeB.bind('load.drupal-overlay', { self: this.$iframeB[0], sibling: this.$iframeA }, $.proxy(this, 'loadChild'));
        
          // Add a second class "drupal-overlay-open" to indicate these event handlers
          // should only be bound when the overlay is open.
          var eventClass = '.drupal-overlay.drupal-overlay-open';
          $(window)
            .bind('resize' + eventClass, $.proxy(this, 'eventhandlerOuterResize'));
          $(document)
            .bind('drupalOverlayLoad' + eventClass, $.proxy(this, 'eventhandlerOuterResize'))
            .bind('drupalOverlayReady' + eventClass +
                  ' drupalOverlayClose' + eventClass, $.proxy(this, 'eventhandlerSyncURLFragment'))
            .bind('drupalOverlayClose' + eventClass, $.proxy(this, 'eventhandlerRefreshPage'))
            .bind('drupalOverlayBeforeClose' + eventClass +
                  ' drupalOverlayBeforeLoad' + eventClass +
                  ' drupalOverlayResize' + eventClass, $.proxy(this, 'eventhandlerDispatchEvent'));
        
          if ($('.overlay-displace-top, .overlay-displace-bottom').length) {
            $(document)
              .bind('drupalOverlayResize' + eventClass, $.proxy(this, 'eventhandlerAlterDisplacedElements'))
              .bind('drupalOverlayClose' + eventClass, $.proxy(this, 'eventhandlerRestoreDisplacedElements'));
          }
        };
        
        Drupal.theme.prototype.overlayContainer = function () {
          return '<div id="overlay-container"><div class="overlay-modal-load"></div><div class="overlay-modal-background"></div></div>';
        };

    }
  };
  */
  
})(jQuery);