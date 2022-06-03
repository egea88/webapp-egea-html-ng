//Routes
import { Routes, RouterModule } from '@angular/router';

//Components
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { NgModule } from '@angular/core';



// falta el path= "" pero usamos el inicio para que la class active funcione
const app_routes: Routes =[ 
    { path: '', component:PortafolioComponent },
{ path: 'inicio', component:PortafolioComponent}, 
//cuando el path esta vacio '' hace referencia a localhost:4200 en este caso
{ path: 'about', component:AboutComponent},
{ path: 'item', component:ItemComponent},
{ path: '**', pathMatch: 'full', redirectTo:'inicio'} 
// '**' si el usuario escribe cualquier otra cosa
// pathMatch: 'full' asegura que revise todo el path
];


@NgModule( {
imports:  [RouterModule.forRoot ( app_routes, {useHash:true})],
exports: [ RouterModule],


})
 export class AppRoutingModule{}