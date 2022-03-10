import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/Services/noteService/note.service';
import { ArchivedNotesListComponent } from '../archived-notes-list/archived-notes-list.component';
import { TrashNotesListComponent } from '../trash-notes-list/trash-notes-list.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Output() iconsOutput = new EventEmitter<any>();
  @Input() noteObject: any;

  isTrashComponent: boolean = false;
  isArchiveComponent: boolean = false;

  colors = ['#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa', '#fff7e6', '#FBBC04', '#f28b82', '#fbbc04', '#fff475', '#fdcfe8', '#e6c9a8', '#0080ff']

  constructor(private noteService: NoteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.noteObject)
    let comp = this.route.snapshot.component;
    if (comp == TrashNotesListComponent) {
      this.isTrashComponent = true;
      console.log(this.isTrashComponent);
    }
    if (comp == ArchivedNotesListComponent) {
      this.isArchiveComponent = true;
      console.log(this.isArchiveComponent);
    }
    console.log(this.noteObject)
  }
  delete() {
    let reqdata = {
      noteIdList: [this.noteObject.id],
      isDeleted: true,
    }
    this.noteService.deleteNote(reqdata).subscribe((response: any) => {
      console.log(response);
      this.iconsOutput.emit("hello");
    })
  }
  deleteforever() {
    let reqdata = {
      noteIdList: [this.noteObject.id],
      isDeleted: true,
    }
    this.noteService.deleteforever(reqdata).subscribe((response: any) => {
      console.log('permanently deleted');
      this.iconsOutput.emit("hiiii");
    })
  }
  restore() {
    let reqdata = {
      noteIdList: [this.noteObject.id],
      isDeleted: false,
    }
    this.noteService.deleteNote(reqdata).subscribe((response: any) => {
      console.log('restored succesfully', response);
      this.iconsOutput.emit("hiiii");
    })
  }
  archive() {
    let reqdata = {
      noteIdList: [this.noteObject.id],
      isArchived: true,
    }
    this.noteService.archiveNote(reqdata).subscribe((response: any) => {
      console.log(response);
      this.iconsOutput.emit("hello");
    })
  }
  unArchive() {
    let reqdata = {
      noteIdList: [this.noteObject.id],
      isArchived: false,
    }
    this.noteService.archiveNote(reqdata).subscribe((response: any) => {
      console.log('unArchive successfully', response);
      this.iconsOutput.emit("hiiii");
    })
  }
  changeColor(color: any) {
    this.noteObject.noteColor = color;
    let reqdata = {
      noteIdList: [this.noteObject.id],
      color: color
    }
    this.noteService.cardColor(reqdata).subscribe((response: any) => {
      console.log(response);
      this.iconsOutput.emit(color);
    })
  }
}
