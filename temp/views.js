angular.module('team-viewer').run(['$templateCache', function($templateCache) {$templateCache.put('./views/home.html','<h1>HOME</h1>');
$templateCache.put('./views/teams.html','<h1>Teams</h1>\r\n\r\n<ul>\r\n<li ng-repeat="team in vm.teams">\r\n{{team.name}}\r\n</li>\r\n</ul>');}]);