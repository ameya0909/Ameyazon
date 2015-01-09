angular.module('Items', []).controller('Items', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {

	$http.get('/store/'+$routeParams.products+'/'+$routeParams.id)
	.success(function(data) {
		var date = new Date();
		date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+"T00:00.000Z";
		$scope.products = data;
		$scope.show = $scope.products[0].startDate <= date && $scope.products[0].endDate >= date;
		if($scope.products[0].endDate == undefined || $scope.products[0].endDate == "") {
		$scope.show = true;
	}
	$scope.url = "http://localhost:8080/login/Login.jsp?collectionname="+$routeParams.products+"&_id="+$routeParams.id;
		
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});

}]);
