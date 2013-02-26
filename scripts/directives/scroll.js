'use strict';

tableApp.directive('scroll', function() {
  return {
    restrict: 'A',
    link: function postlink(scope, element, attrs) {     
      $(element).scroll(function(){
        var args = args || $(element).scrollTop();
        $(".controlledScroll").scrollTop(args);
      });
    }
  };
});
