"use strict";
(self["webpackChunkfloreceann_portfolio"] = self["webpackChunkfloreceann_portfolio"] || []).push([["main"],{

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 3575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 7490);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/language/language.service */ 5307);
/* harmony import */ var _components_general_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/general/header/header.component */ 2632);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/footer/footer.component */ 2895);







class AppComponent {
    constructor(titleService, metaService, languageService) {
        this.titleService = titleService;
        this.metaService = metaService;
        this.languageService = languageService;
        this.title = "floreceann-portfolio";
    }
    ngOnInit() {
        this.languageService.initLanguage();
        this.titleService.setTitle("Florece Ann Robles | MEAN Stack Developer | MERN Stack Developer | Software Engineer");
        this.metaService.addTags([
            {
                name: "keywords",
                content: "Frontend, MEAN Stack Developer , MERN Stack Development , Software Engineer, software, developer",
            },
            {
                name: "description",
                content: "As a software engineer with expertise in both MEAN and MERN stacks, I have a comprehensive understanding of full-stack web development. My strong foundation in JavaScript allows me to effectively work with front-end technologies such as Angular and React, as well as back-end technologies such as Node.js and Express.",
            },
        ]);
        aos__WEBPACK_IMPORTED_MODULE_0__.init();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header")(1, "router-outlet")(2, "app-footer");
    } }, directives: [_components_general_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _components_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.module */ 7142);
/* harmony import */ var _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/general.module */ 3970);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-animate-on-scroll */ 1993);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/service-worker */ 4933);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ 4766);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-google-analytics */ 5943);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);


















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule,
            _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__.GeneralModule,
            ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_9__.AnimateOnScrollModule.forRoot(),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__.ServiceWorkerModule.register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production }),
            ngx_google_analytics__WEBPACK_IMPORTED_MODULE_13__.NgxGoogleAnalyticsModule.forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.trackAnalyticID),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _components_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule,
        _components_general_general_module__WEBPACK_IMPORTED_MODULE_3__.GeneralModule, ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_9__.AnimateOnScrollModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__.ServiceWorkerModule, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_13__.NgxGoogleAnalyticsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule] }); })();


/***/ }),

/***/ 2895:
/*!***************************************************************!*\
  !*** ./src/app/components/general/footer/footer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);



class FooterComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 19, vars: 1, consts: [[1, "footer-left-bar", "d-none", "d-md-block"], ["href", "https://github.com/annrobles", "target", "_blank", 3, "click"], [1, "fab", "fa-github"], ["href", "https://www.linkedin.com/in/florece-robles/", "target", "_blank", 3, "click"], [1, "fab", "fa-linkedin-in"], [1, "footer-right-bar", "d-none", "d-md-block"], ["href", "mailto:annr.dev@gmail.com", "target", "_blank", 3, "click"], [1, "footer-credits", "text-center"], ["href", "https://github.com/annrobles", "target", "_blank", "rel", "nofollow noopener noreferrer", 3, "click"], ["href", "https://annrobles.github.io/", "target", "_blank", "rel", "nofollow noopener noreferrer", 3, "click"], [1, "mt-2"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer")(1, "div")(2, "ul", 0)(3, "li")(4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_4_listener() { return ctx.analyticsService.sendAnalyticEvent("click_github", "footer", "github"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_7_listener() { return ctx.analyticsService.sendAnalyticEvent("click_linkedin", "footer", "github"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_10_listener() { return ctx.analyticsService.sendAnalyticEvent("click_send_mail", "footer", "email"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "annr.dev@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7)(13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_13_listener() { return ctx.analyticsService.sendAnalyticEvent("click_github_portfolio_florece", "footer", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Built with Angular by Florece Ann Robles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_16_listener() { return ctx.analyticsService.sendAnalyticEvent("click_github_portfolio_florece", "footer", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Designed by Brittany Chiang & Jo\u015Be Andre\u015B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animateFooter", undefined);
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]:after, footer[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 1px;\n  height: 90px;\n  margin: 0 auto;\n  background-color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -16px;\n  left: 51px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 33px;\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  right: 41px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 12px;\n  -webkit-letter-spacing: 0.1em;\n  -moz-letter-spacing: 0.1em;\n  -ms-letter-spacing: 0.1em;\n  letter-spacing: 0.1em;\n  writing-mode: vertical-rl;\n  margin: 20px auto;\n  padding: 10px;\n  color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%] {\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 12px;\n  line-height: 1;\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  margin-top: -60px;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #a8b2d1;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-property: all;\n  transition-duration: 0.25s;\n  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-delay: 0s;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, footer[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  color: #64ffda;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyIsImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFByb2ZvbGlvJTIwUHJvamVjdFxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXGdlbmVyYWxcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDRUE7RUFDSSxjREdZO0FFSGhCO0FERUk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCRExRO0FFS2hCO0FER0k7RUFDSSxnQkFBQTtBQ0RSO0FESUk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDRlI7QURJUTtFQUNJLGVBQUE7RUFDQSxjRHBCSTtBRWtCaEI7QURLUTtFQUNJLGdCQUFBO0FDSFo7QURLWTtFQUNJLG1CQUFBO0FDSGhCO0FEUUk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDTlI7QURRUTtFQUNJLHdCQUFBO0FDTlo7QURTUTtFQUNJLDBGRHBDRDtFQ3FDQyxlQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFHQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNEdERJO0FFK0NoQjtBRFVJO0VBQ0ksMEZEbkRHO0VDb0RILGVBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBQ1RSO0FEV1E7RUFDSSxjRHJFSTtFQ3VFSiwwREFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnRUFBQTtFQUNBLG9CQUFBO0FDVFo7QURXWTtFQUNJLHFCQUFBO0VBQ0EsY0Q1RUE7QUVtRWhCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbiROYXZ5ICAgICAgICAgOiAjMGExOTJmO1xyXG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcclxuJExpZ2h0ZXN0TmF2eSA6ICMzMDNDNTU7XHJcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xyXG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcclxuJExpZ2h0ZXN0U2xhdGU6ICNjY2Q2ZjY7XHJcbiRXaGl0ZSAgICAgICAgOiAjZTZmMWZmO1xyXG4kR3JlZW4gICAgICAgIDogIzY0ZmZkYTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcblxyXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiRDb2RlRm9udDogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XHJcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5mb290ZXJ7XHJcbiAgICBjb2xvcjogJExpZ2h0U2xhdGU7XHJcblxyXG4gICAgLmZvb3Rlci1sZWZ0LWJhcjphZnRlciwgLmZvb3Rlci1yaWdodC1iYXI6YWZ0ZXJ7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJExpZ2h0U2xhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci1sZWZ0LWJhciBsaSwgLmZvb3Rlci1yaWdodC1iYXIgbGl7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyLWxlZnQtYmFye1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBib3R0b206IC0xNnB4O1xyXG4gICAgICAgIGxlZnQ6IDUxcHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgaXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJExpZ2h0U2xhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcclxuXHJcbiAgICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci1yaWdodC1iYXJ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIHJpZ2h0OiA0MXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJENvZGVGb250O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICAgICAgICAtbW96LWxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgICAgICAgLW1zLWxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICAgICAgICAtd2Via2l0LXdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XHJcbiAgICAgICAgICAgIC1tcy13cml0aW5nLW1vZGU6IHRiLXJsO1xyXG4gICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6ICRMaWdodFNsYXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mb290ZXItY3JlZGl0c3tcclxuICAgICAgICBmb250LWZhbWlseTogJENvZGVGb250O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNjBweDtcclxuXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6ICRMaWdodFNsYXRlO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsMC4wNDUsMC4zNTUsMSk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsMC4wNDUsMC4zNTUsMSk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJEdyZWVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmZvb3RlciB7XG4gIGNvbG9yOiAjYThiMmQxO1xufVxuZm9vdGVyIC5mb290ZXItbGVmdC1iYXI6YWZ0ZXIsIGZvb3RlciAuZm9vdGVyLXJpZ2h0LWJhcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYThiMmQxO1xufVxuZm9vdGVyIC5mb290ZXItbGVmdC1iYXIgbGksIGZvb3RlciAuZm9vdGVyLXJpZ2h0LWJhciBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5mb290ZXIgLmZvb3Rlci1sZWZ0LWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAtMTZweDtcbiAgbGVmdDogNTFweDtcbiAgcGFkZGluZzogMDtcbn1cbmZvb3RlciAuZm9vdGVyLWxlZnQtYmFyIGkge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGNvbG9yOiAjYThiMmQxO1xufVxuZm9vdGVyIC5mb290ZXItbGVmdC1iYXIgbGkge1xuICBtYXJnaW46IDIwcHggMHB4O1xufVxuZm9vdGVyIC5mb290ZXItbGVmdC1iYXIgbGk6bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzNweDtcbn1cbmZvb3RlciAuZm9vdGVyLXJpZ2h0LWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiA0MXB4O1xuICBwYWRkaW5nOiAwO1xufVxuZm9vdGVyIC5mb290ZXItcmlnaHQtYmFyIGxpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuZm9vdGVyIC5mb290ZXItcmlnaHQtYmFyIGEge1xuICBmb250LWZhbWlseTogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLXdlYmtpdC1sZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIC1tb3otbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAtbXMtbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIC13ZWJraXQtd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcbiAgLW1zLXdyaXRpbmctbW9kZTogdGItcmw7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogI2E4YjJkMTtcbn1cbmZvb3RlciAuZm9vdGVyLWNyZWRpdHMge1xuICBmb250LWZhbWlseTogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXRvcDogLTYwcHg7XG59XG5mb290ZXIgLmZvb3Rlci1jcmVkaXRzIGEge1xuICBjb2xvcjogI2E4YjJkMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbn1cbmZvb3RlciAuZm9vdGVyLWNyZWRpdHMgYTpob3ZlciwgZm9vdGVyIC5mb290ZXItY3JlZGl0cyBhOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzY0ZmZkYTtcbn0iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)("animateFooter", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(":enter", [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)("*", [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: 0, transform: "translateY(100%)" }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.stagger)(50, [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: 1, transform: "none" }))
                        ])
                    ])
                ])
            ])
        ] } });


/***/ }),

/***/ 3970:
/*!******************************************************!*\
  !*** ./src/app/components/general/general.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "GeneralModule": () => (/* binding */ GeneralModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ 2895);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 2632);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class GeneralModule {
}
GeneralModule.ɵfac = function GeneralModule_Factory(t) { return new (t || GeneralModule)(); };
GeneralModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: GeneralModule });
GeneralModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](GeneralModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent] }); })();


/***/ }),

/***/ 2632:
/*!***************************************************************!*\
  !*** ./src/app/components/general/header/header.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/language/language.service */ 5307);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);









function HeaderComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "First content");
} }
function HeaderComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Second content");
} }
function HeaderComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Second content");
} }
function HeaderComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Second content");
} }
function HeaderComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Second content");
} }
const _c0 = function (a0) { return { "pointer-events": a0 }; };
class HeaderComponent {
    constructor(router, analyticsService, languageService) {
        this.router = router;
        this.analyticsService = analyticsService;
        this.languageService = languageService;
        this.responsiveMenuVisible = false;
        this.languageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
        this.cvName = "";
    }
    ngOnInit() {
        this.languageFormControl.valueChanges.subscribe((val) => this.languageService.changeLanguage(val));
        this.languageFormControl.setValue(this.languageService.language);
    }
    scroll(el) {
        if (document.getElementById(el)) {
            document.getElementById(el).scrollIntoView({ behavior: "smooth" });
        }
        else {
            this.router
                .navigate(["/home"])
                .then(() => document.getElementById(el).scrollIntoView({ behavior: "smooth" }));
        }
        this.responsiveMenuVisible = false;
    }
    downloadCV() {
        this.languageService.translateService
            .get("Header.cvName")
            .subscribe((val) => {
            this.cvName = val;
            // app url
            let url = window.location.href;
            // Open a new window with the CV
            window.open(url + "/../assets/cv/" + this.cvName, "_blank");
        });
    }
    getScrollPosition(event) {
        this.pageYPosition = window.pageYOffset;
    }
    changeLanguage(language) {
        this.languageFormControl.setValue(language);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_language_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) { return ctx.getScrollPosition(ctx.getScrollPosition($event)); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 93, vars: 45, consts: [[1, "navbar", "main-navbar", "on-top"], [1, "header-container"], ["tabindex", "-1", 1, "logo", "fade-enter-done"], ["href", "/", "aria-label", "home"], [1, "hex-container"], [1, "logo-container"], ["id", "logo", "xmlns", "http://www.w3.org/2000/svg", "role", "img", "viewBox", "0 0 84 96"], ["transform", "translate(-8.000000, -2.000000)"], ["transform", "translate(11.000000, 5.000000)"], ["id", "Shape", "stroke", "currentColor", "stroke-width", "5", "stroke-linecap", "round", "stroke-linejoin", "round", "points", "39 0 0 22 0 67 39 90 78 68 78 23"], ["d", "M35,30 L45,30 L45,35 L35,35 L35,30 Z M35,40 L45,40 L45,45 L35,45 L35,40 Z M30,30 L35,30 L35,65 L30,65 L30,30 Z", "fill", "currentColor"], ["ngbNav", "", 1, "menu-ul"], ["nav", "ngbNav"], ["ngbNavItem", "", 3, "click"], ["ngbNavLink", "", 3, "click"], [1, "nav-number"], [1, "underline", "nav-text"], ["ngbNavContent", ""], ["ngbNavItem", ""], ["ngbNavLink", "", 1, "main-btn", "cv-btn", 3, "click"], [1, "menu-wrapper"], [1, "hamburger-menu", 3, "click"], [1, "menu-responsive", 3, "ngStyle"], [1, "on-top"], [3, "click"], [1, "main-btn", "cv-btn", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "svg", 6)(7, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "g", 7)(10, "g", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "polygon", 9)(12, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ul", 11, 12)(15, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_15_listener() { return ctx.analyticsService.sendAnalyticEvent("click_about", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_16_listener() { return ctx.scroll("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "01. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, HeaderComponent_ng_template_22_Template, 1, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_23_listener() { return ctx.analyticsService.sendAnalyticEvent("click_experience", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_24_listener() { return ctx.scroll("jobs"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "02. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, HeaderComponent_ng_template_30_Template, 1, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_31_listener() { return ctx.analyticsService.sendAnalyticEvent("click_jobs", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_32_listener() { return ctx.scroll("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "03. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, HeaderComponent_ng_template_38_Template, 1, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_39_listener() { return ctx.analyticsService.sendAnalyticEvent("click_testimonial", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_40_listener() { return ctx.scroll("testimonial"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "04. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, HeaderComponent_ng_template_46_Template, 1, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_47_listener() { return ctx.analyticsService.sendAnalyticEvent("click_contact", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_48_listener() { return ctx.scroll("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "05. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, HeaderComponent_ng_template_54_Template, 1, 0, "ng-template", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "li", 18)(56, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_56_listener() { return ctx.downloadCV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 20)(60, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_60_listener() { return ctx.responsiveMenuVisible = !ctx.responsiveMenuVisible; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 22)(62, "aside", 23)(63, "nav")(64, "ol")(65, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_65_listener() { return ctx.analyticsService.sendAnalyticEvent("click_about", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_66_listener() { return ctx.scroll("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "01. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_71_listener() { return ctx.analyticsService.sendAnalyticEvent("click_experience", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_72_listener() { return ctx.scroll("jobs"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "02. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_77_listener() { return ctx.analyticsService.sendAnalyticEvent("click_jobs", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_78_listener() { return ctx.scroll("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "03. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_83_listener() { return ctx.analyticsService.sendAnalyticEvent("click_contact", "menu", "click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_84_listener() { return ctx.scroll("projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "04. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "li")(90, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_90_listener() { return ctx.downloadCV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](92, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("nav-shadow", ctx.pageYPosition > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@animateMenu", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 21, "Header.Item1"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 23, "Header.Item2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 25, "Header.Item3"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](45, 27, "Header.Item4"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](53, 29, "Header.Item5"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](58, 31, "Header.cvBtn"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("animate", ctx.responsiveMenuVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](43, _c0, !ctx.responsiveMenuVisible ? "none" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("aside-show", ctx.responsiveMenuVisible)("nav-shadow", ctx.pageYPosition > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](70, 33, "Header.Item1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](76, 35, "Header.Item2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](82, 37, "Header.Item3"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](88, 39, "Header.Item4"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](92, 41, "Header.cvBtn"), " ");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavbar, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavContent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: [".main-navbar[_ngcontent-%COMP%] {\n  height: 70px;\n  background: #0a192f;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px 13px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n  width: 100%;\n  height: 100vh;\n  z-index: 10;\n  transform: translateX(0vw);\n  visibility: visible;\n  outline: 0px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .cv-btn[_ngcontent-%COMP%] {\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  margin-left: 20px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-left: 18px;\n  margin-top: 50px;\n  padding-left: 0px;\n  padding-bottom: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container-selector[_ngcontent-%COMP%] {\n  display: flex;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container-selector[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.main-navbar[_ngcontent-%COMP%]   .aside-show[_ngcontent-%COMP%] {\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  right: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%] {\n  width: 75vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #112240;\n  height: 100%;\n  position: relative;\n  right: -625px;\n  margin-left: auto;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  box-shadow: rgba(2, 12, 27, 0.7) -10px 0px 30px -15px;\n  padding: 25px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  flex-direction: column;\n  text-align: center;\n  color: #ccd6f6;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0px auto 10px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #64ffda;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  -webkit-text-decoration-skip: ink;\n          text-decoration-skip-ink: auto;\n  color: inherit;\n  position: relative;\n  cursor: pointer;\n  width: 100%;\n  text-decoration: none;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  padding: 3px 20px 20px;\n}\n.main-navbar[_ngcontent-%COMP%]   .cv-btn[_ngcontent-%COMP%] {\n  padding: 7px 15px !important;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 5px 0px;\n  color: inherit;\n  margin: 0px;\n  font-size: 13px;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #64ffda;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-number[_ngcontent-%COMP%] {\n  color: #64ffda;\n  font-size: 12px;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n  color: #ccd6f6 !important;\n  padding-bottom: 4px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 36px;\n  height: 60px;\n  cursor: pointer;\n  z-index: 11;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%], .main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after, .main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before {\n  width: 36px;\n  height: 1.5px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n  position: relative;\n  transform: translateY(25px);\n  background: #64ffda;\n  transition: all 0ms 300ms;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 8px;\n  background: #64ffda;\n  transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 8px;\n  background: #64ffda;\n  transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%]:after {\n  top: 0;\n  transform: rotate(45deg);\n  transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%]:before {\n  bottom: 0;\n  transform: rotate(-45deg);\n  transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  top: 0px;\n  z-index: 11;\n  padding: 0px 50px;\n  width: 100%;\n  height: 100px;\n  background-color: rgba(10, 25, 47, 0.85);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  transition: var(--transition);\n  filter: none !important;\n  pointer-events: auto !important;\n  -webkit-user-select: auto !important;\n          user-select: auto !important;\n  padding: 0 50px;\n}\n.on-top[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 9;\n  height: 100px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.nav-shadow[_ngcontent-%COMP%] {\n  height: 70px;\n  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n@media (max-width: 1000px) {\n  .main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0.5rem 0.7rem;\n  }\n}\n@media (max-width: 827px) {\n  nav[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 827px) {\n  .menu-wrapper[_ngcontent-%COMP%], .menu-responsive[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.flag-text[_ngcontent-%COMP%] {\n  color: inherit;\n  margin: 0 10px;\n  font-size: 13px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.language-container[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-bottom: 4px;\n  background: #172a45;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.language-container-selector[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  color: #cbd5f5 !important;\n  padding: 11px 8px !important;\n  text-align: center;\n  background: #0a192f !important;\n}\n.language-container-selector.active[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  color: #cbd5f5 !important;\n  padding: 11px 8px !important;\n  text-align: center;\n  background: #172a45 !important;\n}\n.language-container-selector[_ngcontent-%COMP%]:hover {\n  background: #172a45 !important;\n}\n.arrow-language[_ngcontent-%COMP%] {\n  font-size: 10px;\n  height: 10px;\n  width: 10px;\n  fill: #64ffda;\n}\n  .dropdown-toggle::after {\n  display: none;\n}\n  .dropdown-menu.show {\n  padding: 0 !important;\n  border-radius: 7px !important;\n  background: #ccd6f6 !important;\n  margin-top: 10px !important;\n  left: 20px !important;\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.arrow-active[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 25px;\n  fill: #64ffda;\n  visibility: hidden;\n}\n.language-container-selector.active[_ngcontent-%COMP%]   .arrow-active[_ngcontent-%COMP%] {\n  visibility: inherit;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%] {\n  fill: #0a192f;\n}\n#logo[_ngcontent-%COMP%] {\n  color: #64ffda;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\nsvg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  fill: currentcolor;\n  vertical-align: middle;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #64ffda;\n  width: 42px;\n  height: 42px;\n  position: relative;\n  z-index: 1;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .hex-container[_ngcontent-%COMP%] {\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\nsvg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  fill: currentcolor;\n  vertical-align: middle;\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #64ffda;\n  width: 42px;\n  height: 42px;\n  position: relative;\n  z-index: 1;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyIsImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFByb2ZvbGlvJTIwUHJvamVjdFxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXGdlbmVyYWxcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDQ0E7RUFDQyxZQUFBO0VBQ0EsbUJERGU7RUNFZiwwRkRTVTtBRVJYO0FEQ0U7RUFDQyxnQkFBQTtBQ0NIO0FERUU7RUFDQyxnQkFBQTtBQ0FIO0FERUU7RUFDQyxpQkFBQTtBQ0FIO0FER0M7RUFDQyxlQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw2REFBQTtBQ0RGO0FER0c7RUFDQyx3QkFBQTtBQ0RKO0FER0c7RUFDQyxrQ0FBQTtFQUFBLDZCQUFBO0VBQ0EsaUJBQUE7QUNESjtBREdHO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDREo7QURHRztFQUNDLGFBQUE7QUNESjtBREVJO0VBQ0MsV0FBQTtBQ0FMO0FES0M7RUFDQyw2REFBQTtFQUNBLFVBQUE7QUNIRjtBREtDO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkQ3RGM7RUM4RGQsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEZEeERTO0VDeURULHFEQUFBO0VBQ0EsYUFBQTtFQUNBLDZEQUFBO0FDSEY7QURJRTtFQUNDLGFBQUE7RUFFQSw4QkFBQTtFQUVBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRDNFYTtBRXlFaEI7QURHRztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDREo7QURFSTtFQUNDLGVBQUE7RUFDQSxxQkFBQTtBQ0FMO0FEQ0s7RUFDQyxjQUFBO0VBQ0EsY0RwRlU7RUNxRlYsZUFBQTtFQUNBLGtCQUFBO0FDQ047QURDSztFQUNDLHFCQUFBO0VBQ0EsaUNBQUE7VUFBQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSw2REFBQTtFQUNBLHNCQUFBO0FDQ047QURLQztFQUNDLDRCQUFBO0FDSEY7QURLQztFQUNDLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDSEY7QURJRTtFQUNDLGNEaEhhO0FFOEdoQjtBREtDO0VBQ0MsY0RwSGM7RUNxSGQsZUFBQTtBQ0hGO0FES0M7RUFDQyx5QkFBQTtFQUNBLG1CQUFBO0FDSEY7QURLQztFQUNDLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDSEY7QURJRTs7O0VBR0MsV0FBQTtFQUNBLGFBQUE7QUNGSDtBRElFO0VBQ0Msa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CRDdJYTtFQzhJYix5QkFBQTtBQ0ZIO0FER0c7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG1CRHBKWTtFQ3FKWiw2R0FBQTtBQ0RKO0FESUc7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1CRDdKWTtFQzhKWiwwR0FBQTtBQ0ZKO0FES0c7RUFDQyxrQ0FBQTtBQ0hKO0FESUk7RUFDQyxNQUFBO0VBQ0Esd0JBQUE7RUFDQSwwR0FBQTtBQ0ZMO0FES0k7RUFDQyxTQUFBO0VBQ0EseUJBQUE7RUFDQSw2R0FBQTtBQ0hMO0FEVUM7RUFDQyxhQUFBO0VBRUEsOEJBQUE7RUFFQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxlQUFBO0FDUkY7QURZQTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsNkRBQUE7QUNURDtBRFlBO0VBQ0MsWUFBQTtFQUNBLGtEQUFBO0VBQ0EsNkRBQUE7QUNURDtBRFlBO0VBRUU7SUFDQyxTQUFBO0lBQ0Esc0JBQUE7RUNWRDtBQUNGO0FEY0E7RUFDQztJQUNDLGFBQUE7RUNaQTtBQUNGO0FEZUE7RUFDQzs7SUFFQyxhQUFBO0VDYkE7QUFDRjtBRGdCQTtFQUNDLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDBGRDdPVTtBRStOWDtBRGlCQTtFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDZEQ7QURpQkE7RUFDQyxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDZEQ7QURpQkE7RUFDQyxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDZEQ7QURpQkE7RUFDQyw4QkFBQTtBQ2REO0FENkJBO0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQzFCRDtBRDZCQTtFQUNDLGFBQUE7QUMxQkQ7QUQ2QkE7RUFDQyxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0RBQUE7QUMxQkQ7QUQ2QkE7RUFDQyxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUMxQkQ7QUQ4QkM7RUFDQyxtQkFBQTtBQzNCRjtBRCtCQTtFQUNDLGFBQUE7QUM1QkQ7QUQrQkE7RUFDQyxjQUFBO0FDNUJEO0FEK0JBO0VBQ0MsVUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUM1QkQ7QUQrQkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUM1QkQ7QUQrQkE7RUFDQyxrQkFBQTtFQUNBLFVBQUE7QUM1QkQ7QUQrQkE7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUM1QkQ7QUQrQkE7RUFDQywwREFBQTtBQzVCRDtBRCtCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQzVCRDtBRCtCQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQzVCRDtBRCtCQTtFQUNDLGFBQUE7RUFFQSx1QkFBQTtFQUVBLG1CQUFBO0FDNUJEIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbiROYXZ5ICAgICAgICAgOiAjMGExOTJmO1xyXG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcclxuJExpZ2h0ZXN0TmF2eSA6ICMzMDNDNTU7XHJcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xyXG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcclxuJExpZ2h0ZXN0U2xhdGU6ICNjY2Q2ZjY7XHJcbiRXaGl0ZSAgICAgICAgOiAjZTZmMWZmO1xyXG4kR3JlZW4gICAgICAgIDogIzY0ZmZkYTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcblxyXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiRDb2RlRm9udDogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XHJcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbi5tYWluLW5hdmJhciB7XHJcblx0aGVpZ2h0OiA3MHB4O1xyXG5cdGJhY2tncm91bmQ6ICROYXZ5O1xyXG5cdGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XHJcblx0Lm1lbnUtdWwge1xyXG5cdFx0bGkge1xyXG5cdFx0XHRtYXJnaW46IDBweCAxM3B4O1xyXG5cdFx0fVxyXG5cdFx0Ly8gRmlyc3QgYW5kIExhc3QgbGkgaGFzIG5vIG1hcmdpblxyXG5cdFx0bGk6Zmlyc3QtY2hpbGQge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMHB4O1xyXG5cdFx0fVxyXG5cdFx0bGk6bGFzdC1jaGlsZCB7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHQubWVudS1yZXNwb25zaXZlIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogMHB4O1xyXG5cdFx0Ym90dG9tOiAwcHg7XHJcblx0XHRyaWdodDogMHB4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMHZoO1xyXG5cdFx0ei1pbmRleDogMTA7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHZ3KTtcclxuXHRcdHZpc2liaWxpdHk6IHZpc2libGU7XHJcblx0XHRvdXRsaW5lOiAwcHg7XHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xyXG5cdFx0bGkge1xyXG5cdFx0XHRhIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcblx0XHRcdH1cclxuXHRcdFx0LmN2LWJ0biB7XHJcblx0XHRcdFx0d2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0Lmxhbmd1YWdlLWNvbnRhaW5lciB7XHJcblx0XHRcdFx0d2lkdGg6IDIwMHB4O1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDUwcHg7XHJcblx0XHRcdFx0cGFkZGluZy1sZWZ0OiAwcHg7XHJcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDBweDtcclxuXHRcdFx0fVxyXG5cdFx0XHQubGFuZ3VhZ2UtY29udGFpbmVyLXNlbGVjdG9yIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHR3aWR0aDogMzVweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0LmFzaWRlLXNob3cge1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcclxuXHRcdHJpZ2h0OiAwcHg7XHJcblx0fVxyXG5cdGFzaWRlIHtcclxuXHRcdHdpZHRoOiA3NXZ3O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJExpZ2h0TmF2eTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHJpZ2h0OiAtNjI1cHg7XHJcblx0XHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRcdGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XHJcblx0XHRib3gtc2hhZG93OiByZ2JhKDIsIDEyLCAyNywgMC43KSAtMTBweCAwcHggMzBweCAtMTVweDtcclxuXHRcdHBhZGRpbmc6IDI1cHg7XHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xyXG5cdFx0bmF2IHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0LXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRjb2xvcjogJExpZ2h0ZXN0U2xhdGU7XHJcblx0XHRcdG9sIHtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRwYWRkaW5nOiAwcHg7XHJcblx0XHRcdFx0bWFyZ2luOiAwcHg7XHJcblx0XHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRcdFx0XHRsaSB7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdFx0XHRtYXJnaW46IDBweCBhdXRvIDEwcHg7XHJcblx0XHRcdFx0XHRzcGFuIHtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAkR3JlZW47XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YSB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogaW5oZXJpdDtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDNweCAyMHB4IDIwcHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5jdi1idG4ge1xyXG5cdFx0cGFkZGluZzogN3B4IDE1cHggIWltcG9ydGFudDtcclxuXHR9XHJcblx0Lm5hdi1saW5rIHtcclxuXHRcdHBhZGRpbmc6IDVweCAwcHg7XHJcblx0XHRjb2xvcjogaW5oZXJpdDtcclxuXHRcdG1hcmdpbjogMHB4O1xyXG5cdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0Jjpob3ZlciB7XHJcblx0XHRcdGNvbG9yOiAkR3JlZW47XHJcblx0XHR9XHJcblx0fVxyXG5cdC5uYXYtbnVtYmVyIHtcclxuXHRcdGNvbG9yOiAkR3JlZW47XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0fVxyXG5cdC5uYXYtdGV4dCB7XHJcblx0XHRjb2xvcjogJExpZ2h0ZXN0U2xhdGUgIWltcG9ydGFudDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiA0cHg7XHJcblx0fVxyXG5cdC5tZW51LXdyYXBwZXIge1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0d2lkdGg6IDM2cHg7XHJcblx0XHRoZWlnaHQ6IDYwcHg7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHR6LWluZGV4OiAxMTtcclxuXHRcdC5oYW1idXJnZXItbWVudSxcclxuXHRcdC5oYW1idXJnZXItbWVudTphZnRlcixcclxuXHRcdC5oYW1idXJnZXItbWVudTpiZWZvcmUge1xyXG5cdFx0XHR3aWR0aDogMzZweDtcclxuXHRcdFx0aGVpZ2h0OiAxLjVweDtcclxuXHRcdH1cclxuXHRcdC5oYW1idXJnZXItbWVudSB7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1cHgpO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAkR3JlZW47XHJcblx0XHRcdHRyYW5zaXRpb246IGFsbCAwbXMgMzAwbXM7XHJcblx0XHRcdCY6YmVmb3JlIHtcclxuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdGJvdHRvbTogOHB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICRHcmVlbjtcclxuXHRcdFx0XHR0cmFuc2l0aW9uOiBib3R0b20gMzAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQmOmFmdGVyIHtcclxuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdHRvcDogOHB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICRHcmVlbjtcclxuXHRcdFx0XHR0cmFuc2l0aW9uOiB0b3AgMzAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQmLmFuaW1hdGUge1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcblx0XHRcdFx0JjphZnRlciB7XHJcblx0XHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0b3AgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLFxyXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm0gMzAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQmOmJlZm9yZSB7XHJcblx0XHRcdFx0XHRib3R0b206IDA7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG5cdFx0XHRcdFx0dHJhbnNpdGlvbjogYm90dG9tIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSxcclxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5oZWFkZXItY29udGFpbmVyIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR0b3A6IDBweDtcclxuXHRcdHotaW5kZXg6IDExO1xyXG5cdFx0cGFkZGluZzogMHB4IDUwcHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCAyNSwgNDcsIDAuODUpO1xyXG5cdFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG5cdFx0dHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcblx0XHRmaWx0ZXI6IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdHBvaW50ZXItZXZlbnRzOiBhdXRvICFpbXBvcnRhbnQ7XHJcblx0XHR1c2VyLXNlbGVjdDogYXV0byAhaW1wb3J0YW50O1xyXG5cdFx0cGFkZGluZzogMCA1MHB4O1xyXG5cdH1cclxufVxyXG5cclxuLm9uLXRvcCB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHRvcDogMDtcclxuXHR6LWluZGV4OiA5O1xyXG5cdGhlaWdodDogMTAwcHg7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcclxufVxyXG5cclxuLm5hdi1zaGFkb3cge1xyXG5cdGhlaWdodDogNzBweDtcclxuXHRib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTBweCByZ2JhKDIsIDEyLCAyNywgMC43KTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcblx0Lm1haW4tbmF2YmFyIHtcclxuXHRcdC5uYXYtbGluayB7XHJcblx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0cGFkZGluZzogMC41cmVtIDAuN3JlbTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MjdweCkge1xyXG5cdG5hdiAubmF2IHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODI3cHgpIHtcclxuXHQubWVudS13cmFwcGVyLFxyXG5cdC5tZW51LXJlc3BvbnNpdmUge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcbn1cclxuXHJcbi5mbGFnLXRleHQge1xyXG5cdGNvbG9yOiBpbmhlcml0O1xyXG5cdG1hcmdpbjogMCAxMHB4O1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxuXHRmb250LWZhbWlseTogJENvZGVGb250O1xyXG59XHJcblxyXG4ubGFuZ3VhZ2UtY29udGFpbmVyIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcblx0cGFkZGluZy1yaWdodDogMTZweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG5cdGJhY2tncm91bmQ6ICMxNzJhNDU7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3RvciB7XHJcblx0bWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6ICNjYmQ1ZjUgIWltcG9ydGFudDtcclxuXHRwYWRkaW5nOiAxMXB4IDhweCAhaW1wb3J0YW50O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kOiAjMGExOTJmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYW5ndWFnZS1jb250YWluZXItc2VsZWN0b3IuYWN0aXZlIHtcclxuXHRtYXJnaW46IDAgIWltcG9ydGFudDtcclxuXHRjb2xvcjogI2NiZDVmNSAhaW1wb3J0YW50O1xyXG5cdHBhZGRpbmc6IDExcHggOHB4ICFpbXBvcnRhbnQ7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGJhY2tncm91bmQ6ICMxNzJhNDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3Rvcjpob3ZlciB7XHJcblx0YmFja2dyb3VuZDogIzE3MmE0NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyAubGFuZ3VhZ2UtY29udGFpbmVyLXNlbGVjdG9yLmFjdGl2ZTphZnRlciB7XHJcbi8vICAgICBjb250ZW50OiBcIiBcIjtcclxuLy8gICAgIGJhY2tncm91bmQ6ICM1OGUyYzQ7XHJcbi8vICAgICB3aWR0aDogNjElO1xyXG4vLyAgICAgaGVpZ2h0OiAxcHg7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgbGVmdDogMDtcclxuLy8gICAgIHJpZ2h0OiAwO1xyXG4vLyAgICAgbWFyZ2luOiBhdXRvO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMjFweDtcclxuLy8gfVxyXG4uYXJyb3ctbGFuZ3VhZ2Uge1xyXG5cdGZvbnQtc2l6ZTogMTBweDtcclxuXHRoZWlnaHQ6IDEwcHg7XHJcblx0d2lkdGg6IDEwcHg7XHJcblx0ZmlsbDogIzY0ZmZkYTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmRyb3Bkb3duLW1lbnUuc2hvdyB7XHJcblx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG5cdGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xyXG5cdGJhY2tncm91bmQ6ICNjY2Q2ZjYgIWltcG9ydGFudDtcclxuXHRtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcblx0bGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG5cdGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYigyIDEyIDI3IC8gNzAlKTtcclxufVxyXG5cclxuLmFycm93LWFjdGl2ZSB7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdGhlaWdodDogMjBweDtcclxuXHR3aWR0aDogMjVweDtcclxuXHRmaWxsOiAjNjRmZmRhO1xyXG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3Rvci5hY3RpdmUge1xyXG5cdC5hcnJvdy1hY3RpdmUge1xyXG5cdFx0dmlzaWJpbGl0eTogaW5oZXJpdDtcclxuXHR9XHJcbn1cclxuXHJcbi5sb2dvIGEgLmxvZ28tY29udGFpbmVyIHN2ZyBwb2x5Z29uIHtcclxuXHRmaWxsOiAjMGExOTJmO1xyXG59XHJcblxyXG4jbG9nbyB7XHJcblx0Y29sb3I6ICM2NGZmZGE7XHJcbn1cclxuXHJcbi5sb2dvIGEgLmxvZ28tY29udGFpbmVyIHN2ZyB7XHJcblx0ZmlsbDogbm9uZTtcclxuXHR1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuc3ZnIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0ZmlsbDogY3VycmVudGNvbG9yO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5sb2dvIGEgLmxvZ28tY29udGFpbmVyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogMTtcclxufVxyXG5cclxuLmxvZ28gYSB7XHJcblx0Y29sb3I6ICM2NGZmZGE7XHJcblx0d2lkdGg6IDQycHg7XHJcblx0aGVpZ2h0OiA0MnB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ubG9nbyBhIC5oZXgtY29udGFpbmVyIHtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG59XHJcblxyXG5zdmcge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRmaWxsOiBjdXJyZW50Y29sb3I7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmxvZ28gYSB7XHJcblx0Y29sb3I6ICM2NGZmZGE7XHJcblx0d2lkdGg6IDQycHg7XHJcblx0aGVpZ2h0OiA0MnB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi5tYWluLW5hdmJhciB7XG4gIGhlaWdodDogNzBweDtcbiAgYmFja2dyb3VuZDogIzBhMTkyZjtcbiAgZm9udC1mYW1pbHk6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xufVxuLm1haW4tbmF2YmFyIC5tZW51LXVsIGxpIHtcbiAgbWFyZ2luOiAwcHggMTNweDtcbn1cbi5tYWluLW5hdmJhciAubWVudS11bCBsaTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4ubWFpbi1uYXZiYXIgLm1lbnUtdWwgbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuLm1haW4tbmF2YmFyIC5tZW51LXJlc3BvbnNpdmUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDEwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHZ3KTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3V0bGluZTogMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xufVxuLm1haW4tbmF2YmFyIC5tZW51LXJlc3BvbnNpdmUgbGkgYSB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn1cbi5tYWluLW5hdmJhciAubWVudS1yZXNwb25zaXZlIGxpIC5jdi1idG4ge1xuICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubWFpbi1uYXZiYXIgLm1lbnUtcmVzcG9uc2l2ZSBsaSAubGFuZ3VhZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogMThweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4ubWFpbi1uYXZiYXIgLm1lbnUtcmVzcG9uc2l2ZSBsaSAubGFuZ3VhZ2UtY29udGFpbmVyLXNlbGVjdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tYWluLW5hdmJhciAubWVudS1yZXNwb25zaXZlIGxpIC5sYW5ndWFnZS1jb250YWluZXItc2VsZWN0b3IgaW1nIHtcbiAgd2lkdGg6IDM1cHg7XG59XG4ubWFpbi1uYXZiYXIgLmFzaWRlLXNob3cge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpIDBzO1xuICByaWdodDogMHB4O1xufVxuLm1haW4tbmF2YmFyIGFzaWRlIHtcbiAgd2lkdGg6IDc1dnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTIyNDA7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogLTYyNXB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZm9udC1mYW1pbHk6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xuICBib3gtc2hhZG93OiByZ2JhKDIsIDEyLCAyNywgMC43KSAtMTBweCAwcHggMzBweCAtMTVweDtcbiAgcGFkZGluZzogMjVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbn1cbi5tYWluLW5hdmJhciBhc2lkZSBuYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjY2NkNmY2O1xufVxuLm1haW4tbmF2YmFyIGFzaWRlIG5hdiBvbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLm1haW4tbmF2YmFyIGFzaWRlIG5hdiBvbCBsaSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwcHggYXV0byAxMHB4O1xufVxuLm1haW4tbmF2YmFyIGFzaWRlIG5hdiBvbCBsaSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjNjRmZmRhO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5tYWluLW5hdmJhciBhc2lkZSBuYXYgb2wgbGkgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG4gIHBhZGRpbmc6IDNweCAyMHB4IDIwcHg7XG59XG4ubWFpbi1uYXZiYXIgLmN2LWJ0biB7XG4gIHBhZGRpbmc6IDdweCAxNXB4ICFpbXBvcnRhbnQ7XG59XG4ubWFpbi1uYXZiYXIgLm5hdi1saW5rIHtcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubWFpbi1uYXZiYXIgLm5hdi1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICM2NGZmZGE7XG59XG4ubWFpbi1uYXZiYXIgLm5hdi1udW1iZXIge1xuICBjb2xvcjogIzY0ZmZkYTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1haW4tbmF2YmFyIC5uYXYtdGV4dCB7XG4gIGNvbG9yOiAjY2NkNmY2ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG59XG4ubWFpbi1uYXZiYXIgLm1lbnUtd3JhcHBlciB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogNjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMTtcbn1cbi5tYWluLW5hdmJhciAubWVudS13cmFwcGVyIC5oYW1idXJnZXItbWVudSxcbi5tYWluLW5hdmJhciAubWVudS13cmFwcGVyIC5oYW1idXJnZXItbWVudTphZnRlcixcbi5tYWluLW5hdmJhciAubWVudS13cmFwcGVyIC5oYW1idXJnZXItbWVudTpiZWZvcmUge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAxLjVweDtcbn1cbi5tYWluLW5hdmJhciAubWVudS13cmFwcGVyIC5oYW1idXJnZXItbWVudSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1cHgpO1xuICBiYWNrZ3JvdW5kOiAjNjRmZmRhO1xuICB0cmFuc2l0aW9uOiBhbGwgMG1zIDMwMG1zO1xufVxuLm1haW4tbmF2YmFyIC5tZW51LXdyYXBwZXIgLmhhbWJ1cmdlci1tZW51OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiA4cHg7XG4gIGJhY2tncm91bmQ6ICM2NGZmZGE7XG4gIHRyYW5zaXRpb246IGJvdHRvbSAzMDBtcyAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG59XG4ubWFpbi1uYXZiYXIgLm1lbnUtd3JhcHBlciAuaGFtYnVyZ2VyLW1lbnU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogOHB4O1xuICBiYWNrZ3JvdW5kOiAjNjRmZmRhO1xuICB0cmFuc2l0aW9uOiB0b3AgMzAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xufVxuLm1haW4tbmF2YmFyIC5tZW51LXdyYXBwZXIgLmhhbWJ1cmdlci1tZW51LmFuaW1hdGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xufVxuLm1haW4tbmF2YmFyIC5tZW51LXdyYXBwZXIgLmhhbWJ1cmdlci1tZW51LmFuaW1hdGU6YWZ0ZXIge1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNpdGlvbjogdG9wIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgdHJhbnNmb3JtIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbn1cbi5tYWluLW5hdmJhciAubWVudS13cmFwcGVyIC5oYW1idXJnZXItbWVudS5hbmltYXRlOmJlZm9yZSB7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgdHJhbnNmb3JtIDMwMG1zIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbn1cbi5tYWluLW5hdmJhciAuaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdG9wOiAwcHg7XG4gIHotaW5kZXg6IDExO1xuICBwYWRkaW5nOiAwcHggNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDI1LCA0NywgMC44NSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIGZpbHRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBwb2ludGVyLWV2ZW50czogYXV0byAhaW1wb3J0YW50O1xuICB1c2VyLXNlbGVjdDogYXV0byAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwIDUwcHg7XG59XG5cbi5vbi10b3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDk7XG4gIGhlaWdodDogMTAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSkgMHM7XG59XG5cbi5uYXYtc2hhZG93IHtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTBweCByZ2JhKDIsIDEyLCAyNywgMC43KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSAwcztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAubWFpbi1uYXZiYXIgLm5hdi1saW5rIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMC41cmVtIDAuN3JlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgyN3B4KSB7XG4gIG5hdiAubmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODI3cHgpIHtcbiAgLm1lbnUtd3JhcHBlcixcbi5tZW51LXJlc3BvbnNpdmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5mbGFnLXRleHQge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xufVxuXG4ubGFuZ3VhZ2UtY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICBiYWNrZ3JvdW5kOiAjMTcyYTQ1O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3RvciB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2NiZDVmNSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMXB4IDhweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwYTE5MmYgIWltcG9ydGFudDtcbn1cblxuLmxhbmd1YWdlLWNvbnRhaW5lci1zZWxlY3Rvci5hY3RpdmUge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNjYmQ1ZjUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTFweCA4cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMTcyYTQ1ICFpbXBvcnRhbnQ7XG59XG5cbi5sYW5ndWFnZS1jb250YWluZXItc2VsZWN0b3I6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTcyYTQ1ICFpbXBvcnRhbnQ7XG59XG5cbi5hcnJvdy1sYW5ndWFnZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgZmlsbDogIzY0ZmZkYTtcbn1cblxuOjpuZy1kZWVwIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOjpuZy1kZWVwIC5kcm9wZG93bi1tZW51LnNob3cge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDdweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjY2NkNmY2ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgbGVmdDogMjBweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTVweCByZ2JhKDIsIDEyLCAyNywgMC43KTtcbn1cblxuLmFycm93LWFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjVweDtcbiAgZmlsbDogIzY0ZmZkYTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ubGFuZ3VhZ2UtY29udGFpbmVyLXNlbGVjdG9yLmFjdGl2ZSAuYXJyb3ctYWN0aXZlIHtcbiAgdmlzaWJpbGl0eTogaW5oZXJpdDtcbn1cblxuLmxvZ28gYSAubG9nby1jb250YWluZXIgc3ZnIHBvbHlnb24ge1xuICBmaWxsOiAjMGExOTJmO1xufVxuXG4jbG9nbyB7XG4gIGNvbG9yOiAjNjRmZmRhO1xufVxuXG4ubG9nbyBhIC5sb2dvLWNvbnRhaW5lciBzdmcge1xuICBmaWxsOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuc3ZnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmlsbDogY3VycmVudGNvbG9yO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubG9nbyBhIC5sb2dvLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLmxvZ28gYSB7XG4gIGNvbG9yOiAjNjRmZmRhO1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5sb2dvIGEgLmhleC1jb250YWluZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xufVxuXG5zdmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmaWxsOiBjdXJyZW50Y29sb3I7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5sb2dvIGEge1xuICBjb2xvcjogIzY0ZmZkYTtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)("animateMenu", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(":enter", [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.query)("*", [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0, transform: "translateY(-50%)" }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.stagger)(50, [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 1, transform: "none" })),
                        ]),
                    ]),
                ]),
            ]),
        ] } });


/***/ }),

/***/ 2491:
/*!**********************************************************!*\
  !*** ./src/app/components/home/about/about.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);




function AboutComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p", 21);
} if (rf & 2) {
    const text_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", text_r1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class AboutComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 55, vars: 6, consts: [["id", "about", 1, "section", "about"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", 1, "about-title"], [1, "section-title"], [1, "n-section-title"], [1, "row"], [1, "col-12", "col-md-6", "mb-4", "mb-md-0"], [1, "about-description"], ["data-aos", "fade-up", "data-aos-duration", "1000", 3, "innerHTML", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", 1, "skills-list"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "skill-element"], [1, "underline"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "col-12", "col-md-6", "mt-4", "mt-md-0", "text-center"], [1, "lbrXps"], [1, "wrapper"], ["data-gatsby-image-wrapper", "", 1, "gatsby-image-wrapper", "gatsby-image-wrapper-constrained", "img"], [2, "max-width", "500px", "display", "block"], ["alt", "", "role", "presentation", "aria-hidden", "true", "src", "data:image/svg+xml;charset=utf-8,%3Csvg height='500' width='500' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E", 2, "max-width", "100%", "display", "block", "position", "static"], ["aria-hidden", "true", "data-placeholder-image", "", 2, "opacity", "0", "transition", "opacity 500ms linear 0s", "background-color", "rgb(232, 232, 232)", "position", "absolute", "inset", "0px", "object-fit", "cover"], ["width", "300", "height", "300", "data-main-image", "", "sizes", "(min-width: 500px) 500px, 100vw", "decoding", "async", "src", "assets/images/me/florece.jpeg", "srcset", "\n\t\t\t\t\t\t\t\t\t\t\tassets/images/me/florece.jpeg 125w,\n\t\t\t\t\t\t\t\t\t\t\tassets/images/me/florece.jpeg 250w,\n\t\t\t\t\t\t\t\t\t\t\tassets/images/me/florece.jpeg 500w\n\t\t\t\t\t\t\t\t\t\t", "alt", "Headshot", 2, "object-fit", "cover", "opacity", "1"], ["data-aos", "fade-up", "data-aos-duration", "1000", 3, "innerHTML"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "01.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AboutComponent_p_12_Template, 1, 1, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 10)(15, "li", 11)(16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "MongoDB, Express, Angular, NodeJS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 11)(19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "RxJS, NgRx ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 11)(22, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "HTML & (S)CSS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 11)(25, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "JavaScript, TypeScript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 11)(28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Swift, ReactNative ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li", 11)(31, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "PHP, Python ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li", 11)(34, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Jest (TDD) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li", 11)(37, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "CI / CD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li", 11)(40, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Bootstrap, Material, PrimeFaces, Tailwind ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li", 11)(43, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "WordPress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 13)(46, "div", 14)(47, "div", 15)(48, "div", 16)(49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "noscript");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 2, "AboutMe.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 4, "AboutMe.Paragraphs"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["@charset \"UTF-8\";\n\n.about[_ngcontent-%COMP%]   .about-description[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  max-width: 480px;\n}\n.about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%] {\n  width: 324px;\n  margin: auto;\n}\n.about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]:after {\n  content: \"\";\n  z-index: 0;\n  display: block;\n  position: relative;\n  width: 300px;\n  height: 300px;\n  border-radius: 3px;\n  bottom: 290px;\n  left: 23px;\n}\n.about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: relative;\n}\n.about[_ngcontent-%COMP%]   .skills-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(140px, 200px));\n  overflow: hidden;\n  padding: 0;\n  margin: 20px 0 0 0;\n  list-style: none;\n}\n.about[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n  padding-left: 20px;\n  font-size: 13px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  color: #8892b0;\n}\n.about[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.about[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:before {\n  content: \"\u25B9\";\n  position: absolute;\n  left: 0;\n  color: #64ffda;\n  font-size: 14px;\n  line-height: 12px;\n}\n.lbrXps[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 300px;\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  display: block;\n  position: relative;\n  width: 100%;\n  border-radius: 4px;\n  background-color: #64ffda;\n}\n.wrapper[_ngcontent-%COMP%]::before {\n  top: 0px;\n  left: 0px;\n  background-color: #0a192f;\n  mix-blend-mode: screen;\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]::after {\n  border: 2px solid #64ffda;\n  top: 14px;\n  left: 14px;\n  z-index: -1;\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]::before, .lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover, .lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:focus {\n  outline: 0px;\n  transform: translate(-4px, -4px);\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover, .lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:focus-visible {\n  box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover::after, .lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:focus::after {\n  transform: translate(8px, 8px);\n}\n.gatsby-image-wrapper[_ngcontent-%COMP%]   [data-main-image][_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateZ(0);\n  transition: opacity 0.25s linear;\n  will-change: opacity;\n}\n.gatsby-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  margin: 0;\n  max-width: none;\n  padding: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 100%;\n  object-fit: cover;\n}\nimg[alt=\"\"][_ngcontent-%COMP%], img[_ngcontent-%COMP%]:not([alt]) {\n  filter: blur(5px);\n}\nimg[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], .gatsby-image-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  vertical-align: middle;\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 4px;\n  mix-blend-mode: multiply;\n  filter: grayscale(100%) contrast(1);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.gatsby-image-wrapper-constrained[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.gatsby-image-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%], .lbrXps[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:focus   .img[_ngcontent-%COMP%] {\n  filter: none;\n  mix-blend-mode: normal;\n}\n@media (min-width: 992px) and (max-width: 1300px) {\n  .about-img-container[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: 0;\n  }\n}\n@media (max-width: 500px) {\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n  }\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]:after {\n    width: 200px;\n    height: 200px;\n    bottom: 190px;\n    left: 74px;\n  }\n}\n@media (max-width: 500px) {\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 180px;\n  }\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFByb2ZvbGlvJTIwUHJvamVjdFxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyIsImFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQiw4RUFBQTtBQ0dDO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtBRkFGO0FFR0M7RUFDQyxZQUFBO0VBQ0EsWUFBQTtBRkRGO0FFR0U7RUFDQyxXQUFBO0VBRUEsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBRkZIO0FFS0U7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7QUZISDtBRU9DO0VBQ0MsYUFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRkxGO0FFUUM7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEZEaENTO0VDaUNULGNEekNjO0FEbUNoQjtBRU9FO0VBQ0MsbUJBQUE7QUZMSDtBRVFFO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGNEOUNhO0VDK0NiLGVBQUE7RUFDQSxpQkFBQTtBRk5IO0FFV0E7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0FGUkQ7QUVXQTtFQUNDLGtEQUFBO0VBQ0EsMERBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkRqRWU7QUR5RGhCO0FFV0E7RUFDQyxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUZSRDtBRVdBO0VBQ0MseUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUZSRDtBRVdBOztFQUVDLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMERBQUE7QUZSRDtBRVdBOztFQUVDLFlBQUE7RUFDQSxnQ0FBQTtBRlJEO0FFV0E7O0VBRUMsa0RBQUE7QUZSRDtBRVVBOztFQUVDLDhCQUFBO0FGUEQ7QUVTQTtFQUNDLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUZORDtBRVFBO0VBQ0MsU0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBRkxEO0FFUUE7O0VBRUMsaUJBQUE7QUZMRDtBRVFBOzs7RUFHQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FGTEQ7QUVRQTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0EsMERBQUE7QUZMRDtBRVFBO0VBQ0MscUJBQUE7QUZMRDtBRVFBO0VBQ0MsZ0JBQUE7QUZMRDtBRVFBOztFQUVDLFlBQUE7RUFDQSxzQkFBQTtBRkxEO0FFUUE7RUFDQztJQUNDLGlCQUFBO0lBQ0EsZUFBQTtFRkxBO0FBQ0Y7QUVRQTtFQUVFO0lBQ0MsWUFBQTtJQUNBLGFBQUE7RUZQRDtFRVNBO0lBQ0MsWUFBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtFRlBEO0FBQ0Y7QUVXQTtFQUVFO0lBQ0MsV0FBQTtFRlZEO0VFWUM7SUFDQyxZQUFBO0lBQ0EsYUFBQTtFRlZGO0VFYUM7SUFDQyxhQUFBO0VGWEY7QUFDRiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi5hYm91dCAuYWJvdXQtZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xufVxuLmFib3V0IC5hYm91dC1pbWctY29udGFpbmVyIHtcbiAgd2lkdGg6IDMyNHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uYWJvdXQgLmFib3V0LWltZy1jb250YWluZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB6LWluZGV4OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm90dG9tOiAyOTBweDtcbiAgbGVmdDogMjNweDtcbn1cbi5hYm91dCAuYWJvdXQtaW1nLWNvbnRhaW5lciBpbWcge1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYWJvdXQgLnNraWxscy1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDE0MHB4LCAyMDBweCkpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDIwcHggMCAwIDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uYWJvdXQgLnNraWxsLWVsZW1lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XG4gIGNvbG9yOiAjODg5MmIwO1xufVxuLmFib3V0IC5za2lsbC1lbGVtZW50IHNwYW4ge1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmFib3V0IC5za2lsbC1lbGVtZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4pa5XCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgY29sb3I6ICM2NGZmZGE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi5sYnJYcHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMzAwcHg7XG59XG5cbi5sYnJYcHMgLndyYXBwZXIge1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTVweCByZ2JhKDIsIDEyLCAyNywgMC43KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0ZmZkYTtcbn1cblxuLndyYXBwZXI6OmJlZm9yZSB7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTE5MmY7XG4gIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XG59XG5cbi5sYnJYcHMgLndyYXBwZXI6OmFmdGVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzY0ZmZkYTtcbiAgdG9wOiAxNHB4O1xuICBsZWZ0OiAxNHB4O1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmxiclhwcyAud3JhcHBlcjo6YmVmb3JlLFxuLmxiclhwcyAud3JhcHBlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG59XG5cbi5sYnJYcHMgLndyYXBwZXI6aG92ZXIsXG4ubGJyWHBzIC53cmFwcGVyOmZvY3VzIHtcbiAgb3V0bGluZTogMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCAtNHB4KTtcbn1cblxuLmxiclhwcyAud3JhcHBlcjpob3Zlcixcbi5sYnJYcHMgLndyYXBwZXI6Zm9jdXMtdmlzaWJsZSB7XG4gIGJveC1zaGFkb3c6IDAgMjBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xufVxuXG4ubGJyWHBzIC53cmFwcGVyOmhvdmVyOjphZnRlcixcbi5sYnJYcHMgLndyYXBwZXI6Zm9jdXM6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOHB4LCA4cHgpO1xufVxuXG4uZ2F0c2J5LWltYWdlLXdyYXBwZXIgW2RhdGEtbWFpbi1pbWFnZV0ge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgbGluZWFyO1xuICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcbn1cblxuLmdhdHNieS1pbWFnZS13cmFwcGVyIGltZyB7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IDA7XG4gIG1heC13aWR0aDogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmltZ1thbHQ9XCJcIl0sXG5pbWc6bm90KFthbHRdKSB7XG4gIGZpbHRlcjogYmx1cig1cHgpO1xufVxuXG5pbWcsXG5zdmcsXG4uZ2F0c2J5LWltYWdlLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubGJyWHBzIC53cmFwcGVyIC5pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBjb250cmFzdCgxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbn1cblxuLmdhdHNieS1pbWFnZS13cmFwcGVyLWNvbnN0cmFpbmVkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZ2F0c2J5LWltYWdlLXdyYXBwZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubGJyWHBzIC53cmFwcGVyOmhvdmVyIC5pbWcsXG4ubGJyWHBzIC53cmFwcGVyOmZvY3VzIC5pbWcge1xuICBmaWx0ZXI6IG5vbmU7XG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAuYWJvdXQtaW1nLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmFib3V0IC5hYm91dC1pbWctY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbiAgLmFib3V0IC5hYm91dC1pbWctY29udGFpbmVyOmFmdGVyIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3R0b206IDE5MHB4O1xuICAgIGxlZnQ6IDc0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuYWJvdXQgLmFib3V0LWltZy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5hYm91dCAuYWJvdXQtaW1nLWNvbnRhaW5lciBpbWcge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICB9XG4gIC5hYm91dCAuYWJvdXQtaW1nLWNvbnRhaW5lcjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbiROYXZ5ICAgICAgICAgOiAjMGExOTJmO1xyXG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcclxuJExpZ2h0ZXN0TmF2eSA6ICMzMDNDNTU7XHJcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xyXG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcclxuJExpZ2h0ZXN0U2xhdGU6ICNjY2Q2ZjY7XHJcbiRXaGl0ZSAgICAgICAgOiAjZTZmMWZmO1xyXG4kR3JlZW4gICAgICAgIDogIzY0ZmZkYTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcblxyXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiRDb2RlRm9udDogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XHJcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4uYWJvdXQge1xyXG5cdC5hYm91dC1kZXNjcmlwdGlvbiB7XHJcblx0XHRtYXJnaW4tdG9wOiAzMHB4O1xyXG5cdFx0bWF4LXdpZHRoOiA0ODBweDtcclxuXHR9XHJcblxyXG5cdC5hYm91dC1pbWctY29udGFpbmVyIHtcclxuXHRcdHdpZHRoOiAzMjRweDtcclxuXHRcdG1hcmdpbjogYXV0bztcclxuXHJcblx0XHQmOmFmdGVyIHtcclxuXHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0Ly8gYm9yZGVyOiAycHggc29saWQgJEdyZWVuO1xyXG5cdFx0XHR6LWluZGV4OiAwO1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHR3aWR0aDogMzAwcHg7XHJcblx0XHRcdGhlaWdodDogMzAwcHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRcdFx0Ym90dG9tOiAyOTBweDtcclxuXHRcdFx0bGVmdDogMjNweDtcclxuXHRcdH1cclxuXHJcblx0XHRpbWcge1xyXG5cdFx0XHR6LWluZGV4OiAyO1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuc2tpbGxzLWxpc3Qge1xyXG5cdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgxNDBweCwgMjAwcHgpKTtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0bWFyZ2luOiAyMHB4IDAgMCAwO1xyXG5cdFx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHR9XHJcblxyXG5cdC5za2lsbC1lbGVtZW50IHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRmb250LWZhbWlseTogJENvZGVGb250O1xyXG5cdFx0Y29sb3I6ICRTbGF0ZTtcclxuXHRcdHNwYW4ge1xyXG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdCY6YmVmb3JlIHtcclxuXHRcdFx0Y29udGVudDogXCLilrlcIjtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRjb2xvcjogJEdyZWVuO1xyXG5cdFx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLmxiclhwcyB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1heC13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5sYnJYcHMgLndyYXBwZXIge1xyXG5cdGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkR3JlZW47XHJcbn1cclxuXHJcbi53cmFwcGVyOjpiZWZvcmUge1xyXG5cdHRvcDogMHB4O1xyXG5cdGxlZnQ6IDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGExOTJmO1xyXG5cdG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XHJcbn1cclxuXHJcbi5sYnJYcHMgLndyYXBwZXI6OmFmdGVyIHtcclxuXHRib3JkZXI6IDJweCBzb2xpZCAkR3JlZW47XHJcblx0dG9wOiAxNHB4O1xyXG5cdGxlZnQ6IDE0cHg7XHJcblx0ei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5sYnJYcHMgLndyYXBwZXI6OmJlZm9yZSxcclxuLmxiclhwcyAud3JhcHBlcjo6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxufVxyXG5cclxuLmxiclhwcyAud3JhcHBlcjpob3ZlcixcclxuLmxiclhwcyAud3JhcHBlcjpmb2N1cyB7XHJcblx0b3V0bGluZTogMHB4O1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsIC00cHgpO1xyXG59XHJcblxyXG4ubGJyWHBzIC53cmFwcGVyOmhvdmVyLFxyXG4ubGJyWHBzIC53cmFwcGVyOmZvY3VzLXZpc2libGUge1xyXG5cdGJveC1zaGFkb3c6IDAgMjBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xyXG59XHJcbi5sYnJYcHMgLndyYXBwZXI6aG92ZXI6OmFmdGVyLFxyXG4ubGJyWHBzIC53cmFwcGVyOmZvY3VzOjphZnRlciB7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoOHB4LCA4cHgpO1xyXG59XHJcbi5nYXRzYnktaW1hZ2Utd3JhcHBlciBbZGF0YS1tYWluLWltYWdlXSB7XHJcblx0b3BhY2l0eTogMDtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcblx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBsaW5lYXI7XHJcblx0d2lsbC1jaGFuZ2U6IG9wYWNpdHk7XHJcbn1cclxuLmdhdHNieS1pbWFnZS13cmFwcGVyIGltZyB7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRsZWZ0OiAwO1xyXG5cdG1hcmdpbjogMDtcclxuXHRtYXgtd2lkdGg6IG5vbmU7XHJcblx0cGFkZGluZzogMDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDA7XHJcblx0dG9wOiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG5pbWdbYWx0PVwiXCJdLFxyXG5pbWc6bm90KFthbHRdKSB7XHJcblx0ZmlsdGVyOiBibHVyKDVweCk7XHJcbn1cclxuXHJcbmltZyxcclxuc3ZnLFxyXG4uZ2F0c2J5LWltYWdlLXdyYXBwZXIge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ubGJyWHBzIC53cmFwcGVyIC5pbWcge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0bWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xyXG5cdGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIGNvbnRyYXN0KDEpO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbn1cclxuXHJcbi5nYXRzYnktaW1hZ2Utd3JhcHBlci1jb25zdHJhaW5lZCB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZ2F0c2J5LWltYWdlLXdyYXBwZXIge1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5sYnJYcHMgLndyYXBwZXI6aG92ZXIgLmltZyxcclxuLmxiclhwcyAud3JhcHBlcjpmb2N1cyAuaW1nIHtcclxuXHRmaWx0ZXI6IG5vbmU7XHJcblx0bWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcblx0LmFib3V0LWltZy1jb250YWluZXIge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDA7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuXHQuYWJvdXQge1xyXG5cdFx0LmFib3V0LWltZy1jb250YWluZXIgaW1nIHtcclxuXHRcdFx0d2lkdGg6IDIwMHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDIwMHB4O1xyXG5cdFx0fVxyXG5cdFx0LmFib3V0LWltZy1jb250YWluZXI6YWZ0ZXIge1xyXG5cdFx0XHR3aWR0aDogMjAwcHg7XHJcblx0XHRcdGhlaWdodDogMjAwcHg7XHJcblx0XHRcdGJvdHRvbTogMTkwcHg7XHJcblx0XHRcdGxlZnQ6IDc0cHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuXHQuYWJvdXQge1xyXG5cdFx0LmFib3V0LWltZy1jb250YWluZXIge1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHJcblx0XHRcdGltZyB7XHJcblx0XHRcdFx0d2lkdGg6IDE4MHB4O1xyXG5cdFx0XHRcdGhlaWdodDogMTgwcHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 7206:
/*!************************************************************!*\
  !*** ./src/app/components/home/banner/banner.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);




class BannerComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
BannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 19, vars: 7, consts: [[1, "section", "banner"], [1, "container"], [1, "section-box-banner"], [1, "content"], [1, "banner-title"], [1, "banner-description"], [1, "mt-4", 3, "innerHTML"], [1, "div-btn-banner"], ["href", "mailto:annr.dev@gmail.com", "target", "_black", 1, "main-btn", 3, "click"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Hello! My name is");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Florece Ann Robles.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "I build digital platforms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7)(16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BannerComponent_Template_a_click_16_listener() { return ctx.analyticsService.sendAnalyticEvent("click_send_mail", "banner", "email"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bannerTrigger", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 3, "Banner.Description"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 5, "Banner.ActionBtn"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".banner[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: table;\n  height: 100vh;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 98px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #64ffda;\n  margin: 0 0 20px 3px;\n  font-size: 16px;\n  font-weight: normal;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 80px;\n  line-height: 1.1;\n  margin: 0;\n  font-family: Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;\n  background: linear-gradient(120deg, #50efb5, #8ff4ca, #7e57c2, #0087f2, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);\n  color: #fff;\n  background-clip: text;\n  -webkit-background-clip: text;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #8892b0;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .banner-description[_ngcontent-%COMP%] {\n  margin-bottom: 70px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .div-btn-banner[_ngcontent-%COMP%] {\n  height: 43px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyIsImJhbm5lci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFByb2ZvbGlvJTIwUHJvamVjdFxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGJhbm5lclxcYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDRUE7RUFDQyxpQkFBQTtBQ0FEO0FERUM7RUFDQyxjQUFBO0VBQ0EsYUFBQTtBQ0FGO0FERUU7RUFDQyxtQkFBQTtFQUNBLHNCQUFBO0FDQUg7QURFRztFQUNDLGdCQUFBO0FDQUo7QURHRztFQUNDLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDBGRFRPO0FFUVg7QURJRzs7RUFFQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxtSkRuQk87RUNvQlAsb0hBQUE7RUFZQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQ2JKO0FEZ0JHO0VBQ0MsY0QzQ1k7QUU2QmhCO0FEaUJHO0VBQ0MsY0RqRFk7QUVrQ2hCO0FEa0JHO0VBQ0MsbUJBQUE7QUNoQko7QURtQkc7RUFDQyxnQkFBQTtBQ2pCSjtBRG9CRztFQUNDLFlBQUE7QUNsQkoiLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuJE5hdnkgICAgICAgICA6ICMwYTE5MmY7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogI2NjZDZmNjtcclxuJFdoaXRlICAgICAgICA6ICNlNmYxZmY7XHJcbiRHcmVlbiAgICAgICAgOiAjNjRmZmRhO1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuXHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcclxuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5iYW5uZXIge1xyXG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5cclxuXHQuY29udGFpbmVyIHtcclxuXHRcdGRpc3BsYXk6IHRhYmxlO1xyXG5cdFx0aGVpZ2h0OiAxMDB2aDtcclxuXHJcblx0XHQuc2VjdGlvbi1ib3gtYmFubmVyIHtcclxuXHRcdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcclxuXHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcblx0XHRcdC5jb250ZW50IHtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiA5OHB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRoMSB7XHJcblx0XHRcdFx0Y29sb3I6ICM2NGZmZGE7XHJcblx0XHRcdFx0bWFyZ2luOiAwIDAgMjBweCAzcHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6ICRDb2RlRm9udDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aDIsXHJcblx0XHRcdGgzIHtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogODBweDtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogMS4xO1xyXG5cdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRmb250LWZhbWlseTogJE1haW5Gb250O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuXHRcdFx0XHRcdDEyMGRlZyxcclxuXHRcdFx0XHRcdCM1MGVmYjUsXHJcblx0XHRcdFx0XHQjOGZmNGNhLFxyXG5cdFx0XHRcdFx0IzdlNTdjMixcclxuXHRcdFx0XHRcdCMwMDg3ZjIsXHJcblx0XHRcdFx0XHQjMjZjNmRhLFxyXG5cdFx0XHRcdFx0IzQzYTA0NyxcclxuXHRcdFx0XHRcdCNlZWZmNDEsXHJcblx0XHRcdFx0XHQjZjlhODI1LFxyXG5cdFx0XHRcdFx0I2ZmNTcyMlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG5cdFx0XHRcdC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRoMiB7XHJcblx0XHRcdFx0Y29sb3I6ICRMaWdodGVzdFNsYXRlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRoMyB7XHJcblx0XHRcdFx0Y29sb3I6ICRTbGF0ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmJhbm5lci1kZXNjcmlwdGlvbiB7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNzBweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cCB7XHJcblx0XHRcdFx0bWF4LXdpZHRoOiA4MDBweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmRpdi1idG4tYmFubmVyIHtcclxuXHRcdFx0XHRoZWlnaHQ6IDQzcHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuLmJhbm5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLmJhbm5lciAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIGhlaWdodDogMTAwdmg7XG59XG4uYmFubmVyIC5jb250YWluZXIgLnNlY3Rpb24tYm94LWJhbm5lciB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uYmFubmVyIC5jb250YWluZXIgLnNlY3Rpb24tYm94LWJhbm5lciAuY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDk4cHg7XG59XG4uYmFubmVyIC5jb250YWluZXIgLnNlY3Rpb24tYm94LWJhbm5lciBoMSB7XG4gIGNvbG9yOiAjNjRmZmRhO1xuICBtYXJnaW46IDAgMCAyMHB4IDNweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LWZhbWlseTogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XG59XG4uYmFubmVyIC5jb250YWluZXIgLnNlY3Rpb24tYm94LWJhbm5lciBoMixcbi5iYW5uZXIgLmNvbnRhaW5lciAuc2VjdGlvbi1ib3gtYmFubmVyIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBsaW5lLWhlaWdodDogMS4xO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBDYWxpYnJlLCBTYW4gRnJhbmNpc2NvLCBTRiBQcm8gVGV4dCwgLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgSGVsdmV0aWNhIE5ldWUsIFNlZ29lIFVJLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzUwZWZiNSwgIzhmZjRjYSwgIzdlNTdjMiwgIzAwODdmMiwgIzI2YzZkYSwgIzQzYTA0NywgI2VlZmY0MSwgI2Y5YTgyNSwgI2ZmNTcyMik7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xufVxuLmJhbm5lciAuY29udGFpbmVyIC5zZWN0aW9uLWJveC1iYW5uZXIgaDIge1xuICBjb2xvcjogI2NjZDZmNjtcbn1cbi5iYW5uZXIgLmNvbnRhaW5lciAuc2VjdGlvbi1ib3gtYmFubmVyIGgzIHtcbiAgY29sb3I6ICM4ODkyYjA7XG59XG4uYmFubmVyIC5jb250YWluZXIgLnNlY3Rpb24tYm94LWJhbm5lciAuYmFubmVyLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cbi5iYW5uZXIgLmNvbnRhaW5lciAuc2VjdGlvbi1ib3gtYmFubmVyIHAge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xufVxuLmJhbm5lciAuY29udGFpbmVyIC5zZWN0aW9uLWJveC1iYW5uZXIgLmRpdi1idG4tYmFubmVyIHtcbiAgaGVpZ2h0OiA0M3B4O1xufSJdfQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('bannerTrigger', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(":enter", [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.query)("*", [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ opacity: 0, transform: "translateX(-50px)" }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.stagger)(50, [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)("250ms cubic-bezier(0.35, 0, 0.25, 1)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ opacity: 1, transform: "none" }))
                        ])
                    ])
                ])
            ])
        ] } });


/***/ }),

/***/ 1605:
/*!**************************************************************!*\
  !*** ./src/app/components/home/contact/contact.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);



class ContactComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    ngOnInit() { }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 17, vars: 12, consts: [["id", "contact", 1, "section", "contact"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "mb-4"], [1, "contact-pre-title", "big-subtitle"], [1, "e-font", "contact-title", "big-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "mt-5"], ["href", "mailto:annr.dev@gmail.com", "target", "_blank", "data-aos", "fade-up", "data-aos-duration", "1000", 1, "main-btn", 3, "click"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7)(14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_a_click_14_listener() { return ctx.analyticsService.sendAnalyticEvent("click_send_mail", "contact", "email"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" 05. ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, "Contact.Pretitle"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, "Contact.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 8, "Contact.Content"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 10, "Contact.Btn"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".contact[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1000px;\n  text-align: center;\n  max-width: 600px;\n  margin: 0 auto;\n  height: 100vh;\n  display: table;\n}\n.contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.contact[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 60px;\n  font-weight: 600;\n  color: #ccd6f6;\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.contact[_ngcontent-%COMP%]   .contact-pre-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin: 10px 0 40px;\n  width: 100%;\n  white-space: nowrap;\n  font-size: 32px;\n  display: block;\n  color: #64ffda;\n  font-size: 16px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-weight: normal;\n  margin-bottom: 20px;\n  justify-content: center;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .contact[_ngcontent-%COMP%] {\n    height: 100vh;\n    padding: 0 !important;\n    margin: 0 auto !important;\n    display: table;\n  }\n  .contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: middle;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyIsImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQcm9mb2xpbyUyMFByb2plY3RcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDRUE7RUFFSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDREo7QURHSTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7QUNEUjtBRElJO0VBRUksa0JBQUE7RUFJQSxhQUFBO0VBSUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNEeEJRO0VDeUJSLFlBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0FDSFI7QURLSTtFQUNJLGtCQUFBO0VBSUEsYUFBQTtFQUlBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNEekNRO0VDMENSLGVBQUE7RUFDQSwwRkR2Q0c7RUN3Q0gsbUJBQUE7RUFDQSxtQkFBQTtFQUlBLHVCQUFBO0VBQ0Esa0JBQUE7QUNIUjtBRFFBO0VBRUk7SUFDSSxhQUFBO0lBQ0EscUJBQUE7SUFDQSx5QkFBQTtJQUNBLGNBQUE7RUNOTjtFRFFNO0lBQ0ksbUJBQUE7SUFDQSxzQkFBQTtFQ05WO0FBQ0YiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbiROYXZ5ICAgICAgICAgOiAjMGExOTJmO1xyXG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcclxuJExpZ2h0ZXN0TmF2eSA6ICMzMDNDNTU7XHJcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xyXG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcclxuJExpZ2h0ZXN0U2xhdGU6ICNjY2Q2ZjY7XHJcbiRXaGl0ZSAgICAgICAgOiAjZTZmMWZmO1xyXG4kR3JlZW4gICAgICAgIDogIzY0ZmZkYTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcblxyXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiRDb2RlRm9udDogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XHJcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4uY29udGFjdHtcclxuXHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG5cclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LXRpdGxle1xyXG5cclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICRMaWdodGVzdFNsYXRlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1wcmUtdGl0bGV7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAkR3JlZW47XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgXHJcbiAgICAuY29udGFjdHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG5cclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi5jb250YWN0IHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi5jb250YWN0IC5jb250YWluZXIge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmNvbnRhY3QgLmNvbnRhY3QtdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNjY2Q2ZjY7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLmNvbnRhY3QgLmNvbnRhY3QtcHJlLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMCA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM2NGZmZGE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFNGIE1vbm8sIEZpcmEgQ29kZSwgRmlyYSBNb25vLCBSb2JvdG8gTW9ubywgTHVjaWRhIENvbnNvbGUsIE1vbmFjbywgTW9ub3NwYWNlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWN0IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICB9XG4gIC5jb250YWN0IC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 3575:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner/banner.component */ 7206);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ 2491);
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobs/jobs.component */ 185);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ 2711);
/* harmony import */ var _more_projects_more_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-projects/more-projects.component */ 6437);
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimonial/testimonial.component */ 4407);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ 1605);









class HomeComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    ngOnInit() {
        this.analyticsService.sendAnalyticPageView("/inicio", "Se entro a inicio");
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 8, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-banner")(2, "app-about")(3, "app-jobs")(4, "app-projects")(5, "app-more-projects")(6, "app-testimonial")(7, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__.BannerComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_3__.JobsComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.projectsComponent, _more_projects_more_projects_component__WEBPACK_IMPORTED_MODULE_5__.MoreprojectsComponent, _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_6__.TestimonialComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__.ContactComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7142:
/*!************************************************!*\
  !*** ./src/app/components/home/home.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 3575);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 2491);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner/banner.component */ 7206);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ 1605);
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testimonial/testimonial.component */ 4407);
/* harmony import */ var _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jobs/jobs.component */ 185);
/* harmony import */ var _more_projects_more_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-projects/more-projects.component */ 6437);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ 2711);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7297);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavModule,
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient],
                },
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
        _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__.BannerComponent,
        _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent,
        _jobs_jobs_component__WEBPACK_IMPORTED_MODULE_5__.JobsComponent,
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__.projectsComponent,
        _more_projects_more_projects_component__WEBPACK_IMPORTED_MODULE_6__.MoreprojectsComponent,
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent,
        _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_4__.TestimonialComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule] }); })();


