import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AuthguardService } from 'src/app/authguard.service';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  isExpanded = false;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router,private authService:AuthguardService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  canActivate(): boolean {  
    if (!this.authService.gettoken()) {  
        this.router.navigateByUrl("/dashboard");  
    }  
    return this.authService.gettoken();  
}  

}
