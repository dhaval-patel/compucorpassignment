angular
    .module('CompuCorpApp')
    .controller('HomeController', ['searchService', 'albumService', 'artistService', function (searchService, albumService, artistService) {
        function loadData() {
            return searchService
                    .api
                    .get({
                        q: vm.search.q,
                        type: vm.search.type,
                        limit: vm.search.limit,
                        offset: vm.search.offset
                    })
                    .$promise
                    .then(function (res) {
                        Array.prototype.push.apply(vm.search.data, res.albums.items);
                        Array.prototype.push.apply(vm.search.data, res.artists.items);
                        vm.search.offset += vm.search.limit;
                    });
        }

        function onSearch() {
            if (vm.search.q) {
                vm.isSearching = true;
                vm.search.data = [];
                loadData().then(function () {
                    vm.isSearching = false;
                });
            }
        };

        function loadMore() {
            vm.isLoadingMore = true;

            loadData().then(function () {
                vm.isLoadingMore = false;
            });
        }

        function onCardSelect(card) {
            vm.selectedCard = card;
            console.log(card.type);
            vm.tracks = null;
            vm.albums = null;
            if (card.type === 'album') {
                albumService
                    .api
                    .getTracks({
                        id: card.id
                    })
                    .$promise
                    .then(function (res) {
                        vm.tracks = res.items;
                        vm.modalShow = true;
                    });
            } else if (card.type === 'artist') {
                artistService
                    .api
                    .getAlbums({
                        id: card.id
                    })
                    .$promise
                    .then(function (res) {
                        vm.albums = res.items;
                        vm.modalShow = true;
                    });
            }
        }

        function getImage (card) {
            if (card.images.length) {
                return card.images[0].url
            }

            return '';
        };

        var vm = this;
        
        vm.search = {
            offset: 0,
            limit: 6,
            q: '',
            type: 'album,artist'
        };
        vm.isSearching = false;
        vm.isLoadingMore = false;
        vm.onSearch = onSearch.bind(vm);
        vm.onCardSelect = onCardSelect.bind(vm);
        vm.getImage = getImage.bind(vm);
        vm.onLoadMore = loadMore.bind(vm);
        vm.onSearch()
    }]);