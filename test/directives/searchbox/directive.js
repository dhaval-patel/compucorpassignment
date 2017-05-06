describe("search-box Directive", function () {
    beforeEach(function () {
        module('CompuCorpApp');
    });

    var $compile, $rootScope, $scope;

    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
    }));

    it('should be defined', function() {
        var element = $compile('<search-box></search-box>')($scope);
        $scope.$digest();
        expect(element).toBeDefined();
    });

    it('"input" should be defined', function() {
        var element = $compile('<search-box></search-box>')($scope);
        $scope.$digest();
        expect(element[0].children[0].children[0].children[0].nodeName).toBe('INPUT');
    });

    it('"button" should be defined', function() {
        var element = $compile('<search-box></search-box>')($scope);
        $scope.$digest();
        expect(element[0].children[0].children[0].children[1].nodeName).toBe('BUTTON');
    });
});