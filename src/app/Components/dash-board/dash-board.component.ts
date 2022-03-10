import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/dataService/data.service';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  isExpanded = false;
  searchString:string;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router,private dataService:DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  search(event:any){
    console.log(event.target.value);
    this.dataService.sendData(event.target.value);
  }
  logout() {    
    localStorage.removeItem('token')
    this.router.navigateByUrl('signin');
  }
  archivedList(){
    this.router.navigateByUrl('dashboard/archived')
  }
  trashList(){
    this.router.navigateByUrl('dashboard/bin')
  }
  notes(){
    this.router.navigateByUrl('dashboard/notes')
  }
  
}
