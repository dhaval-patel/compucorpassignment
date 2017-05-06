describe("Artist Service", function() {
    beforeEach(function() {
        module('CompuCorpApp');
    });

    var artistService;

    beforeEach(inject(function(_artistService_) {
        artistService = _artistService_;
    }));

    it ('should be defined', function () {
        expect(artistService).toBeDefined();
    });

    it ('"api" should be defined', function () {
        expect(artistService.api).toBeDefined();
    });

    it ('"api.getAlbums" should be defined', function () {
        expect(artistService.api.getAlbums).toBeDefined();
    });
});