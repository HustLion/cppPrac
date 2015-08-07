/**
 *
 * Created by Domicor on 2015/8/7.
 */
(function(){
        var app = angular.module('flashcard', []);

        // a simple working copy
        //app.controller('TeamController', ['$http', '$scope', function($http, $scope){
        //    var liste = this;
        //    $scope.liste = {};
        //    $scope.liste.teams = [];
        //    $http.get('teams.json').success(function(data){
        //        $scope.liste.teams = data;
        //    });
        //}]);

    app.controller('cardController', ['$http', '$scope', function($http, $scope){
        var liste = this;
        $scope.list = {};
        $scope.list.cards = [];
        $http.get('json/calculus.json').success(function(data){
            $scope.list.cards = data;
        });
    }]);

    app.controller('cardController400', ['$http', '$scope', function($http, $scope){
        var liste = this;
        $scope.list = {};
        $scope.list.cards = [];
        $http.get('json/400.json').success(function(data){
            $scope.list.cards = data;
        });
    }]);


    })();
