import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'component-2', // can be anything, because we inject the component via <router-outlet>
})
@View({
  templateUrl: 'components/check/check.html',
})
export class Check {

}