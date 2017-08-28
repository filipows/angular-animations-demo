import { AngularAnimationsDemoPage } from './app.po';

describe('angular-animations-demo App', () => {
  let page: AngularAnimationsDemoPage;

  beforeEach(() => {
    page = new AngularAnimationsDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
