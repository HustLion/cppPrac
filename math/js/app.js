/**
 *
 * Created by Domicor on 2015/8/7.
 */
(function(){
        var app = angular.module('flashcard', []);

        app.controller('TeamController', ['$http', '$scope', function($http, $scope){
            var liste = this;
            $scope.liste = {};
            $scope.liste.teams = [];
            $http.get('teams.json').success(function(data){
                $scope.liste.teams = data;
            });
        }]);
    })();
