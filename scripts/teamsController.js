import angular from "angular";

import app from "./app.js";
import apiService from "./services/apiService.js";

app.controller('teamsController', ["$scope", "apiService", function($scope, apiService) 
	{
		apiService.getTeams().then(function(teams) {
			console.log(teams);
			$scope.teams = teams;
		});
	}]);