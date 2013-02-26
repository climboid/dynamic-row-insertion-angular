'use strict';

tableApp.controller('MainCtrl', function($scope, $timeout, $filter) {
  
  $scope.predicate = {
    'column':'priceDif',
    'rev':true
  }
  var data = [
    {"priceDif":50, "cannibalization":0},
    {"priceDif":40, "cannibalization":0},
    {"priceDif":30, "cannibalization":0},
    {"priceDif":10, "cannibalization":0},
    {"priceDif":0, "cannibalization":0},
    {"priceDif":60, "cannibalization":0},
    {"priceDif":70, "cannibalization":0},
    {"priceDif":80, "cannibalization":0},
    {"priceDif":90, "cannibalization":0},
    {"priceDif":100, "cannibalization":0},
    {"priceDif":50, "cannibalization":0},
    {"priceDif":40, "cannibalization":0},
    {"priceDif":30, "cannibalization":0},
    {"priceDif":10, "cannibalization":0},
    {"priceDif":0, "cannibalization":0},
    {"priceDif":60, "cannibalization":0},
    {"priceDif":70, "cannibalization":0},
    {"priceDif":80, "cannibalization":0},
    {"priceDif":90, "cannibalization":0},
    {"priceDif":100, "cannibalization":0},
    {"priceDif":50, "cannibalization":0},
    {"priceDif":40, "cannibalization":0},
    {"priceDif":30, "cannibalization":0},
    {"priceDif":10, "cannibalization":0},
    {"priceDif":0, "cannibalization":0},
    {"priceDif":60, "cannibalization":0},
    {"priceDif":70, "cannibalization":0},
    {"priceDif":80, "cannibalization":0},
    {"priceDif":90, "cannibalization":0},
    {"priceDif":100, "cannibalization":0},
    {"priceDif":50, "cannibalization":0},
    {"priceDif":40, "cannibalization":0},
    {"priceDif":30, "cannibalization":0},
    {"priceDif":10, "cannibalization":0},
    {"priceDif":0, "cannibalization":0},
    {"priceDif":60, "cannibalization":0},
    {"priceDif":70, "cannibalization":0},
    {"priceDif":80, "cannibalization":0},
    {"priceDif":90, "cannibalization":0},
    {"priceDif":100, "cannibalization":0}
  ];

  $scope.data = data;

  var increment = 20;

  $scope.addRow = function(){
    increment = increment+20;
    var obj= {
      "priceDif":increment,
      "cannibalization":5,
      "class":"inserted"
    };
    data.push(obj);
    data = $filter('orderBy')(data, [$scope.predicate.column, "ID"], $scope.predicate.rev);

    //find the position in the array for the data
    //every row height is 37 so the scroll to is position times 37
    var position = (function(){
      for(var i=0; i<data.length; i++){
        if(data[i].class == "inserted"){
          return i;
        }
      }
    })();

    $(".overflownTable").scrollTop(position*37)
    
    $scope.data = data;

    $timeout(function () {
       angular.forEach($scope.data,function(k,v){
        return(k.class=="inserted" ? k.class = "" : "")
       });
       $scope.$digest();
    }, 1000, false);
    
  }

});

