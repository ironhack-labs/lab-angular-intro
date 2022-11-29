import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSpecsComponent } from './project-specs.component';

describe('ProjectSpecsComponent', () => {
  let component: ProjectSpecsComponent;
  let fixture: ComponentFixture<ProjectSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSpecsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
