/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, defaultPipes, PipeRegistry, bind} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';
import {Currency} from 'pipes/currency';
//import {Category} from 'services/category';
import {Category, Categories} from 'services/categories';
//import {Expense} from 'services/expense';
import {Expense, ExpensesServices} from 'services/expensesServices';
import {StorageServices} from 'services/storageServices';
import {AccountDetails} from 'components/accountDetails/accountDetails';

@Component({
  selector: 'app',
  appInjector: [ExpensesServices, Categories, StorageServices]
})
@RouteConfig([
  { path: '/accountDetails', component: AccountDetails, as: 'accountDetails' }
])
@View({
  templateUrl: 'app.html',
  directives: [RouterOutlet, RouterLink]
})
class App {
}

bootstrap(App, [routerInjectables]);
