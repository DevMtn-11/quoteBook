angular.module('quoteBook')
  .controller('MainController', function($scope, dataService) {

    var quoteText = $scope.quoteText;
    var quoteAuthor = $scope.quoteAuthor;

    $scope.quotes = dataService.getQuotes();

    $scope.addQuote = function(quoteText, quoteAuthor) {
      $scope.quoteText = '';
      $scope.quoteAuthor = '';
      return dataService.addQuote(quoteText, quoteAuthor);
    };

    $scope.disable = function() {
      if($scope.quoteText && $scope.quoteAuthor) {
        $scope.disable = false;
      }
      else {
        $scope.disable = true;
      }
    };

    $scope.removeQuote = dataService.removeQuote;

  });
