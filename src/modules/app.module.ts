import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy,
         LocationStrategy } from '@angular/common';

import { AppComponent } from 'app-components/component-app/app.component';
import { Comp1 } from 'app-components/component-comp1/component-comp1';
import { Comp2 } from 'app-components/component-comp2/component-comp2';
import { Comp3 } from 'app-components/component-comp3/component-comp3';

import { RoutingModule } from 'modules/routing.module';
import { DemoService } from 'services/demo-service';

@NgModule({
    imports: [ 
        BrowserModule,
        RoutingModule
    ],
    declarations: [ 
        AppComponent,
        Comp1,
        Comp2,
        Comp3,
    ],
    bootstrap: [ AppComponent ],
    providers: [ 
        DemoService,
        {
            provide: LocationStrategy, 
            useClass: HashLocationStrategy
        }
    ]
})

export class AppModule {}