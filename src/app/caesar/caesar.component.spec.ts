import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaesarComponent } from './caesar.component';
import {FormsModule} from '@angular/forms';

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
});
