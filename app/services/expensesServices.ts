import {Categories, Category} from 'services/categories';

export class ExpensesServices {
  expenses: Array<Expense> = [];
  categoriesServices: Array<Category> = [];
  categoriesSelected: Array<Category> = [];

  setExpenses(expenses: Array<Object>) {
    this.expenses = expenses.map(expense => {
      return new Expense(expense['description'], expense['account'], expense['typeOfSpending'], expense['date'], expense['amount']);
    });
  }

  getExpenses() {
    return this.expenses = [
      { description: 'Parfum', account: 'Livret A', typeOfSpending: 'Gifts', date:'09/06/2015', amount:'23 euros'},
      { description: 'Ordinateur', account: 'Compte courant', typeOfSpending: 'Flat', date:'09/07/2015', amount:'200 dollars'},
      { description: 'Vaste', account: 'Livret A', typeOfSpending: 'Flat', date:'12/03/2015', amount:'10 euros'},
      { description: 'Troninette', account: 'Compte courant', typeOfSpending: 'Gifts', date:'09/07', amount:'10 euros'},
      { description: 'Essuie glasse', account: 'Visa', typeOfSpending: 'Car', date:'09/07/2015', amount:'5 euros'},
      { description: 'Tenue mariage', account: 'Compte courant', typeOfSpending: 'Leisure', date:'01/12/2015', amount:'10 euros'},
      { description: 'Tapis', account: 'Livret Jeune', typeOfSpending: 'Flat', date:'09/07/2015', amount:'5 euros'},
      { description: 'Veste', account: 'Compte courant', typeOfSpending: 'Leisure', date:'09/07/2015', amount:'10 euros'},
      { description: 'carburant', account: 'Master Card', typeOfSpending: 'Car', date:'09/06/2015', amount:'23 euros'},
      { description: 'Veste en dain', account: 'HSBC', typeOfSpending: 'Leisure', date:'09/07/2015', amount:'200 dollars'},
      { description: 'Cocktails', account: 'Master Card', typeOfSpending: 'Flat', date:'09/07/2015', amount:'10 euros'},
      { description: 'Epilation', account: 'Compte courant', typeOfSpending: 'Leisure', date:'10/04/2015', amount:'10 euros'},
      { description: 'Mojito', account: 'Compte courant', typeOfSpending: 'Leisure', date:'09/01/2015', amount:'10 euros'},
      { description: 'Coussin', account: 'Compte courant', typeOfSpending: 'Flat', date:'19/03/2015', amount:'5 euros'},
      { description: 'Montre Chaumet', account: 'Livret Jeune', typeOfSpending: 'Gifts', date:'20/02/2015', amount:'6 euros'},
      { description: 'mojito', account: 'Livret Jeune', typeOfSpending: 'Leisure', date:'17/06/2015', amount:'12 euros'},
      { description: 'mojito', account: 'Livret A', typeOfSpending: 'Flat', date:'09/07/2015', amount:'5 euros'}
    ];
  }

  addExpenses(description: String, account: String, typeOfSpending: String, date: String, amount: String) {
    this.expenses.push(new Expense(description, account, typeOfSpending, date, amount));
  }


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