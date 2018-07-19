import { NgSimpleMaterialModule } from './ng-simple-material.module';

describe('NgSimpleMaterialModule', () => {
  let ngSimpleMaterialModule: NgSimpleMaterialModule;

  beforeEach(() => {
    ngSimpleMaterialModule = new NgSimpleMaterialModule();
  });

  it('should create an instance', () => {
    expect(ngSimpleMaterialModule).toBeTruthy();
  });
});
