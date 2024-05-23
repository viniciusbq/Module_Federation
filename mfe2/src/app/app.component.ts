import { Component, OnInit } from '@angular/core';
import { Formulario } from './formulario.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formularios: any;
  title = 'mfe2';

  ngOnInit() {
    const formularios = JSON.parse(localStorage.getItem('formularios') || '{}');
    this.formularios = formularios;
  }
}

