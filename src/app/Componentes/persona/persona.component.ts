import { Component, OnInit } from '@angular/core';
import {Persona} from 'src/app/Models/persona';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PruebaService } from 'src/app/Servicio/prueba.service';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  Persona: Persona = {
    _id: null,
    dni: "",
    names: "",
    email: "",
    phone: "",
    direccion: "",
    genero: ""
  }
  public formPersona: FormGroup;
  allPersona : any =[]
  constructor(private servicio: PruebaService, private formBuilde: FormBuilder) {
    this.formPersona = this.formBuilde.group({
      _id: null,
      dni: "",
      names: "",
      email: "",
      phone: "",
      direccion: "",
      genero: ""
    })

  }

  ngOnInit() {
    this.traerPersonas();
  }

  crearPersona(){
    this.servicio.crearPersona(this.Persona).subscribe(data=>{
      console.log(data)
      this.traerPersonas();
      this.formPersona.reset();
    })
  }
  editarPersona(){
    this.servicio.editarPersona(this.Persona).subscribe(data=>{
      console.log(data)
    })
    this.traerPersonas();
    this.formPersona.reset();
  }
  eliminarPersona(persona){
    this.servicio.eliminarPersona(persona).subscribe(data=>{
      console.log(data)
    })
    this.traerPersonas();
  }
  traerPersonas(){
    this.servicio.allPersonas().subscribe(data=>{
      this.allPersona = data
    })
  }
  guardarOeliminar(){
    if(this.Persona._id == null){
      this.crearPersona();
    }
    else{
      this.editarPersona();
    }
  }
  datelle(persona){
    this.Persona = Object.assign({},persona)
  }
  
}