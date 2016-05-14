import {Injectable} from '@angular/core';

@Injectable()
export class MenuService {

  constructor() {}

  getMenuItems() {
    let menuItems = {
      specialtySandwiches: [
        {
          name: 'The Grinder',
          meats: ['salami','ham','roast beef'],
          cheeses: ['cheddar','colby jack'],
          veggiesAndSuch: ['lettuce','tomato','onions','mayo']
        },
        {
          name: 'Cordon Bleu',
          meats: ['chicken (grilled)','ham'],
          cheeses: ['swiss'],
          veggiesAndSuch: ['lettuce','tomato','mustard']
        },
        {
          name: 'Cali Cheesesteak',
          meats: ['steak'],
          cheeses: ['pepper jack'],
          veggiesAndSuch: ['onions','avocado','black pepper']
        }
      ],
      meats: [
        'ham','turkey','salami','steak',
        'roast beef','pastrami','tuna',
        'chicken (deli)','chicken (grilled)'
      ],
      cheeses: [
        'provolone','cheddar','swiss','colby jack',
        'pepper jack'
      ],
      veggiesAndSuch: [
        'lettuce','tomato','pickles','onions','olives',
        'avocado','mustard','mayo','black pepper','salt',
        'oil','vinegar'
      ]
    };
    return menuItems;
  }
}
