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
        this.title = 'Tour of Heroes';
        this.myHero = 'Windstrom';
        this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
        this.clickMessage = "";
        this.values = "";
        this.values2 = "";
    }
    AppComponent.prototype.onClickMe = function () {
        this.clickMessage = "You are my hero!";
        // alert(this.clickMessage);
    };
    ;
    AppComponent.prototype.onKeyUp = function (event) {
        this.values += event.target.value + ' | ';
    };
    ;
    AppComponent.prototype.onKeyUp2 = function (value) {
        this.values2 += value + ' | ';
    };
    AppComponent.prototype.onKeyUpEnter3 = function (value) {
        alert("收到监听事件，而且值：" + value);
    };
    AppComponent.prototype.onBlur = function (value) {
        alert("输入框失去焦点，且值为:" + value);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            // template: `
            //   <h1>{{title}}</h1>
            //   <h1>My favorite hero is: {{myHero}}</h1>
            // `,
            templateUrl: "./app/views/heros.html"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map