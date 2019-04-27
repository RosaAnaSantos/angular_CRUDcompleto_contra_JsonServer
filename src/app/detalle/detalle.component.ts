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
 
  displayedColumns: string[] = ['id', 'Dni', 'nombre', 'apellidos', 'edad', 'profesion', 'ideologia', 'tratamiento', 'cuota', 'status', 'Email', 'Pass'];
  afiliados: Observable<Afiliado[]>;
  afiliado: Observable<Afiliado>;
  //@Input() dato:string; ---------------------------------pasar datos de padre a este hijo
  hideBorrado:boolean=true;
  hideUpdate:boolean=false;
  hideMostrar:boolean=true;
  hideActualizar:boolean=true;
  hideTable:boolean=false;
  hideFotoActualizar:boolean=false;
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
  constructor( private route: ActivatedRoute,
    private router: Router,
    private servicio: AfiliadosService) { 
    }

  ngOnInit() {
    /*
    this.carnetService.enviarMensajeObservable.subscribe(mensaje => {
    this.mensaje = mensaje;
    });
    */
    console.log('Iniciando componente...');
    this.afiliado = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) =>
          this.servicio.getAfiliado(params.get('id')))
      );

  }
editarAfiliado(){
  this.hideActualizar=false;
  this.hideTable=false;
  this.hideUpdate=true;
  this.hideFotoActualizar=true;
}

actualizarAfiliado(afiliado:Afiliado){
  this.servicio.updateAfiliado(afiliado).subscribe(
    () => {
      this.afiliados = this.servicio.getAfiliados();
      Swal.fire({
        type: 'success',
        title: '',
        text: '¡Modificado correctamente!  ',
        footer: '<a href></a>'
      })
    }
  ); 
  
  Swal.fire({
    type: 'error',
    title: '',
    text: '¡Error al modificar, no ha podido ser !  ',
    footer: '<a href></a>'
  })
}


deleteAfiliado(afiliado: Afiliado){
  this.hideBorrado=false;
  this.hideUpdate=true;
  this.hideMostrar=false;
  this.hideFotoActualizar=false;

 Swal.fire({
  title: '¿Está seguro de eliminar este usuario?',
  text: "Esta operación no se puede revertir",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: '!Sí, eliminar!'
  }).then((result) => {
  if (result.value) {

    this.servicio.borrarAfiliado(afiliado).subscribe(
      () => {
        this.afiliados = this.servicio.getAfiliados();
        Swal.fire({
          type: 'success',
          title: '',
          text: '¡Eliminado correctamente!  ',
          footer: '<a href></a>'
        })
    
      }
    
     );
    
     Swal.fire({
      type: 'error',
      title: '',
      text: '¡Error al eliminar, no ha podido ser !  ',
      footer: '<a href></a>'
     }) 
    }
  })
 }

}
  
