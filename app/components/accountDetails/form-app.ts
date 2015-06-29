/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, formDirectives, ControlGroup, Control, Validators} from 'angular2/angular2';
import {CustomValidators} from 'validators/loginValidators';
import {ExpensesServices} from '../../services/expensesServices';

@Component({
  selector: "form-app"
})

@View({
  directives: [formDirectives],
  templateUrl: 'form-app.html';
})

export class FormApp {
  expensesServices: ExpensesServices;
  appForm: ControlGroup;

  constructor(@Parent() expensesServices: ExpensesServices) {

    this.expensesServices = ExpensesServices;

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

bootstrap(FormApp);