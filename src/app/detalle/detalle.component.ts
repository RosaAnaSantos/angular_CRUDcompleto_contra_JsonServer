import { Component, OnInit } from '@angular/core';
import { Afiliado } from '../modelos/afiliado';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AfiliadosService } from '../afiliados.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'profesion', 'ideologia', 'edad', 'sexo', 'cuota', 'status'];
  afiliados: Observable<Afiliado[]>;
  afiliado: Observable<Afiliado>;
  constructor( private route: ActivatedRoute,
    private router: Router,
    private servicio: AfiliadosService) { }

  ngOnInit() {

    console.log('Iniciando componente...');
    this.afiliado = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) =>
          this.servicio.getAfiliado(params.get('id')))
      );

  }
  deleteAfiliado(afiliado: Afiliado){
    this.servicio.borrarAfiliado(afiliado).subscribe(
    () => {
      this.afiliados = this.servicio.getAfiliados();
    }
   );
  }
}


  