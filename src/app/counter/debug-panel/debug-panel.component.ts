import {Component, Input} from '@angular/core';

@Component({
  selector: 'debug-panel',
  template: `
    <input id="debugToggle" type="checkbox">
    <label for="debugToggle"></label>
    <div>
      <pre>{{ data | json }}</pre>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      background-color: rgba(237, 119, 119, .9);
      position: fixed;
      top: 0;
      right: 0;
    }
    input[type=checkbox] {
      display: none;
    }
    label {
      display: block;
      text-align: center;
      padding: 4px 8px;
    }
    label:before {
      content: "show debug";
      width: 100%;
      cursor: pointer;
    }
    input[type=checkbox]:checked+label:before {
      content: "hide debug";
    }
    input[type=checkbox]:checked~div {
      display: block;
      height: 100%;
    }
    div {
      display: none;
    }
    pre {
      overflow-y: scroll;
      height: 100%;
      font-size: 2em;
      padding: 6px 20px;
      margin: 0;
    }
  `]
})
export class DebugPanelComponent {
  @Input() data;
}