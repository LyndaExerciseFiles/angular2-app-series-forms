import {Component} from '@angular/core';
import {OrderSheetComponent} from './counter';

@Component({
  moduleId: module.id,
  selector: 'sando-app',
  directives: [OrderSheetComponent],
  templateUrl: 'sando-app.component.html',
  styleUrls: ['sando-app.component.css']
})
export class SandoAppComponent {
  title = `Jackson's Deli and Market`;
}
