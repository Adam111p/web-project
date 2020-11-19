import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthDialog } from './auth.dialog';

describe('AuthDialog', () => {
  let component: AuthDialog;
  let fixture: ComponentFixture<AuthDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
