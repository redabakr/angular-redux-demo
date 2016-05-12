import 'core-js';
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');

import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppComponent} from "components/app.component";
import {store} from "./store";
import {initStore} from "angular2-redux-bindings";

// enableProdMode()

initStore(store);
bootstrap(AppComponent)
    .catch(err => console.error(err));
