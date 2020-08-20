import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { DiaryEntry } from '../diary-entry'
@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit {

  @Input() diary: DiaryEntry;
  @Output() seeLess = new EventEmitter<boolean>();
  showLess(less:boolean){
    this.seeLess.emit(less);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
