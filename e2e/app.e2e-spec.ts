import { StudentViewerPage } from './app.po';

describe('student-viewer App', () => {
  let page: StudentViewerPage;

  beforeEach(() => {
    page = new StudentViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
