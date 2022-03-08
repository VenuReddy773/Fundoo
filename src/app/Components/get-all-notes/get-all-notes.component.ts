import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  token: any;
  notesArr: any;

  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.getAllNotes()
  }
  autoRefresh(data: any) {
    console.log(data);
    this.getAllNotes();
  }
  getAllNotes() {
    this.note.getNotes().subscribe((reqdata: any) => {
      this.notesArr = reqdata.data.data;
      console.log(this.notesArr)
      this.notesArr = this.notesArr.filter((data: any) => {
        console.log(data.isDeleted)
        return data.isDeleted === false && data.isArchived === false;
      })
    })
  }
}



