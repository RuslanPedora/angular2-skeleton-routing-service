"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// This import statement must be in all component.ts files
var core_1 = require("@angular/core");
var Comp2 = (function () {
    function Comp2() {
    }
    Comp2 = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'comp2',
            templateUrl: './component-comp2.html',
            styleUrls: ['./component-comp2.css']
        })
    ], Comp2);
    return Comp2;
}());
exports.Comp2 = Comp2;
//# sourceMappingURL=component-comp2.js.map