import { Component, OnInit,Inject, Input,Output,EventEmitter } from '@angular/core';
import { NotesServiceService } from '../../Services/notes-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-notes',
  templateUrl: './delete-notes.component.html',
  styleUrls: ['./delete-notes.component.scss']
})
export class DeleteNotesComponent implements OnInit  {

  constructor(private note:NotesServiceService, public snakeBar:MatSnackBar) { }
   @Input() noteArray
   @Output() change = new EventEmitter<any>();

   getColor(color) {
    let noteColorData = {
      "color": color,
      "id": this.noteArray.id,
      "title":this.noteArray.title,
      "message":this.noteArray.message
    }

    console.log(this.noteArray)
    this.note.updateNotes(noteColorData).subscribe(response => {
      this.change.emit();
      console.log(response)
    },
      error => {
        console.log(error)
      }
    )
  }

  deleteNotes(){
  let data={
  "id":[this.noteArray.id]
} 
 this.note.deleteNotes(data).subscribe((result: any) => {
  this.snakeBar.open("Note deleted Successfully", 'cancel')
  this.change.emit();
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

  ngOnInit(): void {
  }

}
