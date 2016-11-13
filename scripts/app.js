import angular from "angular";
import "angular-route";
import { default as controllersModuleName } from "./controllers/index";
import { default as servicesModuleName } from "./services/index";
import { default as configRoutes} from "./routes";

var moduleName = "team-viewer";

var app = angular
	.module(moduleName, ["ngRoute", servicesModuleName, controllersModuleName])
  	.config(configRoutes);

export default moduleName;
