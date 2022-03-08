import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedNotesListComponent } from './archived-notes-list.component';

describe('ArchivedNotesListComponent', () => {
  let component: ArchivedNotesListComponent;
  let fixture: ComponentFixture<ArchivedNotesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivedNotesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedNotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
