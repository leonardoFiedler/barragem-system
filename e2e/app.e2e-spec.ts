import { BarragemSystemPage } from './app.po';

describe('barragem-system App', () => {
  let page: BarragemSystemPage;

  beforeEach(() => {
    page = new BarragemSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
