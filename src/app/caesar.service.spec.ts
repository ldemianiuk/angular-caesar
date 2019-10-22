import { TestBed } from '@angular/core/testing';

import { CaesarService } from './caesar.service';

describe('CaesarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaesarService = TestBed.get(CaesarService);
    expect(service).toBeTruthy();
  });

  it('should encrypt empty string', () => {
    const service: CaesarService = TestBed.get(CaesarService);
    expect(service.encrypt('', 0)).toBe('');
    expect(service.encrypt('', 13)).toBe('');
  });

  it('should encrypt rot0', () => {
    const service: CaesarService = TestBed.get(CaesarService);
    expect(service.encrypt('Hello, world!', 0)).toBe('Hello, world!');
  });

  it('should encrypt rot13', () => {
    const service: CaesarService = TestBed.get(CaesarService);
    expect(service.encrypt('Hello, world!')).toBe('Uryyb, jbeyq!');
  });

  it('should encrypt rot39===rot13', () => {
    const service: CaesarService = TestBed.get(CaesarService);
    expect(service.encrypt('Hello, world!', 39)).toBe('Uryyb, jbeyq!');
  });

});
