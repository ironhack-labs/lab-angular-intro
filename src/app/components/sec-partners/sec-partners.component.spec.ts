import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecPartnersComponent } from './sec-partners.component';

describe('SecPartnersComponent', () => {
  let component: SecPartnersComponent;
  let fixture: ComponentFixture<SecPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecPartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
