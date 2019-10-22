import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaesarComponent } from './caesar.component';
import {FormsModule} from '@angular/forms';

const HELLO = 'Hello, world!';
const HELLO_3 = 'Khoor, zruog!';

describe('CaesarComponent', () => {
  let component: CaesarComponent;
  let fixture: ComponentFixture<CaesarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaesarComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaesarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should encrypt', () => {
    component.key = 3;
    component.plaintext = HELLO;
    component.onPlaintextChange();
    expect(component.encrypted).toBe(HELLO_3);
  });

  it('should decrypt', () => {
    component.key = 3;
    component.encrypted = HELLO_3;
    component.onEncryptedChange();
    expect(component.plaintext).toBe(HELLO);
  });

  it('should keep direction after key change', () => {
    component.key = 3;
    component.plaintext = '';
    component.encrypted = '';
    component.onPlaintextChange();
    component.plaintext = HELLO;
    component.onKeyChange();
    expect(component.encrypted).toBe(HELLO_3);
    component.plaintext = '';
    component.encrypted = '';
    component.onEncryptedChange();
    component.encrypted = HELLO_3;
    component.onKeyChange();
    expect(component.plaintext).toBe(HELLO);
  });

});
