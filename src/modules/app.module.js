"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var app_component_1 = require("app-components/component-app/app.component");
var component_comp1_1 = require("app-components/component-comp1/component-comp1");
var component_comp2_1 = require("app-components/component-comp2/component-comp2");
var component_comp3_1 = require("app-components/component-comp3/component-comp3");
var routing_module_1 = require("modules/routing.module");
var demo_service_1 = require("services/demo-service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                routing_module_1.RoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                component_comp1_1.Comp1,
                component_comp2_1.Comp2,
                component_comp3_1.Comp3,
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                demo_service_1.DemoService,
                {
                    provide: common_1.LocationStrategy,
                    useClass: common_1.HashLocationStrategy
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map