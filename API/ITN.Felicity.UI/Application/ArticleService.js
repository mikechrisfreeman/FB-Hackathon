(function () {
    'use strict';

    angular
        .module('app')
        .factory('ArticleService', ArticleService);

    ArticleService.$inject = ['$http'];

    function ArticleService($http) {
        var service = {
            GetArticles: getArticles
        };

        return service;

        function getArticles() {
            return $http.get('http://itnfelicityapi20170329025803.azurewebsites.net/Article/');
        }
    }
})();