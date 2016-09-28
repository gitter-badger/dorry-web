import { DorryWebPage } from './app.po';

describe('dorry-web App', function() {
  let page: DorryWebPage;

  beforeEach(() => {
    page = new DorryWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
