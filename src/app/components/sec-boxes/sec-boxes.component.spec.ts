import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecBoxesComponent } from './sec-boxes.component';

describe('SecBoxesComponent', () => {
  let component: SecBoxesComponent;
  let fixture: ComponentFixture<SecBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
