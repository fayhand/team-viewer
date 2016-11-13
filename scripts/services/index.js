import apiService from "./apiService.js";

var moduleName = "team-viewer-services";

angular.module(moduleName, [])
    .service('apiService', apiService);

export default moduleName;
