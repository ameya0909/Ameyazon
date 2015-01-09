angular.module('Main', []).controller('Main', function($scope, $http) {

	$http.get('/api/productslist')
	.success(function(data) {
		$scope.products = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});

});
