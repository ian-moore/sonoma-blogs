// create a module for our Angular app with a dependency on our angularMscrm module
var CrmApp = angular.module('crmApp', ['angularMscrm']);

// create a controller for the page, and inject our CrmService into it
CrmApp.controller('AppController', function($scope, CrmService) {

    // $scope is what will be available to our HTML
    $scope.inputText = '';
    $scope.matches = [];

    // a change handler for our user input
    $scope.inputChanged = function() {
        if (!$scope.inputText) {
            $scope.matches = [];
            return;
        }

        // call CrmService to look up contacts
        CrmService.lookup(
            { entitySet: 'ContactSet', field: 'FullName', search: $scope.inputText },
            function(response) {
                // assign the results to $scope
                var data = response.d;
                $scope.matches = data.results;
            });
    }
});