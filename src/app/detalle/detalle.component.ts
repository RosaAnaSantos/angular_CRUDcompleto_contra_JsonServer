import { Component, OnInit, Input } from '@angular/core';//---------------pasar datos de padre a este hijo
import { Afiliado } from '../modelos/afiliado';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AfiliadosService } from '../afiliados.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { element } from '@angular/core/src/render3';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
 
  displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'edad', 'profesion', 'ideologia', 'tratamiento', 'cuota', 'status'];
  afiliados: Observable<Afiliado[]>;
  afiliado: Observable<Afiliado>;
  //@Input() dato:string; ---------------------------------pasar datos de padre a este hijo
  hideUpdate:boolean=false;
  hideMostrar:boolean=true;
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

updateAfiliado(){
  this.hideUpdate=true;
  this.hideMostrar=false;
}

deleteAfiliado(afiliado: Afiliado){
  this.hideUpdate=true;
  this.hideMostrar=false;
  this.servicio.borrarAfiliado(afiliado).subscribe(
  () => {
    this.afiliados = this.servicio.getAfiliados();
    Swal.fire({
      type: 'error',
      title: '',
      text: '¡Eliminado correctamente!  ',
      footer: '<a href></a>'
    })

  }
 
 
 );
}
}




  