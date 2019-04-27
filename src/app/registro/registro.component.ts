import { Component, OnInit, ViewChild } from '@angular/core';
import { Afiliado } from '../modelos/afiliado';
import { AfiliadosService } from '../afiliados.service'; 
import {CarnetService} from '../carnet.service';
import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import Swal from 'sweetalert2';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { CarnetpdfComponent } from '../carnetpdf/carnetpdf.component';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
 hideRegistro:boolean=false; 
 hideCarnet:boolean=true;
 //mensaje:Afiliado;
  afiliado: Afiliado = {id:null, dni:null, nombre:'', apellidos:'',edad:null, profesion:'', ideologia:'', tratamiento:'', cuota:null, status:'', email:'', pass:'', votos:null};  
 // valorPadre:string='Esto viene del padre';
 @ViewChild(CarnetpdfComponent) carnet: CarnetpdfComponent;

  tipoSexo = [
    'Señor',
    'Señora',
    'Don',
    'Doña',
    'Señorita',
    'Joven',
    'Jovencita'
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
  

  constructor(private afiliadosService: AfiliadosService, private carnetServicio: CarnetService) { 
 
  }
 

  altaAfiliado() {
    this.afiliadosService.altaAfiliado(this.afiliado);
   // this.afiliado = {id:null, dni:null, nombre:'', apellidos:'', edad:null, profesion:'', ideologia:'',  tratamiento:'', cuota:null ,status:'',pass:'', votos:null};
    Swal.fire({
      type: 'success',
      title: '',
      text: '¡Registrado correctamente',
      footer: '<a href></a>'
    })
    //this.carnetServicio.guardarAfiliado(this.afiliado);
    this.carnet.verCarnet(this.afiliado);
    this.hideRegistro=true;
    this.hideCarnet=false;
  }

  ngOnInit() {
  /*  this.carnetServicio.enviarMensajeObservable.subscribe(mensaje => {
      this.mensaje = mensaje;
    });
    */
  }
/*
  cambioTexto(mensaje:Afiliado) {
    this.carnetServicio.enviarMensaje(mensaje);
  }
  */
}

