import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {Expenses} from '../../services/expenses';
import {Categories} from '../../services/categories';

@Component({
  selector: 'component-2', // can be anything, because we inject the component via <router-outlet>
  injectables: [Expenses, Categories]
})
@View({
  templateUrl: 'components/accountDetails/accountDetails.html',
  directives: [NgFor]
})

export class AccountDetails {

  expensesServices: Expenses;
  expenses = [];
  expensesListToShow = [];

  categoriesServices: Categories;
  categories = [];
  categoriesSelected = [];

  constructor(expensesServices: Expenses, categoriesServices: Categories) {
    this.expensesServices = expensesServices;
    this.expenses = this.expensesServices.getExpensesSaved();

    this.categoriesServices = categoriesServices;
    this.categories = this.categoriesServices.getCategoriesSaved();
  }
  
  mapFilters = {
    "Flat" : false,
    "Leisure" : false,
    "Nutrition" : false,
    "University" : false,
    "Car" : false,
    "Piano lessions" : false
  }

  removeExpensesListAfterFilter(category){
    var expensesToSave:Array<String> = [];
    for (var i = 0; i < this.expensesListToShow.length; i++) {
      if (this.expensesListToShow[i].typeOfSpending != category) {
        expensesToSave.push(this.expensesListToShow[i]);
      }
    }
    this.expensesListToShow = expensesToSave;
  }

  showExpensesListAfterFilter(category){
    for (var i = 0; i < this.expenses.length; i++) { 
      if (this.expenses[i].typeOfSpending === category) {
        this.expensesListToShow.push(this.expenses[i]);
      }
    }
  }

  addToCategoriesSelected(category){
    category.checked = !category.checked;
    if (category.checked) {
      this.categoriesSelected.push(category.text);
      this.showExpensesListAfterFilter(category.text);
    } else {
      this.categoriesSelected.pop(category.text);
      this.removeExpensesListAfterFilter(category.text);
    }
    console.log("%o", this.expensesListToShow);
  }
}

bootstrap(AccountDetails);