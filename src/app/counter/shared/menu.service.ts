import {Injectable} from '@angular/core';

@Injectable()
export class MenuService {

  constructor() {}

  getMenuItems() {
    let menuItems = {
      specialtySandwiches: [
        {
          name: 'The Grinder',
          bread: 'sourdough roll',
          meats: ['salami','ham','roast beef'],
          cheeses: ['cheddar','colby jack'],
          veggiesAndSuch: ['lettuce','tomato','onions','mayo']
        },
        {
          name: 'Cordon Bleu',
          bread: 'white roll',
          meats: ['chicken (grilled)','ham'],
          cheeses: ['swiss'],
          veggiesAndSuch: ['lettuce','tomato','mustard']
        },
        {
          name: 'Cali Cheesesteak',
          bread: 'white roll',
          meats: ['steak'],
          cheeses: ['pepper jack'],
          veggiesAndSuch: ['onions','avocado','black pepper']
        }
      ],
      breads: [
        'wheat roll','white roll','sourdough roll',
        'ciabatta','pita','marble rye','leaf lettuce'
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
