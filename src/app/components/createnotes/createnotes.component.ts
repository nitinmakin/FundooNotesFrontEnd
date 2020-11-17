import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator } from '@angular/forms';
import { NotesServiceService } from '../../Services/notes-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataServiceService } from "../../Services/data-service.service";

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})

export class CreatenotesComponent implements OnInit {
  reset = true
  form: FormGroup;
  //@Output() change = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private notes: NotesServiceService,
    public snakeBar: MatSnackBar, private data: DataServiceService) {

      this.form = this.fb.group({
        title: [""],
        description: [""]
      })
  }
  note = [];
  addNotes() {
    let noteData = {
      "Title": this.form.controls.title.value,
      "Message": this.form.controls.description.value,
    }
    if (this.form.valid) {
      this.notes.addNotes(noteData).subscribe((result: any) => {
        this.snakeBar.open("Note added Successfully", 'cancel')
        this.data.changeMessage({});
       
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


 // message:String
  ngOnInit(): void {
  // this.data.currentMessage.subscribe(message => this.message = message)
  }

  // newMessage() {
  //   this.data.changeMessage(this.addNotes())
  // }

}
