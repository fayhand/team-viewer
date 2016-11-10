import angular from "angular";
import bootstrap from 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

import "./app.js";
import "./homeController.js";
import "./teamsController.js";
import "./routes.js";

angular.element(document).ready(function() {
    angular.bootstrap(document, ["team-viewer"]);
});