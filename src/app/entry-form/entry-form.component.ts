import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DiaryEntry} from '../diary-entry';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  newDiaryEntry = new DiaryEntry("", new Date(), "");
  @Output() addEntry = new EventEmitter<DiaryEntry>();

  submitEntry(){
this.addEntry.emit(this.newDiaryEntry);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
