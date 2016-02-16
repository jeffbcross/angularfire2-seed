import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {AngularFire, FirebaseObservable} from 'angularfire2';

@Component({
  selector: 'about',
  moduleId: module.id,
  templateUrl: './about.html',
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class AboutCmp {
  newName: string;
  names: FirebaseObservable<string[]>;
  constructor(af:AngularFire) {
    this.names = af.list('/scientists');
  }
 /*
 * @param newname  any text as input.
 * @returns return false to prevent default form submit behavior to refresh the page.
 */
  addName(): boolean {
    this.names.add(this.newName);
    this.newName = '';
    return false;
  }
}
