import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteObject: any;
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    console.log(this.noteObject)
  }
  delete() {
    let reqdata = {
      noteIdList: [this.noteObject.id],
      isDeleted: true,
    }
    this.noteService.deleteNote(reqdata).subscribe((response: any) => {
      console.log(response);
    })
  }
  archive() {
    let reqdata = {
      noteIdList: [this.noteObject.id],
      isArchived: true,
    }
    this.noteService.archiveNote(reqdata).subscribe((response: any) => {
      console.log(response);
    })
  }
}
