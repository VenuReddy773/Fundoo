import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-archived-notes-list',
  templateUrl: './archived-notes-list.component.html',
  styleUrls: ['./archived-notes-list.component.scss']
})
export class ArchivedNotesListComponent implements OnInit {
  archivedList:any
  @Output() iconsOutput = new EventEmitter<any>();
  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.getArchivedList()
  }
  getArchivedList(){
    this.noteService.archivedNotesList().subscribe((response:any)=>{
      this.archivedList=response.data.data
      console.log(this.archivedList)
    })
  }
  unarchive(e:any){
    this.getArchivedList();
  }
}
