import angular from "angular";
import app from "../app.js";

var apiService = app.service('apiService', ["$http", function($http) {
  
	this.getTeams = function() {
		return $http({
				method: 'GET',
				url: 'http://team-viewer.getsandbox.com/teams'
			}).then(function successCallback(response) {
			    return response.data;
			}, function errorCallback(response) {
			    
			});
	}

}]);