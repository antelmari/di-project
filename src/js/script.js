var popupAjax = (function() {
    init = function() {
      $(".popup").magnificPopup({
        type: "inline",
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: "scroll",
        showCloseBtn: false,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: "my-mfp-zoom-in"
      });
      $(".popup-close").on( "click", function() {
        $.magnificPopup.close();
      });
    };
  
    return {
      init: init
    };
})();

popupAjax.init();