/***/ }),

/***/ 185:
/*!********************************************************!*\
  !*** ./src/app/components/home/jobs/jobs.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsComponent": () => (/* binding */ JobsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);





function JobsComponent_li_12_ng_template_3_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const jobDescriptionParagraph_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, jobDescriptionParagraph_r6), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function JobsComponent_li_12_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, JobsComponent_li_12_ng_template_3_p_6_Template, 2, 3, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span");
} if (rf & 2) {
    const job_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", job_r2.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("@ ", job_r2.Tab, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r2.Date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", job_r2.Description);
} }
function JobsComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, JobsComponent_li_12_ng_template_3_Template, 8, 4, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const job_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", job_r2.Tab)("ngbNavItem", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r2.Tab);
} }
class JobsComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
        this.active = 0;
    }
    ngOnInit() {
    }
}
JobsComponent.ɵfac = function JobsComponent_Factory(t) { return new (t || JobsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
JobsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JobsComponent, selectors: [["app-jobs"]], decls: 15, vars: 8, consts: [["id", "jobs", 1, "section", "jobs"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "about-title", "mb-5"], [1, "e-font", "section-title"], [1, "code-font", "n-section-title"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "jobs-tabs"], ["ngbNav", "", "orientation", "vertical", 1, "nav-tabs", "jobs-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "title", "ngbNavItem", 4, "ngFor", "ngForOf"], [1, "mt-2", 3, "ngbNavOutlet"], [3, "title", "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "title-tab-content"], [1, "company-tab-content"], [1, "job-time"], ["class", "job-description", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "job-description", 3, "innerHTML"]], template: function JobsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "02.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "ul", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activeIdChange", function JobsComponent_Template_ul_activeIdChange_10_listener($event) { return ctx.active = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, JobsComponent_li_12_Template, 4, 3, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 4, "Experience.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 6, "Experience.Jobs"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r0);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNav, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavOutlet], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["@charset \"UTF-8\";\n\n  .jobs .jobs-tabs {\n  display: flex;\n}\n  .jobs .jobs-tabs .tab-content {\n  margin-left: 38px;\n}\n  .jobs .jobs-tabs ul {\n  display: block;\n  width: 185px;\n  border: none;\n}\n  .jobs .jobs-tabs a.active {\n  background-color: #112240 !important;\n  color: #64ffda !important;\n  border-color: transparent !important;\n  border-radius: 0px;\n}\n  .jobs .jobs-tabs a:hover {\n  background-color: #112240 !important;\n  color: #64ffda !important;\n  border-color: transparent !important;\n  border-radius: 0px;\n}\n  .jobs .jobs-tabs a {\n  display: inline-block;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  -webkit-text-decoration-skip-ink: auto;\n  text-decoration-skip-ink: auto;\n  color: inherit;\n  position: relative;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background-color: transparent;\n  height: 42px;\n  padding: 0 20px 2px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  text-align: left;\n  white-space: nowrap;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 13px;\n  color: #8892b0;\n}\n  .jobs .jobs-tabs li {\n  border-left: 2px solid #303C55;\n  border-left-width: 2px;\n  border-left-style: solid;\n  border-left-color: #303c55;\n}\n.jobs[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: auto;\n}\n.jobs[_ngcontent-%COMP%]   .title-tab-content[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n  font-size: 22px;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n.jobs[_ngcontent-%COMP%]   .title-tab-content[_ngcontent-%COMP%]   .company-tab-content[_ngcontent-%COMP%] {\n  color: #64ffda;\n}\n.jobs[_ngcontent-%COMP%]   .job-time[_ngcontent-%COMP%] {\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 13px;\n  font-weight: normal;\n  -webkit-letter-spacing: 0.05em;\n  -moz-letter-spacing: 0.05em;\n  -ms-letter-spacing: 0.05em;\n  letter-spacing: 0.05em;\n  color: #a8b2d1;\n  margin-bottom: 30px;\n}\n.jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 10px;\n  font-size: 18px;\n}\n.jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]:before {\n  content: \"\u25B9\";\n  position: absolute;\n  left: 0;\n  color: #64ffda;\n}\n@media (max-width: 768px) {\n  .jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n    padding: 0px;\n    padding-left: 30px;\n  }\n\n    .jobs-tabs {\n    display: block !important;\n  }\n    .jobs-tabs .tab-content {\n    margin-left: 0px !important;\n  }\n    .jobs-tabs ul {\n    display: block;\n    width: 100% !important;\n    margin-bottom: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFByb2ZvbGlvJTIwUHJvamVjdFxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGpvYnNcXGpvYnMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcdmFyaWFibGVzLnNjc3MiLCJqb2JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQiw4RUFBQTtBQ0VBO0VBQ0MsYUFBQTtBRkNEO0FFQ0M7RUFDQyxpQkFBQTtBRkNGO0FFRUM7RUFDQyxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUZBRjtBRUdDO0VBQ0Msb0NBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUZERjtBRUlDO0VBQ0Msb0NBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUZGRjtBRUtDO0VBQ0MscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0NBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUVBLDBEQUFBO0VBQ0EsZUFBQTtFQUlBLGFBQUE7RUFJQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUVBLDBEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBGRDNDUztFQzRDVCxlQUFBO0VBQ0EsY0RyRGM7QURrRGhCO0FFTUM7RUFDQyw4QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtBRkpGO0FFUUE7RUFDQyxnQkFBQTtFQUNBLFlBQUE7QUZMRDtBRU9DO0VBQ0MsY0RuRWM7RUNvRWQsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUZMRjtBRU9FO0VBQ0MsY0R2RWE7QURrRWhCO0FFU0M7RUFDQywwRkR4RVM7RUN5RVQsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjRHRGYztFQ3VGZCxtQkFBQTtBRlBGO0FFVUM7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FGUkY7QUVVRTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxjRGpHYTtBRHlGaEI7QUVhQTtFQUVFO0lBQ0MsWUFBQTtJQUNBLGtCQUFBO0VGWEQ7O0VFY0Q7SUFDQyx5QkFBQTtFRlhBO0VFYUE7SUFDQywyQkFBQTtFRlhEO0VFY0E7SUFDQyxjQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFRlpEO0FBQ0YiLCJmaWxlIjoiam9icy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbjo6bmctZGVlcCAuam9icyAuam9icy10YWJzIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbjo6bmctZGVlcCAuam9icyAuam9icy10YWJzIC50YWItY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAzOHB4O1xufVxuOjpuZy1kZWVwIC5qb2JzIC5qb2JzLXRhYnMgdWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE4NXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG46Om5nLWRlZXAgLmpvYnMgLmpvYnMtdGFicyBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTIyNDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM2NGZmZGEgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG46Om5nLWRlZXAgLmpvYnMgLmpvYnMtdGFicyBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMjI0MCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzY0ZmZkYSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbjo6bmctZGVlcCAuam9icyAuam9icy10YWJzIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG4gIGNvbG9yOiBpbmhlcml0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogNDJweDtcbiAgcGFkZGluZzogMCAyMHB4IDJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LWZhbWlseTogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM4ODkyYjA7XG59XG46Om5nLWRlZXAgLmpvYnMgLmpvYnMtdGFicyBsaSB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzMwM0M1NTtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDJweDtcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuICBib3JkZXItbGVmdC1jb2xvcjogIzMwM2M1NTtcbn1cblxuLmpvYnMge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uam9icyAudGl0bGUtdGFiLWNvbnRlbnQge1xuICBjb2xvcjogI2NjZDZmNjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uam9icyAudGl0bGUtdGFiLWNvbnRlbnQgLmNvbXBhbnktdGFiLWNvbnRlbnQge1xuICBjb2xvcjogIzY0ZmZkYTtcbn1cbi5qb2JzIC5qb2ItdGltZSB7XG4gIGZvbnQtZmFtaWx5OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICAtd2Via2l0LWxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIC1tb3otbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgLW1zLWxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIGNvbG9yOiAjYThiMmQxO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmpvYnMgLmpvYi1kZXNjcmlwdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uam9icyAuam9iLWRlc2NyaXB0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4pa5XCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgY29sb3I6ICM2NGZmZGE7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuam9icyAuam9iLWRlc2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICB9XG5cbiAgOjpuZy1kZWVwIC5qb2JzLXRhYnMge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgOjpuZy1kZWVwIC5qb2JzLXRhYnMgLnRhYi1jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgOjpuZy1kZWVwIC5qb2JzLXRhYnMgdWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbiROYXZ5ICAgICAgICAgOiAjMGExOTJmO1xyXG4kTGlnaHROYXZ5ICAgIDogIzExMjI0MDtcclxuJExpZ2h0ZXN0TmF2eSA6ICMzMDNDNTU7XHJcbiRTbGF0ZSAgICAgICAgOiAjODg5MmIwO1xyXG4kTGlnaHRTbGF0ZSAgIDogI2E4YjJkMTtcclxuJExpZ2h0ZXN0U2xhdGU6ICNjY2Q2ZjY7XHJcbiRXaGl0ZSAgICAgICAgOiAjZTZmMWZmO1xyXG4kR3JlZW4gICAgICAgIDogIzY0ZmZkYTtcclxuJEdyZWVuT3BhY2l0eSA6IHJnYmEoMTAwLDI1NSwyMTgsMC4wNyk7XHJcblxyXG4kTWFpbkZvbnQ6IENhbGlicmUsU2FuIEZyYW5jaXNjbyxTRiBQcm8gVGV4dCwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsUm9ib3RvLEhlbHZldGljYSBOZXVlLFNlZ29lIFVJLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiRDb2RlRm9udDogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XHJcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG46Om5nLWRlZXAgLmpvYnMgLmpvYnMtdGFicyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHJcblx0LnRhYi1jb250ZW50IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAzOHB4O1xyXG5cdH1cclxuXHJcblx0dWwge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR3aWR0aDogMTg1cHg7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0fVxyXG5cclxuXHRhLmFjdGl2ZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkTGlnaHROYXZ5ICFpbXBvcnRhbnQ7XHJcblx0XHRjb2xvcjogJEdyZWVuICFpbXBvcnRhbnQ7XHJcblx0XHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwcHg7XHJcblx0fVxyXG5cclxuXHRhOmhvdmVyIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICRMaWdodE5hdnkgIWltcG9ydGFudDtcclxuXHRcdGNvbG9yOiAkR3JlZW4gIWltcG9ydGFudDtcclxuXHRcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDBweDtcclxuXHR9XHJcblxyXG5cdGEge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0LXdlYmtpdC10ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHQtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcclxuXHRcdHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcclxuXHRcdGNvbG9yOiBpbmhlcml0O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuXHRcdC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdGhlaWdodDogNDJweDtcclxuXHRcdHBhZGRpbmc6IDAgMjBweCAycHg7XHJcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHRmb250LWZhbWlseTogJENvZGVGb250O1xyXG5cdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0Y29sb3I6ICRTbGF0ZTtcclxuXHR9XHJcblxyXG5cdGxpIHtcclxuXHRcdGJvcmRlci1sZWZ0OiAycHggc29saWQgJExpZ2h0ZXN0TmF2eTtcclxuXHRcdGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XHJcblx0XHRib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItbGVmdC1jb2xvcjogcmdiKDQ4LCA2MCwgODUpO1xyXG5cdH1cclxufVxyXG5cclxuLmpvYnMge1xyXG5cdG1heC13aWR0aDogNzAwcHg7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cclxuXHQudGl0bGUtdGFiLWNvbnRlbnQge1xyXG5cdFx0Y29sb3I6ICRMaWdodGVzdFNsYXRlO1xyXG5cdFx0Zm9udC1zaXplOiAyMnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcblx0XHQuY29tcGFueS10YWItY29udGVudCB7XHJcblx0XHRcdGNvbG9yOiAkR3JlZW47XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuam9iLXRpbWUge1xyXG5cdFx0Zm9udC1mYW1pbHk6ICRDb2RlRm9udDtcclxuXHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHQtd2Via2l0LWxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcblx0XHQtbW96LWxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcblx0XHQtbXMtbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuXHRcdGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcblx0XHRjb2xvcjogJExpZ2h0U2xhdGU7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdH1cclxuXHJcblx0LmpvYi1kZXNjcmlwdGlvbiB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cclxuXHRcdCY6YmVmb3JlIHtcclxuXHRcdFx0Y29udGVudDogXCLilrlcIjtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRjb2xvcjogJEdyZWVuO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblx0LmpvYnMge1xyXG5cdFx0LmpvYi1kZXNjcmlwdGlvbiB7XHJcblx0XHRcdHBhZGRpbmc6IDBweDtcclxuXHRcdFx0cGFkZGluZy1sZWZ0OiAzMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHQ6Om5nLWRlZXAgLmpvYnMtdGFicyB7XHJcblx0XHRkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG5cclxuXHRcdC50YWItY29udGVudCB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHJcblx0XHR1bCB7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cdFx0XHRtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6437:
/*!**************************************************************************!*\
  !*** ./src/app/components/home/more-projects/more-projects.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoreprojectsComponent": () => (/* binding */ MoreprojectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);






function MoreprojectsComponent_div_9_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const technology_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](technology_r4);
} }
function MoreprojectsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoreprojectsComponent_div_9_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const project_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.redirect(project_r1["demoLink"], $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9)(2, "div", 10)(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 13)(6, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoreprojectsComponent_div_9_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.analyticsService.sendAnalyticEvent("click_pokemonlist_external_link", "projects", "click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoreprojectsComponent_div_9_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.analyticsService.sendAnalyticEvent("click_pokemonlist_github", "projects", "click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div")(15, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MoreprojectsComponent_div_9_li_16_Template, 3, 1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1["demoLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1["ghLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r1.Description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.Technologies);
} }
class MoreprojectsComponent {
    constructor(router, analyticsService) {
        this.router = router;
        this.analyticsService = analyticsService;
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
    redirect(route, event) {
        const id = event.target.id;
        if (id == "demoLink" || id == "ghLink") {
            return;
        }
        window.open(route, "_blank");
    }
}
MoreprojectsComponent.ɵfac = function MoreprojectsComponent_Factory(t) { return new (t || MoreprojectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
MoreprojectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MoreprojectsComponent, selectors: [["app-more-projects"]], decls: 11, vars: 6, consts: [[1, "section", "more-projects"], [1, "container"], [1, "section-box"], [1, ""], [1, "section-title"], [1, "mt-5"], [1, "row", "p-0"], ["class", "col-12 col-md-6 col-lg-6 col-xl-4 project-col", "data-aos", "fade-up", "data-aos-duration", "1000", 3, "click", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "col-12", "col-md-6", "col-lg-6", "col-xl-4", "project-col", 3, "click"], [1, "more-project-box"], [1, "row", "w-100", "text-left", "m-0", "p-0"], [1, "col-6", "p-0"], ["src", "assets/images/folder.svg", "width", "40"], [1, "col-6", "d-flex", "p-0", "justify-content-end"], ["target", "_blank", 2, "color", "inherit", 3, "href", "click"], ["id", "demoLink", 1, "ml-3", "fas", "fa-external-link-alt"], ["id", "ghLink", 1, "ml-4", "fab", "fa-github"], [1, "other-project-title", "mt-4"], [1, "other-project-description"], [1, "more-projects-skills"], [4, "ngFor", "ngForOf"], [1, "underline"]], template: function MoreprojectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MoreprojectsComponent_div_9_Template, 17, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 2, "OtherProjects.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 4, "OtherProjects.Projects"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 400px;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n  padding: 2rem 1.75rem;\n  height: 100%;\n  border-radius: 3px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  background-color: #112240;\n  cursor: pointer;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]:hover, .more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: #64ffda;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .other-project-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 22px;\n  color: #ccd6f6;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .other-project-description[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #a8b2d1;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .more-projects-skills[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 20px 0 0 0;\n  list-style: none;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .more-projects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8892b0;\n  line-height: 1.75;\n  margin-right: 15px;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n}\n.more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%]   .more-project-box[_ngcontent-%COMP%]   .more-projects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .underline[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n@media (max-width: 1300px) {\n  .more-projects[_ngcontent-%COMP%]   .project-col[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyIsIm1vcmUtcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQcm9mb2xpbyUyMFByb2plY3RcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxtb3JlLXByb2plY3RzXFxtb3JlLXByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDR0M7RUFDQyxhQUFBO0VBQ0EsYUFBQTtBQ0RGO0FER0U7RUFDQyxrREFBQTtFQUVBLDBEQUFBO0VBSUEsYUFBQTtFQUlBLDhCQUFBO0VBSUEsbUJBQUE7RUFHQSxzQkFBQTtFQUlBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLDBEQUFBO0VBQ0EseUJEakNhO0VDa0NiLGVBQUE7QUNESDtBREdHO0VBR0MsMkJBQUE7QUNESjtBREdHO0VBRUMsa0RBQUE7QUNGSjtBREtHO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxjRDNDWTtBRXdDaEI7QURNRztFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNEbkRZO0FFK0NoQjtBRE9HO0VBQ0MsZUFBQTtFQUNBLGNEekRZO0FFb0RoQjtBRFFHO0VBSUMsYUFBQTtFQUlBLHFCQUFBO0VBSUEsWUFBQTtFQUdBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ05KO0FEUUk7RUFDQyxlQUFBO0VBQ0EsY0RuRlc7RUNvRlgsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBGRDlFTTtBRXdFWDtBRE9LO0VBQ0MscUJBQUE7QUNMTjtBRGFBO0VBRUU7SUFDQyxZQUFBO0VDWEQ7QUFDRiIsImZpbGUiOiJtb3JlLXByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuJE5hdnkgICAgICAgICA6ICMwYTE5MmY7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogI2NjZDZmNjtcclxuJFdoaXRlICAgICAgICA6ICNlNmYxZmY7XHJcbiRHcmVlbiAgICAgICAgOiAjNjRmZmRhO1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuXHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcclxuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5tb3JlLXByb2plY3RzIHtcclxuXHQucHJvamVjdC1jb2wge1xyXG5cdFx0cGFkZGluZzogMTBweDtcclxuXHRcdGhlaWdodDogNDAwcHg7XHJcblxyXG5cdFx0Lm1vcmUtcHJvamVjdC1ib3gge1xyXG5cdFx0XHRib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTVweCByZ2JhKDIsIDEyLCAyNywgMC43KTtcclxuXHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG5cdFx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRcdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdFx0XHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0LXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuXHRcdFx0LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdFx0LXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHQtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdFx0XHQtd2Via2l0LWJveC1hbGlnbjogZmxleC1zdGFydDtcclxuXHRcdFx0LW1zLWZsZXgtYWxpZ246IGZsZXgtc3RhcnQ7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHBhZGRpbmc6IDJyZW0gMS43NXJlbTtcclxuXHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuXHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJExpZ2h0TmF2eTtcclxuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cclxuXHRcdFx0Jjpob3ZlciB7XHJcblx0XHRcdFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcblx0XHRcdFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Jjpob3ZlcixcclxuXHRcdFx0Jjpmb2N1cyB7XHJcblx0XHRcdFx0Ym94LXNoYWRvdzogMCAyMHB4IDMwcHggLTE1cHggcmdiYSgyLCAxMiwgMjcsIDAuNyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN2ZyB7XHJcblx0XHRcdFx0d2lkdGg6IDQwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0XHRcdGNvbG9yOiAkR3JlZW47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5vdGhlci1wcm9qZWN0LXRpdGxlIHtcclxuXHRcdFx0XHRtYXJnaW46IDAgMCAxMHB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMjJweDtcclxuXHRcdFx0XHRjb2xvcjogJExpZ2h0ZXN0U2xhdGU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5vdGhlci1wcm9qZWN0LWRlc2NyaXB0aW9uIHtcclxuXHRcdFx0XHRmb250LXNpemU6IDE3cHg7XHJcblx0XHRcdFx0Y29sb3I6ICRMaWdodFNsYXRlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQubW9yZS1wcm9qZWN0cy1za2lsbHMge1xyXG5cdFx0XHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0XHRcdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRcdFx0XHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cdFx0XHRcdC13ZWJraXQtYm94LWFsaWduOiBmbGV4LWVuZDtcclxuXHRcdFx0XHQtbXMtZmxleC1hbGlnbjogZmxleC1lbmQ7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cdFx0XHRcdC13ZWJraXQtYm94LWZsZXg6IDE7XHJcblx0XHRcdFx0LXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcblx0XHRcdFx0LW1zLWZsZXgtcG9zaXRpdmU6IDE7XHJcblx0XHRcdFx0ZmxleC1ncm93OiAxO1xyXG5cdFx0XHRcdC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0XHRcdC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdFx0bWFyZ2luOiAyMHB4IDAgMCAwO1xyXG5cdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG5cdFx0XHRcdGxpIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdFx0XHRcdGNvbG9yOiAkU2xhdGU7XHJcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS43NTtcclxuXHRcdFx0XHRcdG1hcmdpbi1yaWdodDogMTVweDtcclxuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAkQ29kZUZvbnQ7XHJcblx0XHRcdFx0XHQudW5kZXJsaW5lIHtcclxuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDMuNXB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG5cdC5tb3JlLXByb2plY3RzIHtcclxuXHRcdC5wcm9qZWN0LWNvbCB7XHJcblx0XHRcdGhlaWdodDogYXV0bztcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuLm1vcmUtcHJvamVjdHMgLnByb2plY3QtY29sIHtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cbi5tb3JlLXByb2plY3RzIC5wcm9qZWN0LWNvbCAubW9yZS1wcm9qZWN0LWJveCB7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC0xNXB4IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIC13ZWJraXQtYm94LWFsaWduOiBmbGV4LXN0YXJ0O1xuICAtbXMtZmxleC1hbGlnbjogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMnJlbSAxLjc1cmVtO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEyMjQwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubW9yZS1wcm9qZWN0cyAucHJvamVjdC1jb2wgLm1vcmUtcHJvamVjdC1ib3g6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuLm1vcmUtcHJvamVjdHMgLnByb2plY3QtY29sIC5tb3JlLXByb2plY3QtYm94OmhvdmVyLCAubW9yZS1wcm9qZWN0cyAucHJvamVjdC1jb2wgLm1vcmUtcHJvamVjdC1ib3g6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDIwcHggMzBweCAtMTVweCByZ2JhKDIsIDEyLCAyNywgMC43KTtcbn1cbi5tb3JlLXByb2plY3RzIC5wcm9qZWN0LWNvbCAubW9yZS1wcm9qZWN0LWJveCBzdmcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogIzY0ZmZkYTtcbn1cbi5tb3JlLXByb2plY3RzIC5wcm9qZWN0LWNvbCAubW9yZS1wcm9qZWN0LWJveCAub3RoZXItcHJvamVjdC10aXRsZSB7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNjY2Q2ZjY7XG59XG4ubW9yZS1wcm9qZWN0cyAucHJvamVjdC1jb2wgLm1vcmUtcHJvamVjdC1ib3ggLm90aGVyLXByb2plY3QtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjYThiMmQxO1xufVxuLm1vcmUtcHJvamVjdHMgLnByb2plY3QtY29sIC5tb3JlLXByb2plY3QtYm94IC5tb3JlLXByb2plY3RzLXNraWxscyB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGZsZXgtZW5kO1xuICAtbXMtZmxleC1hbGlnbjogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICBmbGV4LWdyb3c6IDE7XG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5tb3JlLXByb2plY3RzIC5wcm9qZWN0LWNvbCAubW9yZS1wcm9qZWN0LWJveCAubW9yZS1wcm9qZWN0cy1za2lsbHMgbGkge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODg5MmIwO1xuICBsaW5lLWhlaWdodDogMS43NTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmb250LWZhbWlseTogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XG59XG4ubW9yZS1wcm9qZWN0cyAucHJvamVjdC1jb2wgLm1vcmUtcHJvamVjdC1ib3ggLm1vcmUtcHJvamVjdHMtc2tpbGxzIGxpIC51bmRlcmxpbmUge1xuICBwYWRkaW5nLWJvdHRvbTogMy41cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgLm1vcmUtcHJvamVjdHMgLnByb2plY3QtY29sIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ 2711:
/*!****************************************************************!*\
  !*** ./src/app/components/home/projects/projects.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectsComponent": () => (/* binding */ projectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7297);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);





const _c0 = ["imgContainer"];
function projectsComponent_div_9_owl_carousel_o_1_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.Title);
} }
function projectsComponent_div_9_owl_carousel_o_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, projectsComponent_div_9_owl_carousel_o_1_ng_container_1_ng_template_1_Template, 3, 2, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const project_r1 = ctx_r16.$implicit;
    const i_r2 = ctx_r16.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", project_r1.Title + ctx_r10.slide + i_r2);
} }
function projectsComponent_div_9_owl_carousel_o_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-carousel-o", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, projectsComponent_div_9_owl_carousel_o_1_ng_container_1_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r3.customOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.imgs);
} }
function projectsComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r1.imgs[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.imgs[0]);
} }
function projectsComponent_div_9_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 30)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const technology_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](technology_r19);
} }
function projectsComponent_div_9_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1["ghLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function projectsComponent_div_9_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", project_r1["demoLink"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function projectsComponent_div_9_owl_carousel_o_17_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.Title);
} }
function projectsComponent_div_9_owl_carousel_o_17_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, projectsComponent_div_9_owl_carousel_o_17_ng_container_1_ng_template_1_Template, 2, 2, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const project_r1 = ctx_r27.$implicit;
    const i_r2 = ctx_r27.index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", project_r1.Title + ctx_r22.slide + i_r2);
} }
function projectsComponent_div_9_owl_carousel_o_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-carousel-o", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, projectsComponent_div_9_owl_carousel_o_17_ng_container_1_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r8.customOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.imgs);
} }
function projectsComponent_div_9_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", project_r1.imgs[0], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", project_r1.imgs[0]);
} }
function projectsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, projectsComponent_div_9_owl_carousel_o_1_Template, 2, 2, "owl-carousel-o", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, projectsComponent_div_9_div_2_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10)(4, "div", 11)(5, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function projectsComponent_div_9_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.debug(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, projectsComponent_div_9_li_13_Template, 3, 1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, projectsComponent_div_9_a_15_Template, 2, 1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, projectsComponent_div_9_a_16_Template, 2, 1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, projectsComponent_div_9_owl_carousel_o_17_Template, 2, 2, "owl-carousel-o", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, projectsComponent_div_9_div_18_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 % 2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 % 2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("background-image: url('", project_r1.img, "');");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("project-info-right", i_r2 % 2 == 0)("project-info-left", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-right", i_r2 % 2 == 0)("text-left", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 33, "FeatureProjects.Label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-right", i_r2 % 2 == 0)("text-left", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r1.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", project_r1.Description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("justify-content-end", i_r2 % 2 == 0)("justify-content-start", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", project_r1.Technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-right", i_r2 % 2 == 0)("text-left", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1["ghLink"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1["demoLink"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 % 2 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 % 2 != 0);
} }
class projectsComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            navSpeed: 700,
            items: 1,
            autoplay: true,
            autoplayTimeout: 3000,
        };
    }
    ngOnInit() { }
    debug() {
        this.imgContainer.nativeElement.scroll({
            top: this.imgContainer.nativeElement.scrollHeight,
            left: 0,
            behavior: "smooth",
        });
    }
}
projectsComponent.ɵfac = function projectsComponent_Factory(t) { return new (t || projectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
projectsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: projectsComponent, selectors: [["app-projects"]], viewQuery: function projectsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imgContainer = _t.first);
    } }, decls: 12, vars: 6, consts: [["id", "projects", 1, "section", "projects"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "section-title"], [1, "n-section-title"], ["class", "d-flex project-container", "data-aos", "fade-up", "data-aos-duration", "1000", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "d-flex", "project-container"], ["class", "owl-carousel-o", 3, "options", 4, "ngIf"], ["class", "img-feature-project-container", "data-aos", "fade-up", "data-aos-duration", "1000", 4, "ngIf"], [1, "h-100"], [1, "project-box"], [1, "feature-project"], [1, "project-name"], [1, "project-description-box", 3, "click"], [1, "mb-0", 3, "innerHTML"], [1, "project-skills"], ["class", "ml-3", 4, "ngFor", "ngForOf"], [1, "project-links"], ["style", "color: inherit", "target", "_blank", 3, "href", 4, "ngIf"], [1, "owl-carousel-o", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", 3, "id"], [1, "img-container"], ["imgContainer", ""], [1, "img-feature-project", "rounded", 3, "src", "alt"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "img-feature-project-container"], [1, "img-feature-project-box"], [1, "img-container", 2, "width", "auto"], ["width", "600px", 1, "img-feature-project", "rounded", 3, "src", "alt"], [1, "ml-3"], [1, "underline", "technology"], ["target", "_blank", 2, "color", "inherit", 3, "href"], [1, "ml-3", "fab", "fa-github"], [1, "ml-3", "fas", "fa-external-link-alt"]], template: function projectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "03.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, projectsComponent_div_9_Template, 19, 35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 2, "FeatureProjects.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 4, "FeatureProjects.Projects"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselSlideDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%] {\n  height: 450px;\n  margin: 100px 0;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-right: -57px;\n  margin-left: 0px;\n  display: table;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-left: -57px;\n  margin-right: 0px;\n  display: table;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .feature-project[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n  color: #64ffda;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  margin-top: 10px;\n  padding-top: 0;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-name[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin: 0 0 20px;\n  color: #ccd6f6;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-description-box[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  position: relative;\n  z-index: 2;\n  padding: 25px;\n  background-color: #112240;\n  color: #a8b2d1;\n  font-size: 18px;\n  border-radius: 3px;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-skills[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 25px 0 10px;\n  list-style: none;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 0;\n  font-family: SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, Monospace;\n  font-size: 13px;\n  color: #8892b0;\n  margin-bottom: 7px;\n  white-space: nowrap;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-links[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%]   .project-links[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.owl-carousel-o[_ngcontent-%COMP%] {\n  width: 600px;\n}\n.img-feature-project-container[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 768px) and (max-width: 1300px) {\n  .owl-carousel-o[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .img-feature-project-container[_ngcontent-%COMP%] {\n    width: 50%;\n    display: table !important;\n    height: -webkit-fill-available;\n  }\n  .img-feature-project-container[_ngcontent-%COMP%]   .img-feature-project-box[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: middle;\n  }\n  .img-feature-project-container[_ngcontent-%COMP%]   .img-feature-project[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .project-info-right[_ngcontent-%COMP%], .project-info-left[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media (min-width: 768px) {\n  .project-info-right[_ngcontent-%COMP%], .project-info-left[_ngcontent-%COMP%] {\n    background-image: none !important;\n  }\n}\n@media (max-width: 768px) {\n  .owl-carousel-o[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%] {\n    height: 100% !important;\n    margin: 33px 0 !important;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-description-box[_ngcontent-%COMP%] {\n    padding: 0px !important;\n    box-shadow: none !important;\n    position: relative;\n    z-index: 2;\n    padding: 25px;\n    background-color: transparent !important;\n    color: #a8b2d1;\n    font-size: 18px;\n    border-radius: 3px;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%] {\n    display: block !important;\n    margin: 0px !important;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    border-radius: 3px;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .projects[_ngcontent-%COMP%]   .project-container[_ngcontent-%COMP%]   .img-feature-project-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .projects[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n  .projects[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n  .projects[_ngcontent-%COMP%]   .justify-content-end[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  .projects[_ngcontent-%COMP%]   .justify-content-start[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  .projects[_ngcontent-%COMP%]   .project-info-right[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%], .projects[_ngcontent-%COMP%]   .project-info-left[_ngcontent-%COMP%]   .project-box[_ngcontent-%COMP%] {\n    padding: 20px;\n    background: #0a192fe3;\n  }\n}\n  .owl-theme .owl-dots .owl-dot.active span,   .owl-theme .owl-dots .owl-dot:hover span {\n  background-color: white !important;\n}\n  .owl-theme .owl-dots .owl-dot span {\n  background: #ffffff33;\n}\n.img-container[_ngcontent-%COMP%] {\n  width: 600px;\n  max-height: 420px;\n  overflow: auto;\n  border-radius: 3px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #8892b0;\n  border-radius: 3px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #64ffda;\n  border-radius: 3px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #64ffda;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXMuc2NzcyIsInByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUHJvZm9saW8lMjBQcm9qZWN0XFxzcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxccHJvamVjdHNcXHByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDRUM7RUFDQyxhQUFBO0VBQ0EsZUFBQTtBQ0FGO0FEQ0U7RUFDQyxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDSDtBRENFO0VBQ0MsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ0g7QURDRTtFQUNDLG1CQUFBO0VBQ0Esc0JBQUE7QUNDSDtBREFHO0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0RkWTtFQ2VaLDBGRFhPO0VDWVAsZ0JBQUE7RUFDQSxjQUFBO0FDRUo7QURBRztFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNEeEJZO0FFMEJoQjtBREFHO0VBQ0Msa0RBQUE7RUFFQSwwREFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx5QkRyQ1k7RUNzQ1osY0RuQ1k7RUNvQ1osZUFBQTtFQUNBLGtCQUFBO0FDRUo7QURBRztFQUNDLGtCQUFBO0VBQ0EsVUFBQTtFQUlBLGFBQUE7RUFHQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBRERJO0VBQ0MsZUFBQTtFQUNBLDBGRC9DTTtFQ2dETixlQUFBO0VBQ0EsY0R6RFc7RUMwRFgsa0JBQUE7RUFDQSxtQkFBQTtBQ0dMO0FERks7RUFDQyxtQkFBQTtBQ0lOO0FEQUc7RUFDQyxnQkFBQTtBQ0VKO0FEREk7RUFDQyxlQUFBO0FDR0w7QURJQTtFQUNDLFlBQUE7QUNERDtBREdBO0VBQ0MsYUFBQTtBQ0FEO0FER0E7RUFDQztJQUNDLGFBQUE7RUNBQTs7RURFRDtJQUNDLFVBQUE7SUFDQSx5QkFBQTtJQUNBLDhCQUFBO0VDQ0E7RURBQTtJQUNDLG1CQUFBO0lBQ0Esc0JBQUE7RUNFRDtFREFBO0lBQ0MsV0FBQTtFQ0VEOztFRENEOztJQUVDLFVBQUE7RUNFQTtBQUNGO0FEQ0E7RUFDQzs7SUFFQyxpQ0FBQTtFQ0NBO0FBQ0Y7QURFQTtFQUNDO0lBQ0MsYUFBQTtFQ0FBOztFREdBO0lBQ0MsdUJBQUE7SUFDQSx5QkFBQTtFQ0FEO0VEQ0M7SUFDQyxXQUFBO0VDQ0Y7RURDQztJQUNDLFdBQUE7RUNDRjtFRENDO0lBQ0MsdUJBQUE7SUFDQSwyQkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7SUFDQSx3Q0FBQTtJQUNBLGNEbklZO0lDb0laLGVBQUE7SUFDQSxrQkFBQTtFQ0NGO0VEQ0M7O0lBRUMseUJBQUE7SUFDQSxzQkFBQTtJQUNBLHNCQUFBO0lBQ0EsMkJBQUE7SUFDQSw0QkFBQTtJQUNBLGtCQUFBO0VDQ0Y7RURBRTs7SUFDQyxjQUFBO0VDR0g7RURBQztJQUNDLGFBQUE7RUNFRjtFRENBOztJQUVDLFlBQUE7RUNDRDtFRENBOztJQUVDLDZCQUFBO0VDQ0Q7RURDQTtJQUNDLGtDQUFBO0VDQ0Q7RURDQTtJQUNDLGtDQUFBO0VDQ0Q7RURFQTs7SUFFQyxhQUFBO0lBQ0EscUJBQUE7RUNBRDtBQUNGO0FESUE7O0VBRUMsa0NBQUE7QUNGRDtBREtBO0VBQ0MscUJBQUE7QUNGRDtBREtBO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDRkQ7QURLQSxVQUFBO0FBRUE7RUFDQyxVQUFBO0FDSEQ7QURNQSxVQUFBO0FBRUE7RUFDQyxpQ0FBQTtFQUNBLGtCQUFBO0FDSkQ7QURPQSxXQUFBO0FBRUE7RUFDQyxtQkQzTWU7RUM0TWYsa0JBQUE7QUNMRDtBRFFBLG9CQUFBO0FBRUE7RUFDQyxtQkRsTmU7QUU0TWhCIiwiZmlsZSI6InByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuJE5hdnkgICAgICAgICA6ICMwYTE5MmY7XHJcbiRMaWdodE5hdnkgICAgOiAjMTEyMjQwO1xyXG4kTGlnaHRlc3ROYXZ5IDogIzMwM0M1NTtcclxuJFNsYXRlICAgICAgICA6ICM4ODkyYjA7XHJcbiRMaWdodFNsYXRlICAgOiAjYThiMmQxO1xyXG4kTGlnaHRlc3RTbGF0ZTogI2NjZDZmNjtcclxuJFdoaXRlICAgICAgICA6ICNlNmYxZmY7XHJcbiRHcmVlbiAgICAgICAgOiAjNjRmZmRhO1xyXG4kR3JlZW5PcGFjaXR5IDogcmdiYSgxMDAsMjU1LDIxOCwwLjA3KTtcclxuXHJcbiRNYWluRm9udDogQ2FsaWJyZSxTYW4gRnJhbmNpc2NvLFNGIFBybyBUZXh0LC1hcHBsZS1zeXN0ZW0sc3lzdGVtLXVpLEJsaW5rTWFjU3lzdGVtRm9udCxSb2JvdG8sSGVsdmV0aWNhIE5ldWUsU2Vnb2UgVUksQXJpYWwsc2Fucy1zZXJpZjtcclxuJENvZGVGb250OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcclxuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuLnByb2plY3RzIHtcclxuXHQucHJvamVjdC1jb250YWluZXIge1xyXG5cdFx0aGVpZ2h0OiA0NTBweDtcclxuXHRcdG1hcmdpbjogMTAwcHggMDtcclxuXHRcdC5wcm9qZWN0LWluZm8tbGVmdCB7XHJcblx0XHRcdHdpZHRoOiA1MCU7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogLTU3cHg7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAwcHg7XHJcblx0XHRcdGRpc3BsYXk6IHRhYmxlO1xyXG5cdFx0fVxyXG5cdFx0LnByb2plY3QtaW5mby1yaWdodCB7XHJcblx0XHRcdHdpZHRoOiA1MCU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAtNTdweDtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAwcHg7XHJcblx0XHRcdGRpc3BsYXk6IHRhYmxlO1xyXG5cdFx0fVxyXG5cdFx0LnByb2plY3QtYm94IHtcclxuXHRcdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcclxuXHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRcdFx0LmZlYXR1cmUtcHJvamVjdCB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRcdFx0Y29sb3I6ICRHcmVlbjtcclxuXHRcdFx0XHRmb250LWZhbWlseTogJENvZGVGb250O1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0XHRcdFx0cGFkZGluZy10b3A6IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0LnByb2plY3QtbmFtZSB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAyOHB4O1xyXG5cdFx0XHRcdG1hcmdpbjogMCAwIDIwcHg7XHJcblx0XHRcdFx0Y29sb3I6ICRMaWdodGVzdFNsYXRlO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5wcm9qZWN0LWRlc2NyaXB0aW9uLWJveCB7XHJcblx0XHRcdFx0Ym94LXNoYWRvdzogMCAxMHB4IDMwcHggLTE1cHggcmdiYSgyLCAxMiwgMjcsIDAuNyk7XHJcblx0XHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG5cdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdHotaW5kZXg6IDI7XHJcblx0XHRcdFx0cGFkZGluZzogMjVweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkTGlnaHROYXZ5O1xyXG5cdFx0XHRcdGNvbG9yOiAkTGlnaHRTbGF0ZTtcclxuXHRcdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdFx0XHR9XHJcblx0XHRcdC5wcm9qZWN0LXNraWxscyB7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdHotaW5kZXg6IDI7XHJcblx0XHRcdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHRcdFx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdFx0XHRcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0LXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcclxuXHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0XHRtYXJnaW46IDI1cHggMCAxMHB4O1xyXG5cdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0XHRcdFx0bGkge1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAwO1xyXG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICRDb2RlRm9udDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdFx0XHRcdGNvbG9yOiAkU2xhdGU7XHJcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiA3cHg7XHJcblx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0XHRcdFx0LnRlY2hub2xvZ3kge1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQucHJvamVjdC1saW5rcyB7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRcdFx0XHRpIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMjJweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5vd2wtY2Fyb3VzZWwtbyB7XHJcblx0d2lkdGg6IDYwMHB4O1xyXG59XHJcbi5pbWctZmVhdHVyZS1wcm9qZWN0LWNvbnRhaW5lciB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcblx0Lm93bC1jYXJvdXNlbC1vIHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cdC5pbWctZmVhdHVyZS1wcm9qZWN0LWNvbnRhaW5lciB7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdFx0ZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcclxuXHRcdGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuXHRcdC5pbWctZmVhdHVyZS1wcm9qZWN0LWJveCB7XHJcblx0XHRcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0XHR9XHJcblx0XHQuaW1nLWZlYXR1cmUtcHJvamVjdCB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQucHJvamVjdC1pbmZvLXJpZ2h0LFxyXG5cdC5wcm9qZWN0LWluZm8tbGVmdCB7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcblx0LnByb2plY3QtaW5mby1yaWdodCxcclxuXHQucHJvamVjdC1pbmZvLWxlZnQge1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblx0Lm93bC1jYXJvdXNlbC1vIHtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cdC5wcm9qZWN0cyB7XHJcblx0XHQucHJvamVjdC1jb250YWluZXIge1xyXG5cdFx0XHRoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuXHRcdFx0bWFyZ2luOiAzM3B4IDAgIWltcG9ydGFudDtcclxuXHRcdFx0LnByb2plY3QtaW5mby1sZWZ0IHtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0fVxyXG5cdFx0XHQucHJvamVjdC1pbmZvLXJpZ2h0IHtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0fVxyXG5cdFx0XHQucHJvamVjdC1kZXNjcmlwdGlvbi1ib3gge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0ei1pbmRleDogMjtcclxuXHRcdFx0XHRwYWRkaW5nOiAyNXB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0Y29sb3I6ICRMaWdodFNsYXRlO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0LnByb2plY3QtaW5mby1yaWdodCxcclxuXHRcdFx0LnByb2plY3QtaW5mby1sZWZ0IHtcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0XHRcdFx0LnByb2plY3QtYm94IHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQuaW1nLWZlYXR1cmUtcHJvamVjdC1jb250YWluZXIge1xyXG5cdFx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5wcm9qZWN0LWluZm8tcmlnaHQsXHJcblx0XHQucHJvamVjdC1pbmZvLWxlZnQge1xyXG5cdFx0XHRwYWRkaW5nOiAwcHg7XHJcblx0XHR9XHJcblx0XHQudGV4dC1yaWdodCxcclxuXHRcdC50ZXh0LWxlZnQge1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHRcdC5qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHRcdC5qdXN0aWZ5LWNvbnRlbnQtc3RhcnQge1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5wcm9qZWN0LWluZm8tcmlnaHQgLnByb2plY3QtYm94LFxyXG5cdFx0LnByb2plY3QtaW5mby1sZWZ0IC5wcm9qZWN0LWJveCB7XHJcblx0XHRcdHBhZGRpbmc6IDIwcHg7XHJcblx0XHRcdGJhY2tncm91bmQ6ICMwYTE5MmZlMztcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdC5hY3RpdmUgc3BhbixcclxuOjpuZy1kZWVwIC5vd2wtdGhlbWUgLm93bC1kb3RzIC5vd2wtZG90OmhvdmVyIHNwYW4ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdCBzcGFuIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmZmZmMzM7XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyIHtcclxuXHR3aWR0aDogNjAwcHg7XHJcblx0bWF4LWhlaWdodDogNDIwcHg7XHJcblx0b3ZlcmZsb3c6IGF1dG87XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4vKiB3aWR0aCAqL1xyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcblx0d2lkdGg6IDdweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggIzg4OTJiMDtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcblx0YmFja2dyb3VuZDogJEdyZWVuO1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAkR3JlZW47XHJcbn1cclxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogNDUwcHg7XG4gIG1hcmdpbjogMTAwcHggMDtcbn1cbi5wcm9qZWN0cyAucHJvamVjdC1jb250YWluZXIgLnByb2plY3QtaW5mby1sZWZ0IHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAtNTdweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgZGlzcGxheTogdGFibGU7XG59XG4ucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyIC5wcm9qZWN0LWluZm8tcmlnaHQge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTU3cHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi5wcm9qZWN0cyAucHJvamVjdC1jb250YWluZXIgLnByb2plY3QtYm94IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5wcm9qZWN0cyAucHJvamVjdC1jb250YWluZXIgLnByb2plY3QtYm94IC5mZWF0dXJlLXByb2plY3Qge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjNjRmZmRhO1xuICBmb250LWZhbWlseTogU0YgTW9ubywgRmlyYSBDb2RlLCBGaXJhIE1vbm8sIFJvYm90byBNb25vLCBMdWNpZGEgQ29uc29sZSwgTW9uYWNvLCBNb25vc3BhY2U7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lciAucHJvamVjdC1ib3ggLnByb2plY3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbWFyZ2luOiAwIDAgMjBweDtcbiAgY29sb3I6ICNjY2Q2ZjY7XG59XG4ucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyIC5wcm9qZWN0LWJveCAucHJvamVjdC1kZXNjcmlwdGlvbi1ib3gge1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTVweCByZ2JhKDIsIDEyLCAyNywgMC43KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTIyNDA7XG4gIGNvbG9yOiAjYThiMmQxO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5wcm9qZWN0cyAucHJvamVjdC1jb250YWluZXIgLnByb2plY3QtYm94IC5wcm9qZWN0LXNraWxscyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMjVweCAwIDEwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyIC5wcm9qZWN0LWJveCAucHJvamVjdC1za2lsbHMgbGkge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIGZvbnQtZmFtaWx5OiBTRiBNb25vLCBGaXJhIENvZGUsIEZpcmEgTW9ubywgUm9ib3RvIE1vbm8sIEx1Y2lkYSBDb25zb2xlLCBNb25hY28sIE1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzg4OTJiMDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lciAucHJvamVjdC1ib3ggLnByb2plY3Qtc2tpbGxzIGxpIC50ZWNobm9sb2d5IHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5wcm9qZWN0cyAucHJvamVjdC1jb250YWluZXIgLnByb2plY3QtYm94IC5wcm9qZWN0LWxpbmtzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5wcm9qZWN0cyAucHJvamVjdC1jb250YWluZXIgLnByb2plY3QtYm94IC5wcm9qZWN0LWxpbmtzIGkge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5vd2wtY2Fyb3VzZWwtbyB7XG4gIHdpZHRoOiA2MDBweDtcbn1cblxuLmltZy1mZWF0dXJlLXByb2plY3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIC5vd2wtY2Fyb3VzZWwtbyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5pbWctZmVhdHVyZS1wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgfVxuICAuaW1nLWZlYXR1cmUtcHJvamVjdC1jb250YWluZXIgLmltZy1mZWF0dXJlLXByb2plY3QtYm94IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmltZy1mZWF0dXJlLXByb2plY3QtY29udGFpbmVyIC5pbWctZmVhdHVyZS1wcm9qZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wcm9qZWN0LWluZm8tcmlnaHQsXG4ucHJvamVjdC1pbmZvLWxlZnQge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAucHJvamVjdC1pbmZvLXJpZ2h0LFxuLnByb2plY3QtaW5mby1sZWZ0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAub3dsLWNhcm91c2VsLW8ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDMzcHggMCAhaW1wb3J0YW50O1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdC1jb250YWluZXIgLnByb2plY3QtaW5mby1sZWZ0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyIC5wcm9qZWN0LWluZm8tcmlnaHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdC1jb250YWluZXIgLnByb2plY3QtZGVzY3JpcHRpb24tYm94IHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjYThiMmQxO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIH1cbiAgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lciAucHJvamVjdC1pbmZvLXJpZ2h0LFxuLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lciAucHJvamVjdC1pbmZvLWxlZnQge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyIC5wcm9qZWN0LWluZm8tcmlnaHQgLnByb2plY3QtYm94LFxuLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lciAucHJvamVjdC1pbmZvLWxlZnQgLnByb2plY3QtYm94IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyIC5pbWctZmVhdHVyZS1wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucHJvamVjdHMgLnByb2plY3QtaW5mby1yaWdodCxcbi5wcm9qZWN0cyAucHJvamVjdC1pbmZvLWxlZnQge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICAucHJvamVjdHMgLnRleHQtcmlnaHQsXG4ucHJvamVjdHMgLnRleHQtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByb2plY3RzIC5qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5wcm9qZWN0cyAuanVzdGlmeS1jb250ZW50LXN0YXJ0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIC5wcm9qZWN0cyAucHJvamVjdC1pbmZvLXJpZ2h0IC5wcm9qZWN0LWJveCxcbi5wcm9qZWN0cyAucHJvamVjdC1pbmZvLWxlZnQgLnByb2plY3QtYm94IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMwYTE5MmZlMztcbiAgfVxufVxuOjpuZy1kZWVwIC5vd2wtdGhlbWUgLm93bC1kb3RzIC5vd2wtZG90LmFjdGl2ZSBzcGFuLFxuOjpuZy1kZWVwIC5vd2wtdGhlbWUgLm93bC1kb3RzIC5vd2wtZG90OmhvdmVyIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm93bC10aGVtZSAub3dsLWRvdHMgLm93bC1kb3Qgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYzMztcbn1cblxuLmltZy1jb250YWluZXIge1xuICB3aWR0aDogNjAwcHg7XG4gIG1heC1oZWlnaHQ6IDQyMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4vKiB3aWR0aCAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA3cHg7XG59XG5cbi8qIFRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAjODg5MmIwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM2NGZmZGE7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzY0ZmZkYTtcbn0iXX0= */"] });


