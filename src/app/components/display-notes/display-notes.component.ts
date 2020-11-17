import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from '../../Services/notes-service.service';
import {MatDialog} from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})

export class DisplayNotesComponent implements OnInit {
  reset = true;
  hoverIndex = -1;

  onHover(i) {
    this.hoverIndex = i
  }

  constructor( private notes: NotesServiceService, public dialog: MatDialog) {}
  note = [];
  displayNotes() {
    this.notes.getNotes().subscribe((result: any) => {
      this.note = result['data']
     this.note.reverse();
      console.log(this.note)
    },
      (error) => {
        console.log(error)
      })
  }

  openDialog(title, message, id) {
    this.dialog.open(UpdateNotesComponent, { data: { title: title, message: message, id: id } });
    console.log(id);
  }

  ngOnInit(): void {
    this.displayNotes()
  }

}
