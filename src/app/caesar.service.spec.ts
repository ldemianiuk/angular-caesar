import { TestBed } from '@angular/core/testing';

import { CaesarService } from './caesar.service';

let service: CaesarService;

describe('CaesarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(CaesarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should encrypt empty string', () => {
    expect(service.encrypt('', 0)).toBe('');
    expect(service.encrypt('', 13)).toBe('');
  });

  it('should encrypt rot0', () => {
    expect(service.encrypt('Hello, world!', 0)).toBe('Hello, world!');
  });

  it('should encrypt rot13', () => {
    expect(service.encrypt('Hello, world!')).toBe('Uryyb, jbeyq!');
  });

  it('should encrypt rot39===rot13', () => {
    expect(service.encrypt('Hello, world!', 39)).toBe('Uryyb, jbeyq!');
  });

});
