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

    $scope.removeQuote = dataService.removeQuote;

  });
