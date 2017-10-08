var app = angular.module("starterApp", ["ngRoute", "firebase"])
	.config(function($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: 'templates/main.html',
				controller: 'HomeController'
			})

			.when("/view-list", {
				templateUrl: 'templates/view-list.html',
				controller: 'ViewListController'
			})

			.otherwise({ redirectTo: '/' })
	})