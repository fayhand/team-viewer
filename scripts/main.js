import angular from "angular";
import bootstrap from 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

import { default as appModule} from "./app";

angular.element(document).ready(function() {
    angular.bootstrap(document, [appModule]);
});
