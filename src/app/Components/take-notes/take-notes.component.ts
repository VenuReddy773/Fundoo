import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-take-notes',
  templateUrl: './take-notes.component.html',
  styleUrls: ['./take-notes.component.scss']
})
export class TakeNotesComponent implements OnInit {
  @Output() autoRefresh = new EventEmitter<any>(); 
  title: any;
  description: any;
  isExpand=false;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }
  main()
  {
    return this.isExpand === true ? (this.isExpand = false) : (this.isExpand = true);
  }

  add() {
    let reqdata = {
      title: this.title,
      description: this.description
    }
    console.log(reqdata)
    if (this.title || this.description) {
      this.noteService.add(reqdata).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem("token", response.id)
        this.title='';
        this.description='';
        this.autoRefresh.emit(response)
      }, error => {
        console.log(error);
      })
    }
    else{
      console.log("Error");
    }
  }
}




