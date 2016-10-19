import { DorryWebPage } from './app.po';

describe('dorry-web App', function() {
  let page: DorryWebPage;
  // Service button events testing flags
  var testServiceBtn = false;
  var testRemoveAll = false;
  // App button events testing flags
  var testAppBtn = true;

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
    expect(page.getErrorServiceHeader())
      .toEqual('Oops! There Is Something Wrong');
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

  /***************************************************************************
   * Testing click events of services
   **************************************************************************/
  if (testServiceBtn) {
    it('should stop the first running service', () => {
      page.navigateToService();
      page.stopService(2);
    });

    it('should restart the first stopped service', () => {
      page.navigateToService();
      page.restartService(2);
    });

    it('should remove the first Error service', () => {
      page.navigateToService();
      page.removeService(2);
      page.clickYes();
    });

    if (testRemoveAll) {
      it('should remove all services', () => {
        page.navigateToService();
        page.removeAll();
        page.clickYes();
        expect(page.getErrorServiceCount()).toEqual(0);
      });
    }
  }

  /***************************************************************************
   ***************************************************************************
   ***************************************************************************
   ***************************************************************************
   ***************************************************************************
   ***************************************************************************/

  /***************************************************************************
   * Testing click events of apps
   **************************************************************************/
  if (testAppBtn) {
    it('should display then close the app details', () => {
      page.navigateToApp();
      page.checkAppDetails();
      page.closeDetails();
    });

    it('should remove an app', () => {
      page.navigateToApp();
      page.removeApp();
    });
  }
});
