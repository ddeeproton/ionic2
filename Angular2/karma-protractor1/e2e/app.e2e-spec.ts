import { ProjetNG1Page } from './app.po';

describe('projet-ng1 App', function() {
  let page: ProjetNG1Page;

  beforeEach(() => {
    page = new ProjetNG1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
