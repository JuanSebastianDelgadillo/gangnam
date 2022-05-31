"use strict";
(self["webpackChunktaekwondogangnam_app"] = self["webpackChunktaekwondogangnam_app"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 938);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _pages_acerca_acerca_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/acerca/acerca.component */ 892);
/* harmony import */ var _pages_amigos_amigos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/amigos/amigos.component */ 6909);
/* harmony import */ var _pages_calendario_calendario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/calendario/calendario.component */ 9849);
/* harmony import */ var _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/contacto/contacto.component */ 3407);
/* harmony import */ var _pages_director_director_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/director/director.component */ 237);
/* harmony import */ var _pages_programas_programas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/programas/programas.component */ 7618);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);











const routes = [
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: "director", component: _pages_director_director_component__WEBPACK_IMPORTED_MODULE_6__.DirectorComponent },
    { path: "acerca", component: _pages_acerca_acerca_component__WEBPACK_IMPORTED_MODULE_2__.AcercaComponent },
    { path: "programas", component: _pages_programas_programas_component__WEBPACK_IMPORTED_MODULE_7__.ProgramasComponent },
    { path: "amigos", component: _pages_amigos_amigos_component__WEBPACK_IMPORTED_MODULE_3__.AmigosComponent },
    { path: "calendario", component: _pages_calendario_calendario_component__WEBPACK_IMPORTED_MODULE_4__.CalendarioComponent },
    { path: "contacto", component: _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_5__.ContactoComponent },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_movil_movil_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/movil/movil.component */ 2146);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AppComponent {
    constructor() {
        this.title = 'taekwondogangnam-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-movil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_movil_movil_component__WEBPACK_IMPORTED_MODULE_0__.MovilComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/slider/slider.component */ 6052);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ 938);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_central_home_central_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/central-home/central-home.component */ 9035);
/* harmony import */ var _components_bottom_home_bottom_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/bottom-home/bottom-home.component */ 1939);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _pages_director_director_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/director/director.component */ 237);
/* harmony import */ var _pages_acerca_acerca_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/acerca/acerca.component */ 892);
/* harmony import */ var _pages_programas_programas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/programas/programas.component */ 7618);
/* harmony import */ var _pages_amigos_amigos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/amigos/amigos.component */ 6909);
/* harmony import */ var _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/contacto/contacto.component */ 3407);
/* harmony import */ var _pages_calendario_calendario_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/calendario/calendario.component */ 9849);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/title/title.component */ 9527);
/* harmony import */ var _components_movil_movil_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/movil/movil.component */ 2146);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_2__.SliderComponent,
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent,
        _components_central_home_central_home_component__WEBPACK_IMPORTED_MODULE_5__.CentralHomeComponent,
        _components_bottom_home_bottom_home_component__WEBPACK_IMPORTED_MODULE_6__.BottomHomeComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent,
        _pages_director_director_component__WEBPACK_IMPORTED_MODULE_8__.DirectorComponent,
        _pages_acerca_acerca_component__WEBPACK_IMPORTED_MODULE_9__.AcercaComponent,
        _pages_programas_programas_component__WEBPACK_IMPORTED_MODULE_10__.ProgramasComponent,
        _pages_amigos_amigos_component__WEBPACK_IMPORTED_MODULE_11__.AmigosComponent,
        _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_12__.ContactoComponent,
        _pages_calendario_calendario_component__WEBPACK_IMPORTED_MODULE_13__.CalendarioComponent,
        _components_title_title_component__WEBPACK_IMPORTED_MODULE_14__.TitleComponent,
        _components_movil_movil_component__WEBPACK_IMPORTED_MODULE_15__.MovilComponent,
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__.LoginComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule] }); })();


/***/ }),

/***/ 1939:
/*!*****************************************************************!*\
  !*** ./src/app/components/bottom-home/bottom-home.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BottomHomeComponent": () => (/* binding */ BottomHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class BottomHomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
BottomHomeComponent.ɵfac = function BottomHomeComponent_Factory(t) { return new (t || BottomHomeComponent)(); };
BottomHomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BottomHomeComponent, selectors: [["app-bottom-home"]], decls: 38, vars: 0, consts: [[1, "slider"], ["id", "carousel_bottom", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carousel_bottom", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carousel_bottom", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carousel_bottom", "data-bs-slide-to", "2", "aria-label", "Slide 3"], [1, "carousel-inner"], ["data-bs-interval", "10000", 1, "carousel-item", "active"], ["src", "../../../assets/sliders/kukkiewon2.png", "alt", "...", 1, "d-block", "w-100"], [1, "carousel-caption", "d-none", "d-md-block"], ["href", "tel:+56996936149"], ["data-bs-interval", "2000", 1, "carousel-item"], [1, "carousel-item"], ["type", "button", "data-bs-target", "#carousel_bottom", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carousel_bottom", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]], template: function BottomHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "El L\u00EDbano 5001, Macul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tel\u00E9fono ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "+56996936149");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Second slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Some representative placeholder content for the second slide.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Third slide label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Some representative placeholder content for the third slide.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".slider[_ngcontent-%COMP%]{\n    width: 100%;\n    position: relative\n}\n\n.bottom_parent[_ngcontent-%COMP%]{\n    position: absolute;\n    width: 100%;\n    top: -2px;\n    z-index: 1;\n}\n\n.bottom_parent[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n}\n\n.carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    -webkit-clip-path: polygon(0 8%, 100% 0%, 100% 100%, 0% 100%);\n    clip-path: polygon(0 8%, 100% 0%, 100% 100%, 0% 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdHRvbS1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDZEQUE2RDtJQUM3RCxxREFBcUQ7QUFDekQiLCJmaWxlIjoiYm90dG9tLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG59XG5cbi5ib3R0b21fcGFyZW50e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IC0ycHg7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmJvdHRvbV9wYXJlbnQgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY2Fyb3VzZWwtaXRlbSBpbWd7XG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCA4JSwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwJSAxMDAlKTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCA4JSwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwJSAxMDAlKTtcbn1cblxuIl19 */"] });


/***/ }),

/***/ 9035:
/*!*******************************************************************!*\
  !*** ./src/app/components/central-home/central-home.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CentralHomeComponent": () => (/* binding */ CentralHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../title/title.component */ 9527);


class CentralHomeComponent {
    constructor() { }
    ngOnInit() {
        // this.instanceLib = myScript();
        // this.instanceLib.mostrarScroll();
    }
}
CentralHomeComponent.ɵfac = function CentralHomeComponent_Factory(t) { return new (t || CentralHomeComponent)(); };
CentralHomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CentralHomeComponent, selectors: [["app-central-home"]], decls: 34, vars: 1, consts: [[1, "row", "home-middle", "m-3", "p-5"], [1, "container"], [3, "titulo"], [1, "row", "bg-light"], [1, "col-md-4", "p-3", "bg-light"], [1, "card", 2, "width", "100%"], ["src", "../../../assets/galeria/3.jpeg", "alt", "...", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "btn", "bgd_institucional1"], [1, "col-md-4", "p-3", "middle"], [1, "card", "border-0", 2, "width", "100%", "text-align", "center"], ["src", "../../../assets/galeria/1.jpeg", "alt", "...", 1, "card-img-top", "rounded-circle", "border", "border-white", "border-5"], ["href", "#", 1, "btn", "bgd_institucional"], [1, "col-md-4", "p-3"], ["src", "../../../assets/galeria/1.jpeg", "alt", "...", "width", "100", 1, "card-img-top"]], template: function CentralHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Entrenamiento marcial");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Entrenamiento funcional");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Poomsae");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("titulo", "Nuestros programa");
    } }, directives: [_title_title_component__WEBPACK_IMPORTED_MODULE_0__.TitleComponent], styles: [".home-middle[_ngcontent-%COMP%]{\n    width: 100%;\n    height: auto;\n    background-color: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlbnRyYWwtaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0IiLCJmaWxlIjoiY2VudHJhbC1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1taWRkbGV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59Il19 */"] });


