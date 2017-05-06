angular
    .module('CompuCorpApp')
    .service('artistService', ['$resource', 'apiBaseUrl', function ($resource, apiBaseUrl) {
        var baseURL = apiBaseUrl + 'artists';
        this.api = $resource(baseURL, {id: '@id'}, {
            getAlbums: {url: baseURL + '/:id/albums'}
        });
    }]);