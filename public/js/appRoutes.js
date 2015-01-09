angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

	.when('/store', {
		templateUrl: 'views/home.html',
		controller: 'Main'
	})

	.when('/store/:products', {
		templateUrl: 'views/categories.html',
		controller: 'Categories'
	})

	.when('/store/:products/:id', {
		templateUrl: 'views/items.html',
		controller: 'Items'
	})

	$locationProvider.html5Mode(true);

}]);
