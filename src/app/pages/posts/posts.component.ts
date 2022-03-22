import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any;
  // inyectamos el servicio que acabamos de hacer en data.service
  constructor( private dataService: DataService ) { }

  ngOnInit() {

    //aqui es donde la pagina se carga por primeva vez
    //llamamos el método que hay dentro de DataService

    this.mensajes = this.dataService.getPosts();
  }
  escuchaClick (id: number) {
    console.log('Click en: ', id);
  }
}
