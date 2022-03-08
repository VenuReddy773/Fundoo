import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteObject: any;
  @Output() transColor:EventEmitter<string> = new EventEmitter<string>();
  isColor:string='';
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    console.log(this.noteObject)
  }
  receiveColorCode = ($isColor:string) =>{
    console.log("icons " + $isColor);
    this.isColor = $isColor;
    console.log("singleIcon " + this.isColor)
    this.transColor.emit(this.isColor)
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
