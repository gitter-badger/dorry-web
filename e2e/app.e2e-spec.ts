import { DorryWebPage } from './app.po';

describe('dorry-web App', function() {
  let page: DorryWebPage;

  beforeEach(() => {
    page = new DorryWebPage();
  });

  it('should display masthead', () => {
    page.navigateToHome();
    expect(page.getMasthead()).toEqual('masthead works!');
  });

  it('should display footer', () => {
    page.navigateToHome();
    expect(page.getFooter()).toEqual('footer works!');
  });

  it('should display error service header', () => {
    page.navigateToService();
    expect(page.getErrorServiceHeader()).toEqual('Oops! There Is Something Wrong');
  });

  it('should display remove all button', () => {
    page.navigateToService();
    expect(page.getRemoveAll()).toEqual('Remove All');
  });

  it('should display stopped service header', () => {
    page.navigateToService();
    expect(page.getStoppedServiceHeader()).toEqual('Stopped Service');
  });

  it('should display running service header', () => {
    page.navigateToService();
    expect(page.getRunningServiceHeader()).toEqual('Running Service');
  });
});
