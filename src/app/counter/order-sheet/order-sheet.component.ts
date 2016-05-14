import {Component} from '@angular/core';
import {MenuService} from '../shared';
import {DebugPanelComponent} from '../debug-panel/debug-panel.component';

@Component({
  selector: 'order-sheet',
  providers: [MenuService],
  directives: [DebugPanelComponent],
  templateUrl: 'order-sheet.component.html',
  styleUrls: ['order-sheet.component.css'],
  moduleId: module.id
})
export class OrderSheetComponent {
  menuItems = {};
  
  constructor(private _menuService: MenuService) {}

  ngOnInit() {
    this.menuItems = this._menuService.getMenuItems();
  }
}
