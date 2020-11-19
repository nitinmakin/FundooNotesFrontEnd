import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StorageServiceModule } from "ngx-webstorage-service";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { CreatenotesComponent } from './components/createnotes/createnotes.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { UpdateNotesComponent } from './components/update-notes/update-notes.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteNotesComponent } from './components/delete-notes/delete-notes.component';
import { TrashNotesComponent } from './components/trash-notes/trash-notes.component';
import { NotesComponent } from './components/notes/notes.component';
import { ArchiveNotesComponent } from './components/archive-notes/archive-notes.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    CreatenotesComponent,
    DisplayNotesComponent,
    ButtonsComponent,
    UpdateNotesComponent,
    DeleteNotesComponent,
    TrashNotesComponent,
    NotesComponent,
    ArchiveNotesComponent
  ],
  imports: [
    MatSelectModule,
    MatMenuModule,
    TextFieldModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    RouterModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    StorageServiceModule,
    MatButtonToggleModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
