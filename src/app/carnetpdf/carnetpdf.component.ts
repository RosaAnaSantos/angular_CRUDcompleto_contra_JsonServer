import { Component, OnInit, ElementRef ,ViewChild } from '@angular/core';
import * as jspdf from 'jspdf';    
import html2canvas from 'html2canvas';
import { CarnetService } from '../carnet.service';
import { Afiliado } from '../modelos/afiliado';
 
@Component({
  selector: 'app-carnetpdf',
  templateUrl: './carnetpdf.component.html',
  styleUrls: ['./carnetpdf.component.css']
})
export class CarnetpdfComponent implements OnInit {
  today:any = new Date();
  afiliado: Afiliado;

  constructor(private carnetService: CarnetService) { }

  ngOnInit() {
  }

  verCarnet(afiliado: Afiliado) {
    this.afiliado = afiliado;
  }

  public captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 tamaño página del PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('SuCarnet.pdf'); // Genera el PDF   
    });  
  }  
  

}








/*
import { Component, OnInit,InputDecorator, ElementRef ,ViewChild, Input } from '@angular/core';
import * as jspdf from 'jspdf';    
import html2canvas from 'html2canvas'; 
import { Afiliado } from '../modelos/afiliado';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AfiliadosService } from '../afiliados.service';
import{CarnetService} from '../carnet.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-carnetpdf',
  templateUrl: './carnetpdf.component.html',
  styleUrls: ['./carnetpdf.component.css']
})
export class CarnetpdfComponent implements OnInit {
  @Input() aviso:string;
  today:any = new Date();
  afiliados: Observable<Afiliado[]>;
  afiliado: Observable<Afiliado>;
  mensaje:Afiliado;
  constructor( private route: ActivatedRoute,
    private router: Router,
    private servicio: AfiliadosService, private carnetServicio: CarnetService) { 
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
 
  recibirCambios() {
    this.afiliado = this.carnetServicio.afiliado;
  }

}

*/  
