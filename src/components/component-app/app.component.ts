import { Component } from  '@angular/core';
import { Router } from '@angular/router';

import { DemoService } from 'services/demo-service';
//--------------------------------------------------------------------------------
@Component({
   	moduleId: module.id,
    selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
//--------------------------------------------------------------------------------
export class AppComponent { 
	constructor( private router: Router,
				 private demoService: DemoService) {
	}
	//--------------------------------------------------------------------------------
	gotoComp2() {
		this.router.navigate(['/comp2']);
		this.demoService.showAlert('Now you should see comp2 in router bar');
	}
	//--------------------------------------------------------------------------------
	gotoComp3() {
		this.router.navigate(['/comp3']);
		this.demoService.showAlert('Now you should see comp3 in router bar');
	}
	//--------------------------------------------------------------------------------
}