import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashNotesListComponent } from './trash-notes-list.component';

describe('TrashNotesListComponent', () => {
  let component: TrashNotesListComponent;
  let fixture: ComponentFixture<TrashNotesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashNotesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashNotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
