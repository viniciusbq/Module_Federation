import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Formulario } from './formulario.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  constructor(private router: Router) {
    
  }
  formLocal: Formulario[] = [];

  formularioForm = new FormGroup({
    id: new FormControl((crypto.randomUUID()).toString()),
    nome: new FormControl(''),
    email: new FormControl(''),
    mensagem: new FormControl(''),
  });

  public salvarFormulario() {
    const sessionData = JSON.parse(localStorage.getItem('formularios') || '{}');
    this.formLocal = JSON.stringify(sessionData) ===  '{}' ? [] : sessionData;
    this.formLocal.push((this.formularioForm.value as Formulario));
    localStorage.setItem('formularios', JSON.stringify(this.formLocal));
    alert('Formulário inserido com sucesso.')
    this.router.navigate(['/']);
  }
}
