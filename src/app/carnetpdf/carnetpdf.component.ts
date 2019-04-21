import { Component, OnInit, ElementRef ,ViewChild, Input } from '@angular/core';
import * as jspdf from 'jspdf';    
import html2canvas from 'html2canvas'; 
import { Afiliado } from '../modelos/afiliado';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AfiliadosService } from '../afiliados.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { RegistroComponent } from '../registro/registro.component';
import { AfiliadosComponent } from '../afiliados/AfiliadosComponent';
@Component({
  selector: 'app-carnetpdf',
  templateUrl: './carnetpdf.component.html',
  styleUrls: ['./carnetpdf.component.css']
})
export class CarnetpdfComponent implements OnInit {
  afiliados: Observable<Afiliado[]>;
  afiliado: Observable<Afiliado>;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private servicio: AfiliadosService) { 
    }

  ngOnInit() {

    console.log('Iniciando componente...');
    this.afiliado = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) =>
          this.servicio.getAfiliado(params.get('3')))
      );

  }
  public captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {   
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 tamaño hoja del  PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('SuCarnet.pdf'); // Genera el PDF   
    });  
  }  

}

  
