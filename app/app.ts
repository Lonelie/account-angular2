/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {Expense, ExpensesServices} from 'services/expensesServices';
import {StorageServices} from 'services/storageServices';
import {Category, Categories} from 'services/categories';
import {ExpensesList} from 'components/expenses-list/expenses-list';

@Component({
  selector: 'app',
  appInjector: [ExpensesServices, Categories, StorageServices]
  //injectables: [ExpensesServices, Categories, StorageServices]
})
@View({
  templateUrl: 'app.html',
  directives: [NgFor, ExpensesList]
})
class App {

}

bootstrap(App);
