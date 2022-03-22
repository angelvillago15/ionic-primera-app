import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  //necesitamos inyectar algo: el private http

  constructor( private http: HttpClient) { }

  getPosts() {
  //ponemos la url del servicio que queremos llamar
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe 
        (tap (posts => {
          console.log(posts);
      })
    );
  //esta instruccion retorna un observable, que hay que retornar
  } 
}
