import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {HttpParams} from '@angular/common/http';


@Injectable()
export class ServerService {
  constructor(private http: Http) {
  }

  register(email: string, password: string, username: string, gender: string) {
    return this.http.post('https://project-back-bcb48.firebaseio.com/data.json', {
      email: email,
      password: password,
      username: username,
      gender: gender
    });
  }

  login(email: string, password: string , ) {
    return this.http.post('https://project-back-bcb48.firebaseio.com/data.json', {
      email: email,
      password: password,
    });
  }

  // getServers (email: string, password: string) {
  //   return this.http.get('https://project-back-bcb48.firebaseio.com/data.json', {
  //     params: {
  //       email,
  //       password
  //     }
  //   });
  // }
}
