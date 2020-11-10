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
  reset1=false;
  form: FormGroup;

  constructor(private fb: FormBuilder, private notes: NotesServiceService,
    public snakeBar: MatSnackBar) {

      this.form = this.fb.group({
        title: [""],
        description: [""]
      })
     }

      note = [];

     displayNotes(){
     this.notes.getNotes().subscribe((result: any) => {
     //  console.log(result)

        for (let i = 0; i < result['data'].length; i++) {
            this.note.push(result['data'][i]);  
            console.log(this.note[i])
          }
       
            
          

      },
        (error) => { 
          console.log(error)
        })
      
     }


    


  ngOnInit(): void {
  }

}
