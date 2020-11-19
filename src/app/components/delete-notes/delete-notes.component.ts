import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { NotesServiceService } from '../../Services/notes-service.service';
import { UtilityServiceService } from "../../Services/utility-service.service";
import { DataServiceService } from "../../Services/data-service.service";

@Component({
  selector: 'app-delete-notes',
  templateUrl: './delete-notes.component.html',
  styleUrls: ['./delete-notes.component.scss']
})

export class DeleteNotesComponent implements OnInit {

  constructor(private note: NotesServiceService, public snakeBar: UtilityServiceService,private data:DataServiceService) { }
  @Input() noteArray
  @Output() operation = new EventEmitter<any>();

  getColor(color) {
    let noteColorData = {
      "color": color,
      "id": this.noteArray.id,
      "title": this.noteArray.title,
      "message": this.noteArray.message,
      "isArchive":this.noteArray.isArchive,
      "isTrash":this.noteArray.isTrash
    }

    console.log(this.noteArray)
    this.note.updateNotes(noteColorData).subscribe(response => {
      this.operation.emit();
      this.data.changeMessage({});
      console.log(response)
    },
      error => {
        console.log(error)
      }
    )
  }

  deleteNotes() {
    let data = {
      "id": [this.noteArray.id]
    }
  
    this.note.deleteNotes(data).subscribe((result: any) => {
      this.snakeBar.snakeBarMethod("Note deleted Successfully"+data.id)
      this.operation.emit();
      this.data.changeMessage({});
     // console.log("data is "+data.id)

    },
      (error) => {
        this.snakeBar.snakeBarMethod("OOPS..somethimg went wrong...")
      })
  }

  archiveNotes(){
  let data = {
    "id": [this.noteArray.id]
  }

  this.note.isArchive(data).subscribe((result: any) => {
    this.snakeBar.snakeBarMethod("Note Archived Successfully")
     this.operation.emit();
     this.data.changeMessage({});

  },
    (error) => {
      this.snakeBar.snakeBarMethod("OOPS..somethimg went wrong...")
    })
}


trashNote(){
  let data = {
    "id": [this.noteArray.id]
  }

  console.log("data1 id is "+data.id)

  this.note.isTrash(data).subscribe((result: any) => {
    this.snakeBar.snakeBarMethod("Note trashed Successfully")
     this.operation.emit();
     this.data.changeMessage({});

  },
    (error) => {
      this.snakeBar.snakeBarMethod("OOPS..somethimg went wrong...")
    })
}


  ngOnInit(): void {
  }

}
