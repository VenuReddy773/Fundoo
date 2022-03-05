import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input() savedNotes: any= [];
  tokenId = localStorage.getItem("Token");

  constructor(private note:NoteService) { }

  ngOnInit(): void {
  }

}
