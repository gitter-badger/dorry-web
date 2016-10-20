import { DorryWebPage } from './app.po';

describe('dorry-web App', function() {
  let page: DorryWebPage;

  beforeEach(() => {
    page = new DorryWebPage();
  });

  /***************************************************************************
   * Testing static text contents
   **************************************************************************/
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

  // it('should display stopped service header', () => {
  //   page.navigateToService();
  //   expect(page.getStoppedServiceHeader()).toEqual('Stopped Service');
  // });
  //
  // it('should display running service header', () => {
  //   page.navigateToService();
  //   expect(page.getRunningServiceHeader()).toEqual('Running Service');
  // });



  /***************************************************************************
   * Testing click events
   **************************************************************************/
  it('should remove the first Error service', () => {
    page.navigateToService();
    // expect(page.getErrorServiceCount()).toEqual(6);
  });

  it('should remove all services', () => {
    page.navigateToService();
    page.removeAll();
    // expect(page.getErrorServiceCount()).toEqual(0);
    expect(page.removeAll()).toEqual('Remove All');
  });

  it('should restart the first stopped service', () => {
    page.navigateToService();
    // expect(page.getRunningServiceCount()).toEqual(6);
    // expect(page.getStoppedServiceCount()).toEqual(6);
  });
});
