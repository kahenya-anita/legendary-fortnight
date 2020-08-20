import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

