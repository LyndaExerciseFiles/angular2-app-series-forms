import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SandoAppComponent } from '../app/sando-app.component';

beforeEachProviders(() => [SandoAppComponent]);

describe('App: SandoApp', () => {
  it('should create the app',
      inject([SandoAppComponent], (app: SandoAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
