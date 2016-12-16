import { App3Page } from './app.po';

describe('app3 App', function() {
  let page: App3Page;

  beforeEach(() => {
    page = new App3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
