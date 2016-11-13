function config($routeProvider) 
{
  	$routeProvider
  	.when("/", 
  	{
  		controller: "homeController",
  		templateUrl: "./views/home.html",
  		controllerAs: "vm"
  	})
  	.when("/teams", 
  	{
  		controller: "teamsController",
  		templateUrl: "./views/teams.html",
  		controllerAs: "vm"
  	})  
  	.otherwise("/")
};

config.$inject = ["$routeProvider"];

export default config;
