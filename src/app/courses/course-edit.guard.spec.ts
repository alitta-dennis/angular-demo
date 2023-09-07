import { TestBed, async, inject } from '@angular/core/testing';

import { ProductEditGuard } from './course-edit.guard';

describe('ProductEditGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductEditGuard]
    });
  });

  it('should ...', inject([ProductEditGuard], (guard: ProductEditGuard) => {
    expect(guard).toBeTruthy();
  }));
});