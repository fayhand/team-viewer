import homeController from "./homeController";
import teamsController from "./teamsController";

var moduleName = "team-viewer-controllers";

angular.module(moduleName, [])
    .controller("homeController", homeController)
    .controller("teamsController", teamsController);

export default moduleName;
