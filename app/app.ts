/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {Expense, ExpensesServices} from 'services/expensesServices';
import {StorageServices} from 'services/storageServices';
import {Category, Categories} from 'services/categories';
import {FormApp} from 'components/accountDetails/form-app';

@Component({
  selector: 'app',
  appInjector: [ExpensesServices, Categories, StorageServices]
  //injectables: [ExpensesServices, Categories, StorageServices]
})
@View({
  templateUrl: 'app.html',
  directives: [NgFor, FormApp]
})
class App {
  formApp: FormApp;

  toggle(){
    this.formApp.toggle();
  }

  //Handle categories
  categoriesServices: Categories;
  categories:Array<Category> = [];
  categoriesSelected:Array<Category> = [];
  
  //Handle expenses
  storageServices: StorageServices;
  expensesServices: ExpensesServices;
  expenses = [];
  expensesListToShow:Array<Expense> = [];

  constructor(expensesServices: ExpensesServices, categoriesServices: Categories, storageServices: StorageServices) {
    this.expensesServices = expensesServices;
    this.expenses = this.expensesServices.getExpenses();
    this.storageServices = storageServices;
    this.categoriesServices = categoriesServices;
    this.load();

    this.categories = this.categoriesServices.getCategoriesSaved();
  }

  updateExpenses(category: Category) : Array<Expense> {
    this.expensesListToShow = this.expensesServices.updateExpensesListToShow(category);
    return this.expensesListToShow;
  }

  getExpenses(category: Category) : Array<Expense> {
    this.expensesListToShow = this.expensesServices.showExpensesListAfterFilter(category);
    return this.expensesListToShow;
  }

  addToCategoriesSelected(category: Category) : Array<Expense> {
    this.expensesListToShow = this.expensesServices.addCategories(category);
    return this.expensesListToShow;
  }

  load() {
    this.expensesServices.setExpenses(this.storageServices.loadJson('expenses'));
    this.expenses = this.expensesServices.getExpenses();
  }

  save() {
    this.storageServices.saveJson('expenses', this.expenses);
  }
}

bootstrap(App);
