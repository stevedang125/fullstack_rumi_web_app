webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"position: relative; padding-top: 80px;\">\r\n  <!-- Introduction Row -->\r\n  <h1>About Us\r\n    <small>It's Nice to Meet You!</small>\r\n  </h1>\r\n  <p>Rumi is an app that's all about convenience. It blah blah blah...</p>\r\n\r\n  <!-- Team Members Row -->\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <h2 class=\"my-4\">Rumi Team</h2>\r\n    </div>\r\n    <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\r\n      <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"http://placehold.it/200x200\" alt=\"\">\r\n      <h3>Dita Dewindita\r\n        <small>Job Title</small>\r\n      </h3>\r\n      <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\r\n    </div>\r\n    <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\r\n      <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"../../assets/20180421_013804.jpg\" alt=\"Steve's Pic\">\r\n      <h3>Steve Dang</h3>\r\n      <h4>Job Title: Small Fry</h4>\r\n      \r\n      <p>n.[proh-gram-er] an organism that turns caffeine and pizza into software! Nailed it!</p>\r\n      <p>Full stack website and Mobile App.</p>\r\n    </div>\r\n    <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\r\n      <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"http://placehold.it/200x200\" alt=\"\">\r\n      <h3>Abe Isleem\r\n        <small>Job Title</small>\r\n      </h3>\r\n      <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\r\n    </div>\r\n    <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\r\n      <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"http://placehold.it/200x200\" alt=\"\">\r\n      <h3>Alana Arjune\r\n        <small>Job Title</small>\r\n      </h3>\r\n      <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\r\n    </div>\r\n    <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\r\n      <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"http://placehold.it/200x200\" alt=\"\">\r\n      <h3>John Albury\r\n        <small>Job Title</small>\r\n      </h3>\r\n      <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\r\n    </div>\r\n    <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\r\n      <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"http://placehold.it/200x200\" alt=\"\">\r\n      <h3>Subhash Naidu\r\n        <small>Job Title</small>\r\n      </h3>\r\n      <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\r\n    </div>\r\n    <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\r\n      <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"http://placehold.it/200x200\" alt=\"\">\r\n      <h3>Joshua Sylvestre\r\n        <small>Job Title</small>\r\n      </h3>\r\n      <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent(authService, toastr, vcr) {
        this.authService = authService;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Nav bar -->\r\n<!-- <div style=\"position:sticky;top:0;\" > -->\r\n<app-navbar></app-navbar>\r\n<!-- </div> -->\r\n<!-- Sidebar -->\r\n<app-sidebar></app-sidebar>\r\n    <!-- <div class=\"w3-container\"> -->\r\n<router-outlet></router-outlet>\r\n  <!-- </div> -->\r\n  <!-- <router-outlet></router-outlet> -->\r\n\r\n<!-- <div *ngIf=\"!authService.isLoggedIn()\">\r\n    <router-outlet></router-outlet>\r\n</div> -->\r\n\r\n<!-- Other routes -->\r\n<!-- <router-outlet></router-outlet> -->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    // constructor() { }
    function AppComponent(authService, toastr, vcr) {
        this.authService = authService;
        this.toastr = toastr;
        this.title = 'app';
        this.toastr.setRootViewContainerRef(vcr);
    }
    // ========== Toastr Messages =======================================
    AppComponent.prototype.showSuccess = function (msg) {
        this.toastr.info(msg, 'Success!');
    };
    AppComponent.prototype.onLogoutClick = function () {
        this.showSuccess('You have logged out!');
        this.authService.logout();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__friends_friends_component__ = __webpack_require__("./src/app/friends/friends.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__transactions_transactions_component__ = __webpack_require__("./src/app/transactions/transactions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__receipts_receipts_component__ = __webpack_require__("./src/app/receipts/receipts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__setting_setting_component__ = __webpack_require__("./src/app/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_filter_pipe__ = __webpack_require__("./src/app/services/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__sidebar_sidebar_component__ = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_validation_service__ = __webpack_require__("./src/app/services/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_guard_service__ = __webpack_require__("./src/app/services/guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_loggedinguard_service__ = __webpack_require__("./src/app/services/loggedinguard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_upload_service__ = __webpack_require__("./src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__billcode_billcode_component__ = __webpack_require__("./src/app/billcode/billcode.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import array:




// import array: (Messages)


// Firebase;


// initialize for firebase

// declarations array:












// provider array:







// all the routes:
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_28__services_loggedinguard_service__["a" /* LoggedinguardService */]] },
    { path: 'billcode', component: __WEBPACK_IMPORTED_MODULE_30__billcode_billcode_component__["a" /* BillcodeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_28__services_loggedinguard_service__["a" /* LoggedinguardService */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_14__register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_28__services_loggedinguard_service__["a" /* LoggedinguardService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_26__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_28__services_loggedinguard_service__["a" /* LoggedinguardService */]] },
    { path: 'user/dashboard', component: __WEBPACK_IMPORTED_MODULE_15__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__services_guard_service__["a" /* GuardService */]] },
    { path: 'user/friends', component: __WEBPACK_IMPORTED_MODULE_16__friends_friends_component__["a" /* FriendsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__services_guard_service__["a" /* GuardService */]] },
    { path: 'user/transactions', component: __WEBPACK_IMPORTED_MODULE_17__transactions_transactions_component__["a" /* TransactionsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__services_guard_service__["a" /* GuardService */]] },
    { path: 'user/receipts', component: __WEBPACK_IMPORTED_MODULE_18__receipts_receipts_component__["a" /* ReceiptsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__services_guard_service__["a" /* GuardService */]] },
    { path: 'user/setting', component: __WEBPACK_IMPORTED_MODULE_19__setting_setting_component__["a" /* SettingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__services_guard_service__["a" /* GuardService */]] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_21__about_about_component__["a" /* AboutComponent */] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__friends_friends_component__["a" /* FriendsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__transactions_transactions_component__["a" /* TransactionsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__receipts_receipts_component__["a" /* ReceiptsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__setting_setting_component__["a" /* SettingComponent */],
                __WEBPACK_IMPORTED_MODULE_20__services_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_21__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_22__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_26__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_23__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_30__billcode_billcode_component__["a" /* BillcodeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_24__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_25__services_validation_service__["a" /* ValidationService */],
                __WEBPACK_IMPORTED_MODULE_27__services_guard_service__["a" /* GuardService */],
                __WEBPACK_IMPORTED_MODULE_28__services_loggedinguard_service__["a" /* LoggedinguardService */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_29__services_upload_service__["a" /* UploadService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/billcode/billcode.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/billcode/billcode.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"position: relative; padding-top: 80px;\">\r\n<!-- <div class=\"row\" id=\"user_form\" *ngIf=\"!authService.isLoggedIn()\"> -->\r\n  <div class=\"col align-self-center\">\r\n  <h2>Fast Bill</h2>\r\n  <form class=\"form-signin\">\r\n\r\n      <div class=\"form-group row\">\r\n          <label for=\"code\" class=\"col-sm-3 col-form-label\">Code</label>\r\n          <div class=\"col-sm-9\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"*Enter Code\" [(ngModel)]=\"inputCode\" name=\"inputCode\">\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n          <label for=\"name\" class=\"col-sm-3 col-form-label\">Name</label>\r\n          <div class=\"col-sm-9\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"*Enter Your Name\" [(ngModel)]=\"inputName\" name=\"inputName\">\r\n          </div>\r\n      </div>\r\n\r\n\r\n\r\n    </form>\r\n\r\n    <button class=\"btn btn-success\" (click)=\"onSubmit()\">Submit</button>&nbsp;\r\n    <button class=\"btn btn-danger\" (click)=\"onCancel()\">Cancel</button><br><br>\r\n    <p>Already fell in love with rumi? <a [routerLink] = \"['/register']\">Register Here!</a></p>\r\n\r\n    <div *ngIf=\"name\" class=\"card\" id=\"card\" style=\"width: 25%;\">\r\n      <header class=\"card-header\" \r\n      style=\"background-color: rgb(0, 140, 255);  \r\n      width: 100%; text-align: center;\" \r\n      >\r\n      This bill is for: {{name}}\r\n    </header>\r\n\r\n      <div *ngFor=\"let element of hack(trans_info)\" >\r\n          <!-- <p>This bill is for: {{name}}</p> -->\r\n          <p>Store Name: {{element.store_name}}</p>\r\n          <p>On: {{element.bill_date}}</p>\r\n          <p>Bill Code: {{element.bill_code}}</p>\r\n          <p>Type: {{element.transaction_type}}</p>\r\n          <p>Items bought: {{items}}</p>\r\n          <p>Original Prices: {{og_prices}}</p>\r\n          <p>Split Prices: {{split_prices}}</p>\r\n      </div>\r\n    </div>\r\n</div>\r\n<!-- </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/billcode/billcode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillcodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validation_service__ = __webpack_require__("./src/app/services/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BillcodeComponent = /** @class */ (function () {
    function BillcodeComponent(router, validateService, authService, toastr, vcr, componentFactoryResolver, ngZone, appRef, options) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.toastr = toastr;
        // Declared variables:
        this.inputName = "Dita Dewindita";
        this.inputCode = "576HJK";
        this.toastr.setRootViewContainerRef(vcr);
        Object.assign(options, {
            maxShown: 1,
            positionClass: "toast-top-center",
            showCloseButton: true,
            toastLife: 3000
        });
    }
    BillcodeComponent.prototype.ngOnInit = function () {
    };
    BillcodeComponent.prototype.hack = function (list) {
        return list;
    };
    // ========== Toastr Messages =======================================
    BillcodeComponent.prototype.showSuccess = function (msg) {
        this.toastr.success(msg, 'Success!');
    };
    BillcodeComponent.prototype.showWarning = function (msg) {
        this.toastr.warning(msg, 'Alert!');
    };
    BillcodeComponent.prototype.showError = function (msg) {
        this.toastr.error(msg, 'Oops!');
    };
    // ========= Submit and Cancel functions =====================
    BillcodeComponent.prototype.onSubmit = function () {
        var _this = this;
        var info = {
            bill_code: this.inputCode,
            name: this.inputName
        };
        // if(!this.validateService.validateRegister(user)){
        //   this.showWarning('Please fill in all fields');
        //   return false;
        // }
        // if(!this.validateService.validateEmail(user.email)){
        //   this.showWarning('Please use a valid email');
        //   return false;
        // }
        this.authService.getTransactionByCode(info).subscribe(function (data) {
            // this.showSuccess('You are registered and now can log in.');
            _this.showSuccess('Found you bill!! eyyyyyyyyyy ^^');
            _this.trans_info = data['fast_info'];
            _this.transactionlist = data['fast_info'].transaction_list;
            // console.log(this.trans_info);
            // console.log(this.transactionlist);
            _this.getDataArrayList(_this.trans_info);
        }, function (error) {
            _this.showError('Something went wrong, please try again');
            // this.showError();
            _this.router.navigate(['/billcode']);
        });
    };
    BillcodeComponent.prototype.onCancel = function () {
        this.inputName = undefined;
        this.inputCode = undefined;
        this.router.navigate(['/']);
    };
    BillcodeComponent.prototype.getDataArrayList = function (list) {
        // const length = _.range(list.length );
        var _this = this;
        // _.each(length, (index) => {
        //   // each log will print out the each file infor in the array filesToUpload
        //   // console.log(filesToUpload[index]);
        //   console.log(list.transaction_list[index]);
        //   this.transactionlist.push(list.transaction_list[index]);
        //   // this.upload = new FileDetails(filesToUpload[index]);
        //   // this.uploadService.uploadFile(this.upload);
        // });
        var index = 0;
        list.forEach(function (element) {
            console.log(element.transaction_list[0]);
            console.log(element.transaction_list[1]);
            if (element.transaction_list[index].name == _this.inputName) {
                _this.name = element.transaction_list[index].name;
                _this.items = element.transaction_list[index].items;
                _this.og_prices = element.transaction_list[index].og_prices;
                _this.split_prices = element.transaction_list[index].split_prices;
                // this.transactionlist.push(element.transaction_list[index]);
                index++;
            }
        });
        console.log(this.name);
        console.log(this.items);
        console.log(this.og_prices);
        console.log(this.split_prices);
    };
    BillcodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-billcode',
            template: __webpack_require__("./src/app/billcode/billcode.component.html"),
            styles: [__webpack_require__("./src/app/billcode/billcode.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastOptions"]])
    ], BillcodeComponent);
    return BillcodeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".tn {\r\n    margin:6px 6px;\r\n    border: 4px solid #eee;\r\n    -webkit-box-shadow:#555 1px 1px 8px 1px;\r\n            box-shadow:#555 1px 1px 8px 1px;\r\n    cursor: pointer;\r\n    width: 300px;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid\" id=\"content\">\r\n<!-- <div *ngIf=\"friends | async\"> -->\r\n  <h2>Recent Activities</h2>\r\n  <div *ngFor=\"let recent of hack(recentActivities)\">\r\n          <!-- Transactions -->\r\n          <div class=\"card\" id=\"card\" style=\"border-color:#E4C1E2;\" *ngIf=\"recent.group_name\">\r\n            <div class=\"card-header\" id=\"transaction-card\">\r\n              New Transaction\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">{{recent.transaction_type}}</h5>\r\n              <h6 class=\"card-subtitle mb-2 text-muted\">{{recent.date}}</h6>\r\n              <p class=\"card-text\">Split with: {{recent.friend_names}}</p>\r\n            </div>\r\n          </div>\r\n      <!-- <div style=\"background-color:#4a148c; color:white; width:50%;\" class=\"center\" *ngIf=\"recent.group_name\">\r\n          <p>{{recent.date}}</p>\r\n          <p>{{recent.total}}</p>\r\n          <p>Split With: {{recent.friend_names}}</p>\r\n          <p>{{recent.transaction_type}}</p>\r\n      </div> -->\r\n        <!-- Friends -->\r\n        <div class=\"card\" id=\"card\" *ngIf=\"recent.firstName\">\r\n          <div class=\"card-header\" id=\"roommate-card\">\r\n            New Roommate\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{recent.firstName}}</h5>\r\n            <h6 class=\"card-subtitle mb-2 text-muted\">{{recent.date}}</h6>\r\n          </div>\r\n        </div>\r\n      <!-- <div style=\"background-color:#01579b; color:white;  width:50%;\" class=\"center\"  *ngIf=\"recent.firstName\">\r\n          <p>{{recent.date}}</p>\r\n          <p>Added New Friend: {{recent.firstName}}</p>\r\n          <p>New Friend</p>\r\n      </div> -->\r\n\r\n      <!-- Receipts -->\r\n        <div class=\"card\" id=\"card\" *ngIf=\"recent.name\">\r\n          <div class=\"card-header\" id=\"receipt-card\">\r\n            New Receipt\r\n          </div>\r\n          <div id=\"card-img\">\r\n            <img class=\"card-img-top\" src=\"{{recent.link}}\" alt=\"Receipt\">\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <h6 class=\"card-subtitle mb-2 text-muted\">{{recent.date}}</h6>\r\n          </div>\r\n        </div>\r\n      <!-- <div style=\"background-color:#1b5e20; color:white; width:50%;\" class=\"center\"  *ngIf=\"recent.name\">\r\n          <p>{{recent.date}}</p>\r\n          <p>Added New Receipt</p>\r\n          <img src=\"{{recent.link}}\" alt=\"Receipt\" class=\"img tn\" >\r\n      </div> -->\r\n  </div><!-- *ngFor -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.debug = false;
        this.recentActivities = [];
        this.arrived = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getTheDashboard();
    };
    DashboardComponent.prototype.ngOnChanges = function () {
        // this.getTheDashboard();
        // this.click();
    };
    // ========================== Helper functions ===========================
    DashboardComponent.prototype.compareDate = function (a, b) {
        return (Date.parse(a) > Date.parse(b)) ? a : b;
    };
    DashboardComponent.prototype.hack = function (list) {
        return list;
    };
    DashboardComponent.prototype.sortDateArray = function (array) {
        var i = 0;
        for (i = 0; i < array.length; i++)
            array[i] = Date.parse(array[i]);
        array = array.sort().reverse();
        for (i = 0; i < array.length; i++)
            array[i] = new Date(array[i]).toDateString();
        return array;
    };
    // =========================== HTTP GET request ==========================
    DashboardComponent.prototype.getTheDashboard = function () {
        var _this = this;
        // Make a call to the services for a HTTP GET request to the backend in routes/dashboard
        this.authService.getDashboard().subscribe(function (data) {
            // Received the data back, get the right list of json objects to the right variable:
            _this.transactions = data['trans'];
            _this.receipts = data['receipts'];
            _this.friends = data['friends'];
            // Reverse the list so the most recent days first:
            _this.transactions = _this.transactions.reverse();
            _this.receipts = _this.receipts.reverse();
            _this.friends = _this.friends.reverse();
            _this.clickForData();
        }); // End of getDashboard()
    };
    DashboardComponent.prototype.clickForData = function () {
        var mostRecentDate = "";
        var maxLen = 0, i = 0, x = 0, y = 0, z = 0;
        var arrayOfDate = [];
        var tempDate = "";
        var recent = [];
        // This part will get the most recent date out of all three list of json objects
        if (this.debug) {
            console.log('mostRecentDate friends: ', this.friends[0].date);
            console.log('mostRecentDate transactions: ', this.transactions[0].date);
            console.log('mostRecentDate receipts: ', this.receipts[0].date);
        }
        mostRecentDate = this.compareDate(this.friends[0].date, this.transactions[0].date);
        mostRecentDate = this.compareDate(mostRecentDate, this.receipts[0].date);
        if (this.debug)
            console.log('mostRecentDate: ', mostRecentDate);
        // This part will get the max len
        maxLen = Math.max(this.friends.length, Math.max(this.transactions.length, this.receipts.length));
        if (this.debug)
            console.log('maxLen: ', maxLen);
        // This part will get all the date added from all the lists
        arrayOfDate.push(mostRecentDate);
        // tempDate = mostRecentDate;
        if (this.debug)
            console.log('arrayOfDate: ', arrayOfDate);
        for (i = 0; i < maxLen; i++) {
            // If the date is already there, skip
            if ((i < this.transactions.length) && (tempDate === this.transactions[i].date)) {
                continue;
            }
            if ((i < this.friends.length) && (tempDate === this.friends[i].date)) {
                continue;
            }
            if ((i < this.receipts.length) && (tempDate === this.receipts[i].date)) {
                continue;
            }
            // If the date is not in the array, change the tempDate and add it to the array
            if ((i < this.transactions.length) && (tempDate !== this.transactions[i].date) && (!arrayOfDate.includes(this.transactions[i].date))) {
                tempDate = this.transactions[i].date;
                arrayOfDate.push(tempDate);
            }
            if ((i < this.friends.length) && (tempDate !== this.friends[i].date) && (!arrayOfDate.includes(this.friends[i].date))) {
                tempDate = this.friends[i].date;
                arrayOfDate.push(tempDate);
            }
            if ((i < this.receipts.length) && (tempDate !== this.receipts[i].date) && (!arrayOfDate.includes(this.receipts[i].date))) {
                tempDate = this.receipts[i].date;
                arrayOfDate.push(tempDate);
            }
        } // End of for loop
        // Array of Date all sorted from most recent date.
        arrayOfDate = this.sortDateArray(arrayOfDate);
        if (this.debug)
            console.log('arrayOfDate all sorted: ', arrayOfDate);
        // Loop through all the list of json Objects to add the objects sort by the date:
        for (i = 0; i <= arrayOfDate.length; i++) {
            for (x = 0; x < this.transactions.length; x++) {
                if (this.transactions[x].date === arrayOfDate[i]) {
                    recent.push(this.transactions[x]);
                }
            }
            for (y = 0; y < this.receipts.length; y++) {
                if (this.receipts[y].date === arrayOfDate[i]) {
                    recent.push(this.receipts[y]);
                }
            }
            for (z = 0; z < this.friends.length; z++) {
                if (this.friends[z].date === arrayOfDate[i]) {
                    recent.push(this.friends[z]);
                }
            }
        } // End of the big for loop
        if (this.debug)
            console.log("Recent array: ", recent);
        this.recentActivities = recent;
    }; // End of the clickForData()
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/friends/friends.component.css":
/***/ (function(module, exports) {

module.exports = "#roommateResults {\r\n  position: absolute;\r\n  z-index:20;\r\n  /* margin-top:-5px; */\r\n}\r\n"

/***/ }),

