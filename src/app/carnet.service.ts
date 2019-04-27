import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Afiliado } from './modelos/afiliado';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarnetService {

  nuevoAfiliado: Afiliado;

  guardarAfiliado(afiliado: Afiliado) {
    this.nuevoAfiliado = afiliado;
  }

  getAfiliado() : Afiliado {
    return this.nuevoAfiliado;
  }

/*
  mensaje:Afiliado;
  private enviarMensajeSubject = new Subject<Afiliado>();
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();

  enviarMensaje(mensaje:Afiliado) {
    this.mensaje = mensaje;
    this.enviarMensajeSubject.next(mensaje);
  }
  */
}
