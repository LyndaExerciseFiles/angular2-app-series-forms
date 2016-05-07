import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2SeriesAppAppComponent } from '../app/angular2-series-app.component';

beforeEachProviders(() => [Angular2SeriesAppAppComponent]);

describe('App: Angular2SeriesApp', () => {
  it('should create the app',
      inject([Angular2SeriesAppAppComponent], (app: Angular2SeriesAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-series-app works!\'',
      inject([Angular2SeriesAppAppComponent], (app: Angular2SeriesAppAppComponent) => {
    expect(app.title).toEqual('angular2-series-app works!');
  }));
});
