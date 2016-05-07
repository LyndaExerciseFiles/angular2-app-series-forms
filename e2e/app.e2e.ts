import { Angular2SeriesAppPage } from './app.po';

describe('angular2-series-app App', function() {
  let page: Angular2SeriesAppPage;

  beforeEach(() => {
    page = new Angular2SeriesAppPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-series-app works!');
  });
});
