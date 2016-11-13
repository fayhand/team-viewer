class teamsController
{
	constructor(apiService)
	{
		this.apiService = apiService;
		this.teams = [];
		this.vm = this;

		this.getTeams(this.vm);
	}

	getTeams(vm) {
		this.apiService.getTeams().then(function(teams) {
			vm.teams = teams;
		});
	}
}

teamsController.$inject = ["apiService"];

export default teamsController;
