class apiService
{
	constructor($http) 
	{
		this.$http = $http
	}
  
	getTeams() {
		return this.$http({
				method: 'GET',
				url: 'http://team-viewer.getsandbox.com/teams'
			}).then(function successCallback(response) {
			    return response.data;
			}, function errorCallback(response) {
			    
			});
	}
}

apiService.$inject = ["$http"];

export default apiService;
