describe("modal-dialog Directive", function () {
    beforeEach(function () {
        module('CompuCorpApp');
    });

    var $compile, $rootScope, $scope, element;

    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        element = $compile('<search-box></search-box>')($scope);
    }));

    it('should be defined', function() {
        $scope.$digest();
        expect(element).toBeDefined();
    });
});