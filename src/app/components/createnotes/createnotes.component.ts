import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator } from '@angular/forms';
import { NotesServiceService } from '../../Services/notes-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})




export class CreatenotesComponent implements OnInit {
  reset = true



  form: FormGroup;

  constructor(private fb: FormBuilder, private notes: NotesServiceService,
    public snakeBar: MatSnackBar) {

      this.form = this.fb.group({
        title: [""],
        description: [""]
      })
  }

  addNotes() {
    let noteData = {
      "Title": this.form.controls.title.value,
      "Message": this.form.controls.description.value,
    }

    if (this.form.valid) {
      this.notes.addNotes(noteData).subscribe((result: any) => {
        this.snakeBar.open("Note added Successfully", 'cancel')
        setTimeout(() => {
          this.snakeBar.dismiss();
        }, 5000)
        console.log(result)
      },
        (error) => {
          this.snakeBar.open("OOPS..somethimg went wrong...", 'cancel')
          setTimeout(() => {
            this.snakeBar.dismiss();
          }, 5000)
          console.log(error)
        })
    }
  }

  ngOnInit(): void {
  }

}
