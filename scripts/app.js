(function(angular) {
	angular.module("team-viewer", ["ngRoute"])
		.config(function($routeProvider, $locationProvider) 
		{
		  	$routeProvider
		  	.when("/", 
		  	{
		  		controller: "HomeController",
		  		templateUrl: "views/home.html"
		  	})
		  	.when("/teams", 
		  	{
		  		controller: "HomeController",
		  		templateUrl: "views/home.html"
		  	})  
		  	.otherwise("/")
		});
})(window.angular);