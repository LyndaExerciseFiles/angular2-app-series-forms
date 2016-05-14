import {Component, Input} from '@angular/core';

@Component({
  selector: 'debug-panel',
  template: '<pre>{{ data | json }}</pre>'
})
export class DebugPanelComponent {
  @Input() data;
}