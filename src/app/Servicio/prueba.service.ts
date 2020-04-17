import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{Persona} from '../Models/persona';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor( private http:HttpClient) { }
  Url = 'https://backsuple.herokuapp.com/Persona/'

  crearPersona(persona:Persona){
    return this.http.post(`${this.Url}crearPersona`,persona);
  }
  editarPersona(persona:Persona){
    return this.http.post(`${this.Url}editarPersona`,persona);
  }
  eliminarPersona(persona:Persona){
    return this.http.post(`${this.Url}eliminarPersona`,persona);
  }
  allPersonas(){
    return this.http.get(`${this.Url}todos`);
  }
}
