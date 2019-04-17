import { Component, OnInit } from '@angular/core';
import { Afiliado } from '../modelos/afiliado';
import { AfiliadosService } from '../afiliados.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-afiliados',
  templateUrl: './afiliados.component.html',
  styleUrls: ['./afiliados.component.css']
})
export class AfiliadosComponent implements OnInit {
  afiliados: Afiliado[];
  displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'edad', 'profesion', 'ideologia', 'cuota', 'status'];
  constructor(private afiliadosService: AfiliadosService) { }

  ngOnInit() {
    const obsAfiliados: Observable<Afiliado[]> = this.afiliadosService.getAfiliados();
    obsAfiliados.subscribe(
      (afiliados) => {
        this.afiliados = afiliados;
      }
    );
  } 
/*
  getTotalCost() {
    return this.afiliados.map(t => t.cuota).reduce((acc, value) => acc + value, 0);
  }
  */
}
