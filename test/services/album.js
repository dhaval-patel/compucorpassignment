describe("Album Service", function() {
    beforeEach(function() {
        module('CompuCorpApp');
    });

    var albumService;

    beforeEach(inject(function(_albumService_) {
        albumService = _albumService_;
    }));

    it ('should be defined', function () {
        expect(albumService).toBeDefined();
    });

    it ('"api" should be defined', function () {
        expect(albumService.api).toBeDefined();
    });

    it ('"api.getTracks" should be defined', function () {
        expect(albumService.api.getTracks).toBeDefined();
    });
});