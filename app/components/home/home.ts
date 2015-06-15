import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'component-1' // can be anything, because we inject the component via <router-outlet>
})
@View({
  templateUrl: 'components/home/home.html',
})
export class Home {

}