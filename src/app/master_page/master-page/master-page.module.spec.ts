import { MasterPageModule } from './master-page.module';

describe('MasterPageModule', () => {
  let masterPageModule: MasterPageModule;

  beforeEach(() => {
    masterPageModule = new MasterPageModule();
  });

  it('should create an instance', () => {
    expect(masterPageModule).toBeTruthy();
  });
});
