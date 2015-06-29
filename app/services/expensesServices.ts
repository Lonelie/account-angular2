import {Expense} from 'services/expensesServices';
import {Categories, Category} from 'services/categories';

export class ExpensesServices {
  expenses: Array<Expense> = [];
  expensesListToShow: Array<Expense> = [];
  categoriesServices: Categories;
  categoriesSelected: Array<Categories> = [];

  setExpenses(expenses: Array<Object>) {
    this.expenses = expenses.map(expense => {
      return new Expense(expense['description'], expense['account'], expense['typeOfSpending'], expense['date'], expense['amount']);
    });
  }

  getExpenses() {
    return this.expenses = [
      { description: 'carburant', account: 'Master Card', typeOfSpending: 'Car', date:'09/06/2015', amount:'23 euros'},
      { description: 'veste en dain', account: 'HSBC', typeOfSpending: 'Leisure', date:'09/07/2015', amount:'200 dollars'},
      { description: 'mojito', account: 'Master Card', typeOfSpending: 'Flat', date:'09/07/2015', amount:'10 euros'},
      { description: 'mojito', account: 'Visa', typeOfSpending: 'Leisure', date:'09/07', amount:'10 euros'},
      { description: 'mojito', account: 'Visa', typeOfSpending: 'Flat', date:'09/07/2015', amount:'5 euros'},
      { description: 'mojito', account: 'HSBC', typeOfSpending: 'Piano lessions', date:'09/07/2015', amount:'10 euros'},
      { description: 'carburant', account: 'Master Card', typeOfSpending: 'Car', date:'09/06/2015', amount:'23 euros'},
      { description: 'veste en dain', account: 'HSBC', typeOfSpending: 'Leisure', date:'09/07/2015', amount:'200 dollars'},
      { description: 'mojito', account: 'Master Card', typeOfSpending: 'Flat', date:'09/07/2015', amount:'10 euros'},
      { description: 'mojito', account: 'Visa', typeOfSpending: 'Leisure', date:'09/07', amount:'10 euros'},
      { description: 'mojito', account: 'Visa', typeOfSpending: 'Flat', date:'09/07/2015', amount:'5 euros'},
      { description: 'mojito', account: 'HSBC', typeOfSpending: 'Piano lessions', date:'09/07/2015', amount:'10 euros'},
      { description: 'carburant', account: 'Master Card', typeOfSpending: 'Car', date:'09/06/2015', amount:'23 euros'},
      { description: 'veste en dain', account: 'HSBC', typeOfSpending: 'Leisure', date:'09/07/2015', amount:'200 dollars'},
      { description: 'mojito', account: 'Master Card', typeOfSpending: 'Flat', date:'09/07/2015', amount:'10 euros'},
      { description: 'mojito', account: 'Visa', typeOfSpending: 'Leisure', date:'09/07', amount:'10 euros'},
      { description: 'mojito', account: 'Visa', typeOfSpending: 'Flat', date:'09/07/2015', amount:'5 euros'},
      { description: 'mojito', account: 'HSBC', typeOfSpending: 'Piano lessions', date:'09/07/2015', amount:'10 euros'},
      { description: 'carburant', account: 'Master Card', typeOfSpending: 'Car', date:'09/06/2015', amount:'23 euros'},
      { description: 'veste en dain', account: 'HSBC', typeOfSpending: 'Leisure', date:'09/07/2015', amount:'200 dollars'},
      { description: 'mojito', account: 'Master Card', typeOfSpending: 'Flat', date:'09/07/2015', amount:'10 euros'},
      { description: 'mojito', account: 'Visa', typeOfSpending: 'Leisure', date:'09/07', amount:'10 euros'},
      { description: 'mojito', account: 'Visa', typeOfSpending: 'Flat', date:'09/07/2015', amount:'5 euros'},
      { description: 'mojito', account: 'HSBC', typeOfSpending: 'Piano lessions', date:'09/07/2015', amount:'10 euros'}
    ];
  }

  addExpenses(description: String, account: String, typeOfSpending: String, date: String, amount: String) {
    this.expenses.push(new Expense(description, account, typeOfSpending, date, amount));
  }

  addCategories(category: Category) : Array<Expense> {
    category.checked = !category.checked;
    console.log("checked", category.checked);
    if (category.checked) {
      this.categoriesSelected.push(category);
      console.log("this.expenses", this.expenses);
      this.expensesListToShow = this.showExpensesListAfterFilter(category);
    } else {
      this.expensesListToShow = this.updateExpensesListToShow(category);
    }
    console.log("categoriesSelected", this.categoriesSelected);
    console.log("this.expensesListToShow", this.expensesListToShow);
    return this.expensesListToShow;
  }

  updateExpensesListToShow(category: Category) : Array<Expense> {
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

  addToCategoriesSelected(category: Category): Array<Expense> {
    category.checked = !category.checked;
    if (category.checked) {
      this.categoriesSelected.push(category);
      this.showExpensesListAfterFilter(category);
    } else {
      this.updateExpensesListToShow(category);
    }
    console.log("%o", this.expensesListToShow);
    return this.expensesListToShow;
  }

  /*
  getExpensesSaved() {
    return [
      { description: 'carburant', account: 'Master Card', typeOfSpending: 'Car', date:'09/06/2015', amount:'23 euros'},
      { description: 'veste en dain', account: 'HSBC', typeOfSpending: 'Leisure', date:'09/07/2015', amount:'200 dollars'},
      { description: 'mojito', account: 'Master Card', typeOfSpending: 'Flat', date:'09/07/2015', amount:'10 euros'},
      { description: 'mojito', account: 'Visa', typeOfSpending: 'Leisure', date:'09/07', amount:'10 euros'},
      { description: 'mojito', account: 'Visa', typeOfSpending: 'Flat', date:'09/07/2015', amount:'5 euros'},
      { description: 'mojito', account: 'HSBC', typeOfSpending: 'Piano lessions', date:'09/07/2015', amount:'10 euros'}
    ];
  }
  */
}
export class Expense {
  description: String;
  account: String;
  typeOfSpending: String;
  date: String;
  amount: String;

  constructor(description: String, account: String, typeOfSpending: String, date: String, amount: String) {
    this.description = description;
    this.account = account;
    this.typeOfSpending = typeOfSpending;
    this.date = date;
    this.amount = amount;
  }
}