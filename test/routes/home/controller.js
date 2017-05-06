describe("Home Controller", function() {
    beforeEach(function() {
        module('CompuCorpApp');
    });

    var $controller;
    var homeController;
    var searchService;

    beforeEach(inject(function(_$controller_, _searchService_, _albumService_, _artistService_) {
        $controller = _$controller_;
        searchService = _searchService_;
        var $scope = {};
        homeController = $controller('HomeController', { 
            $scope: $scope, 
            searchService: _searchService_, 
            albumService: _albumService_, 
            artistService: _artistService_ 
        });
    }));

    it('should be defined', function () {
        expect(homeController).toBeDefined();
    });

    it('"onSearch" should be defined', function () {
        expect(homeController.onSearch).toBeDefined();
    });

    it('"onCardSelect" should be defined', function () {
        expect(homeController.onCardSelect).toBeDefined();
    });

    it('"getImage" should be defined', function () {
        expect(homeController.getImage).toBeDefined();
    });

    it ('"onLoadMore" should be defined', function () {
        expect(homeController.onLoadMore).toBeDefined();
    });

    it('"search" should be defined', function () {
        expect(homeController.search).toBeDefined();
    });

    it ('"search.offset" should be 0', function () {
        expect(homeController.search.offset).toBe(0);
    });

    it ('"search.limit" should be 6', function () {
        expect(homeController.search.limit).toBe(6);
    });

    it ('"search.q" should be ""', function () {
        expect(homeController.search.q).toBe('');
    });

    it ('"search.type" should be "album,artist"', function () {
        expect(homeController.search.type).toBe('album,artist');
    });

    it('"onSearch" should not call "searchService.api.get"', function () {
        spyOn(searchService.api, 'get').and.callThrough();
        homeController.onSearch();
        expect(searchService.api.get).not.toHaveBeenCalled();
    });

    it('"onSearch" should call "searchService.api.get"', function () {
        spyOn(searchService.api, 'get').and.callThrough();
        homeController.search.q = 'ta';
        homeController.onSearch();
        expect(searchService.api.get).not.toHaveBeenCalled();
    });

    it('"onLoadMore" should call "searchService.api.get"', function () {
        spyOn(searchService.api, 'get').and.callThrough();
        homeController.onLoadMore();
        expect(searchService.api.get).toHaveBeenCalled();
    });
});