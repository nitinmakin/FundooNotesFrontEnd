import { Component, OnInit,ViewChild, AfterViewInit,ViewEncapsulation } from '@angular/core';
import { NotesServiceService } from '../../Services/notes-service.service';
import {MatDialog} from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';
import { DataServiceService } from "../../Services/data-service.service";


@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {

  constructor( private notes: NotesServiceService, public dialog: MatDialog, private data: DataServiceService) {}

  
  trashNote=[];
  ngOnInit(): void {
    this.displayNotes()
 //   this.data.currentMessage.subscribe(data=>{ this.displayNotes()});
  }


  displayNotes() {
    this.notes.getNotes().subscribe((result: any) => {
      this.trashNote = result['data'].filter(any=>any.isTrash==true)
    },
      (error) => {
        console.log(error)
      })
  }

}
