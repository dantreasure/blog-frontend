'use strict';

/* Controllers */

var blogControllers = angular.module('blogControllers', []);

blogControllers.controller('ArticleListCtrl', ['$scope', '$http', '$stateParams',
	function($scope, $http, $stateParams) {
		$http.get('//localhost:5000/posts').success(function(data) {
			$scope.articles = data;
		});

		$scope.delete = function ( idx ) {
			$scope.articles.splice($scope.articles.indexOf(idx), 1);

			$http({
				method  : 'DELETE',
				url     : 'http://experimentblog8889.jit.su/posts/' + idx._id,
			})
				.success(function(data) {
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

blogControllers.controller('ComposeCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.formData = {};

		$http.get('//localhost:5000/users').success(function(data) {
			$scope.writers = data;
		});

		$scope.submit = function () {

			$scope.formData.author = $("option:selected").text();

			$http({
				method  : 'POST',
				url     : '//localhost:5000/posts',
				data    : $.param($scope.formData),
				headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
			})
				.success(function(data) {
					$scope.formData = {};
					if (!data.success) {
						// if not successful, bind errors to error variables
						$scope.errorName = data.errors;
						$scope.errorSuperhero = data.errors;
					} else {
						// if successful, bind success message to message
						$scope.message = data.message;
					}
				});
		};

}]);

blogControllers.controller('ArticleCtrl', ['$scope', '$http', '$stateParams',
	function($scope, $http, $stateParams){
		console.log('stateparams', $stateParams)
		$http.get('//localhost:5000/posts/' + $stateParams.id).success(function(data) {
			$scope.article = data;
			console.log(data)
		});

}]);

blogControllers.controller('WritersCtrl', ['$scope', '$http',
	function($scope, $http) {

		$scope.formData = {};

		$http.get('//localhost:5000/users').success(function(data) {
			$scope.writers = data;
		});

		$scope.delete = function ( idx ) {
			$scope.writers.splice($scope.writers.indexOf(idx), 1);

			$http({
				method  : 'DELETE',
				url     : '//localhost:5000/users/' + idx._id,
			})
				.success(function(data) {
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

		$scope.submit = function () {

			$http({
				method  : 'POST',
				url     : '//localhost:5000/users/',
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
