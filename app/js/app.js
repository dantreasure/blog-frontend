var blogApp = angular.module('blogApp', [
	'ui.router',
	'blogControllers'
]);
blogApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	// For any unmatched url, send to /route1
	$urlRouterProvider.otherwise("/articles");

	$stateProvider
		.state('articles', {
			url: "/articles",
			templateUrl: "partials/articleList.html",
			controller: "ArticleListCtrl"
		})

			.state('articles.article', {
				url: "/articles/:id",
				templateUrl: "partials/blogPost.html",
				controller: function ($stateParams) {
					alert("hello");
					var value = 5;
					// If we got here from a url of /contacts/42

				}
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
