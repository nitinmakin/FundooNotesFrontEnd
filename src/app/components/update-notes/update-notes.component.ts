import { Component, OnInit, Inject,Output,EventEmitter } from '@angular/core';
import { NotesServiceService } from '../../Services/notes-service.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataServiceService } from "../../Services/data-service.service";
import { UtilityServiceService } from "../../Services/utility-service.service";
import { DeleteNotesComponent } from "../delete-notes/delete-notes.component";

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})

export class UpdateNotesComponent implements OnInit {

  reset = true;
 // @Output() operation = new EventEmitter<any>();

  constructor(@Inject(MAT_DIALOG_DATA)public data:any, private notes: NotesServiceService,
   private dataService: DataServiceService, public snkBar:UtilityServiceService) {}

   
  //  getColor(color) {
  //   let noteColorData = {
  //     "color": color,
  //     "Title": (<HTMLInputElement>document.getElementById('test1')).value,
  //     "Message": (<HTMLInputElement>document.getElementById('test2')).value,
  //     "id": this.data.id,   
  //   }

  
  //   this.notes.updateNotes(noteColorData).subscribe(response => {
  
  //     console.log(response)
  //   },
  //     error => {
  //       console.log(error)
  //     }
  //   )
  // }

  updateNotes() {
      let noteData = {
        "Title": (<HTMLInputElement>document.getElementById('test1')).value,
        "Message": (<HTMLInputElement>document.getElementById('test2')).value,
        "id": this.data.id,   
        "color" : this.data.color
      }
        this.notes.updateNotes(noteData).subscribe((result: any) => {
          this.snkBar.snakeBarMethod("Note updated Successfully")
          this.dataService.changeMessage({});
        },
          (error) => {
            this.snkBar.snakeBarMethod("OOPS..somethimg went wrong...")
            console.log(error)
          })
      }

  ngOnInit(): void {
  }

}
