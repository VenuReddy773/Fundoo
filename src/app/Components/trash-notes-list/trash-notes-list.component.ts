import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-trash-notes-list',
  templateUrl: './trash-notes-list.component.html',
  styleUrls: ['./trash-notes-list.component.scss']
})
export class TrashNotesListComponent implements OnInit {
  trashList:any

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.getTrashList()
  }

  getTrashList(){
    this.noteService.trashNotesList().subscribe((response:any)=>{
      this.trashList=response.data.data
      console.log(this.trashList)
    })
  }

}
