import {Component, View, formDirectives, ControlGroup, Control, Validators, Parent} from 'angular2/angular2';
import {ExpensesServices} from '../../services/expensesServices';

@Component({
  selector: "form-app"
})

@View({
  directives: [formDirectives],
  templateUrl: 'components/accountDetails/form-app.html'
})

export class FormApp {
  expensesServices: ExpensesServices;
  appForm: ControlGroup;
  visible: boolean;

  constructor(@Parent() expensesServices: ExpensesServices) {

    this.expensesServices = expensesServices;

    this.appForm = new ControlGroup({
      description: new Control("", Validators.required),
      typeOfSpending: new Control("", Validators.required),
      date: new Control("", Validators.required),
      amount: new Control("", Validators.required)
    });
    
  }

  onSubmit(e) {
    e.preventDefault();
    if(this.appForm.valid) { // return true or false, depending on the form state
      this.expensesServices.addExpenses(
        this.appForm.value['description'], 
        this.appForm.value['typeOfSpending'], 
        this.appForm.value['date'],
        this.appForm.value['amount']
      );

      console.log(this.appForm.value['description']);
      console.log(this.appForm.value['typeOfSpending']);
      console.log(this.appForm.value['date']);
      console.log(this.appForm.value['amount']);

    } else {
      console.error("invalid form", this.appForm);
    }
  }

  toggle(){
    this.visible = !this.visible;
  }

}
