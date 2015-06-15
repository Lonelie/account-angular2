/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, defaultPipes, PipeRegistry, bind} from 'angular2/angular2';
import {Currency} from 'pipes/currency';

@Component({
  selector: 'app'
})
@View({
  template: `<h1>Account Angular 2.0</h1>
                    <p>test account {{amount | currency }} </p>`

})
class App {
    amount: Number = 245;
}


export var pipes = Object.assign({}, defaultPipes, {
  currency: [
    new Currency()
  ]
});

bootstrap(App, bind(PipeRegistry).toValue(new PipeRegistry(pipes)));