/***/ }),

/***/ 4407:
/*!**********************************************************************!*\
  !*** ./src/app/components/home/testimonial/testimonial.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestimonialComponent": () => (/* binding */ TestimonialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 3325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);




function TestimonialComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "p", 8)(3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const testimonial_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", testimonial_r1.Comment, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", testimonial_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" -", testimonial_r1.Name, ", ", testimonial_r1.Position, " of ", testimonial_r1.Company, " ");
} }
class TestimonialComponent {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    ngOnInit() { }
}
TestimonialComponent.ɵfac = function TestimonialComponent_Factory(t) { return new (t || TestimonialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
TestimonialComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TestimonialComponent, selectors: [["app-testimonial"]], decls: 11, vars: 6, consts: [["id", "testimonial", 1, "section", "testimonials"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "about-title", "mb-5"], [1, "e-font", "section-title"], [1, "code-font", "n-section-title"], [4, "ngFor", "ngForOf"], [1, "testimonial-content"], ["data-aos", "fade-up", "data-aos-duration", "1000", 3, "innerHTML"], ["alt", "", 1, "testimonial-photo", 3, "src"]], template: function TestimonialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "04.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TestimonialComponent_ng_container_9_Template, 6, 5, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 2, "Testimonial.Title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 4, "Testimonial.Items"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: [".testimonials.section[_ngcontent-%COMP%]   .section-box[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n}\n\n.testimonial-photo[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  margin-bottom: 20px;\n}\n\n.testimonial-content[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RpbW9uaWFsLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUHJvZm9saW8lMjBQcm9qZWN0XFxzcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcdGVzdGltb25pYWxcXHRlc3RpbW9uaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msb0JBQUE7QUNDRDs7QURFQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NEOztBREVBO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtBQ0NEIiwiZmlsZSI6InRlc3RpbW9uaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc3RpbW9uaWFscy5zZWN0aW9uIC5zZWN0aW9uLWJveCB7XHJcblx0cGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbC1waG90byB7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdHdpZHRoOiAxMDBweDtcclxuXHRoZWlnaHQ6IDEwMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbC1jb250ZW50IHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4iLCIudGVzdGltb25pYWxzLnNlY3Rpb24gLnNlY3Rpb24tYm94IHtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi50ZXN0aW1vbmlhbC1waG90byB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGVzdGltb25pYWwtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn0iXX0= */"] });


