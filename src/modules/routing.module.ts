import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Comp2 } from 'app-components/component-comp2/component-comp2';
import { Comp3 } from 'app-components/component-comp3/component-comp3';

 const routes: Routes = [
 	{ path: '', redirectTo: '/comp2', pathMatch: 'full' },
 	{ path: 'comp2', component: Comp2 },
 	{ path: 'comp3', component: Comp3 },
 ];

@NgModule({
	imports: [ RouterModule.forRoot( routes ) ],
	exports: [ RouterModule ]
})

export class RoutingModule {
}