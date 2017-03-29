(function () {
    'use strict';

    angular
        .module('app')
        .controller('ArticleController', ArticleController);

    ArticleController.$inject = ['$location', 'ArticleService'];

    function ArticleController($location, ArticleService) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'ArticleController';
        vm.Articles = [];

        activate();

        function activate() {
            ArticleService.GetArticles()
                .then(function(result) {
                    vm.Articles = result.data;
                }, function(error) {
                    console.log(error.data);
                });
        }
    }
})();
