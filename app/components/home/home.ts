import {Component, View, NgFor} from 'angular2/angular2';

@Component({
  selector: 'component-1' // can be anything, because we inject the component via <router-outlet>
})
@View({
  templateUrl: 'components/home/home.html',
  directives: [NgFor]
})
export class Home {
  categoriesSelected = [];

  expensesListToShow:Array<String> = [];

  categoriesList = [
    {text:"All Categories", checked:false}, {text:"Flat", checked:false}, {text:"Leisure", checked:false},  {text:"Nutrition", checked:false}, {text:"University", checked:false}, {text:"Car", checked:false}, 
    {text:"Piano lessions",checked:false}
  ];

	expensesList:Array<String> = [
    { description: 'carburant', account: 'Master Card', type_of_spending: 'Car', date:'09/06/2015', amount:'23 euros'},
    { description: 'veste en dain', account: 'Societe General', type_of_spending: 'Leisure', date:'09/07/2015', amount:'200 dollars'},
    { description: 'mojito', account: 'Master Card', type_of_spending: 'Flat', date:'09/07/2015', amount:'10 euros'},
    { description: 'mojito', account: 'Visa', type_of_spending: 'Leisure', date:'09/07/2015', amount:'10 euros'},
    { description: 'mojito', account: 'Visa', type_of_spending: 'Flat', date:'09/07/2015', amount:'5 euros'},
    { description: 'mojito', account: 'Societe General', type_of_spending: 'Piano lessions', date:'09/07/2015', amount:'10 euros'}
  ];

  removeExpensesListAfterFilter(category String) {
    for (i = 0; i < this.expensesList.length; i++) {
      if (this.expensesList[i].type_of_spending === category) {
        this.expensesListToShow.splice(this.expensesList[i],1);
      }
    }
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