/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navbar/navbar.component */ 3252);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class FooterComponent {
    constructor(navbarComponent, router) {
        this.navbarComponent = navbarComponent;
        this.router = router;
    }
    ngOnInit() {
        this.navbarComponent.isActive(this.router.url.split("/")[1]);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 90, vars: 0, consts: [["id", "footer", 1, "footer-1"], [1, "main-footer", "widgets-dark", "typo-light"], [1, "container"], [1, "row"], [1, "col-xs-12", "col-sm-6", "col-md-3"], [1, "widget", "subscribe", "no-box", "text-center"], [1, "widget-title"], ["src", "../../../assets/logo/logo2.png", "width", "150"], ["href", "tel:+56996936149"], [1, "widget", "no-box"], [1, "thumbnail-widget"], [1, "thumb-content"], ["routerLink", ""], ["routerLink", "/director"], ["routerLink", "/acerca"], ["routerLink", "/programas"], ["routerLink", "/amigos"], ["routerLink", "/calendario"], ["routerLink", "/contacto"], ["routerLink", "/login", 1, "btn"], ["href", "mailto:info@domain.com", "title", "glorythemes"], [1, "social-footer2"], [1, ""], ["title", "youtube", "target", "_blank", "href", "https://bit.ly/3m9avif"], ["alt", "youtube", "width", "30", "height", "30", "src", "data:image/png;base64,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"], ["href", "https://www.facebook.com/", "target", "_blank", "title", "Facebook"], ["alt", "Facebook", "width", "30", "height", "30", "src", "data:image/png;base64,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"], ["href", "https://twitter.com", "target", "_blank", "title", "Twitter"], ["alt", "Twitter", "width", "30", "height", "30", "src", "data:image/png;base64,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"], ["title", "instagram", "target", "_blank", "href", "https://www.instagram.com/"], ["alt", "instagram", "width", "30", "height", "30", "src", "data:image/png;base64,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"], [1, "footer-copyright"], [1, "col-md-12", "text-center"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "TAEKWONDO GANG-NAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Escuela de Taekwondo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Gang-nam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "El L\u00EDbano 5001, Macul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Tel\u00E9fono +56996936149");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Accesos R\u00E1pidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Director");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Acerca de");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Programas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Amigos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Calendario");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Acceso a estudiantes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Accede al material de estudiante en el siguiente link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Contactanos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "info@taekwondogangnam.cl");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Copyright Taekwondo Gang-nam \u00A9 2022. Todos los derechos reservados.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: [".footer-1[_ngcontent-%COMP%]{\n  margin-top: 30px;\n}\nfooter[_ngcontent-%COMP%]   .main-footer[_ngcontent-%COMP%]{  padding: 20px 0;  background: #252525;}\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{  padding-left: 0;  list-style: none;}\n\n.footer-copyright[_ngcontent-%COMP%] { background: #222; padding: 5px 0;}\n.footer-copyright[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {    display: inherit;}\n.footer-copyright[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {    float: right;    margin-top: 5px;}\n.footer-copyright[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {  list-style: none; margin: 0;  padding: 0;}\n.footer-copyright[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { border-left: 1px solid #505050; display: inline-block;  line-height: 12px;  margin: 0;  padding: 0 8px;}\n.footer-copyright[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{  color: #969696;}\n.footer-copyright[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child { border: medium none;  padding-left: 0;}\n.footer-copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #969696; margin: 2px 0 0;}\n\n.footer-top[_ngcontent-%COMP%]{  background: #252525;  padding-bottom: 30px; margin-bottom: 30px;  border-bottom: 3px solid #222;}\n\nfooter.transparent[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%], footer.transparent[_ngcontent-%COMP%]   .main-footer[_ngcontent-%COMP%]{  background: transparent;}\nfooter.transparent[_ngcontent-%COMP%]   .footer-copyright[_ngcontent-%COMP%]{ background: none repeat scroll 0 0 rgba(0, 0, 0, 0.3) ;}\n\nfooter.light[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]{ background: #f9f9f9;}\nfooter.light[_ngcontent-%COMP%]   .main-footer[_ngcontent-%COMP%]{  background: #f9f9f9;}\nfooter.light[_ngcontent-%COMP%]   .footer-copyright[_ngcontent-%COMP%]{ background: none repeat scroll 0 0 rgba(255, 255, 255, 0.3) ;}\n\n.footer-[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {    display: inline-block;}\n\n.widget[_ngcontent-%COMP%]{  padding: 20px;  margin-bottom: 40px;}\n.widget.widget-last[_ngcontent-%COMP%]{  margin-bottom: 0px;}\n.widget.no-box[_ngcontent-%COMP%]{ padding: 0; background-color: transparent;  margin-bottom: 40px;\n  box-shadow: none; -webkit-box-shadow: none; -moz-box-shadow: none; -ms-box-shadow: none; -o-box-shadow: none;}\n.widget.subscribe[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{  margin-bottom: 18px;}\n.widget[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{ color: #ff8d1e;}\n.widget[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{ color: #4b92dc;}\n.widget-title[_ngcontent-%COMP%] {margin-bottom: 20px;}\n.widget-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {background: #839FAD none repeat scroll 0 0;display: block; height: 1px;margin-top: 25px;position: relative;width: 20%;}\n.widget-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {background: inherit;content: \"\";height: inherit;    position: absolute;top: -4px;width: 50%;}\n.widget-title.text-center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .widget-title.text-center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {margin-left: auto;margin-right:auto;left: 0;right: 0;}\n.widget[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{ float: right; background: #7f7f7f;}\n.typo-light[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .typo-light[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .typo-light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .typo-light[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .typo-light[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .typo-light[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .typo-light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .typo-light[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .typo-light[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .typo-light[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{  color: #fff;}\nul.social-footer2[_ngcontent-%COMP%] { margin: 0;padding: 0; width: auto;}\nul.social-footer2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {display: inline-block;padding: 0;}\nul.social-footer2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {background-color:#ff8d1e;}\nul.social-footer2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {display: block; height:30px;width: 30px;text-align: center;}\n.btn[_ngcontent-%COMP%]{background-color: #ff8d1e; color:#fff;}\n.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus, .btn.active[_ngcontent-%COMP%] {background: #4b92dc;color: #fff;\n-ms-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\n-o-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\nbox-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\ntransition: all 250ms ease-in-out 0s;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzt3QkFFd0I7QUFDeEIsZ0JBQWdCO0FBQ2hCO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUEsc0JBQXNCLGVBQWUsR0FBRyxtQkFBbUIsQ0FBQztBQUM1RCxZQUFZLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQztBQUUvQyxzQkFBc0I7QUFDdEIsb0JBQW9CLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztBQUNyRCw2QkFBNkIsZ0JBQWdCLENBQUM7QUFDOUMsMkJBQTJCLFlBQVksS0FBSyxlQUFlLENBQUM7QUFDNUQsNEJBQTRCLGdCQUFnQixFQUFFLFNBQVMsR0FBRyxVQUFVLENBQUM7QUFDckUsOEJBQThCLDhCQUE4QixFQUFFLHFCQUFxQixHQUFHLGlCQUFpQixHQUFHLFNBQVMsR0FBRyxjQUFjLENBQUM7QUFDckksZ0NBQWdDLGNBQWMsQ0FBQztBQUMvQywwQ0FBMEMsbUJBQW1CLEdBQUcsZUFBZSxDQUFDO0FBQ2hGLHNCQUFzQixjQUFjLEVBQUUsZUFBZSxDQUFDO0FBRXRELGVBQWU7QUFDZixjQUFjLG1CQUFtQixHQUFHLG9CQUFvQixFQUFFLG1CQUFtQixHQUFHLDZCQUE2QixDQUFDO0FBRTlHLHVCQUF1QjtBQUN2QixrRUFBa0UsdUJBQXVCLENBQUM7QUFDMUYsc0NBQXNDLHNEQUFzRCxDQUFDO0FBRTdGLGlCQUFpQjtBQUNqQiwwQkFBMEIsbUJBQW1CLENBQUM7QUFDOUMsNEJBQTRCLG1CQUFtQixDQUFDO0FBQ2hELGdDQUFnQyw0REFBNEQsQ0FBQztBQUU3RixhQUFhO0FBQ2Isb0JBQW9CLHFCQUFxQixDQUFDO0FBRTFDOzt3QkFFd0I7QUFDeEIsVUFBVSxhQUFhLEdBQUcsbUJBQW1CLENBQUM7QUFDOUMsc0JBQXNCLGtCQUFrQixDQUFDO0FBQ3pDLGdCQUFnQixVQUFVLEVBQUUsNkJBQTZCLEdBQUcsbUJBQW1CO0VBQzdFLGdCQUFnQixFQUFFLHdCQUF3QixFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixDQUFDO0FBQy9HLHNCQUFzQixtQkFBbUIsQ0FBQztBQUMxQyxjQUFjLGNBQWMsQ0FBQztBQUM3QixvQkFBb0IsY0FBYyxDQUFDO0FBQ25DLGVBQWUsbUJBQW1CLENBQUM7QUFDbkMsb0JBQW9CLDBDQUEwQyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDO0FBQzFJLDJCQUEyQixtQkFBbUIsQ0FBQyxXQUFXLENBQUMsZUFBZSxLQUFLLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7QUFDdkgsc0VBQXNFLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7QUFDM0gsZ0JBQWdCLFlBQVksRUFBRSxtQkFBbUIsQ0FBQztBQUVsRDs7Ozs7Ozs7O29CQVNvQixXQUFXLENBQUM7QUFFaEMsb0JBQW9CLFNBQVMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDO0FBQ3RELHNCQUFzQixxQkFBcUIsQ0FBQyxVQUFVLENBQUM7QUFDdkQsOEJBQThCLHdCQUF3QixDQUFDO0FBQ3ZELHdCQUF3QixjQUFjLEVBQUUsV0FBVyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztBQUNuRixLQUFLLHlCQUF5QixFQUFFLFVBQVUsQ0FBQztBQUMzQyxxQ0FBcUMsbUJBQW1CLENBQUMsV0FBVztBQUdwRSw4Q0FBOEM7QUFDOUMsNkNBQTZDO0FBQzdDLDBDQUEwQztBQUsxQyxvQ0FBb0M7O0FBRXBDIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PSBcbiAgRm9vdGVyIFxuPT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyogTWFpbiBGb290ZXIgKi9cbi5mb290ZXItMXtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuZm9vdGVyIC5tYWluLWZvb3RlcnsgIHBhZGRpbmc6IDIwcHggMDsgIGJhY2tncm91bmQ6ICMyNTI1MjU7fVxuZm9vdGVyIHVseyAgcGFkZGluZy1sZWZ0OiAwOyAgbGlzdC1zdHlsZTogbm9uZTt9XG5cbi8qIENvcHkgUmlnaHQgRm9vdGVyICovXG4uZm9vdGVyLWNvcHlyaWdodCB7IGJhY2tncm91bmQ6ICMyMjI7IHBhZGRpbmc6IDVweCAwO31cbi5mb290ZXItY29weXJpZ2h0IC5sb2dvIHsgICAgZGlzcGxheTogaW5oZXJpdDt9XG4uZm9vdGVyLWNvcHlyaWdodCBuYXYgeyAgICBmbG9hdDogcmlnaHQ7ICAgIG1hcmdpbi10b3A6IDVweDt9XG4uZm9vdGVyLWNvcHlyaWdodCBuYXYgdWwgeyAgbGlzdC1zdHlsZTogbm9uZTsgbWFyZ2luOiAwOyAgcGFkZGluZzogMDt9XG4uZm9vdGVyLWNvcHlyaWdodCBuYXYgdWwgbGkgeyBib3JkZXItbGVmdDogMXB4IHNvbGlkICM1MDUwNTA7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgIGxpbmUtaGVpZ2h0OiAxMnB4OyAgbWFyZ2luOiAwOyAgcGFkZGluZzogMCA4cHg7fVxuLmZvb3Rlci1jb3B5cmlnaHQgbmF2IHVsIGxpIGF7ICBjb2xvcjogIzk2OTY5Njt9XG4uZm9vdGVyLWNvcHlyaWdodCBuYXYgdWwgbGk6Zmlyc3QtY2hpbGQgeyBib3JkZXI6IG1lZGl1bSBub25lOyAgcGFkZGluZy1sZWZ0OiAwO31cbi5mb290ZXItY29weXJpZ2h0IHAgeyBjb2xvcjogIzk2OTY5NjsgbWFyZ2luOiAycHggMCAwO31cblxuLyogRm9vdGVyIFRvcCAqL1xuLmZvb3Rlci10b3B7ICBiYWNrZ3JvdW5kOiAjMjUyNTI1OyAgcGFkZGluZy1ib3R0b206IDMwcHg7IG1hcmdpbi1ib3R0b206IDMwcHg7ICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzIyMjt9XG5cbi8qIEZvb3RlciB0cmFuc3BhcmVudCAqL1xuZm9vdGVyLnRyYW5zcGFyZW50IC5mb290ZXItdG9wLCBmb290ZXIudHJhbnNwYXJlbnQgLm1haW4tZm9vdGVyeyAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7fVxuZm9vdGVyLnRyYW5zcGFyZW50IC5mb290ZXItY29weXJpZ2h0eyBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHJnYmEoMCwgMCwgMCwgMC4zKSA7fVxuXG4vKiBGb290ZXIgbGlnaHQgKi9cbmZvb3Rlci5saWdodCAuZm9vdGVyLXRvcHsgYmFja2dyb3VuZDogI2Y5ZjlmOTt9XG5mb290ZXIubGlnaHQgLm1haW4tZm9vdGVyeyAgYmFja2dyb3VuZDogI2Y5ZjlmOTt9XG5mb290ZXIubGlnaHQgLmZvb3Rlci1jb3B5cmlnaHR7IGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIDt9XG5cbi8qIEZvb3RlciA0ICovXG4uZm9vdGVyLSAubG9nbyB7ICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazt9XG5cbi8qPT09PT09PT09PT09PT09PT09PT0gXG4gIFdpZGdldHMgXG49PT09PT09PT09PT09PT09PT09PT09ICovXG4ud2lkZ2V0eyAgcGFkZGluZzogMjBweDsgIG1hcmdpbi1ib3R0b206IDQwcHg7fVxuLndpZGdldC53aWRnZXQtbGFzdHsgIG1hcmdpbi1ib3R0b206IDBweDt9XG4ud2lkZ2V0Lm5vLWJveHsgcGFkZGluZzogMDsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7ICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBib3gtc2hhZG93OiBub25lOyAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7IC1tb3otYm94LXNoYWRvdzogbm9uZTsgLW1zLWJveC1zaGFkb3c6IG5vbmU7IC1vLWJveC1zaGFkb3c6IG5vbmU7fVxuLndpZGdldC5zdWJzY3JpYmUgcHsgIG1hcmdpbi1ib3R0b206IDE4cHg7fVxuLndpZGdldCBsaSBheyBjb2xvcjogI2ZmOGQxZTt9XG4ud2lkZ2V0IGxpIGE6aG92ZXJ7IGNvbG9yOiAjNGI5MmRjO31cbi53aWRnZXQtdGl0bGUge21hcmdpbi1ib3R0b206IDIwcHg7fVxuLndpZGdldC10aXRsZSBzcGFuIHtiYWNrZ3JvdW5kOiAjODM5RkFEIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7ZGlzcGxheTogYmxvY2s7IGhlaWdodDogMXB4O21hcmdpbi10b3A6IDI1cHg7cG9zaXRpb246IHJlbGF0aXZlO3dpZHRoOiAyMCU7fVxuLndpZGdldC10aXRsZSBzcGFuOjphZnRlciB7YmFja2dyb3VuZDogaW5oZXJpdDtjb250ZW50OiBcIlwiO2hlaWdodDogaW5oZXJpdDsgICAgcG9zaXRpb246IGFic29sdXRlO3RvcDogLTRweDt3aWR0aDogNTAlO31cbi53aWRnZXQtdGl0bGUudGV4dC1jZW50ZXIgc3Bhbiwud2lkZ2V0LXRpdGxlLnRleHQtY2VudGVyIHNwYW46OmFmdGVyIHttYXJnaW4tbGVmdDogYXV0bzttYXJnaW4tcmlnaHQ6YXV0bztsZWZ0OiAwO3JpZ2h0OiAwO31cbi53aWRnZXQgLmJhZGdleyBmbG9hdDogcmlnaHQ7IGJhY2tncm91bmQ6ICM3ZjdmN2Y7fVxuXG4udHlwby1saWdodCBoMSwgXG4udHlwby1saWdodCBoMiwgXG4udHlwby1saWdodCBoMywgXG4udHlwby1saWdodCBoNCwgXG4udHlwby1saWdodCBoNSwgXG4udHlwby1saWdodCBoNixcbi50eXBvLWxpZ2h0IHAsXG4udHlwby1saWdodCBkaXYsXG4udHlwby1saWdodCBzcGFuLFxuLnR5cG8tbGlnaHQgc21hbGx7ICBjb2xvcjogI2ZmZjt9XG5cbnVsLnNvY2lhbC1mb290ZXIyIHsgbWFyZ2luOiAwO3BhZGRpbmc6IDA7IHdpZHRoOiBhdXRvO31cbnVsLnNvY2lhbC1mb290ZXIyIGxpIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7cGFkZGluZzogMDt9XG51bC5zb2NpYWwtZm9vdGVyMiBsaSBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjhkMWU7fVxudWwuc29jaWFsLWZvb3RlcjIgbGkgYSB7ZGlzcGxheTogYmxvY2s7IGhlaWdodDozMHB4O3dpZHRoOiAzMHB4O3RleHQtYWxpZ246IGNlbnRlcjt9XG4uYnRue2JhY2tncm91bmQtY29sb3I6ICNmZjhkMWU7IGNvbG9yOiNmZmY7fVxuLmJ0bjpob3ZlciwgLmJ0bjpmb2N1cywgLmJ0bi5hY3RpdmUge2JhY2tncm91bmQ6ICM0YjkyZGM7Y29sb3I6ICNmZmY7XG4td2Via2l0LWJveC1zaGFkb3c6IDAgMTVweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbi1tb3otYm94LXNoYWRvdzogMCAxNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuLW1zLWJveC1zaGFkb3c6IDAgMTVweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbi1vLWJveC1zaGFkb3c6IDAgMTVweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbmJveC1zaGFkb3c6IDAgMTVweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbi13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBzO1xuLW1vei10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgMHM7XG4tbXMtdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBzO1xuLW8tdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBzO1xudHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBzO1xuXG59XG4iXX0= */"] });


