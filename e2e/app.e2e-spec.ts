import { BraillePage } from './app.po';

describe('braille App', function() {
  let page: BraillePage;

  beforeEach(() => {
    page = new BraillePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
