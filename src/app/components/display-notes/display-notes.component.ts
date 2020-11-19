import { Component, OnInit,ViewChild, AfterViewInit,ViewEncapsulation } from '@angular/core';
import { NotesServiceService } from '../../Services/notes-service.service';
import {MatDialog} from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';
import { DataServiceService } from "../../Services/data-service.service";

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss'],
  // encapsulation: ViewEncapsulation.None 
})

export class DisplayNotesComponent implements OnInit {
  reset = true;
  hoverIndex = -1;

  onHover(i) {
    this.hoverIndex = i
  }

  constructor( private notes: NotesServiceService, public dialog: MatDialog, private data: DataServiceService) {}
  note = [];
  
  ngOnInit(): void {
    this.displayNotes()
    this.data.currentMessage.subscribe(data=>{ this.displayNotes()});
  }

  displayNotes() {
    this.notes.getNotes().subscribe((result: any) => {
      this.note = result['data'].filter(any=>any.isTrash==false)
     
     this.note.reverse();
      console.log(this.note)
    },
      (error) => {
        console.log(error)
      })
  }

  openDialog(title, message, id, color) {
    this.dialog.open(UpdateNotesComponent, {  panelClass: 'custom-dialog-container', data: { title: title, message: message, id: id, color : color } });
    console.log(id);
  }
  
 
}