/***/ }),

/***/ 938:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navbar/navbar.component */ 3252);
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slider/slider.component */ 6052);
/* harmony import */ var _central_home_central_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../central-home/central-home.component */ 9035);
/* harmony import */ var _bottom_home_bottom_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bottom-home/bottom-home.component */ 1939);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ 4662);






class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-central-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-bottom-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _slider_slider_component__WEBPACK_IMPORTED_MODULE_1__.SliderComponent, _central_home_central_home_component__WEBPACK_IMPORTED_MODULE_2__.CentralHomeComponent, _bottom_home_bottom_home_component__WEBPACK_IMPORTED_MODULE_3__.BottomHomeComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 20, vars: 0, consts: [[1, "container"], [1, "card", "card-container"], ["id", "profile-img", "src", "../../../assets/logo/logo2.png", 1, "profile-img-card"], ["id", "profile-name", 1, "profile-name-card"], [1, "form-signin"], ["id", "reauth-email", 1, "reauth-email"], ["type", "email", "id", "inputEmail", "placeholder", "Email address", "required", "", "autofocus", "", 1, "form-control"], ["type", "password", "id", "inputPassword", "placeholder", "Password", "required", "", 1, "form-control"], ["id", "remember", 1, "checkbox"], ["type", "checkbox", "value", "remember-me"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "p-1"], [1, "btn", "btn-lg", "btn-google", "p-1"], ["href", "#", 1, "forgot-password"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Recuerdame ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Olvido la clave? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card-container.card[_ngcontent-%COMP%] {\n    max-width: 350px;\n    padding: 40px 40px;\n}\n\n.btn[_ngcontent-%COMP%] {\n    font-weight: 700;\n    height: 36px;\n    -webkit-user-select: none;\n    user-select: none;\n    cursor: default;\n}\n\n\n\n.card[_ngcontent-%COMP%] {\n    background-color: #F7F7F7;\n    \n    padding: 20px 25px 30px;\n    margin: 0 auto 25px;\n    margin-top: 50px;\n    \n    border-radius: 2px;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n    margin: 0 auto 10px;\n    display: block;\n    border-radius: 50%;\n}\n\n\n\n.profile-name-card[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n    margin: 10px 0 0;\n    min-height: 1em;\n}\n\n.reauth-email[_ngcontent-%COMP%] {\n    display: block;\n    color: #404040;\n    line-height: 2;\n    margin-bottom: 10px;\n    font-size: 14px;\n    text-align: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    box-sizing: border-box;\n}\n\n.form-signin[_ngcontent-%COMP%]   #inputEmail[_ngcontent-%COMP%], .form-signin[_ngcontent-%COMP%]   #inputPassword[_ngcontent-%COMP%] {\n    direction: ltr;\n    height: 44px;\n    font-size: 16px;\n}\n\n.form-signin[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .form-signin[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], .form-signin[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .form-signin[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n    margin-bottom: 10px;\n    z-index: 1;\n    position: relative;\n    box-sizing: border-box;\n}\n\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n    border-color: rgb(104, 145, 162);\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\n}\n\n.btn.btn-signin[_ngcontent-%COMP%] {\n    \n    background-color: rgb(104, 145, 162);\n    \n    padding: 0px;\n    font-weight: 700;\n    font-size: 14px;\n    height: 36px;\n    border-radius: 3px;\n    border: none;\n    transition: all 0.218s;\n}\n\n.btn.btn-signin[_ngcontent-%COMP%]:hover, .btn.btn-signin[_ngcontent-%COMP%]:active, .btn.btn-signin[_ngcontent-%COMP%]:focus {\n    background-color: rgb(12, 97, 33);\n}\n\n.forgot-password[_ngcontent-%COMP%] {\n    color: rgb(104, 145, 162);\n}\n\n.forgot-password[_ngcontent-%COMP%]:hover, .forgot-password[_ngcontent-%COMP%]:active, .forgot-password[_ngcontent-%COMP%]:focus{\n    color: rgb(12, 97, 33);\n}\n\n.btn-google[_ngcontent-%COMP%]{\n    background-color: #dd4b39;\n     color: #fff;\n     cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFFWix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7O0VBRUU7O0FBQ0Y7SUFDSSx5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUdoQyxrQkFBa0I7SUFHbEIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztJQUdkLGtCQUFrQjtBQUN0Qjs7QUFFQTs7RUFFRTs7QUFDRjtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFHbkIsc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTs7OztJQUlJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixrQkFBa0I7SUFHbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFVBQVU7SUFFVix1RUFBdUU7QUFDM0U7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLDJFQUEyRTtJQUMzRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBR1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFJWixzQkFBc0I7QUFDMUI7O0FBRUE7OztJQUdJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0tBQ3hCLFdBQVc7S0FDWCxlQUFlO0FBQ3BCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250YWluZXIuY2FyZCB7XG4gICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHg7XG59XG5cbi5idG4ge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qXG4gKiBDYXJkIGNvbXBvbmVudFxuICovXG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcbiAgICAvKiBqdXN0IGluIGNhc2UgdGhlcmUgbm8gY29udGVudCovXG4gICAgcGFkZGluZzogMjBweCAyNXB4IDMwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG8gMjVweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIC8qIHNoYWRvd3MgYW5kIHJvdW5kZWQgYm9yZGVycyAqL1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5wcm9maWxlLWltZy1jYXJkIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLypcbiAqIEZvcm0gc3R5bGVzXG4gKi9cbi5wcm9maWxlLW5hbWUtY2FyZCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIG1pbi1oZWlnaHQ6IDFlbTtcbn1cblxuLnJlYXV0aC1lbWFpbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICM0MDQwNDA7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5mb3JtLXNpZ25pbiAjaW5wdXRFbWFpbCxcbi5mb3JtLXNpZ25pbiAjaW5wdXRQYXNzd29yZCB7XG4gICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9ZW1haWxdLFxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9cGFzc3dvcmRdLFxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9dGV4dF0sXG4uZm9ybS1zaWduaW4gYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDEwNCwgMTQ1LCAxNjIpO1xuICAgIG91dGxpbmU6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgOHB4IHJnYigxMDQsIDE0NSwgMTYyKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgOHB4IHJnYigxMDQsIDE0NSwgMTYyKTtcbn1cblxuLmJ0bi5idG4tc2lnbmluIHtcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICM0ZDkwZmU7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNCwgMTQ1LCAxNjIpO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudChyZ2IoMTA0LCAxNDUsIDE2MiksIHJnYigxMiwgOTcsIDMzKSk7Ki9cbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMjE4cztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjIxOHM7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjIxOHM7XG59XG5cbi5idG4uYnRuLXNpZ25pbjpob3Zlcixcbi5idG4uYnRuLXNpZ25pbjphY3RpdmUsXG4uYnRuLmJ0bi1zaWduaW46Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgOTcsIDMzKTtcbn1cblxuLmZvcmdvdC1wYXNzd29yZCB7XG4gICAgY29sb3I6IHJnYigxMDQsIDE0NSwgMTYyKTtcbn1cblxuLmZvcmdvdC1wYXNzd29yZDpob3Zlcixcbi5mb3Jnb3QtcGFzc3dvcmQ6YWN0aXZlLFxuLmZvcmdvdC1wYXNzd29yZDpmb2N1c3tcbiAgICBjb2xvcjogcmdiKDEyLCA5NywgMzMpO1xufVxuXG4uYnRuLWdvb2dsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xuICAgICBjb2xvcjogI2ZmZjtcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"] });


/***/ }),

/***/ 2146:
/*!*****************************************************!*\
  !*** ./src/app/components/movil/movil.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovilComponent": () => (/* binding */ MovilComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class MovilComponent {
    constructor() { }
    ngOnInit() {
    }
}
MovilComponent.ɵfac = function MovilComponent_Factory(t) { return new (t || MovilComponent)(); };
MovilComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovilComponent, selectors: [["app-movil"]], decls: 3, vars: 0, consts: [[1, "logo_movil"], ["target", "_blank", "href", "https://api.whatsapp.com/send?phone=56996936149&text=Contacto%20con%20Taekwondo%20Gang-nam,%20a%20su%20orden..."], ["src", "../../../assets/logo/whatsapp-logo.png"]], template: function MovilComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".logo_movil[_ngcontent-%COMP%]{\n    position: fixed;\n    left: 10px;\n    bottom: 10px;\n    z-index: 200;\n}\n\n.logo_movil[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 80px;\n    cursor: pointer;\n}\n\n.logo_movil[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\n    transition-duration: .6s;\n    transform: scale(0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6Im1vdmlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb19tb3ZpbHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMTBweDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgei1pbmRleDogMjAwO1xufVxuXG4ubG9nb19tb3ZpbCBpbWd7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9nb19tb3ZpbCBpbWc6aG92ZXJ7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjZzO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbn0iXX0= */"] });


