import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
      info:InfoPagina ={} ;
      cargada=false;
      equipo: any = [];


        constructor(private http:HttpClient) { 


            this.cargarInfo();
            this.cargarEquipo();
              //console.log("Servicio de infoPagina Listo")

        
              }
        
        //Métodos
        private cargarInfo(){//Leer archivo JSON
          this.http.get("assets/data/data-pagina.json")
          .subscribe( resp=>{
                  // console.log(resp["titulo"])

                  this.cargada=true;
                  this.info=resp;
                    })
          }


        private cargarEquipo(){//Leer archivo JSON
          this.http.get("https://portfolio-egea-ng-html-ddbb-default-rtdb.europe-west1.firebasedatabase.app/Equipo.json")
          .subscribe( resp=>{
                   console.log(resp)

                  this.cargada=true;
                  this.equipo=resp;
                  })
            }

 }