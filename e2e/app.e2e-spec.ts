import { TektutorialshubPage } from './app.po';

describe('tektutorialshub App', function() {
  let page: TektutorialshubPage;

  beforeEach(() => {
    page = new TektutorialshubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
