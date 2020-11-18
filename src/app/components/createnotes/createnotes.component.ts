import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator } from '@angular/forms';
import { NotesServiceService } from '../../Services/notes-service.service';
import { DataServiceService } from "../../Services/data-service.service";
import { UtilityServiceService } from "../../Services/utility-service.service";

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})

export class CreatenotesComponent implements OnInit {
  reset = true
  form: FormGroup;

  constructor(private fb: FormBuilder, private notes: NotesServiceService,
    public snakeBar: UtilityServiceService, private data: DataServiceService) {

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
        this.snakeBar.snakeBarMethod("Note added Successfully")
        this.data.changeMessage({});
       
      
      },
        (error) => {
          this.snakeBar.snakeBarMethod("OOPS..somethimg went wrong...")
        })
    }
  }

  ngOnInit(): void {
 
  }

}
