import { Component, OnInit,ViewChild, AfterViewInit,ViewEncapsulation } from '@angular/core';
import { NotesServiceService } from '../../Services/notes-service.service';
import {MatDialog} from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';
import { DataServiceService } from "../../Services/data-service.service";


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  note = [];
  constructor( private notes: NotesServiceService, public dialog: MatDialog, private data: DataServiceService) { }

  ngOnInit(): void {
     this.displayNotes()
     this.data.currentMessage.subscribe(data=>{ this.displayNotes()});
  }

  displayNotes() {
    this.notes.getNotes().subscribe(result => {
      this.note = result['data'].filter(any=>any.isArchive==false && any.isTrash==false);
      
     
     this.note.reverse();
      console.log(this.note)
    },
      (error) => {
        console.log(error)
      })
  }

}
