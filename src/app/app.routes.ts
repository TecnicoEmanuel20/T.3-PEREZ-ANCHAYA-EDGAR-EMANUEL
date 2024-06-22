import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth.guard';
import { Ejercicio1Component } from './ejercicio1/ejercicio1/ejercicio1Component';
import { Ejercicio2Component } from './ejercicio2/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './ejercicio3/ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from './ejercicio4/ejercicio4/ejercicio4.component';

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "dashboard", component : DashboardComponent,
    canActivate:[authGuard],
    children: [
        {path:"home",component:HomeComponent},
        {path: "ejercicio1", component: Ejercicio1Component},
        {path: "ejercicio2", component: Ejercicio2Component},
        {path: "ejercicio3", component: Ejercicio3Component},
        {path: "ejercicio4", component: Ejercicio4Component},
    ]
    
    },
    {path:"",redirectTo: "login",pathMatch :"full"},
    {path:"**", component: PageNotFoundComponent}
];
