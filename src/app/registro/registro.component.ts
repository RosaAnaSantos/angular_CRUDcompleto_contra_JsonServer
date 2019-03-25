import { Component, OnInit } from '@angular/core';
import { Afiliado } from '../modelos/afiliado';
import { AfiliadosService } from '../afiliados.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  afiliado: Afiliado = {id:null, nombre:'', apellidos:'', profesion:'', ideologia:'', edad:null, sexo:'', cuota:null , status:''};

  public sex: string;






  constructor(private afiliadosService: AfiliadosService) {
 
  }

  altaAfiliado() {
    this.afiliadosService.altaAfiliado(this.afiliado);
    this.afiliado = {id:null, nombre:'', apellidos:'', profesion:'', ideologia:'', edad:null, sexo:'', cuota:null , status:''};
  }
}


