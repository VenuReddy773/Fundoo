import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
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
    this.note.getNotes().subscribe((response: any) => {      
      this.notesArr = response.data.data;
      this.notesArr.reverse()
      console.log(this.notesArr)
      this.notesArr = this.notesArr.filter((data: any) => {
        return data.isDeleted === false && data.isArchived === false;
      })
    },error=>{console.log(error)});
  }
  colorNote(e:any){  
    console.log(e);
    this.getAllNotes();  
  }
  update(e:any){
    console.log(e);    
    this.getAllNotes();
  }
}



