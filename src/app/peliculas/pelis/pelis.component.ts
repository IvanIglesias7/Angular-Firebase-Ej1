import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';

const coleccion = 'peliculas';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.component.html',
  styleUrls: ['./pelis.component.css']
})
export class PelisComponent implements OnInit {

  peliculas: any[] = [];
  
  constructor(
    private firebase: FirebaseService
  ) { }

  ngOnInit(): void {

  }

}
