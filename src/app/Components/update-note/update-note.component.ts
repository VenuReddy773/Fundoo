import { Component, Inject, OnInit,Output,EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  title: any;
  description: any
  noteId:any;
  constructor(private noteService: NoteService, public dialogRef: MatDialogRef<UpdateNoteComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data);
    this.noteId=this.data.id
    this.title = this.data.title,
    this.description = this.data.description
  }

  update() {
    let reqdata = {
      noteId: this.noteId,
      title: this.title,
      description: this.description
    }
    this.noteService.updateNote(reqdata).subscribe((response: any) => {
      console.log(response);
      window.location.reload()
    });
    this.dialogRef.close();
  }
}
