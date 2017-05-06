angular
    .module('CompuCorpApp')
    .service('searchService', ['$resource', 'apiBaseUrl', function ($resource, apiBaseUrl) {
        var baseUrl = apiBaseUrl + 'search';
        this.api = $resource(baseUrl);
    }]);