/***/ }),

/***/ 3252:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class NavbarComponent {
    constructor(router) {
        this.router = router;
        this.activeHome = 'no-active';
        this.activeDirector = 'no-active';
        this.activeAcerca = 'no-active';
        this.activeProgramas = 'no-active';
        this.activeAmigos = 'no-active';
        this.activeCalendario = 'no-active';
        this.activeContacto = 'no-active';
    }
    ngOnInit() {
        this.isActive(this.router.url.split("/")[1]);
    }
    isActive(opcion) {
        this.activeHome = opcion === '' ? "active" : 'no-active';
        this.activeDirector = opcion === 'director' ? "active" : 'no-active';
        this.activeAcerca = opcion === 'acerca' ? "active" : 'no-active';
        this.activeProgramas = opcion === 'programas' ? "active" : 'no-active';
        this.activeAmigos = opcion === 'amigos' ? "active" : 'no-active';
        this.activeCalendario = opcion === 'calendario' ? "active" : 'no-active';
        this.activeContacto = opcion === 'contacto' ? "active" : 'no-active';
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { titulo: "titulo" }, decls: 29, vars: 21, consts: [[1, "navbar", "sticky-top", "navbar-expand-lg", "navbar-dark", "bg_institucional1"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["src", "../../../assets/logo/logo2.png", "width", "70"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarTogglerDemo02", "aria-controls", "navbarTogglerDemo02", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarTogglerDemo02", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "routerLink", ""], ["routerLink", "/director"], ["routerLink", "/acerca"], ["routerLink", "/programas"], ["routerLink", "/amigos"], ["routerLink", "/calendario"], ["routerLink", "/contacto"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Director");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Acerca de nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Programas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Amigos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Calendario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-link ", ctx.activeHome, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-link ", ctx.activeDirector, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-link ", ctx.activeAcerca, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-link ", ctx.activeProgramas, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-link ", ctx.activeAmigos, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-link ", ctx.activeCalendario, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-link ", ctx.activeContacto, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6052:
/*!*******************************************************!*\
  !*** ./src/app/components/slider/slider.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderComponent": () => (/* binding */ SliderComponent)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ 5139);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


4;
class SliderComponent {
    constructor() { }
    ngOnInit() {
    }
    closeModal() {
        jquery__WEBPACK_IMPORTED_MODULE_0__("#videoHeader").trigger('pause');
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(); };
SliderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], decls: 18, vars: 0, consts: [[1, "base_slider"], [1, "base_titles"], [1, "titles"], [1, "base_video"], [1, "style_video", "rounded-circle"], ["src", "../../../assets/video/video-play-icon.png", "alt", "", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "rounded-circle"], ["src", "../../../assets/sliders/fondo1.png"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", "mt-5"], [1, "modal-dialog"], [1, "modal-content"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], ["id", "videoHeader", "width", "500", "height", "300", "controls", ""], ["src", "../../../assets/video/video.mp4", "type", "video/mp4"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "TAEKWONDO GANGNAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Escuelas Gang-nam");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SliderComponent_Template_button_click_14_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "video", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "source", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Tu explorador no soporta videos... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".base_slider[_ngcontent-%COMP%]{\n    width: 100%;\n    background-color: #fafafa;\n    padding: 0;\n    margin: 0;\n}\n\n.base_slider[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\n    width: 100%;\n}\n\n.base_titles[_ngcontent-%COMP%]{\n    width: 100%;\n    position: relative;\n}\n\n.titles[_ngcontent-%COMP%]{\n    color: #fff;\n    position: absolute;\n    left: 100px;\n    top: 60px;\n    z-index: 100;\n}\n\n.base_video[_ngcontent-%COMP%]{\n    position: absolute;\n}\n\n.style_video[_ngcontent-%COMP%]{\n   width: 170px;\n   height: 170px;\n   background-color: rgba(0, 0, 0, 0.4);\n   position: absolute;\n   left: 400px;\n   top: 200px;\n   opacity: 13;\n   display: flex;\n   align-items: center;\n}\n\n.style_video[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\n    width: 80%;\n    cursor: pointer;\n    opacity: 1;\n    margin-left: auto;\n    margin-right: auto;\n }\n\n.style_video[_ngcontent-%COMP%]:hover{\n    width: 150px;\n    height: 150px;\n    background-color: rgba(0, 0, 0, 0.2);\n    transition: all 0.5s ease-out;\n    display: flex;\n   align-items: center;\n }\n\n.style_video[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]:hover{\n    width: 90%;\n    transform: rotate(120deg);\n    background-color: #D9001D;\n    transition: all 0.5s ease-out;\n\n }\n\n.modal-dialog[_ngcontent-%COMP%] {\n    margin: 20vh auto 0px auto\n}\n\n@media (max-width: 767px){\n\n    .base_slider[_ngcontent-%COMP%]{\n        height: 300px;\n    }\n\n    .titles[_ngcontent-%COMP%]{\n        top: 0px;\n        left: 50px;\n    }\n\n    .base_video[_ngcontent-%COMP%]{\n        position: relative;\n    }\n    .style_video[_ngcontent-%COMP%]{\n        left: 30%;\n        right: 50%;\n        top: 150px;\n        width: 120px;\n        height: 120px;\n        position: absolute;\n    }\n };\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0dBQ0csWUFBWTtHQUNaLGFBQWE7R0FDYixvQ0FBb0M7R0FDcEMsa0JBQWtCO0dBQ2xCLFdBQVc7R0FDWCxVQUFVO0dBQ1YsV0FBVztHQUNYLGFBQWE7R0FDYixtQkFBbUI7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0NBQ3JCOztBQUVBO0lBQ0csWUFBWTtJQUNaLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsNkJBQTZCO0lBQzdCLGFBQWE7R0FDZCxtQkFBbUI7Q0FDckI7O0FBRUE7SUFDRyxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7O0NBRWhDOztBQUVBO0lBQ0c7QUFDSjs7QUFFQzs7SUFFRztRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsVUFBVTtJQUNkOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxTQUFTO1FBQ1QsVUFBVTtRQUNWLFVBQVU7UUFDVixZQUFZO1FBQ1osYUFBYTtRQUNiLGtCQUFrQjtJQUN0QjtDQUNIIiwiZmlsZSI6InNsaWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2Vfc2xpZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5iYXNlX3NsaWRlciA+IGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJhc2VfdGl0bGVze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpdGxlc3tcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTAwcHg7XG4gICAgdG9wOiA2MHB4O1xuICAgIHotaW5kZXg6IDEwMDtcbn1cblxuLmJhc2VfdmlkZW97XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uc3R5bGVfdmlkZW97XG4gICB3aWR0aDogMTcwcHg7XG4gICBoZWlnaHQ6IDE3MHB4O1xuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgbGVmdDogNDAwcHg7XG4gICB0b3A6IDIwMHB4O1xuICAgb3BhY2l0eTogMTM7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN0eWxlX3ZpZGVvID4gaW1ne1xuICAgIHdpZHRoOiA4MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuIH1cblxuIC5zdHlsZV92aWRlbzpob3ZlcntcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gfVxuXG4gLnN0eWxlX3ZpZGVvID4gaW1nOmhvdmVye1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDkwMDFEO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xuXG4gfVxuXG4gLm1vZGFsLWRpYWxvZyB7XG4gICAgbWFyZ2luOiAyMHZoIGF1dG8gMHB4IGF1dG9cbn1cblxuIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCl7XG5cbiAgICAuYmFzZV9zbGlkZXJ7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgfVxuXG4gICAgLnRpdGxlc3tcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGxlZnQ6IDUwcHg7XG4gICAgfVxuXG4gICAgLmJhc2VfdmlkZW97XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLnN0eWxlX3ZpZGVve1xuICAgICAgICBsZWZ0OiAzMCU7XG4gICAgICAgIHJpZ2h0OiA1MCU7XG4gICAgICAgIHRvcDogMTUwcHg7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiB9OyJdfQ== */"] });


/***/ }),

/***/ 9527:
/*!*****************************************************!*\
  !*** ./src/app/components/title/title.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleComponent": () => (/* binding */ TitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class TitleComponent {
    constructor() { }
    ngOnInit() {
    }
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(); };
TitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleComponent, selectors: [["app-title"]], inputs: { titulo: "titulo" }, decls: 4, vars: 1, consts: [[1, "pb-5"], [1, "hr_style_bg1"], [1, "hr_style_bg2"]], template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.titulo, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aXRsZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 892:
/*!**************************************************!*\
  !*** ./src/app/pages/acerca/acerca.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcercaComponent": () => (/* binding */ AcercaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/footer/footer.component */ 4662);




class AcercaComponent {
    constructor() { }
    ngOnInit() {
    }
}
AcercaComponent.ɵfac = function AcercaComponent_Factory(t) { return new (t || AcercaComponent)(); };
AcercaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AcercaComponent, selectors: [["app-acerca"]], decls: 5, vars: 1, consts: [[1, "container", "p-5"], [1, "row"], [3, "titulo"]], template: function AcercaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("titulo", "Acerca de nosotros");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_1__.TitleComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2VyY2EuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6909:
/*!**************************************************!*\
  !*** ./src/app/pages/amigos/amigos.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmigosComponent": () => (/* binding */ AmigosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/footer/footer.component */ 4662);




class AmigosComponent {
    constructor() { }
    ngOnInit() {
    }
}
AmigosComponent.ɵfac = function AmigosComponent_Factory(t) { return new (t || AmigosComponent)(); };
AmigosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AmigosComponent, selectors: [["app-amigos"]], decls: 28, vars: 1, consts: [[1, "container", "p-5"], [1, "row"], [3, "titulo"], [1, "col-md-3", "m-5"], [1, "card", 2, "width", "18rem"], [1, "cont-img"], ["src", "../../../assets/amigos/logo-tiger.png", "alt", "...", 1, "card-img-top"], [1, "card-body", "text-center"], [1, "card-title"], [1, "card-text", "text_justify"], ["href", "https://www.taekwondotigersantiago.cl/", "target", "_blank", 1, "btn", "btn-primary"], ["src", "../../../assets/amigos/Logo-Ka.png", "alt", "...", 1, "card-img-top"], ["href", "https://escuelataekwondo.cl/", "target", "_blank", 1, "btn", "btn-primary"]], template: function AmigosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Taekwondo Tiger Santiago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "En la escuela Taekwondo Tiger Santiago, estamos preocupados por el desarrollo infantil y el crecimiento en edades de la adolecencia del practicante, con el fin de formar hombres y mujeres que prometan el crecimiento del deporte. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Visitar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Escuela Taekwondo Kangnam");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "En el a\u00F1o 1990 parti\u00F3 haciendo clases el maestro Mario Mandel fundador de escuelas Kangnam. 8 a\u00F1os despu\u00E9s con alumnos ya consolidados y como Escuela, pas\u00F3 a llamarse Escuelas Kangnam, nombre de un importante distrito de Se\u00FAl.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Visitar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("titulo", "Enlaces amigos");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_1__.TitleComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: [".card[_ngcontent-%COMP%]   .cont-img[_ngcontent-%COMP%]{\n    height: 280px;\n}\n\n.card[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\n    height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFtaWdvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoiYW1pZ29zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCAuY29udC1pbWd7XG4gICAgaGVpZ2h0OiAyODBweDtcbn1cblxuLmNhcmQgPiBpbWd7XG4gICAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"] });


/***/ }),

