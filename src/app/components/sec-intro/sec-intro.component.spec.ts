import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecIntroComponent } from './sec-intro.component';

describe('SecIntroComponent', () => {
  let component: SecIntroComponent;
  let fixture: ComponentFixture<SecIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
