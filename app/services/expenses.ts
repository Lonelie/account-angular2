export class Expenses {

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
}