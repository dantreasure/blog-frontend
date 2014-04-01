var blogApp = angular.module('blogApp', [
	'ui.router',
	'blogControllers'
]);
blogApp.config(function($stateProvider, $urlRouterProvider){

	// For any unmatched url, send to /route1
	$urlRouterProvider.otherwise("/home");

	$stateProvider
		.state('home', {
			url: "/home",
			templateUrl: "partials/articleList.html",
			controller: "ArticleListCtrl"
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

});
