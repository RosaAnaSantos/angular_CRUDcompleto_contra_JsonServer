import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Afiliado } from './modelos/afiliado';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class AfiliadosService {

  url = 'http://localhost:3000/afiliados';
  constructor(private http:HttpClient) { }

  getAfiliados(): Observable<Afiliado[]> {
    return this.http.get<Afiliado[]>(this.url);
  }
//--
  getAfiliado(id: number | string): Observable<Afiliado> {
    return this.http.get<Afiliado>(this.url + '/' + id);
  }

  altaAfiliado(afiliado) {
  this.http.post(this.url, afiliado).subscribe();
}
  updateAfiliado(afiliado: Afiliado){
  return this.http.put(this.url+'/'+afiliado.id, afiliado);
}

  borrarAfiliado(afiliado: Afiliado){
  return this.http.delete(this.url +'/'+ afiliado.id);
}


}