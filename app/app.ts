/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, defaultPipes, PipeRegistry, bind} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';
import {Currency} from 'pipes/currency';
import {Expenses} from 'services/expenses';
import {Categories} from 'services/categories';

import {Home} from 'components/home/home';
import {AccountDetails} from 'components/accountDetails/accountDetails';

@Component({
  selector: 'app',
  appInjector: [Expenses, Categories]
})
@RouteConfig([
  { path: '/', component: Home, as: 'home' },
  { path: '/accountDetails', component: AccountDetails, as: 'accountDetails' }
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
