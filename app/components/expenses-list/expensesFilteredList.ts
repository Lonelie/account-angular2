import {Expense} from 'services/expensesServices';
import {Category} from 'services/categories';

export class ExpensesFilteredList {
	expenses : Array<Expense>;
	expensesListToShow: Array<Expense> = [];
	categoriesSelected:Array<Category> = [];
	
	constructor(expenses: Array<Expense>){
		this.expenses = expenses;
	}

  refreshExpensesList(category: Category) : Array<Expense> {
    category.checked = !category.checked;
    if (category.checked) {
      this.categoriesSelected.push(category);
      this.expensesListToShow = this.showExpensesListAfterFilter(category);
    } else {
      this.expensesListToShow = this.refreshCategoriesListSelected(category);
    }
    console.log("this.expensesListToShow", this.expensesListToShow);
    return this.expensesListToShow;
  }

  refreshCategoriesListSelected(category: Category) : Array<Expense> {
    var expensesToSave:Array<Expense> = [];
    for (var i = 0; i < this.expensesListToShow.length; i++) {
      if (this.expensesListToShow[i].typeOfSpending != category.text) {
        expensesToSave.push(this.expensesListToShow[i]);
      }
    }
    this.expensesListToShow = expensesToSave;
    return this.expensesListToShow;
  }

  showExpensesListAfterFilter(category: Category) : Array<Expense> {
    console.log("this.expenses", this.expenses);
    for (var i = 0; i < this.expenses.length; i++) { 
      if (this.expenses[i].typeOfSpending === category.text) {
        this.expensesListToShow.push(this.expenses[i]);
      }
    }
    return this.expensesListToShow;
  }
}