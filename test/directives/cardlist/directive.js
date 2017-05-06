describe("card-list Directive", function () {
    beforeEach(function () {
        module('CompuCorpApp');
    });

    var $compile, $rootScope, $scope, element;

    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $scope.cards = [
            {
                name: 'card name',
                type: 'album',
                images: []
            },
            {
                name: 'card name',
                type: 'album',
                images: []
            },
            {
                name: 'card name',
                type: 'album',
                images: []
            }
        ];
        element = $compile('<card-list cards="cards"></card-list>')($scope);
        $scope.$digest();
    }));

    it('should be defined', function() {
        expect(element).toBeDefined();
    });

    it ('3 cards should be defined', function () {
        expect(element[0].children[0].children.length).toBe(3);
    });
});