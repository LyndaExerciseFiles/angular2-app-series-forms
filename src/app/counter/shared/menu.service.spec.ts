import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { MenuService } from './menu.service';

describe('Menu Service', () => {
  beforeEachProviders(() => [MenuService]);

  it('should ...',
      inject([MenuService], (service: MenuService) => {
    expect(service).toBeTruthy();
  }));
});
