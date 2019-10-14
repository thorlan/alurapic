import { NavModule } from './nav.module';

describe('NavmoduleModule', () => {
  let navmoduleModule: NavModule;

  beforeEach(() => {
    navmoduleModule = new NavModule();
  });

  it('should create an instance', () => {
    expect(navmoduleModule).toBeTruthy();
  });
});
