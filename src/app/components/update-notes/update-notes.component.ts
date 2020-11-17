import { Component, OnInit, Inject } from '@angular/core';
import { NotesServiceService } from '../../Services/notes-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataServiceService } from "../../Services/data-service.service";

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})

export class UpdateNotesComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA)public data:any, private notes: NotesServiceService,
    public snakeBar: MatSnackBar, private dataService: DataServiceService) {}
     updateNotes() {
      let noteData = {
        "Title": (<HTMLInputElement>document.getElementById('test1')).value,
        "Message": (<HTMLInputElement>document.getElementById('test2')).value,
        "id": this.data.id      
      }
        this.notes.updateNotes(noteData).subscribe((result: any) => {
          this.snakeBar.open("Note updated Successfully", 'cancel')
          this.dataService.changeMessage({});
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
