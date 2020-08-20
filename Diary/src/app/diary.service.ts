import { Injectable } from '@angular/core';
import { DiaryEntry, IEntries } from './diary-entry';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; 


@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  private _url: string = "/assets/data/entries.json";

  getEntries(): Observable<IEntries[]>{
  return this.http.get<IEntries[]>(this._url);
  }
  constructor( private http: HttpClient) {}
}
