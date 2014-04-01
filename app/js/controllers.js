'use strict';

/* Controllers */

var blogControllers = angular.module('blogControllers', []);

blogControllers.controller('ArticleListCtrl', ['$scope', '$http',
	function($scope, $http) {

		$http.get('http://experimentblog8889.jit.su/posts').success(function(data) {
			$scope.articles = data;
		});

		$scope.delete = function ( idx ) {
			console.log(idx);
			todos.splice(todos.indexOf(todo), 1);
		};

}]);

blogControllers.controller('ComposeCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.formData = {};

		$http.get('http://experimentblog8889.jit.su/users').success(function(data) {
			$scope.writers = data;
		});

		$scope.submit = function () {

			$scope.formData.author = $("option:selected").text();

			$http({
				method  : 'POST',
				url     : 'http://experimentblog8889.jit.su/posts',
				data    : $.param($scope.formData),
				headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
			})
				.success(function(data) {
					$scope.formData = {};
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

blogControllers.controller('WritersCtrl', ['$scope', '$http',
	function($scope, $http) {

		$http.get('http://experimentblog8889.jit.su/users').success(function(data) {
			$scope.writers = data;
		});

	}]);