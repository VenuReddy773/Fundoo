import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input() savedNotes: any ;
  title: any;
  description: any;

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }
  openDialog(note: any) {
    let dialogRef = this.dialog.open(UpdateNoteComponent, { width: '550px', data: note });
    dialogRef.afterClosed().subscribe(result => {
      this.description;
      this.title;
      console.log(result)
    });
  }
}
