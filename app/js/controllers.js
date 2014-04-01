'use strict';

/* Controllers */

var blogControllers = angular.module('blogControllers', []);

blogControllers.controller('ArticleListCtrl', ['$scope', '$http',
	function($scope, $http) {



		$http.get('http://experimentblog8889.jit.su/posts').success(function(data) {
			$scope.articles = data;
			console.log($scope.articles)
		});

}]);

blogControllers.controller('ComposeCtrl', ['$scope', '$http',
	function($scope, $http) {

		$scope.submit = function () {

			$scope.formData = {};

			$http({
				method  : 'POST',
				url     : 'http://experimentblog8889.jit.su/posts',
				data    : $.param($scope.formData),
				headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
			})
				.success(function(data) {
					console.log(data);

					if (!data.success) {
						// if not successful, bind errors to error variables
						$scope.errorName = data.errors.name;
						$scope.errorSuperhero = data.errors.superheroAlias;
					} else {
						// if successful, bind success message to message
						$scope.message = data.message;
					}
				});
		};

	}]);