/***/ }),

/***/ 3325:
/*!*********************************************************!*\
  !*** ./src/app/services/analytics/analytics.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsService": () => (/* binding */ AnalyticsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-google-analytics */ 5943);


class AnalyticsService {
    constructor($gaService) {
        this.$gaService = $gaService;
    }
    sendAnalyticEvent(action, category, label) {
        this.$gaService.event(action, category, label);
    }
    sendAnalyticPageView(path, title) {
        this.$gaService.pageView(path, title);
    }
}
AnalyticsService.ɵfac = function AnalyticsService_Factory(t) { return new (t || AnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_1__.GoogleAnalyticsService)); };
AnalyticsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AnalyticsService, factory: AnalyticsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5307:
/*!*******************************************************!*\
  !*** ./src/app/services/language/language.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



class LanguageService {
    constructor(translateService, location) {
        this.translateService = translateService;
        this.location = location;
    }
    initLanguage() {
        this.translateService.addLangs(["en", "es"]);
        let language = navigator.language || navigator.userLanguage;
        language = "en";
        this.translateService.setDefaultLang(language);
        // Change the URL without navigate:
        this.location.go(language);
        this.language = language;
    }
    changeLanguage(language) {
        this.translateService.setDefaultLang(language);
        this.location.go(language);
        this.language = language;
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location)); };
LanguageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    trackAnalyticID: "G-XE9X54XCMH"
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

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map