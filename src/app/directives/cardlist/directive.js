angular
    .module('CompuCorpApp')
    .directive('cardList', [function () {
        return {
            restrict: 'E',
            templateUrl: 'src/app/directives/cardlist/directive.html',
            scope: {
                cards: '=',
                onCardSelect: '='
            }
        };
    }]);