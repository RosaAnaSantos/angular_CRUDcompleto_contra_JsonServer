import { Component, OnInit, ViewChild } from '@angular/core';
import { Afiliado } from '../modelos/afiliado';
import { AfiliadosService } from '../afiliados.service';
import { Observable, observable } from 'rxjs';
import { MatPaginator, MatSort } from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
@Component({
  selector: 'app-afiliados',
  templateUrl: './afiliados.component.html',
  styleUrls: ['./afiliados.component.css']
})
export class AfiliadosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  afiliados: Afiliado[];
  afiliado:Observable<Afiliado[]>;
  displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'edad','profesion', 'ideologia', 'tratamiento', 'cuota', 'status'];
  constructor(private afiliadosService: AfiliadosService) { }
  ngOnInit() {
    const obsAfiliados: Observable<Afiliado[]> = this.afiliadosService.getAfiliados();
    obsAfiliados.subscribe((afiliados) => {
      this.afiliados = afiliados;
    });
  }
  setColor(valor:number){
    return valor >=18  ? 'green' :'red';
  }
}
