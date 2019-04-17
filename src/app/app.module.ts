import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AfiliadosComponent } from "./afiliados/AfiliadosComponent";
import { DetalleComponent } from './detalle/detalle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatMenuModule, MatTableModule, MatCardModule, MatListModule, MatSortModule, MatSelectModule }from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RegistroComponent } from './registro/registro.component';
import {MatFormFieldModule} from '@angular/material/form-field';  
import {MatRadioModule} from '@angular/material/radio';
import { FormControl, Validators, FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import{ScrollingModule}from '@angular/cdk/scrolling';

 @NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AfiliadosComponent,
    DetalleComponent,
    RegistroComponent,
  ],
  imports: [
    ReactiveFormsModule,FormsModule, 
    FormsModule,
    MatRadioModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatCardModule,
    MatListModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  animalControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  

 }


