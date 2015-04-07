var blogApp = angular.module('blogApp', [
	'ui.router',
	'blogControllers'
]);
blogApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	// For any unmatched url, send to /route1
	//$urlRouterProvider.otherwise("/articles");

	$stateProvider
		.state('articles', {
			url: "/articles",
			templateUrl: "partials/articleList.html",
			controller: "ArticleListCtrl"
		})

	  .state('article', {
	      url: "/articles/:id",
	      templateUrl: "partials/blogPost.html",
	      controller: "ArticleCtrl"
	  })

		.state('surprise', {
			url: "/surprise",
			templateUrl: "partials/blogPost.html"
		})

		.state('writers', {
			url: "/writers",
			templateUrl: "partials/writers.html",
			controller: "WritersCtrl"
		})

		.state('contact', {
			url: "/contact",
			templateUrl: "partials/contact.html",
			controller: "ArticleListCtrl"
		})

		.state('compose', {
			url: "/compose",
			templateUrl: "partials/compose.html",
			controller: "ComposeCtrl"
		})

}]);
