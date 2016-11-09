import angular from "angular";

import app from "./app.js";

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) 
	{
	  	$routeProvider
	  	.when("/", 
	  	{
	  		controller: "homeController",
	  		templateUrl: "./views/home.html"
	  	})
	  	.when("/teams", 
	  	{
	  		controller: "teamsController",
	  		templateUrl: "./views/teams.html"
	  	})  
	  	.otherwise("/")
	}]);