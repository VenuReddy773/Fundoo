import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { LoginComponent } from './Components/login/login.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AuthenticationGuard } from './authentication.guard';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { AuthguardService } from './authguard.service';
import { ArchivedNotesListComponent } from './Components/archived-notes-list/archived-notes-list.component';
import { TrashNotesListComponent } from './Components/trash-notes-list/trash-notes-list.component';

const routes: Routes = [
  { path: '', redirectTo: "/signin", pathMatch: 'full' },  
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password',component: ForgotPasswordComponent},
  { path: 'resetpassword/:token',component: ResetPasswordComponent},
  { path: 'dashboard',component:DashBoardComponent,canActivate:[AuthenticationGuard],children: [  
    { path: '', redirectTo: "notes", pathMatch: "full" },
    { path: 'notes',component:GetAllNotesComponent},
    { path: 'display',component:DisplayNotesComponent},
    { path: 'archived',component:ArchivedNotesListComponent},
    { path: 'bin',component:TrashNotesListComponent}]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}