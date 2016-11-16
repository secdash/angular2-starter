import { Insurhack2Page } from './app.po';

describe('insurhack2 App', function() {
  let page: Insurhack2Page;

  beforeEach(() => {
    page = new Insurhack2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
