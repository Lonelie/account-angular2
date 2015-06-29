export class ExpensesServices {
  expenses: Array<Expense> = [];

  setExpenses(expenses: Array<Object>) {
    this.expenses = expenses.map(expense => {
      return new Expense(expense['description'], expense['account'], expense['typeOfSpending'], expense['date'], expense['amount']);
    });
  }

  getExpenses() {
    //return this.expenses;
    return [
      { description: 'carburant', account: 'Master Card', typeOfSpending: 'Car', date:'09/06/2015', amount:'23 euros'},
      { description: 'veste en dain', account: 'HSBC', typeOfSpending: 'Leisure', date:'09/07/2015', amount:'200 dollars'},
      { description: 'mojito', account: 'Master Card', typeOfSpending: 'Flat', date:'09/07/2015', amount:'10 euros'},
      { description: 'mojito', account: 'Visa', typeOfSpending: 'Leisure', date:'09/07', amount:'10 euros'},
      { description: 'mojito', account: 'Visa', typeOfSpending: 'Flat', date:'09/07/2015', amount:'5 euros'},
      { description: 'mojito', account: 'HSBC', typeOfSpending: 'Piano lessions', date:'09/07/2015', amount:'10 euros'}
    ];
  }

  addExpenses(description: String, account: String, typeOfSpending: String, date: String, amount: String) {
    this.expenses.push(new Task(title, description, account, typeOfSpending, date, amount));
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