import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
  selector: 'component-1' // can be anything, because we inject the component via <router-outlet>
})
@View({
  templateUrl: 'components/check/check.html',
  directives: [NgFor]
})
export class Check {
  categoriesSelected = [];

  expensesListToShow:Array<String> = [];

  categoriesList = [
    {text:"All Categories", checked:false, color:"blue"}, {text:"Flat", checked:false, color:"blue"}, {text:"Leisure", checked:false, color:"green"},  {text:"Nutrition", checked:false, color:"pink"}, {text:"University", checked:false, color:"blue"}, {text:"Car", checked:false, color:"orange"}, 
    {text:"Piano lessions",checked:false, color:"violet"}
  ];

	expensesList:Array<String> = [
    { description: 'carburant', account: 'Master Card', type_of_spending: 'Car', date:'09/06/2015', amount:'23 euros'},
    { description: 'veste en dain', account: 'HSBC', type_of_spending: 'Leisure', date:'09/07/2015', amount:'200 dollars'},
    { description: 'mojito', account: 'Master Card', type_of_spending: 'Flat', date:'09/07/2015', amount:'10 euros'},
    { description: 'mojito', account: 'Visa', type_of_spending: 'Leisure', date:'09/07', amount:'10 euros'},
    { description: 'mojito', account: 'Visa', type_of_spending: 'Flat', date:'09/07/2015', amount:'5 euros'},
    { description: 'mojito', account: 'HSBC', type_of_spending: 'Piano lessions', date:'09/07/2015', amount:'10 euros'}
  ];

  removeExpensesListAfterFilter = function(category String) {
    //console.log(category);
    expensesToSave = [];
    for (var i = 0; i < this.expensesListToShow.length; i++) {
      //console.log(this.expensesListToShow[i]);
      if (this.expensesListToShow[i].type_of_spending != category) {
        expensesToSave.push(this.expensesListToShow[i]);
      }
    }
    //console.log(expensesToSave);
    this.expensesListToShow = expensesToSave;
  }

  addToCategoriesSelected(category){
    category.checked = !category.checked;
    if (category.checked) {
      this.categoriesSelected.push(category.text);
      //console.log(this.categoriesSelected);
      this.showExpensesListAfterFilter(category.text);
    } else {
      this.categoriesSelected.pop(category.text)
      //console.log(this.categoriesSelected);
      this.removeExpensesListAfterFilter(category.text);
    }
    console.log(this.expensesListToShow);
  }

  showExpensesListAfterFilter(category String){
    for (i = 0; i < this.expensesList.length; i++) { 
      if (this.expensesList[i].type_of_spending === category) {
        this.expensesListToShow.push(this.expensesList[i]);
        //console.log(this.expensesListToShow);
        //console.log(this.expensesList[i]);
      }
    }
  }

}

bootstrap(Check);
