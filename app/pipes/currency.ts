import {Pipe} from 'angular2/angular2';

export class Currency extends Pipe {
  supports(): boolean {
    return true;
  }

  transform(value): string {
    let change = value + "€";
    return change.toString();
  }

  create(): Pipe {
    return this;
  }
}