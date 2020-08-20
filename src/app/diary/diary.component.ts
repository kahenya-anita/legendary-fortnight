import { Component, OnInit } from '@angular/core';
import { DiaryEntry } from '../diary-entry';
import { DiaryService } from '../diary.service';
import { AlertService } from '../alert.service';
@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  diarys:DiaryEntry[];
  alertService:AlertService;

  toggleDescriptions(index){
    this.diarys[index].showDescription = !this.diarys[index].showDescription;
  }
  showingLess(seeLess, index){
    if (seeLess) {
      let toSeeLess = confirm(`Are you sure you want to delete ${this.diarys[index].title}?`)
      if(toSeeLess){
      this.diarys.splice(index,1);
      this.alertService.alertUser("The goal has been deleted")
    }
  }
  }
  addDiaryEntry(diary){
    this.diarys.push(diary)
  }
  constructor( private diaryService:DiaryService, alertService:AlertService) { 
    this.diaryService.getEntries()
    .subscribe(data => this.diarys = data);
    this.alertService = alertService;
  }

  ngOnInit(): void {
  }

}
