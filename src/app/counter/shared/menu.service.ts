import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() {}

  getMenuItems() {
    let menuItems = {
      specialtySandwiches: [
        { name: 'The Grinder', meats: ['salami','ham','roast beef']},
        { name: 'Cordon Blue', meats: ['chicken','ham']}
      ],
      meats: ['ham','turkey','salami','roast beef','pastrami','tuna'],
      cheeses: ['provolone','cheddar','swiss','colby jack','pepper jack']
    };
    return menuItems;
  }
}
