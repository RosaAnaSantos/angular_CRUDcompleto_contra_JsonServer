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
  afiliado: Afiliado = {id:null, dni:null, nombre:'', apellidos:'',edad:null, profesion:'', ideologia:'', tratamiento:'', cuota:null, status:'', pass:'', votos:null};  
 
  tipoSexo = [
    'Señor',
    'Señora',
    'Don',
    'Doña',
    'Señorita',
  ];

  cargos= [
      {valor:'Ministerios'},
      {valor:'Secretarías'},
      {valor:'Congreso'},
      {valor:'Senado'},
      {valor:'Presidencia'},
      {valor:'Administración'},
      {valor:'Alcaldía'},
      {valor:'Concejalía'},
      {valor:'Votante'}
    ];
  

  constructor(private afiliadosService: AfiliadosService) { 
 
  }

  altaAfiliado() {
    this.afiliadosService.altaAfiliado(this.afiliado);
    this.afiliado = {id:null, dni:null, nombre:'', apellidos:'', edad:null, profesion:'', ideologia:'',  tratamiento:'', cuota:null ,status:'',pass:'', votos:null};
    Swal.fire({
      type: 'success',
      title: '',
      text: '¡Registrado correctamente',
      footer: '<a href></a>'
    })
  }
}

