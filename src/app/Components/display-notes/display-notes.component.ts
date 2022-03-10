import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/Services/dataService/data.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input() savedNotes: any;
  @Output() iconsOutput = new EventEmitter<any>();
  @Output() updateRefresh = new EventEmitter<any>();
  title: any;
  description: any;
  searchKey:any

  constructor(public dialog: MatDialog,private dataService:DataService) { }
  ngOnInit(): void {
    this.dataService.receivedData.subscribe((response:any)=>{
      console.log(response);
      this.searchKey=response;
    })
  } 
  openDialog(note: any) {
    let dialogRef = this.dialog.open(UpdateNoteComponent, { width: '550px', data: note });
    dialogRef.afterClosed().subscribe(result => {
      this.description;
      this.title;
      this.updateRefresh.emit('refresh')
    });
  }
  colorNote(e:any){  
    console.log(e);
    this.iconsOutput.emit("hello");
  }
}
