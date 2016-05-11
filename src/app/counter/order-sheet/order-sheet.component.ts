import { Component } from '@angular/core';
import { MenuService } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'order-sheet',
  templateUrl: 'order-sheet.component.html',
  styleUrls: ['order-sheet.component.css'],
  providers: [MenuService]
})
export class OrderSheetComponent {
  menuItems = {};
  
  constructor(private _menuService: MenuService) {}

  ngOnInit() {
    this.menuItems = this._menuService.getMenuItems();
  }

}
