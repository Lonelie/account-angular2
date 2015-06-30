import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {Expense, ExpensesServices} from 'services/expensesServices';
import {StorageServices} from 'services/storageServices';
import {Category, Categories} from 'services/categories';


import {ExpensesFilteredList} from 'components/expenses-list/expensesFilteredList';

@Component({
  selector: 'expenses-list',
  appInjector: [ExpensesServices, Categories, StorageServices]
  //injectables: [ExpensesServices, Categories, StorageServices]
})
@View({
  templateUrl: 'components/expenses-list/expenses-list.html',
  directives: [NgFor]
})
export class ExpensesList {

  expensesFilteredList:ExpensesFilteredList;
  //Handle categories
  categoriesServices: Categories;
  categories:Array<Category> = [];
  
  //Handle expenses
  storageServices: StorageServices;
  expensesServices: ExpensesServices;


  constructor(expensesServices: ExpensesServices, categoriesServices: Categories, storageServices: StorageServices) {
    this.expensesServices = expensesServices;
    this.storageServices = storageServices;
    this.categoriesServices = categoriesServices;

    var expenses = this.expensesServices.getExpenses();
    this.expensesFilteredList = new ExpensesFilteredList( expenses );
    this.categories = this.categoriesServices.getCategoriesSaved();
  }

  onCategoryClicked(category: Category) : Array<Expense> {
    var expensesListToShow = this.expensesFilteredList.addCategories(category);
    return expensesListToShow;
  }

  load() {
    this.expensesServices.setExpenses(this.storageServices.loadJson('expenses'));
  }

  save() {
    this.storageServices.saveJson('expenses', this.expensesFilteredList.expenses);
  }
}