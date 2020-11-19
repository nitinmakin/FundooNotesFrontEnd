import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CreatenotesComponent } from './components/createnotes/createnotes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeleteNotesComponent } from './components/delete-notes/delete-notes.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { TrashNotesComponent } from './components/trash-notes/trash-notes.component';
import { UpdateNotesComponent } from './components/update-notes/update-notes.component';

const routes: Routes = [
{
path: 'register', component: RegisterComponent
},
{
  path: 'login', component: LoginComponent,
  
},
{
  path: 'forget-password', component: ForgotpasswordComponent
},
{
  path: 'reset-password/:token', component: ResetpasswordComponent
},
{
path:'trash',component:TrashNotesComponent
},

{
  path: 'dashboard', component: DashboardComponent,
   canActivate: [AuthGuard]
 
},
{
  path: 'createnotes', component:CreatenotesComponent,
},

{
  path: 'getnotes', component:DisplayNotesComponent
},
{
path: 'buttons', component:ButtonsComponent

},

{
path: 'update', component:UpdateNotesComponent
},

{
  path:'delete', component:DeleteNotesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
