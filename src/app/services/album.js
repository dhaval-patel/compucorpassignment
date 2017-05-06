angular
    .module('CompuCorpApp')
    .service('albumService', ['$resource', 'apiBaseUrl', function ($resource, apiBaseUrl) {
        var url = apiBaseUrl + 'albums';
        this.api = $resource(url, {id: '@id'}, {
            getTracks: {url: url + '/:id/tracks'}
        });
    }]);