/***/ 9849:
/*!**********************************************************!*\
  !*** ./src/app/pages/calendario/calendario.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarioComponent": () => (/* binding */ CalendarioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/footer/footer.component */ 4662);




class CalendarioComponent {
    constructor() { }
    ngOnInit() {
    }
}
CalendarioComponent.ɵfac = function CalendarioComponent_Factory(t) { return new (t || CalendarioComponent)(); };
CalendarioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CalendarioComponent, selectors: [["app-calendario"]], decls: 5, vars: 1, consts: [[1, "container", "p-5"], [1, "row"], [3, "titulo"]], template: function CalendarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("titulo", "Nuestro calendario");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_1__.TitleComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxlbmRhcmlvLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 3407:
/*!******************************************************!*\
  !*** ./src/app/pages/contacto/contacto.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactoComponent": () => (/* binding */ ContactoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/footer/footer.component */ 4662);




class ContactoComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactoComponent.ɵfac = function ContactoComponent_Factory(t) { return new (t || ContactoComponent)(); };
ContactoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ContactoComponent, selectors: [["app-contacto"]], decls: 5, vars: 1, consts: [[1, "container", "p-5"], [1, "row"], [3, "titulo"]], template: function ContactoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("titulo", "Contacto");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_1__.TitleComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0by5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 237:
/*!******************************************************!*\
  !*** ./src/app/pages/director/director.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectorComponent": () => (/* binding */ DirectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/footer/footer.component */ 4662);




