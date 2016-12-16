"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.isDisplay = false;
        this.data = ['test', 'fssf', 'grth'];
    }
    AppComponent.prototype.clickName = function () {
        alert("click!");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>Angular2: Let's do it!</h1>\n        <h2>This is from our first component <i>nat-app</i></h2>\n\n        <h1>bind Click</h1>\n        <input type=\"text\" #inputName (click)=\"inputName.value='Yo'\" />\n        <input type=\"text\" #inputOther  (click)=\"clickName()\" />\n\n        <h1>ngFor</h1>\n        <ul>\n            <li *ngFor=\"let d of data\">\n                {{d}}\n            </li>\n        </ul>\n\n        <h1>ngIf</h1>\n        <div *ngIf=\"isDisplay\">\n         isDisplay = true;\n        </div>\n        <div *ngIf=\"isDisplay === false\">\n         isDisplay = false;\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map