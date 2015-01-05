var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope){
	
	$scope.users = [];	
	$scope.user = {};

	$scope.submit = function(){
		
		console.log($scope.user);		
		$scope.users.push($scope.user);

		$scope.user = {
			name: '',
			position: '',
			age: ''

		};
		console.log($scope.users)
	};

	$scope.remove = function(index){

		$scope.users.splice(index, 1);
	}

});