class DirectorComponent {
    constructor() { }
    ngOnInit() {
    }
}
DirectorComponent.ɵfac = function DirectorComponent_Factory(t) { return new (t || DirectorComponent)(); };
DirectorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DirectorComponent, selectors: [["app-director"]], decls: 73, vars: 1, consts: [[1, "container", "p-5"], [1, "row"], [3, "titulo"], [1, "col-md-5", "mr-3", "foto_dir", "text-center"], ["src", "../../../assets/director/Elio_Luppichini.webp"], [1, "fw-bolder"], [1, "fw-bold"], [1, "col-md-7", "text_dir", "fst-italic"], [1, "accordian"], [1, "image_title"], ["href", "#"], ["href", "https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg"], ["src", "../../../assets/director/galeria_1.jpeg"], ["src", "../../../assets/director/galeria_6.jpeg"], ["src", "../../../assets/director/galeria_3.jpeg"], ["src", "../../../assets/director/galeria_4.jpeg"], ["src", "../../../assets/director/galeria_5.webp"]], template: function DirectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "ELIO LUPPICHINI MELLA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Maestro internacional Kukkiwon 3ra clase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " \u00C1rbitro internacional de Poomsae 2da clase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " \u00C1rbitro internacional de combate 3ra clase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Cinturon negro 6to Dan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " T\u00E9cnico Deportivo de Nivel Superior");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Miembro comit\u00E9 de Poomsae Uni\u00F3n Panamericana de Taekwondo WT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Federaci\u00F3n Chilena de Taekwondo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Director escuelas GangNam Chile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Presidente Asociaci\u00F3n Deportiva Regional de Taekwondo WT GangNam");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Se ha destacado por su trayectoria como albitro internacional, dentro de su carrera ha dicatdo charlas referentes al taekwondo etc etc Lorem ipsum dolor sit amet. Quo inventore dolorem sed laudantium recusandae nam necessitatibus rerum sed veniam optio. Ea fugit commodi qui magnam reiciendis ea maxime debitis sed galisum quis aut voluptates incidunt. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " Qui doloremque perferendis et delectus nulla est odio fuga. Id iste molestiae cum eveniet omnis id autem expedita ea eveniet tempore. Et distinctio obcaecati qui vitae omnis est molestias ipsa in perspiciatis temporibus vel deserunt quia. Aut galisum cupiditate eum impedit praesentium qui doloremque praesentium aut voluptatem deserunt. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " Ea eaque laboriosam est adipisci reprehenderit sit quam natus et distinctio suscipit ut dolorem nihil quo tempore vitae. Vel ratione labore aut ipsum dolorum et optio sapiente aut consequatur perferendis. Qui reiciendis vero sit accusamus velit At sunt nobis in doloribus corporis aut voluptates molestiae qui exercitationem fugiat. Et vitae asperiores 33 voluptates harum ea praesentium accusamus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "KungFu Panda");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Toy Story 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Wall-E");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Cars 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("titulo", "Director");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_1__.TitleComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: [".foto_dir[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n}\n\n.text_dir[_ngcontent-%COMP%]{\n    text-align: justify;\n}\n\n.accordian[_ngcontent-%COMP%] {\n\twidth: 805px; height: 320px;\n\toverflow: hidden;\n\t\n\t\n\tmargin: 100px auto;\n\tbox-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\n\t-webkit-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\n\t-moz-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\n}\n\n\n\n.accordian[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n\twidth: 1200px;\n\t\n}\n\n.accordian[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\tposition: relative;\n\tdisplay: block;\n\twidth: 160px;\n\tfloat: left;\n\t\n\tborder-left: 1px solid #888;\n\t\n\tbox-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\n\t-webkit-box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\n\t-moz-box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\n\t\n\t\n\ttransition: all 0.5s;\n\t-webkit-transition: all 0.5s;\n\t-moz-transition: all 0.5s;\n\t\n}\n\n\n\n.accordian[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%] {width: 40px;}\n\n\n\n\n\n.accordian[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {width: 640px;}\n\n.accordian[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n\tdisplay: block;\n}\n\n\n\n.image_title[_ngcontent-%COMP%] {\n\tbackground: rgba(0, 0, 0, 0.5);\n\tposition: absolute;\n\tleft: 0; bottom: 0;\t\nwidth: 640px;\t\n\n}\n\n.image_title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tdisplay: block;\n\tcolor: #fff;\n\ttext-decoration: none;\n\tpadding: 20px;\n\tfont-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7Q0FDQyxZQUFZLEVBQUUsYUFBYTtDQUMzQixnQkFBZ0I7O0NBRWhCLHdCQUF3QjtDQUN4QixrQkFBa0I7Q0FDbEIsNENBQTRDO0NBQzVDLG9EQUFvRDtDQUNwRCxpREFBaUQ7QUFDbEQ7O0FBRUEsc0RBQXNEOztBQUN0RDtDQUNDLGFBQWE7Q0FDYjttREFDa0Q7QUFDbkQ7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLFlBQVk7Q0FDWixXQUFXOztDQUVYLDJCQUEyQjs7Q0FFM0IsNENBQTRDO0NBQzVDLG9EQUFvRDtDQUNwRCxpREFBaUQ7O0NBRWpELHVDQUF1QztDQUN2QyxvQkFBb0I7Q0FDcEIsNEJBQTRCO0NBQzVCLHlCQUF5QjtDQUN6Qjt5QkFDd0I7QUFDekI7O0FBRUEscUNBQXFDOztBQUNyQyx3QkFBd0IsV0FBVyxDQUFDOztBQUNwQywrQkFBK0I7O0FBQy9CLHdEQUF3RDs7QUFDeEQsd0JBQXdCLFlBQVksQ0FBQzs7QUFHckM7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUEscUJBQXFCOztBQUNyQjtDQUNDLDhCQUE4QjtDQUM5QixrQkFBa0I7Q0FDbEIsT0FBTyxFQUFFLFNBQVM7QUFDbkIsWUFBWTs7QUFFWjs7QUFDQTtDQUNDLGNBQWM7Q0FDZCxXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLGFBQWE7Q0FDYixlQUFlO0FBQ2hCIiwiZmlsZSI6ImRpcmVjdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm90b19kaXIgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dF9kaXJ7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmFjY29yZGlhbiB7XG5cdHdpZHRoOiA4MDVweDsgaGVpZ2h0OiAzMjBweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XG5cdC8qVGltZSBmb3Igc29tZSBzdHlsaW5nKi9cblx0bWFyZ2luOiAxMDBweCBhdXRvO1xuXHRib3gtc2hhZG93OiAwIDAgMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcblx0LW1vei1ib3gtc2hhZG93OiAwIDAgMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbn1cblxuLypBIHNtYWxsIGhhY2sgdG8gcHJldmVudCBmbGlja2VyaW5nIG9uIHNvbWUgYnJvd3NlcnMqL1xuLmFjY29yZGlhbiB1bCB7XG5cdHdpZHRoOiAxMjAwcHg7XG5cdC8qVGhpcyB3aWxsIGdpdmUgYW1wbGUgc3BhY2UgdG8gdGhlIGxhc3QgaXRlbSB0byBtb3ZlXG5cdGluc3RlYWQgb2YgZmFsbGluZyBkb3duL2ZsaWNrZXJpbmcgZHVyaW5nIGhvdmVycy4qL1xufVxuXG4uYWNjb3JkaWFuIGxpIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IDE2MHB4O1xuXHRmbG9hdDogbGVmdDtcblx0XG5cdGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzg4ODtcblx0XG5cdGJveC1zaGFkb3c6IDAgMCAyNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAyNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuXHQtbW96LWJveC1zaGFkb3c6IDAgMCAyNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuXHRcblx0LypUcmFuc2l0aW9ucyB0byBnaXZlIGFuaW1hdGlvbiBlZmZlY3QqL1xuXHR0cmFuc2l0aW9uOiBhbGwgMC41cztcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcblx0LypJZiB5b3UgaG92ZXIgb24gdGhlIGltYWdlcyBub3cgeW91IHNob3VsZCBiZSBhYmxlIHRvIFxuXHRzZWUgdGhlIGJhc2ljIGFjY29yZGlhbiovXG59XG5cbi8qUmVkdWNlIHdpdGggb2YgdW4taG92ZXJlZCBlbGVtZW50cyovXG4uYWNjb3JkaWFuIHVsOmhvdmVyIGxpIHt3aWR0aDogNDBweDt9XG4vKkxldHMgYXBwbHkgaG92ZXIgZWZmZWN0cyBub3cqL1xuLypUaGUgTEkgaG92ZXIgc3R5bGUgc2hvdWxkIG92ZXJyaWRlIHRoZSBVTCBob3ZlciBzdHlsZSovXG4uYWNjb3JkaWFuIHVsIGxpOmhvdmVyIHt3aWR0aDogNjQwcHg7fVxuXG5cbi5hY2NvcmRpYW4gbGkgaW1nIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi8qSW1hZ2UgdGl0bGUgc3R5bGVzKi9cbi5pbWFnZV90aXRsZSB7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwOyBib3R0b206IDA7XHRcbndpZHRoOiA2NDBweDtcdFxuXG59XG4uaW1hZ2VfdGl0bGUgYSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRjb2xvcjogI2ZmZjtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRwYWRkaW5nOiAyMHB4O1xuXHRmb250LXNpemU6IDE2cHg7XG59Il19 */"] });


/***/ }),

/***/ 7618:
/*!********************************************************!*\
  !*** ./src/app/pages/programas/programas.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramasComponent": () => (/* binding */ ProgramasComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/title/title.component */ 9527);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/footer/footer.component */ 4662);




class ProgramasComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProgramasComponent.ɵfac = function ProgramasComponent_Factory(t) { return new (t || ProgramasComponent)(); };
ProgramasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProgramasComponent, selectors: [["app-programas"]], decls: 5, vars: 1, consts: [[1, "container", "p-5"], [1, "row"], [3, "titulo"]], template: function ProgramasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("titulo", "Programa");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _components_title_title_component__WEBPACK_IMPORTED_MODULE_1__.TitleComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmFtYXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8202), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map