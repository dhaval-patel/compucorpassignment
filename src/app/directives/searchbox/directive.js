angular
    .module('CompuCorpApp')
    .directive('searchBox', [function () {
        return {
            restrict: 'E',
            templateUrl: 'src/app/directives/searchbox/directive.html',
            scope: {
                ngModel: '=',
                onSearch: '=',
                placeholder: '@',
                isSearching: '='
            }
        };
    }]);