/***/ "./src/app/friends/friends.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"container-fluid\" id=\"content\">\r\n    <h2>Roommates</h2>\r\n    <div class=\"row\">\r\n      <!-- Add Roommate -->\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            Add New Roommates\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <!-- <form> -->\r\n              <!-- <div class=\"form-group row\"> -->\r\n                <!-- <label for=\"inputRoommateSearch\" class=\"col-sm-4 col-form-label\"></label> -->\r\n                <div class=\"input-group\">\r\n                  <!-- Add roommate input field -->\r\n                  <input placeholder=\"Name, @username, or email\" type=\"text\" name=\"roommateSearch\" [(ngModel)] = \"roommateSearch\" class=\"form-control\">\r\n\r\n                  <!-- Add roommate results -->\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-success dropdown-toggle\" (click)=\"onSubmitButton()\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Find Users</button>\r\n                    <div class=\"dropdown-menu\">\r\n                      <a class=\"dropdown-item\" *ngFor=\"let roomie of hack(roommateSearchList)\" (click)=\"addRoommate(roomie)\"><b>{{roomie.name}}</b> <small>@{{roomie.username}}</small></a>\r\n                      <!-- Cannot find user option -->\r\n                      <div role=\"separator\" class=\"dropdown-divider\"></div>\r\n                      <a class=\"dropdown-item\" (click)=\"showStaticRoommateForm()\">Can't find user? Click here.</a>\r\n                    </div>\r\n                  </div>\r\n\r\n                  &nbsp;\r\n                  <button class=\"btn btn-dark\" (click)=\"clear()\">Clear</button>\r\n\r\n                </div>\r\n\r\n                <div role=\"separator\" class=\"dropdown-divider\"></div>\r\n\r\n                <!-- Static roommate add form -->\r\n                <div *ngIf=\"staticRoommateForm\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"staticRoommateName\">Name</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"staticRoommateName\" name=\"staticRoommateName\" [(ngModel)]=\"staticRoommateName\" placeholder=\"Rumi\">\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"staticRoommateEmail\">Email address</label>\r\n                    <input type=\"email\" class=\"form-control\" id=\"staticRoommateEmail\" name=\"staticRoommateEmail\" [(ngModel)]=\"staticRoommateEmail\" aria-describedby=\"emailHelp\" placeholder=\"hello@rumi.com\">\r\n                  </div>\r\n\r\n                  <button class=\"btn btn-primary\" (click)=\"addStaticRoommate()\">Add roommate</button>\r\n                </div>\r\n              <!-- </div> -->\r\n\r\n              <!-- <div class=\"form-group row\">\r\n                <label for=\"inputLastName\" class=\"col-sm-4 col-form-label\">Last Name</label>\r\n                <div class=\"col-sm-8\">\r\n                  <input placeholder=\"Last Name\" type=\"text\" name=\"lastName\" [(ngModel)] = \"lastName\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label for=\"inputLastName\" class=\"col-sm-4 col-form-label\">Preferred Name</label>\r\n                <div class=\"col-sm-8\">\r\n                  <input placeholder=\"Preferred Name\" type=\"text\" name=\"preferredName\" [(ngModel)] = \"preferredName\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label for=\"inputLastName\" class=\"col-sm-4 col-form-label\">Address</label>\r\n                <div class=\"col-sm-8\">\r\n                  <input placeholder=\"Address\" type=\"text\" name=\"address\" [(ngModel)] = \"address\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label for=\"inputLastName\" class=\"col-sm-4 col-form-label\">Email</label>\r\n                <div class=\"col-sm-8\">\r\n                  <input placeholder=\"Email\" type=\"text\" name=\"email\" [(ngModel)] = \"email\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label for=\"inputLastName\" class=\"col-sm-4 col-form-label\">Home Phone</label>\r\n                <div class=\"col-sm-8\">\r\n                  <input placeholder=\"Home Phone\" type=\"text\" name=\"homePhone\" [(ngModel)] = \"homePhone\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label for=\"inputLastName\" class=\"col-sm-4 col-form-label\">Cell Phone</label>\r\n                <div class=\"col-sm-8\">\r\n                  <input placeholder=\"Cell Phone\" type=\"text\" name=\"cellPhone\" [(ngModel)] = \"cellPhone\" class=\"form-control\">\r\n                </div>\r\n              </div> -->\r\n\r\n            <!-- </form> -->\r\n          </div>\r\n          <!-- End Add Roommate -->\r\n\r\n          <!-- Search Roommate -->\r\n          <div class=\"card-header\">\r\n            Search Roommate\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <!--- Search Form -->\r\n              <div class=\"input-group\">\r\n                  <input placeholder=\"Search Name\" type=\"text\" name=\"inputString\" [(ngModel)] = \"inputString\" class=\"form-control\">\r\n\r\n                  &nbsp;\r\n                  <button class=\"btn btn-dark\" (click)=\"clearSearch()\">Clear</button>\r\n                <!-- <div class=\"col-sm-6\">\r\n                  <button class=\"btn btn-dark\" (click)=\"clearSearch()\">Clear</button>\r\n                </div> -->\r\n              </div>\r\n            <!--- End Search Form -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!--- Roommates List -->\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"list-group\" *ngFor=\"let currRoommate of hack(roommateList) | filter : inputString; let i = index\">\r\n          <div class=\"list-group-item list-group-item-action flex-column align-items-start\" id=\"roommate-list-item\">\r\n            <div class=\"d-flex w-100 justify-content-between\">\r\n              <h5 id=\"roommate-list-header\">{{currRoommate.name}}</h5>\r\n              <small class=\"text-muted\"><button class=\"btn btn-danger btn-sm\" (click)=\"deleteRoommate(currRoommate)\">Delete</button></small>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                Email:\r\n              </div>\r\n              <div class=\"col\">\r\n                {{currRoommate.email}}\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf=\"currRoommate.isRegistered\">\r\n              <div class=\"col\">\r\n                Username:\r\n              </div>\r\n              <div class=\"col\">\r\n                @{{currRoommate.username}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--- End Roommates List -->\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/friends/friends.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validation_service__ = __webpack_require__("./src/app/services/validation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FriendsComponent = /** @class */ (function () {
    function FriendsComponent(authService, router, validationService, toastr, vcr, componentFactoryResolver, ngZone, appRef, options) {
        this.authService = authService;
        this.router = router;
        this.validationService = validationService;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
        Object.assign(options, {
            maxShown: 1,
            positionClass: "toast-top-center",
            showCloseButton: true,
            toastLife: 3000
        });
        // =============== More Toastr message options here: ===============
        // toast-top-right (Default)
        // toast-top-center
        // toast-top-left
        // toast-top-full-width
        // toast-bottom-right
        // toast-bottom-center
        // toast-bottom-left
        // toast-bottom-full-width
    }
    FriendsComponent.prototype.ngOnInit = function () {
        this.getRoommates();
        this.staticRoommateForm = false;
    };
    // ========== Toastr Messages =======================================
    FriendsComponent.prototype.showSuccess = function (msg) {
        this.toastr.success(msg, 'Success!');
    };
    FriendsComponent.prototype.showWarning = function (msg) {
        this.toastr.warning(msg, 'Alert!');
    };
    FriendsComponent.prototype.showError = function (msg) {
        this.toastr.error(msg, 'Oops!');
    };
    FriendsComponent.prototype.showInfo = function (msg) {
        this.toastr.info(msg, 'Info!');
    };
    // ========= Helper functions ============================
    FriendsComponent.prototype.clear = function () {
        this.roommateSearch = undefined;
        this.staticRoommateForm = false;
        this.roommateSearchList = [];
        // this._id = undefined;
        // this.firstName = undefined;
        // this.lastName = undefined;
        // this.preferredName = undefined;
        // this.address = undefined;
        // this.email = undefined;
        // this.homePhone = undefined;
        // this.cellPhone = undefined;
        // this.user_id = undefined;
        // this.showInfo('Cleared!');
    };
    FriendsComponent.prototype.clearSearch = function () {
        this.inputString = undefined;
        // this.showInfo('Cleared Search!');
    };
    FriendsComponent.prototype.hack = function (val) {
        console.log("hack: " + val);
        return val;
    };
    // ========= Fetch the contact list ======================
    // Get the user data from the database:
    FriendsComponent.prototype.getDashboard = function () {
        var _this = this;
        this.authService.userDashboard().subscribe(function (dashboard) {
            _this.user = dashboard['user'];
            _this.userID = dashboard['user']._id;
            _this.contactlist = dashboard['contactlist'];
        }, function (err) {
            console.log('Failed to get the dashboard! err: ' + err);
            _this.router.navigate(['']);
            return false;
        });
    };
    // ====== Fetch roommates =======
    FriendsComponent.prototype.getRoommates = function () {
        var _this = this;
        this.authService.getRoommates().subscribe(function (data) {
            _this.user = data['user'];
            _this.userID = data['user']._id;
            _this.roommateList = data['roommates'].reverse();
        }, function (err) {
            // Error out
            _this.router.navigate(['']);
            return false;
        });
    };
    // ============= Add, Search, Edit, Delete =================
    FriendsComponent.prototype.showStaticRoommateForm = function () {
        this.staticRoommateForm = true;
    };
    FriendsComponent.prototype.onSubmitButton = function () {
        // const new_contact = {
        //   _id: this._id,
        //   firstName: this.firstName,
        //   lastName: this.lastName,
        //   preferredName: this.preferredName,
        //   address: this.address,
        //   email: this.email,
        //   homePhone: this.homePhone,
        //   cellPhone: this.cellPhone,
        //   date: new Date().toDateString(),
        //   user_id: this.userID
        // }
        var roommate_name = {
            roommate_name: this.roommateSearch
        };
        if (this.roommateSearch != undefined) {
            this.findRoommates(roommate_name);
        }
        // if(!this.validationService.validateAdd(new_contact)){
        //   this.showWarning('Please fill in all fields');
        //   return false;
        // }
        //
        // if(!this.validationService.validateEmail(new_contact.email)){
        //   this.showWarning('Please use a valid email.');
        //   return false;
        // }
        // if(new_contact._id == undefined){
        //   this.add_contact(new_contact);
        // }
        // if(new_contact._id != undefined){
        //   this.edit_contact(new_contact);
        // }
    };
    FriendsComponent.prototype.findRoommates = function (roommate) {
        var _this = this;
        this.authService.findRoommates(roommate).subscribe(function (data) {
            if (data['success']) {
                _this.roommateSearchList = data['users'];
            }
        }, function (err) {
            // error stuff
            _this.showError(err);
        });
    };
    FriendsComponent.prototype.addRoommate = function (roommate) {
        var _this = this;
        this.authService.addRoommate(roommate).subscribe(function (data) {
            if (data['success']) {
                _this.getRoommates();
                _this.clear();
                _this.showSuccess('Added roommate!');
            }
        }, function (err) {
            _this.showError('Error adding roommate');
        });
    };
    FriendsComponent.prototype.addStaticRoommate = function () {
        var _this = this;
        var static_roommate = {
            _id: undefined,
            name: this.staticRoommateName,
            email: this.staticRoommateEmail,
            isRegistered: false,
        };
        this.authService.addStaticRoommate(static_roommate).subscribe(function (data) {
            if (data['success']) {
                _this.showSuccess("Added roommate!");
                _this.getRoommates();
                _this.clear();
            }
        }, function (err) {
            _this.showError('Error adding roommate');
        });
    };
    FriendsComponent.prototype.deleteRoommate = function (roommate) {
        var _this = this;
        this.authService.deleteRoommate(roommate).subscribe(function (data) {
            if (data['success']) {
                _this.getRoommates();
                _this.showSuccess("Deleted roommate");
            }
        }, function (err) {
            _this.showError("Error deleting roommate");
        });
    };
    FriendsComponent.prototype.onEditButton = function (contact) {
        this._id = contact._id;
        this.firstName = contact.firstName;
        this.lastName = contact.lastName;
        this.preferredName = contact.preferredName;
        this.address = contact.address;
        this.email = contact.email;
        this.homePhone = contact.homePhone;
        this.cellPhone = contact.cellPhone;
        this.user_id = contact.userID;
        this.showWarning('A contact is being updated!');
    };
    FriendsComponent.prototype.add_contact = function (newContact) {
        var _this = this;
        this.authService.addContact(newContact).subscribe(function (data) {
            _this.showSuccess('Friend added!');
            // this.getDashboard();
        }, function (err) {
            _this.showError('Failed to add a contact!' + err);
        });
        this.getDashboard();
        this.clear();
    };
    FriendsComponent.prototype.edit_contact = function (existing_contact) {
        var _this = this;
        this.authService.updateContact(existing_contact).subscribe(function (data) {
            _this.getDashboard();
            _this.showSuccess('Updated Contact!');
        }, function (err) {
            _this.showError('Failed to update a contact!' + err);
        });
        this.clear();
        // Feel the power of the twin!! or not
        this.getDashboard();
    };
    FriendsComponent.prototype.search_contact = function () {
        if (this.inputString == undefined) {
            this.showError('Empty search!');
            return false;
        }
    };
    FriendsComponent.prototype.onDeleteButton = function (contact) {
        var _this = this;
        this.authService.deleteContact(contact).subscribe(function (data) {
            _this.contactlist.splice(_this.contactlist.indexOf(contact), 1);
            _this.showSuccess('Deleted a contact');
            _this.getDashboard();
        }, function (err) {
            console.log('Failed to delete a contact!' + err);
        });
        this.getDashboard();
    };
    FriendsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-friends',
            template: __webpack_require__("./src/app/friends/friends.component.html"),
            styles: [__webpack_require__("./src/app/friends/friends.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastOptions"]])
    ], FriendsComponent);
    return FriendsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"container-fluid\" id=\"home\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-8 text-center img-fluid\">\r\n            <img src=\"../../assets/rumi logo.png\" width=\"400\" href=\"/\">\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 align-self-center img-fluid\">\r\n          <!-- {{ tagline }} -->\r\n            <p>\r\n            <p>\r\n            <a ui-sref=\"register\" [routerLink]=\"['/register']\" class=\"btn\" id=\"button_main_color\">Get Started!</a>\r\n            <a ui-sref=\"download\" href=\"https://www.youtube.com/watch?v=_xjp2wkgAJQ\" class=\"btn\" id=\"button_main_color\">Download</a>\r\n          <p>\r\n          <p>Already have an account?  <a ui-sref=\"login\" [routerLink]=\"['/login']\" >Login here</a>.\r\n          <P>Have a bill code? <a ui-sref=\"login\" [routerLink]=\"['/billcode']\" >Look it up here</a>. </P>\r\n        </div>\r\n    </div>\r\n\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-lg-6 order-lg-2\">\r\n            <div class=\"p-5\">\r\n              <img class=\"img-fluid\" src=\"../../assets/Receipts.jpg\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6 order-lg-1\">\r\n            <div class=\"p-5\">\r\n              <h2 class=\"display-4\">Bills shouldn't have to be difficult!</h2>\r\n              <p>Organize receipts, bills, and roommates so\r\n                the only clutter you have is in the sink.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n            <div class=\"row align-items-center\">\r\n              <div class=\"col-lg-6\">\r\n                <div class=\"p-5\">\r\n                  <img class=\"img-fluid rounded-circle\" src=\"../../assets/pay.jpg\" alt=\"\" style=\"height:70%;width:70%\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-6\">\r\n                <div class=\"p-5\">\r\n                  <h2 class=\"display-4\">Payment is a breeze!</h2>\r\n                  <p>Request for payment through Rumi so that\r\n                     walk to the kitchen doesn't become so\r\n                     awkward anymore.</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n    <!-- Footer -->\r\n    <!-- <footer class=\"py-3\" style=\"background-color:#59b000\">\r\n      <p class=\"m-0 text-center text-white small\">Copyright &copy; Rumi 2018</p>\r\n      <p class=\"m-0 text-center small\">\r\n        <a ui-sref=\"about\" [routerLink]=\"['/about']\" style=\"color:white\">About Us</a>\r\n      </p>\r\n    </footer> -->\r\n\r\n    <!-- Footer -->\r\n    <footer class=\"py-3\" id=\"footer\">\r\n        <p class=\"m-0 text-center text-white small\">Copyright &copy; Rumi 2018</p>\r\n        <p class=\"m-0 text-center small\" ><a ui-sref=\"about\" [routerLink]=\"['/about']\">About Us</a></p>\r\n      <!-- /.container -->\r\n    </footer>\r\n\r\n  </div>\r\n\r\n<!-- <div class=\"container-fluid\" id=\"home\">\r\n  <div class=\"row\">\r\n    <div class=\"col align-self-center\">\r\n        <img src=\"../../assets/rumi logo.png\" width=\"350\" href=\"/\" class=\"align-self-center\">\r\n    </div>\r\n\r\n    <div class=\"col align-self-center\">\r\n      <p>\r\n      <p>\r\n        <a ui-sref=\"register\" [routerLink]=\"['/register']\" class=\"btn\" id=\"button_main_color\">Get Started!</a>\r\n        <a ui-sref=\"download\" href=\"https://www.youtube.com/watch?v=_xjp2wkgAJQ\" class=\"btn\" id=\"button_main_color\">Download</a>\r\n      </p>\r\n      <p>\r\n      <p>Already have an account?  <a ui-sref=\"login\" [routerLink]=\"['/login']\" >Login here</a>.\r\n    </div>\r\n  </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"user_form\" *ngIf=\"!authService.isLoggedIn()\">\r\n  <div class=\"col align-self-center\">\r\n    <h2>Login</h2>\r\n\r\n    <!-- Start form -->\r\n    <form class=\"form-signin\">\r\n\r\n      <!-- Username -->\r\n      <div class=\"form-group row\">\r\n        <label for=\"Username\" class=\"col-sm-3 col-form-label\">Username</label>\r\n        <div class=\"col-sm-9\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"*Enter Username\" [(ngModel)]=\"username\" name=\"username\">\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Password -->\r\n      <div class=\"form-group row\">\r\n        <label for=\"Password\" class=\"col-sm-3 col-form-label\">Password</label>\r\n        <div class=\"col-sm-9\">\r\n          <input type=\"password\" class=\"form-control\" placeholder=\"*Enter Password\" [(ngModel)]=\"password\" name=\"password\">\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Buttons -->\r\n      <button class=\"btn btn-success\" (click)=\"onLoginSubmit()\">Login</button>&nbsp;\r\n      <button class=\"btn btn-danger\" (click)=\"onCancelSubmit()\">Cancel</button><br><br>\r\n\r\n      <!-- Navigate back to register page -->\r\n      <p>Don't have an account yet? <a [routerLink] = \"['/register']\">Register Here</a></p>\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validation_service__ = __webpack_require__("./src/app/services/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    // Inject into the constructor
    function LoginComponent(router, validateService, authService, toastr, vcr, componentFactoryResolver, ngZone, appRef, options) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.toastr = toastr;
        this.warningMsg = "Please fill in all fields!";
        this.toastr.setRootViewContainerRef(vcr);
        Object.assign(options, {
            maxShown: 1,
            positionClass: "toast-top-center",
            showCloseButton: true,
            toastLife: 3000
        });
        // =============== More Toastr message options here: ===============
        // toast-top-right (Default)
        // toast-top-center
        // toast-top-left
        // toast-top-full-width
        // toast-bottom-right
        // toast-bottom-center
        // toast-bottom-left
        // toast-bottom-full-width
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // ========== Toastr Messages =======================================
    LoginComponent.prototype.showSuccess = function (msg) {
        this.toastr.success(msg, 'Success!');
    };
    LoginComponent.prototype.showWarning = function (msg) {
        // this.toastr.setupToast(toast:Toas, Position='toast-top-right');
        this.toastr.warning(msg, 'Alert!');
    };
    LoginComponent.prototype.showError = function (msg) {
        this.toastr.error(msg, 'Oops!');
    };
    // ======= Login and Cancel functions ============
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        if (!this.validateService.validateLogin(user)) {
            this.warning = true;
            this.showWarning('Please fill in all fields!');
            return false;
        }
        this.authService.loginUser(user).subscribe(function (data) {
            var success = data['success'];
            if (success) {
                var token = data['token'];
                var userObject = data['user'];
                _this.authService.storeUserToken(token, userObject);
                _this.showSuccess('You have logged in!');
                _this.authService.setLoggedIn();
                _this.router.navigate(['/user/dashboard']);
            }
            // Error messages should be: wrong password || user not found
            if (!success) {
                _this.showError(data['msg']);
                _this.router.navigate(['/login']);
            }
        }, function (err) {
            // When the server is not running on the backend
            _this.showError('Oh no! Something went wrong. Please try again!' + JSON.stringify(err));
            console.log(err);
            _this.router.navigate(['/login']);
        });
    };
    LoginComponent.prototype.onCancelSubmit = function () {
        this.username = undefined;
        this.password = undefined;
        this.router.navigate(['/']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastOptions"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/fileDetails.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileDetails; });
var FileDetails = /** @class */ (function () {
    function FileDetails(file) {
        // createOn: Date = new Date();
        this.createOn = new Date().toString();
        this.file = file;
    }
    return FileDetails;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\r\n<nav class=\"navbar navbar-expand-lg justify-content-between\" id=\"navbar\">\r\n  <!-- Rumi logo -->\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\"><img src=\"../assets/rumi logo.png\" width=\"50\" alt=\"\"></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <!-- Links -->\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\r\n\r\n      <!-- Left links -->\r\n      <ul class=\"navbar-nav mr-auto navbar-left\">\r\n\r\n      </ul>\r\n      <!-- End left links -->\r\n\r\n      <!-- Right links -->\r\n      <ul class=\"navbar-nav navbar-right\">\r\n\r\n        <!-- After logged in: Dashboard -->\r\n        <!-- <li class=\"nav-item active\"\r\n        [routerLinkActive]=\"['active']\"\r\n        [routerLinkActiveOptions] =\"{exact:true}\"\r\n        *ngIf=\"authService.isLoggedIn()\">\r\n          <a class=\"nav-link btn\" [routerLink]=\"['/user/dashboard']\">Dashboard <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        &nbsp;&nbsp; -->\r\n\r\n        <!-- Home -->\r\n        <li class=\"nav-item active\"\r\n        [routerLinkActive]=\"['active']\"\r\n        [routerLinkActiveOptions] =\"{exact:true}\">\r\n          <a class=\"nav-link btn\" [routerLink]=\"['/user/dashboard']\">Home</a>\r\n        </li>\r\n\r\n        &nbsp;&nbsp;\r\n\r\n        <!-- About -->\r\n        <li class=\"nav-item active\"\r\n        [routerLinkActive]=\"['active']\"\r\n        [routerLinkActiveOptions] =\"{exact:true}\"\r\n        *ngIf=\"!authService.isLoggedIn()\">\r\n          <a class=\"nav-link btn\" [routerLink]=\"['/about']\">About</a>\r\n        </li>\r\n\r\n        <!-- After logged in: Register wont show -->\r\n        <li class=\"nav-item active\"\r\n        [routerLinkActive]=\"['active']\"\r\n        [routerLinkActiveOptions] =\"{exact:true}\"\r\n        *ngIf=\"!authService.isLoggedIn()\">\r\n          <a class=\"nav-link btn\" [routerLink]=\"['/register']\">Register</a>\r\n        </li>\r\n        &nbsp;&nbsp;\r\n\r\n         <!-- Before logged in: Log out wont show -->\r\n        <li class=\"nav-item active\"\r\n        *ngIf=\"authService.isLoggedIn()\">\r\n          <a class=\"nav-link btn\" [routerLink]=\"['/']\" (click)=\"onLogoutClick()\">Log out</a>\r\n        </li>\r\n\r\n      </ul>\r\n      <!-- End right links -->\r\n\r\n    </div>\r\n\r\n</nav>\r\n\r\n<!-- <li class=\"nav-item active\"\r\n[routerLinkActive]=\"['active']\"\r\n[routerLinkActiveOptions] =\"{exact:true}\"\r\n*ngIf=\"authService.isLoggedIn()\">\r\n  <a class=\"nav-link btn\" [routerLink]=\"['/user/dashboard']\">Dashboard <span class=\"sr-only\">(current)</span></a>\r\n</li>\r\n&nbsp;&nbsp; -->\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, toastr, vcr) {
        this.authService = authService;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    // ========== Toastr Messages =======================================
    NavbarComponent.prototype.showSuccess = function (msg) {
        this.toastr.info(msg, 'Success!');
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.showSuccess('You have logged out!');
        this.authService.logout();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/receipts/receipts.component.css":
/***/ (function(module, exports) {

module.exports = "ul {\r\n  padding:0;\r\n  idth:1200px;\r\n  margin:20px auto;\r\n}\r\n\r\nul img {\r\n  width:250px;\r\n}\r\n\r\nli {\r\n  display:inline;\r\n}\r\n\r\nh2 {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#card {\r\n  width:250px;\r\n  position: relative;\r\n  padding:10px;\r\n  margin: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/receipts/receipts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"content\">\r\n  <h2>Upload New Images</h2>\r\n  <!-- Progress Bar -->\r\n  <div *ngIf=\"upload\">\r\n    <div class=\"progress\">\r\n      <div class=\"progress-bar progress-bar-animated\"\r\n        [ngStyle]=\"{ 'width': upload?.progress + '%' }\">\r\n      </div>\r\n    </div>\r\n    Progress: {{upload?.progress}}% Complete\r\n  </div>\r\n\r\n  <hr>\r\n\r\n  <!-- Input and Upload Button -->\r\n  <input type=\"file\" (change)=\"handleFiles($event)\" multiple>\r\n  <button class=\"btn btn-primary\" (click)=\"uploadFiles()\">Upload Images</button>\r\n  <button class=\"btn btn-danger\" (click)=\"reload()\">Refesh ittt</button>\r\n\r\n<!-- Display Images -->\r\n  <p></p>\r\n  <h2>Latest Photos</h2>\r\n\r\n  <ul id=\"thumbnailsList\">\r\n      <li *ngFor=\"let image of receiptsList\" class=\"img\">\r\n          <!-- <a [routerLink]=\"['/image', image.key]\"> -->\r\n          <a href=\"{{image.link}}\">\r\n          <img src=\"{{image.link}}\" class=\"tn\">\r\n          </a>\r\n      </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/receipts/receipts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiptsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_upload_service__ = __webpack_require__("./src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_fileDetails_model__ = __webpack_require__("./src/app/models/fileDetails.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
// Logic:
// Get the file/image info in the list of files/images (handleFiles method)
// Store the files/images into another database (firebase console).
// (UploadFiles method will call uploadFile() in services/upload.service)
// ^ The purpose of this is to store the file/img somewhere else
// instead for mLab (which saved me some pains) and get the URL link
// of the img/file then store the link in our mLab
// Retrieve the file/img URL, and make a POST request to the backend and
// save the file/image info into our mLab remote database under
// the "receipts" collection.
// (addPictureToMlab() method in services/upload.service will call
// addReceipts() method in services/auth.service to make an http POST request)
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// If you have any question about he frontend or backend, let me know.
// Steve _m_(^___^)_m_



 // to help loop over files


var ReceiptsComponent = /** @class */ (function () {
    // Inject the uploadservice and authservice
    // to upload the files/images and make a POST request
    // to the backend and save the picture details into mLab
    function ReceiptsComponent(uploadService, authService) {
        this.uploadService = uploadService;
        this.authService = authService;
        this.checkpoint = 0;
    }
    // Make a GET request to the backend on the first load
    // to retrive the files/images
    ReceiptsComponent.prototype.ngOnInit = function () {
        this.getPictures();
        // this.fbGetData();
    };
    ReceiptsComponent.prototype.reload = function () {
        // console.log('In here');
        this.getPictures();
    };
    ReceiptsComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes.finishedProgress.currentValue); // current selected value
        console.log(changes.finishedProgress.previousValue); // previous selected value
        this.getPictures();
    };
    // This method listener will watch for changes from the firebase console
    // whenever a new file/img add to the database, this will fire and call the
    // backend the load the new file/img to the receiptList.
    ReceiptsComponent.prototype.fbGetData = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('/uploads/').on('child_added', function (result) {
            console.log('Just ADDED a child !!!!');
            console.log(result.val());
            // this.receiptsList.push(result.val());
            _this.getPictures();
        });
    };
    // On the first load, get the user info
    // user id and the receiptList from "receipts" collection
    // in mLab database
    ReceiptsComponent.prototype.getPictures = function () {
        var _this = this;
        this.authService.getReceipts().subscribe(function (data) {
            _this.user = data['user'];
            _this.userID = data['user']._id;
            _this.receiptsList = data['receiptList'];
            console.log('Success! Got the pic infor.');
            console.log(_this.receiptsList);
        }, function (err) {
            console.log('Failed to get the picture! err: ' + err);
            // this.router.navigate(['']);
            return false;
        });
    };
    // Only take the files/images info from the $event
    ReceiptsComponent.prototype.handleFiles = function (event) {
        // console.log(event.target.files);
        this.files = event.target.files;
    };
    // Loop through each file/img in the file/img list and call
    // upload service to upload each file/img to Firebase Console
    ReceiptsComponent.prototype.uploadFiles = function () {
        var _this = this;
        // Get the files from the global var "files"
        var filesToUpload = this.files;
        var length = __WEBPACK_IMPORTED_MODULE_3_lodash__["range"](filesToUpload.length);
        __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](length, function (index) {
            // each log will print out the each file infor in the array filesToUpload
            // console.log(filesToUpload[index]);
            _this.upload = new __WEBPACK_IMPORTED_MODULE_2__models_fileDetails_model__["a" /* FileDetails */](filesToUpload[index]);
            _this.uploadService.uploadFile(_this.upload);
        });
        this.fbGetData();
        // this.getPictures();
        // reload();
    };
    // To be deleted :)
    ReceiptsComponent.prototype.get = function () {
        console.log(this.uploadService.getImageId());
        console.log(this.uploadService.getImageLink());
        console.log(this.uploadService.getImageName());
    };
    // To be deleted :)
    ReceiptsComponent.prototype.clearArray = function () {
        this.uploadService.clearList();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ReceiptsComponent.prototype, "finishedProgress", void 0);
    ReceiptsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-receipts',
            template: __webpack_require__("./src/app/receipts/receipts.component.html"),
            styles: [__webpack_require__("./src/app/receipts/receipts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], ReceiptsComponent);
    return ReceiptsComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"user_form\" *ngIf=\"!authService.isLoggedIn()\">\r\n    <div class=\"col align-self-center\">\r\n    <h2>Register</h2>\r\n    <form class=\"form-signin\">\r\n        <!-- <div class=\"form-group row\">\r\n          <label for=\"firstname\" class=\"col-sm-3 col-form-label\">First Name</label>\r\n          <div class=\"col-sm-9\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"*Michael\" [(ngModel)]=\"firstname\" name=\"firstname\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n            <label for=\"lastname\" class=\"col-sm-3 col-form-label\">Last Name</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"*Scott\" [(ngModel)]=\"lastname\" name=\"lastname\">\r\n            </div>\r\n        </div> -->\r\n\r\n        <div class=\"form-group row\">\r\n            <label for=\"name\" class=\"col-sm-3 col-form-label\">Name</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"*Enter Name\" [(ngModel)]=\"name\" name=\"name\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n            <label for=\"email\" class=\"col-sm-3 col-form-label\">Email</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"*Enter Valid Email\" [(ngModel)]=\"email\" name=\"email\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n            <label for=\"username\" class=\"col-sm-3 col-form-label\">Username</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"*Enter Username\" [(ngModel)]=\"username\" name=\"username\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n            <label for=\"password\" class=\"col-sm-3 col-form-label\">Password</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"password\" class=\"form-control\" placeholder=\"*Enter Password\" [(ngModel)]=\"password\" name=\"password\">\r\n            </div>\r\n        </div>\r\n\r\n      </form>\r\n\r\n      <button class=\"btn btn-success\" (click)=\"onRegisterSubmit()\">Register</button>&nbsp;\r\n      <button class=\"btn btn-danger\" (click)=\"onCancelSubmit()\">Cancel</button><br><br>\r\n      <p>Already have an account? <a [routerLink] = \"['/login']\">Login Here</a></p>\r\n\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validation_service__ = __webpack_require__("./src/app/services/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, validateService, authService, toastr, vcr, componentFactoryResolver, ngZone, appRef, options) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
        Object.assign(options, {
            maxShown: 1,
            positionClass: "toast-top-center",
            showCloseButton: true,
            toastLife: 3000
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    // ========== Toastr Messages =======================================
    RegisterComponent.prototype.showSuccess = function (msg) {
        this.toastr.success(msg, 'Success!');
    };
    RegisterComponent.prototype.showWarning = function (msg) {
        this.toastr.warning(msg, 'Alert!');
    };
    RegisterComponent.prototype.showError = function (msg) {
        this.toastr.error(msg, 'Oops!');
    };
    // ========= Submit and Cancel functions =====================
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        if (!this.validateService.validateRegister(user)) {
            this.showWarning('Please fill in all fields');
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.showWarning('Please use a valid email');
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            // this.showSuccess('You are registered and now can log in.');
            _this.showSuccess('You are registered and now can log in');
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.showError('Something went wrong, please try again');
            // this.showError();
            _this.router.navigate(['/register']);
        });
    };
    RegisterComponent.prototype.onCancelSubmit = function () {
        this.username = undefined;
        this.name = undefined;
        this.email = undefined;
        this.password = undefined;
        this.router.navigate(['/']);
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastOptions"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// transactionObject
//  store_name
//  item
//  roommates []
//  price
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        // =========== Http base uri and headers =============================
        // DEV_MODE
        this.baseUri = "http://localhost:8080";
        // DEPLOYMENT: ==================== OVER HERE DITA ===============>>>>>>>>
        // private baseUri:string="";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
    }
    // =========== Helper functions =====================================
    // Load the saved token from local storage into authToken val,
    // when a user logged in and came back to the website
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    // Store the generated token and user object into the local storage
    AuthService.prototype.storeUserToken = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    // Set the logged in to true
    AuthService.prototype.setLoggedIn = function () {
        this.loggedIn = true;
    };
    // Check if the user has logged in before and has a save token
    AuthService.prototype.isLoggedIn = function () {
        this.loadToken();
        (this.authToken) ? this.setLoggedIn() : this.loggedIn = false;
        return this.loggedIn;
    };
    AuthService.prototype.logout = function () {
        this.loggedIn = false;
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    // =========== HTTP request functions ===============================
    // POST: register
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.baseUri + '/register', user, { headers: this.headers });
    };
    // POST: login
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this.baseUri + '/login', user, { headers: this.headers });
    };
    // GET: user dashboard
    AuthService.prototype.userDashboard = function () {
        // Load the token into the authToken const:
        this.loadToken();
        console.log('userDashboard service: ', this.authToken);
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this.authToken);
        return this.http.get(this.baseUri + '/user/friends', { headers: this.headers });
    };
    // ========== Http Add, Update, Delete request functions =====
    AuthService.prototype.addContact = function (contact) {
        return this.http.post(this.baseUri + '/user/friends/add', contact, { headers: this.headers });
    };
    AuthService.prototype.updateContact = function (contact) {
        return this.http.put(this.baseUri + '/user/friends/update', contact, { headers: this.headers });
    };
    AuthService.prototype.deleteContact = function (contact) {
        var id = contact._id;
        return this.http.delete(this.baseUri + '/user/friends/delete/' + id, { headers: this.headers });
    };
    // ===== ROOMMATE REQUESTS ======
    AuthService.prototype.getRoommates = function () {
        this.loadToken();
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this.authToken);
        return this.http.get(this.baseUri + '/user/roommates', { headers: this.headers });
    };
    AuthService.prototype.findRoommates = function (roommate) {
        return this.http.post(this.baseUri + '/user/roommates/find', roommate, { headers: this.headers });
    };
    AuthService.prototype.addRoommate = function (roommate) {
        return this.http.post(this.baseUri + '/user/roommates/add', roommate, { headers: this.headers });
    };
    AuthService.prototype.addStaticRoommate = function (static_roommate) {
        return this.http.post(this.baseUri + '/user/roommates/add/static', { roommate: static_roommate }, { headers: this.headers });
    };
    AuthService.prototype.deleteRoommate = function (roommate) {
        return this.http.delete(this.baseUri + '/user/roommates/delete/' + roommate._id, { headers: this.headers });
    };
    // ===================== Setting =======================================================
    // GET: user profile
    AuthService.prototype.userProfile = function () {
        // Load the token into the authToken const:
        this.loadToken();
        console.log('debug mode: getting the token for postman: ' + this.authToken);
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this.authToken);
        return this.http.get(this.baseUri + '/user/setting', { headers: this.headers });
    };
    AuthService.prototype.changePassword = function (update_user) {
        return this.http.put(this.baseUri + '/user/setting/changepassword', update_user, { headers: this.headers });
    };
    // ====================== Receipts ======================================================
    // GET: getReceipts
    AuthService.prototype.getReceipts = function () {
        // Load the token into the authToken const:
        this.loadToken();
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this.authToken);
        return this.http.get(this.baseUri + '/user/receipts', { headers: this.headers });
    };
    // POST: save the receipts to the mLab database under "receipts" collection
    AuthService.prototype.addReceipts = function (receipts) {
        this.loadToken();
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this.authToken);
        return this.http.post(this.baseUri + '/user/receipts/upload', receipts, { headers: this.headers });
    };
    // ====================== Transactions ======================================================
    AuthService.prototype.get_names = function (friend_id) {
        // this.loadToken();
        console.log('auth ', friend_id);
        // this.headers = new HttpHeaders().set('Authorization', this.authToken);
        return this.http.put(this.baseUri + '/user/transactions/names', friend_id, { headers: this.headers });
    };
    // GET: getReceipts
    AuthService.prototype.getTransactions = function () {
        // Load the token into the authToken const:
        this.loadToken();
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this.authToken);
        return this.http.get(this.baseUri + '/user/transactions', { headers: this.headers });
    };
    // POST: save the receipts to the mLab database under "receipts" collection
    // addReceipts(receipts){
    //   this.loadToken();
    //   this.headers = new HttpHeaders().set('Authorization', this.authToken);
    //   return this.http.post(this.baseUri+'/user/receipts/upload', receipts, {headers:this.headers})
    // }
    // ====================== Dashboard ======================================================
    // GET request to the backend for dashboard Info
    AuthService.prototype.getDashboard = function () {
        // Load the token into the authToken const:
        this.loadToken();
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this.authToken);
        return this.http.get(this.baseUri + '/user/dashboard', { headers: this.headers });
    };
    AuthService.prototype.getTransactionByCode = function (info_code_name) {
        return this.http.post(this.baseUri + '/billcode', info_code_name, { headers: this.headers });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (roommateList, inputString) {
        // Check if the search inputString is empty/undefined
        if (inputString === undefined) {
            return roommateList;
        }
        // If there is input string to search:
        return roommateList.filter(function (retVal) {
            return retVal.name.toLowerCase().includes(inputString.toLowerCase());
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/services/guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuardService = /** @class */ (function () {
    function GuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    GuardService.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    GuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], GuardService);
    return GuardService;
}());



/***/ }),

