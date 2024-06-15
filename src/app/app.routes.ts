import { Routes } from '@angular/router';
import { PruebaAmaterialComponent } from './prueba-amaterial/prueba-amaterial.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { CursoListaComponent } from './dashboard/curso/curso-lista/curso-lista.component';
import { EstadoListaComponent } from './dashboard/estado/estado-lista/estado-lista.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostListaComponent } from './dashboard/posts/post-lista/post-lista.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    /*{path: "prueba", component: PruebaAmaterialComponent}*/
    {path: "login", component: LoginComponent},
    {path: "dashboard", component : DashboardComponent,
    canActivate:[authGuard],
    children: [
        {path:"home",component:HomeComponent},
        {path: "curso", component: CursoListaComponent},
        {path: "estado",component: EstadoListaComponent},
        {path: "post", component: PostListaComponent}
    ]
    
    },
    {path:"",redirectTo: "login",pathMatch :"full"},
    {path:"**", component: PageNotFoundComponent}
];
