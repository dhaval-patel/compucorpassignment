describe("Card Directive", function () {
    beforeEach(function () {
        module('CompuCorpApp');
    });

    var $compile, $rootScope, $scope, element;

    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $scope.card = {
            name: 'card name',
            images: [],
            type: 'album'
        };
        element = $compile('<card card="card"></card>')($scope);
    }));

    it('should be defined', function() {
        $scope.$digest();
        expect(element).toBeDefined();
    });

    it('"title" should be defined', function() {
        $scope.$digest();
        expect(element[0].children[0].children[1].children[0].innerHTML).toBe($scope.card.name);
    });

    it('"View Tracks" should be defined', function() {
        $scope.$digest();
        expect(element[0].children[0].children[0].children[2].children[1].innerHTML).toBe('View Tracks');
    });

    it('"View Albums" should be defined', function() {
        $scope.card.type = 'artist';
        $scope.$digest();
        expect(element[0].children[0].children[0].children[2].children[1].innerHTML).toBe('View Albums');
    });
});