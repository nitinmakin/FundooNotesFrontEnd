import { Component, OnInit,Inject, Input,Output,EventEmitter } from '@angular/core';
import { NotesServiceService } from '../../Services/notes-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilityServiceService } from "../../Services/utility-service.service";

@Component({
  selector: 'app-delete-notes',
  templateUrl: './delete-notes.component.html',
  styleUrls: ['./delete-notes.component.scss']
})
export class DeleteNotesComponent implements OnInit  {

  constructor(private note:NotesServiceService, public snakeBar:UtilityServiceService) { }
   @Input() noteArray
   @Output() operation = new EventEmitter<any>();

   getColor(color) {
    let noteColorData = {
      "color": color,
      "id": this.noteArray.id,
      "title":this.noteArray.title,
      "message":this.noteArray.message
    }

    console.log(this.noteArray)
    this.note.updateNotes(noteColorData).subscribe(response => {
      this.operation.emit();
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


  
  this.snakeBar.snakeBarMethod("Note deleted Successfully")
  this.operation.emit();
 
},
  (error) => {
    this.snakeBar.snakeBarMethod("OOPS..somethimg went wrong...")
  })
 }

  ngOnInit(): void {
  }

}
