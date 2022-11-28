import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecEventsComponent } from './sec-events.component';

describe('SecEventsComponent', () => {
  let component: SecEventsComponent;
  let fixture: ComponentFixture<SecEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
