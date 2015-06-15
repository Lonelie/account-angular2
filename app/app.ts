/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, defaultPipes, PipeRegistry, bind} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';
import {Currency} from 'pipes/currency';

import {Home} from 'components/home/home';
import {Check} from 'components/check/check';

@Component({
  selector: 'app'
})
@RouteConfig([
  { path: '/', component: Home, as: 'home' },
  { path: '/check', component: Check, as: 'check' }
])
@View({
  templateUrl: 'app.html',
  directives: [RouterOutlet, RouterLink]
})
class App {
    // amount: Number = 245;
    // secondAmount Number = 789;
}


export var pipes = Object.assign({}, defaultPipes, {
  currency: [
    new Currency()
  ]
});

bootstrap(App, [routerInjectables], bind(PipeRegistry).toValue(new PipeRegistry(pipes)));
