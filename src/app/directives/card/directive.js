angular
    .module('CompuCorpApp')
    .directive('card', [function () {
        return {
            restrict: 'E',
            templateUrl: 'src/app/directives/card/directive.html',
            scope: {
                card: '='
            },
            link: function (scope) {
                scope.getImage = function () {
                    if (scope.card.images.length) {
                        return scope.card.images[0].url
                    }
                };
            }
        };
    }]);