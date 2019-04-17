import { Component, OnInit } from '@angular/core';
import { Afiliado } from '../modelos/afiliado';
import { AfiliadosService } from '../afiliados.service';
import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
   
  sexoSeleccionado:string;
  afiliado: Afiliado = {id:null, nombre:'', apellidos:'',edad:null, profesion:'', ideologia:'', tratamiento:'', cuota:null , status:''};  
 
  tipoSexo = [
    'Señor',
    'Señora',
    'Don',
    'Doña',
    'Señorita',
  ];

  cargos= [
      {valor:'Ministro', muestraValor:'Sumar'},
      {valor:'Secretario', muestraValor:'Restar'},
      {valor:'Diputado', muestraValor:'Multiplicar'},
      {valor:'Senador', muestraValor:'Dividir'},
      {valor:'Presidente', muestraValor:'Sumar'},
      {valor:'Administrador', muestraValor:'Restar'},
      {valor:'Alcalde', muestraValor:'Multiplicar'},
      {valor:'Concejal', muestraValor:'Dividir'},
      {valor:'Votante', muestraValor:'Dividir'}
    ];
  

  constructor(private afiliadosService: AfiliadosService) {
 
  }

  altaAfiliado() {
    this.afiliadosService.altaAfiliado(this.afiliado);
    this.afiliado = {id:null, nombre:'', apellidos:'', edad:null, profesion:'', ideologia:'',  tratamiento:'', cuota:null ,status:''};
    Swal.fire({
      title: '¡Enhorabuena, ya eres del partido!',
      animation: false,
      customClass: {
        popup: 'animated tada'
      }
    })
  }
}


