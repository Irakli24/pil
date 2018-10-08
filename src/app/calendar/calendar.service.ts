import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class CalendarService {
  constructor(private http: Http) {}
  saveCalendarEvent(start: Date, end: Date , text: string , ) {
    return this.http.post('https://project-back-bcb48.firebaseio.com/data.json', {
      start: start,
      end: end,
      text: text
    });
  }
  getServers() {
    return this.http.get('https://project-back-bcb48.firebaseio.com/data.json');
  }
}
