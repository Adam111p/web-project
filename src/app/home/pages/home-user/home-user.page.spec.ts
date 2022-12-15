import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUserPage } from './home-user.page';

describe('HomeUserPage', () => {
  let component: HomeUserPage;
  let fixture: ComponentFixture<HomeUserPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUserPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
