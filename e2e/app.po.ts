export class Angular2SeriesAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-series-app-app h1')).getText();
  }
}
