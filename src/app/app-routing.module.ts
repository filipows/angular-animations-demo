import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { Route3Component } from './route3/route3.component';
import { Route4Component } from './route4/route4.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { animation: 'home' } },
    { path: 'route1', component: Route1Component, data: { animation: 'route1' } },
    { path: 'route2', component: Route2Component, data: { animation: 'route2' } },
    { path: 'route3', component: Route3Component, data: { animation: 'route3' } },
    { path: 'route4', component: Route4Component, data: { animation: 'route4' } }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
