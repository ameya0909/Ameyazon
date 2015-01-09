angular.module('Categories', []).controller('Categories', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {

	$http.get('/store/'+$routeParams.products)
	.success(function(data) {
		$scope.title = $routeParams.products;
		$scope.products = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});

}]);