import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecStandardsComponent } from './sec-standards.component';

describe('SecStandardsComponent', () => {
  let component: SecStandardsComponent;
  let fixture: ComponentFixture<SecStandardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecStandardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecStandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
