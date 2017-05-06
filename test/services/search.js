describe("Seach Service", function() {
    beforeEach(function() {
        module('CompuCorpApp');
    });

    var searchService;

    beforeEach(inject(function(_searchService_) {
        searchService = _searchService_;
    }));

    it ('should be defined', function () {
        expect(searchService).toBeDefined();
    });

    it ('"api" should be defined', function () {
        expect(searchService.api).toBeDefined();
    });
});