import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator } from '@angular/forms';
import { NotesServiceService } from '../../Services/notes-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {


  reset = true;
 

  constructor( private notes: NotesServiceService,) {}

  note = [];

  displayNotes() {
    this.notes.getNotes().subscribe((result: any) => {
      this.note = result['data']
      console.log(this.note)
    },
      (error) => {
        console.log(error)
      })
  }

  ngOnInit(): void {
 
    this.displayNotes()

  }

}