/***/ "./src/app/services/loggedinguard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedinguardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedinguardService = /** @class */ (function () {
    function LoggedinguardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoggedinguardService.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['user/dashboard']);
            return false;
        }
        else {
            return true;
        }
    };
    LoggedinguardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoggedinguardService);
    return LoggedinguardService;
}());



/***/ }),

/***/ "./src/app/services/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Bring in firebase




var UploadService = /** @class */ (function () {
    function UploadService(ngFire, db, authService) {
        this.ngFire = ngFire;
        this.db = db;
        this.authService = authService;
        this.basePath = '/uploads';
        this.imageList = [];
    }
    UploadService.prototype.getList = function () {
        return;
    };
    UploadService.prototype.getImageLink = function () {
        return this.link;
    };
    UploadService.prototype.getImageId = function () {
        return this.key;
    };
    UploadService.prototype.getImageName = function () {
        return this.name;
    };
    UploadService.prototype.uploadFile = function (upload) {
        var _this = this;
        var new_name = Math.random().toString(36).substring(7) + new Date().getTime();
        console.log('New name is: ', new_name);
        // Get the the ref of storage in firebse console
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
        // Upload the file to storage
        var uploadTask = storageRef.child(this.basePath + "/" + new_name)
            .put(upload.file);
        // All of these are for the progress bar beauty >___<
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"].TaskEvent.STATE_CHANGED, 
        // Three observers
        // 1) State_changed observer
        function (snapshot) {
            //upload in progress
            upload.progress = Math.round((uploadTask.snapshot.bytesTransferred
                / uploadTask.snapshot.totalBytes) * 100);
            console.log(upload.progress + '%');
        }, 
        // 2) error observer
        function (err) {
            // upload failed
            console.log('Upload failed, pay ur electricity bill, err msg => : ', err);
        }, 
        // 3) success observer
        function () {
            upload.url = uploadTask.snapshot.downloadURL;
            upload.name = new_name;
            upload.createOn = new Date().toDateString();
            _this.saveFileData(upload);
        });
    };
    // This method will save the file/img data to the database
    // because we stored the img/file into the storage already.
    // Easy for later if we need to look up the file/img in the
    // firebase console, maybe delete/edit feature? :)
    // NOTE: *********** delete/edit the file/img in the firebase
    // console database.(FEATURES!)
    UploadService.prototype.saveFileData = function (upload) {
        var _this = this;
        this.db.list(this.basePath + "/").push(upload).then(function (res) {
            var picture = {
                pic_key: res.key,
                pic_name: upload.name,
                pic_link: upload.url,
                pic_date: upload.createOn
            };
            console.log("in upload servic: ", picture.pic_date);
            _this.imageList.push(picture);
            // console.log('this is the LIST ******', this.imageList);
            _this.image = picture;
            _this.addPictureToMlab();
        });
    };
    UploadService.prototype.clearList = function () {
        this.imageList.length = 0;
        console.log('this is the LIST ****** after cleared', this.imageList);
    };
    // Make an http POST request to the backend to save the file/img
    // to the mLab remote database
    UploadService.prototype.addPictureToMlab = function () {
        var _this = this;
        this.authService.addReceipts(this.image).subscribe(function (data) {
            console.log('Success Uploaded!', data);
            _this.finishedProgress = true;
        }, function (err) {
            console.log('Failed!! please not here, err msg: ', err);
        });
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFireModule */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/services/validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidationService.prototype.validateLogin = function (user) {
        if (user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidationService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidationService.prototype.validateAdd = function (user) {
        if ((user.firstName == undefined || user.lastName == undefined || user.preferredName == undefined || user.address == undefined || user.email == undefined || user.homePhone == undefined || user.cellPhone == undefined)) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/setting/setting.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/setting/setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"content\">\r\n  <div *ngIf=\"user\">\r\n      <h2 class=\"page-header\">Hi, {{user.name}}!</h2>\r\n      <ul class=\"list-group\">\r\n        <!-- <li class=\"list-group-item\"><b>ID</b>: {{user._id}}</li> -->\r\n        <li class=\"list-group-item\"><b>Name</b>: {{user.name}}</li>\r\n        <li class=\"list-group-item\"><b>Username</b>: {{user.username}}</li>\r\n        <li class=\"list-group-item\"><b>Email</b>: {{user.email}}</li>\r\n        <li class=\"list-group-item\"><b>Password</b>:\r\n          <button class=\"btn btn-info\" (click)=\"onChangeButton()\">Change Password</button></li>\r\n        <li *ngIf=\"buttonclicked\" class=\"list-group-item\">\r\n            <div class=\"form-group\">\r\n                <input placeholder=\"*New Password\" type=\"password\" name=\"newpassword\" [(ngModel)] = \"newpassword\" class=\"form-control\">\r\n            </div>\r\n            <button class=\"btn btn-info\" (click)=\"onSubmitButton()\">Submit</button>\r\n            <button class=\"btn btn-danger\" (click)=\"onCancelButton()\">Cancel</button>\r\n        </li>\r\n\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/setting/setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingComponent = /** @class */ (function () {
    function SettingComponent(authService, router, toastr, vcr, componentFactoryResolver, ngZone, appRef, options) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        // this is for hide/show the input form for changing password
        this.buttonclicked = false;
        this.toastr.setRootViewContainerRef(vcr);
        Object.assign(options, {
            maxShown: 1,
            positionClass: "toast-top-center",
            showCloseButton: true,
            toastLife: 3000
        });
        // =============== More Toastr message options here: ===============
        // toast-top-right (Default)
        // toast-top-center
        // toast-top-left
        // toast-top-full-width
        // toast-bottom-right
        // toast-bottom-center
        // toast-bottom-left
        // toast-bottom-full-width
    }
    SettingComponent.prototype.ngOnInit = function () {
        this.getUserProfile();
    };
    SettingComponent.prototype.showError = function (msg) {
        this.toastr.error(msg, 'Oops!');
    };
    SettingComponent.prototype.showSuccess = function (msg) {
        this.toastr.success(msg, 'Success!');
    };
    // Get the user data from the database:
    SettingComponent.prototype.getUserProfile = function () {
        var _this = this;
        this.authService.userProfile().subscribe(function (profile) {
            _this.user = profile['user'];
            _this.userID = profile['user']._id;
            _this.name = profile['user'].name;
            _this.username = profile['user'].username;
            _this.email = profile['user'].email;
            _this.password = profile['user'].password;
        }, function (err) {
            console.log('Failed to get the profile! err: ' + err);
            _this.router.navigate(['user/dashboard']);
            return false;
        });
    };
    SettingComponent.prototype.onChangeButton = function () {
        (this.buttonclicked == false) ? this.buttonclicked = true : this.buttonclicked = false;
    };
    SettingComponent.prototype.onCancelButton = function () {
        this.newpassword = undefined;
        this.buttonclicked = false;
    };
    SettingComponent.prototype.onSubmitButton = function () {
        var _this = this;
        // Get the data from the user with the new password to change it
        var update_user = {
            _id: this.userID,
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.newpassword,
            isRegistered: true,
            roommates: this.roommates
        };
        if (update_user.password == undefined) {
            this.showError("Please enter your new password!");
            return false;
        }
        // User authService (services/auth.service.ts) to make a call to the backend, routes/contacts.js
        this.authService.changePassword(update_user).subscribe(function (data) {
            _this.showSuccess('Password Updated!');
            // Get the new updated data
            _this.getUserProfile();
            // Clear out the input form and close/hide it
            _this.onCancelButton();
        }, function (err) {
            console.log('this is an err with http client ' + err);
        });
    };
    SettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__("./src/app/setting/setting.component.html"),
            styles: [__webpack_require__("./src/app/setting/setting.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastOptions"]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar -->\r\n\r\n\r\n<!-- <body> -->\r\n\r\n<div *ngIf=\"authService.isLoggedIn()\"\r\nclass=\"w3-sidebar w3-bar-block w3-xxlarge w3-animate-left\"\r\nstyle=\"width:15%; height:100%; min-width:70px;\" id=\"sidebar\">\r\n\r\n<!-- Dashboard -->\r\n  <a ui-sref=\"dashboard\"\r\n  [routerLink]=\"['/user/dashboard']\"\r\n  class=\"w3-bar-item w3-button w3-hover-white\"\r\n  [routerLinkActive]=\"['active']\"\r\n  [routerLinkActiveOptions] =\"{exact:true}\"\r\n\r\n  >\r\n  <img style=\"max-height: 40px; padding-left:5px;\" src=\"..\\..\\assets\\M.png\">\r\n  <p id=\"sidebar_text\">Dashboard</p></a>\r\n  <!-- End Dashboard -->\r\n\r\n  <!-- Roommates -->\r\n  <a ui-sref=\"friends\"\r\n  [routerLink]=\"['/user/friends']\"\r\n  class=\"w3-bar-item w3-button w3-hover-white\"\r\n  [routerLinkActive]=\"['active']\"\r\n  [routerLinkActiveOptions] =\"{exact:true}\"\r\n\r\n  >\r\n  <img style=\"max-height: 40px;\" src=\"..\\..\\assets\\friends.png\">\r\n  <p id=\"sidebar_text\">Roommates</p></a>\r\n  <!-- End Friends -->\r\n\r\n  <!-- Transactions -->\r\n  <a ui-sref=\"transactions\"\r\n  [routerLink]=\"['/user/transactions']\"\r\n  class=\"w3-bar-item w3-button w3-hover-white\"\r\n  [routerLinkActive]=\"['active']\"\r\n  [routerLinkActiveOptions] =\"{exact:true}\"\r\n\r\n  >\r\n  <img style=\"max-height: 40px;\" src=\"..\\..\\assets\\transactions.png\">\r\n  <p id=\"sidebar_text\">Transactions</p></a>\r\n  <!-- End Transactions -->\r\n\r\n  <!-- Receipts -->\r\n  <a ui-sref=\"receipts\"\r\n  [routerLink]=\"['/user/receipts']\"\r\n  class=\"w3-bar-item w3-button w3-hover-white\"\r\n  [routerLinkActive]=\"['active']\"\r\n  [routerLinkActiveOptions] =\"{exact:true}\"\r\n\r\n  >\r\n  <img style=\"max-height: 40px;\" src=\"..\\..\\assets\\receipts.png\">\r\n  <p id=\"sidebar_text\">Receipts</p></a>\r\n  <!-- End Receipts -->\r\n\r\n  <!-- Settings -->\r\n  <a ui-sref=\"settings\"\r\n  [routerLink]=\"['/user/setting']\"\r\n  class=\"w3-bar-item w3-button w3-hover-white\"\r\n  [routerLinkActive]=\"['active']\"\r\n  [routerLinkActiveOptions] =\"{exact:true}\"\r\n\r\n  >\r\n  <img style=\"max-height: 40px;\" src=\"..\\..\\assets\\settings.png\">\r\n  <p id=\"sidebar_text\">Settings</p></a>\r\n  <!-- End Settings -->\r\n\r\n  <!-- Goku Vs Jiren (Mastered Ultra Instinct) -->\r\n  <!-- [routerLink]=\"['/user/download']\" -->\r\n  <!-- Download -->\r\n  <a ui-sref=\"download\"\r\n  [routerLink]=\"['/user/download']\"\r\n  class=\"w3-bar-item w3-button w3-hover-white\"\r\n  [routerLinkActive]=\"['active']\"\r\n  [routerLinkActiveOptions] =\"{exact:true}\"\r\n\r\n  >\r\n  <!-- style=\"height: 80px; margin-top:26.94vh; border-bottom: 1px solid white;\" -->\r\n\r\n  <img style=\"max-height: 40px;\" src=\"..\\..\\assets\\download.png\">\r\n  <p id=\"sidebar_text\">Download</p></a>\r\n  <!-- End Download -->\r\n\r\n</div>\r\n\r\n\r\n<!-- </body> -->\r\n\r\n<!-- End sidebar -->\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService, toastr, vcr) {
        this.authService = authService;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    // ========== Toastr Messages =======================================
    SidebarComponent.prototype.showSuccess = function (msg) {
        this.toastr.info(msg, 'Success!');
    };
    SidebarComponent.prototype.onLogoutClick = function () {
        this.showSuccess('You have logged out!');
        this.authService.logout();
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/transactions/transactions.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/transactions/transactions.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid\" id=\"content\">\r\n  <h2>Transactions</h2>\r\n  <table class=\"table table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th><h6><strong>Number</strong></h6></th>\r\n        <th><h6><strong>Receipt Name</strong></h6></th>\r\n        <!-- <th><h6><strong>Receipt Link</strong></h6></th> -->\r\n        <th><h6><strong>Company Name</strong></h6></th>\r\n        <th><h6><strong>Type</strong></h6></th>\r\n        <th><h6><strong>Items</strong></h6></th>\r\n        <th><h6><strong>Prices</strong></h6></th>\r\n        <th><h6><strong>Total</strong></h6></th>\r\n        <th><h6><strong>Roommates</strong></h6></th>\r\n        <!-- <th><h6><strong>Friend's IDs</strong></h6></th>            -->\r\n        <th><h6><strong>Numfriends</strong></h6></th>\r\n        <th><h6><strong>Each Pay</strong></h6></th>\r\n        <th><h6><strong>Date</strong></h6></th>\r\n\r\n        <!-- <th><h6><strong>User_ID</strong></h6></th> -->\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n        <!-- <tr *ngFor=\"let contact of hack(contactlist); let i = index\"> -->\r\n        <tr *ngFor=\"let tran of hack(transactionsList); let friend of hack(testing);  let i = index\">\r\n          <td>{{i+1}}</td>\r\n          <td><a href=\"{{tran.receipt_link}}\">{{tran.group_name}}</a></td>\r\n          <!-- <td><a href=\"{{tran.receipt_link}}\">{{tran.receipt_link}}</a></td> -->\r\n          <td>{{tran.company_name}}</td>\r\n          <td>{{tran.transaction_type}}</td>\r\n          <td>{{tran.items}}</td>\r\n          <td>${{tran.prices}}</td>\r\n          <td>${{tran.total}}</td>\r\n          <td>{{tran.friend_names}}</td>\r\n          <!-- <td>{{tran.friends_ids}}</td>                                     -->\r\n          <td>{{tran.num_friends}}</td>\r\n          <td>${{tran.each_pay}}</td>\r\n          <td>{{tran.date}}</td>\r\n          <!-- <td>{{tran.user_id}}</td> -->\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/transactions/transactions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent(authService) {
        this.authService = authService;
    }
    TransactionsComponent.prototype.ngOnInit = function () {
        this.getAllTransactions();
    };
    TransactionsComponent.prototype.getAllTransactions = function () {
        var _this = this;
        this.authService.getTransactions().subscribe(function (transactions) {
            _this.user = transactions['user'];
            _this.userID = transactions['user']._id;
            _this.transactionsList = transactions['transactionList'];
            console.log('Sucess! got the transactions list from the backend.');
        }, function (err) {
            console.log('Failed to get the transactions list! err: ' + err);
            // this.router.navigate(['']);
            return false;
        });
    };
    TransactionsComponent.prototype.getFriendNames = function (inputname) {
        console.log('**Input name: ', inputname);
        var newInput = {
            friend_id: inputname
        };
        this.authService.get_names(newInput).subscribe(function (data) {
            console.log('Return data: ', data['name']);
        }, function (err) {
            console.log('Failed to get the names from the friend\'s ids, ', err);
            return false;
        });
    };
    TransactionsComponent.prototype.hack = function (list) {
        return list;
    };
    TransactionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transactions',
            template: __webpack_require__("./src/app/transactions/transactions.component.html"),
            styles: [__webpack_require__("./src/app/transactions/transactions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], TransactionsComponent);
    return TransactionsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDLmiEfb3saF_A2xYBhGTKN0sqrg2VPlgA",
        authDomain: "rumi-website-mobile-app.firebaseapp.com",
        databaseURL: "https://rumi-website-mobile-app.firebaseio.com",
        projectId: "rumi-website-mobile-app",
        storageBucket: "rumi-website-mobile-app.appspot.com",
        messagingSenderId: "391392634983"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map