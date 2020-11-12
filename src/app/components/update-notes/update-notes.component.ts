import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator } from '@angular/forms';
import { NotesServiceService } from '../../Services/notes-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {

  form: FormGroup;
  Display=true;
  constructor(private fb: FormBuilder, private notes: NotesServiceService,
    public snakeBar: MatSnackBar) {


      this.form = this.fb.group({
        title: [""],
        description: [""]
      })

     }
     updateNotes() {
      let noteData = {
        "Title": this.form.controls.title.value,
        "Message": this.form.controls.description.value,
      }

      if (this.form.valid) {
        this.notes.updateNotes(noteData).subscribe((result: any) => {
          this.snakeBar.open("Note updated Successfully", 'cancel')
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
