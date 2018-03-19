import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdspLogoutComponent } from './mdsp-logout.component';

describe('MdspLogoutComponent', () => {
  let component: MdspLogoutComponent;
  let fixture: ComponentFixture<MdspLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdspLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdspLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
