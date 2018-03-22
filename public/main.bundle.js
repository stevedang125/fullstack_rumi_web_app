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

module.exports = "<p>\n  about works! yayyyyyyyyy\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "\n<!-- Nav bar -->\n<app-navbar></app-navbar>\n\n<!-- Other routes -->\n<router-outlet></router-outlet>\n\n  \n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__friends_friends_component__ = __webpack_require__("./src/app/friends/friends.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__transactions_transactions_component__ = __webpack_require__("./src/app/transactions/transactions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__receipts_receipts_component__ = __webpack_require__("./src/app/receipts/receipts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__setting_setting_component__ = __webpack_require__("./src/app/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_filter_pipe__ = __webpack_require__("./src/app/services/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_validation_service__ = __webpack_require__("./src/app/services/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_guard_service__ = __webpack_require__("./src/app/services/guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_loggedinguard_service__ = __webpack_require__("./src/app/services/loggedinguard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import array:



// import array: (Messages)


// declarations array:











// provider array:





// all the routes:
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_loggedinguard_service__["a" /* LoggedinguardService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_20__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__services_loggedinguard_service__["a" /* LoggedinguardService */]] },
    { path: 'user/dashboard', component: __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_guard_service__["a" /* GuardService */]] },
    { path: 'user/friends', component: __WEBPACK_IMPORTED_MODULE_11__friends_friends_component__["a" /* FriendsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_guard_service__["a" /* GuardService */]] },
    { path: 'user/transactions', component: __WEBPACK_IMPORTED_MODULE_12__transactions_transactions_component__["a" /* TransactionsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_guard_service__["a" /* GuardService */]] },
    { path: 'user/receipts', component: __WEBPACK_IMPORTED_MODULE_13__receipts_receipts_component__["a" /* ReceiptsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_guard_service__["a" /* GuardService */]] },
    { path: 'user/setting', component: __WEBPACK_IMPORTED_MODULE_14__setting_setting_component__["a" /* SettingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_guard_service__["a" /* GuardService */]] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_16__about_about_component__["a" /* AboutComponent */] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__friends_friends_component__["a" /* FriendsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__transactions_transactions_component__["a" /* TransactionsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__receipts_receipts_component__["a" /* ReceiptsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__setting_setting_component__["a" /* SettingComponent */],
                __WEBPACK_IMPORTED_MODULE_15__services_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_16__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_17__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_20__login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_19__services_validation_service__["a" /* ValidationService */], __WEBPACK_IMPORTED_MODULE_21__services_guard_service__["a" /* GuardService */], __WEBPACK_IMPORTED_MODULE_22__services_loggedinguard_service__["a" /* LoggedinguardService */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/friends/friends.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/friends/friends.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <!-- Search -->\n        <!-- <div class=\"card\"> -->\n            <form>\n                <!-- <div class=\"card-body\"> -->\n                  <!-- <h6 class=\"card-title\"> -->\n                  <h6>\n                    <strong>Search</strong>\n                  </h6>\n                  \n                  <table class=\"table table-hover\">\n                    <tbody>\n                      <tr>\n                        <td>\n                          <div class=\"form-group\">\n                              <input placeholder=\"*Enter Name\" type=\"text\" name=\"inputString\" [(ngModel)] = \"inputString\" class=\"form-control\">\n                          </div>\n                        </td>\n                      </tr>\n                      <tr>\n                        <button class=\"btn btn-success\" (click)=\"search_contact()\">Search</button>&nbsp;\n                        <button class=\"btn btn-danger\" (click)=\"clearSearch()\">Clear</button>\n                      </tr>\n                    </tbody>\n                  </table>\n                <!-- </div> -->\n              </form>\n          <!-- </div> -->\n        <!-- End Search -->\n  \n        <!-- Add -->\n        <form>\n            <!-- <div class=\"card-body half\"> -->\n              <!-- <h4 class=\"card-title\"><strong>Add Contact</strong></h4> -->\n              <h6><strong>Add Contact</strong></h6>\n              <table class=\"table table-hover\">\n                <tbody>\n                  <tr>\n                    <td>\n                      <div class=\"form-group\">\n                        <!-- <label><h6><strong>Firstname:</strong></h6></label> -->\n                        <input placeholder=\"*Enter Firstname\" type=\"text\" name=\"firstName\" [(ngModel)] = \"firstName\" class=\"form-control\">\n                      </div>\n                      <div class=\"form-group\">\n                          <!-- <label><h6><strong>Lastname:</strong></h6></label> -->\n                          <input placeholder=\"*Enter Lastname\" type=\"text\" name=\"lastName\" [(ngModel)] = \"lastName\" class=\"form-control\">\n                      </div>\n                      <div class=\"form-group\">\n                          <!-- <label><h6><strong>Preferred Name:</strong></h6></label> -->\n                          <input placeholder=\"*Enter Preferred Name\" type=\"text\" name=\"preferredName\" [(ngModel)] = \"preferredName\" class=\"form-control\">\n                      </div>\n                      <div class=\"form-group\">\n                          <!-- <label><h6><strong>Address:</strong></h6></label> -->\n                          <input placeholder=\"*Enter Address\" type=\"text\" name=\"address\" [(ngModel)] = \"address\" class=\"form-control\">\n                      </div>\n                      <div class=\"form-group\">\n                          <!-- <label><h6><strong>Email:</strong></h6></label> -->\n                          <input placeholder=\"*Enter Email\" type=\"text\" name=\"email\" [(ngModel)] = \"email\" class=\"form-control\">\n                      </div>\n                      <div class=\"form-group\">\n                          <!-- <label><h6><strong>Home Phone:</strong></h6></label> -->\n                          <input placeholder=\"*Enter Home Phone\" type=\"text\" name=\"homePhone\" [(ngModel)] = \"homePhone\" class=\"form-control\">\n                      </div>\n                      <div class=\"form-group\">\n                          <!-- <label><h6><strong>Cell Phone:</strong></h6></label> -->\n                          <input placeholder=\"*Enter Cell Phone\" type=\"text\" name=\"cellPhone\" [(ngModel)] = \"cellPhone\" class=\"form-control\">\n                      </div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                        <!-- <input type=\"submit\" value=\"Submit\" class=\"btn btn-success\"> -->\n                        <button class=\"btn btn-success\" (click)=\"onSubmitButton()\">Submit</button>&nbsp;\n                        <button class=\"btn btn-danger\" (click)=\"clear()\">Clear</button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            <!-- </div> -->\n          </form>\n        <!-- End add -->\n      </div>\n  \n  \n      <div class=\"col-md-10\">\n        <!-- Contact list -->\n        <!-- Contact list -->\n    <!-- <div class=\"card\"> -->\n        <!-- <div class=\"card-body\"> -->\n          <!-- <h4 class=\"card-title\"><strong>Contact List</strong></h4> -->\n          <h6><strong>Contact List</strong></h6>\n          <table class=\"table table-hover\">\n            <thead>\n              <tr>\n                <th><h6><strong>Number</strong></h6></th>\n                <th><h6><strong>Firstname</strong></h6></th>\n                <th><h6><strong>Lastname</strong></h6></th>\n                <th><h6><strong>Preferred Name</strong></h6></th>\n                <th><h6><strong>Address</strong></h6></th>\n                <th><h6><strong>Email</strong></h6></th>\n                <th><h6><strong>Home Phone</strong></h6></th>\n                <th><h6><strong>Cell Phone</strong></h6></th>\n                <th><h6><strong>Options</strong></h6></th>\n              </tr>\n            </thead>\n            <tbody>\n                <!-- <tr *ngFor=\"let contact of hack(contactlist); let i = index\"> -->\n                <tr *ngFor=\"let contact of hack(contactlist) | filter:inputString; let i = index\">\n                  <td>{{i+1}}</td>\n                  <td>{{contact.firstName}}</td>\n                  <td>{{contact.lastName}}</td>\n                  <td>{{contact.preferredName}}</td>\n                  <td>{{contact.address}}</td>\n                  <td>{{contact.email}}</td>\n                  <td>{{contact.homePhone}}</td>\n                  <td>{{contact.cellPhone}}</td>\n                  <td>\n                      <button class=\"btn btn-danger\" (click)=\"onDeleteButton(contact)\">Delete</button>&nbsp;\n                      <button class=\"btn btn-info\" (click)=\"onEditButton(contact)\" >Edit</button>\n                  </td>\n              </tr>\n            </tbody>\n          </table>\n        <!-- </div> -->\n  \n        <!-- End of contact list -->\n      </div>\n    </div>\n  </div>\n  \n  \n"

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
    function FriendsComponent(authService, router, toastr, vcr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        // Initialize theses for adding a new contact
        this._id = null;
        this.toastr.setRootViewContainerRef(vcr);
    }
    FriendsComponent.prototype.ngOnInit = function () {
        this.getDashboard();
    };
    // ========= Helper functions ============================
    FriendsComponent.prototype.clear = function () {
        this._id = undefined;
        this.firstName = undefined;
        this.lastName = undefined;
        this.preferredName = undefined;
        this.address = undefined;
        this.email = undefined;
        this.homePhone = undefined;
        this.cellPhone = undefined;
        this.user_id = undefined;
        // alert('Cleared!');
    };
    FriendsComponent.prototype.clearSearch = function () {
        this.inputString = undefined;
        // alert('Cleared Search!');
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
            // alert('Success! Dashboard!'+this.user+","+this.userID+","+this.contactlist);
        }, function (err) {
            console.log('Failed to get the dashboard! err: ' + err);
            _this.router.navigate(['']);
            return false;
        });
    };
    // ============= Add, Search, Edit, Delete =================
    FriendsComponent.prototype.onSubmitButton = function () {
        var new_contact = {
            _id: this._id,
            firstName: this.firstName,
            lastName: this.lastName,
            preferredName: this.preferredName,
            address: this.address,
            email: this.email,
            homePhone: this.homePhone,
            cellPhone: this.cellPhone,
            user_id: this.userID
        };
        if (new_contact._id == null) {
            this.add_contact(new_contact);
        }
        else {
            if (new_contact._id != null) {
                this.edit_contact(new_contact);
            }
        }
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
        // alert('A contact is being updated!');
    };
    FriendsComponent.prototype.add_contact = function (newContact) {
        this.authService.addContact(newContact).subscribe(function (data) {
            // alert('Contact added!');
        }, function (err) {
            alert('Failed to add a contact!' + err);
        });
        this.clear();
        // Double powerful fetch, there won't be a hit and miss!! 
        this.getDashboard();
        this.getDashboard();
    };
    FriendsComponent.prototype.edit_contact = function (existing_contact) {
        this.authService.updateContact(existing_contact).subscribe(function (data) {
            // alert('Updated Contact!');
        }, function (err) {
            alert('Failed to update a contact!' + err);
        });
        this.clear();
        // Feel the power of the twin!! 
        this.getDashboard();
        this.getDashboard();
    };
    FriendsComponent.prototype.search_contact = function () {
        if (this.inputString == undefined) {
            // alert('Empty search!');
            return false;
        }
    };
    FriendsComponent.prototype.onDeleteButton = function (contact) {
        var _this = this;
        this.authService.deleteContact(contact).subscribe(function (data) {
            _this.contactlist.splice(_this.contactlist.indexOf(contact), 1);
            // alert('Deleted a contact');
        }, function (err) {
            alert('Failed to delete a contact!' + err);
        });
    };
    FriendsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-friends',
            template: __webpack_require__("./src/app/friends/friends.component.html"),
            styles: [__webpack_require__("./src/app/friends/friends.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
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

module.exports = "<div class=\"row\" id=\"row\">\n    <div class=\"col\" id=\"col\">\n        <img src=\"../../assets/rumi logo.png\" width=\"400\" href=\"/\" class=\"align-self-center\">\n    </div>\n  \n    <div class=\"col align-self-center\" id=\"col\">\n      <!-- {{ tagline }} -->\n      <p>\n      <p>\n        <a ui-sref=\"register\" [routerLink]=\"['/register']\" class=\"btn\" id=\"button_main_color\">Get Started!</a>\n        <a ui-sref=\"download\" href=\"https://www.youtube.com/watch?v=vTcf4Io209E\" class=\"btn\" id=\"button_main_color\">Download</a>\n      </p>\n      <p>\n      <p>Already have an account?  <a ui-sref=\"login\" [routerLink]=\"['/login']\" >Login here</a>.\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "\n<div class=\"row\" id=\"user_form\" *ngIf=\"!authService.isLoggedIn()\">\n  <div class=\"col align-self-center\">\n    <h2 class=\"page-header\">Login</h2>\n    <!-- Start form -->\n    <form class=\"form-signin\">\n\n      <!-- Username -->\n      <div class=\"form-group row\">\n        <label for=\"Username\" class=\"col-sm-3 col-form-label\">Username</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"*michaelscott\" [(ngModel)]=\"username\" name=\"username\">\n        </div>\n      </div>\n\n      <!-- Password -->\n      <div class=\"form-group row\">\n        <label for=\"Password\" class=\"col-sm-3 col-form-label\">Password</label>\n        <div class=\"col-sm-9\">\n          <input type=\"password\" class=\"form-control\" placeholder=\"******\" [(ngModel)]=\"password\" name=\"password\">\n        </div>\n      </div>\n\n      <!-- Buttons -->\n      <button class=\"btn btn-success\" (click)=\"onLoginSubmit()\">Login</button>&nbsp;\n      <button class=\"btn btn-danger\" (click)=\"onCancelSubmit()\">Cancel</button><br><br>\n\n      <!-- Navigate back to register page -->\n      <p>Don't have an account yet? <a [routerLink] = \"['/register']\">Register Here</a></p> \n    </form>\n\n  </div>\n</div>\n      "

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
    function LoginComponent(router, validateService, authService, toastr, vcr) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // ========== Toastr Messages =======================================
    LoginComponent.prototype.showSuccess = function (msg) {
        this.toastr.success(msg, 'Success!');
    };
    LoginComponent.prototype.showWarning = function (msg) {
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
            _this.showError('Oh no! Something went wrong. Please try again!');
            console.log(err);
            _this.router.navigate(['/login']);
        });
    };
    LoginComponent.prototype.onCancelSubmit = function () {
        this.username = undefined;
        this.password = undefined;
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
            __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = " \n<!-- Navbar -->\n<nav class=\"navbar navbar-expand-lg navbar-dark justify-content-between\" id=\"navbar\">\n  <!-- Rumi logo -->\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\"><img src=\"../assets/rumi logo.png\" width=\"50\" alt=\"\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <!-- Links -->\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n\n      <!-- Left links -->\n      <ul class=\"navbar-nav mr-auto navbar-left\">\n        \n        <!-- Home -->\n        <li class=\"nav-item active\"\n        [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions] =\"{exact:true}\">\n          <a class=\"nav-link btn\" [routerLink]=\"['/']\">Home</a>\n        </li>\n        \n        &nbsp;&nbsp;\n\n        <!-- About -->\n        <li class=\"nav-item active\"\n        [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions] =\"{exact:true}\">\n          <a class=\"nav-link btn\" [routerLink]=\"['/about']\">About</a>\n        </li>\n      </ul>\n      <!-- End left links -->\n\n      <!-- Right links -->\n      <ul class=\"navbar-nav navbar-right\">\n\n        <!-- After logged in: Dashboard -->\n        <li class=\"nav-item active\"\n        [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions] =\"{exact:true}\"\n        *ngIf=\"authService.isLoggedIn()\">\n          <a class=\"nav-link btn\" [routerLink]=\"['/user/dashboard']\">Dashboard <span class=\"sr-only\">(current)</span></a>\n        </li>\n        &nbsp;&nbsp;\n\n        <!-- After logged in: Friends -->\n        <li class=\"nav-item active\"\n        [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions] =\"{exact:true}\"\n        *ngIf=\"authService.isLoggedIn()\">\n          <a class=\"nav-link btn\" [routerLink]=\"['/user/friends']\">Friends</a>\n        </li>\n        &nbsp;&nbsp;\n\n        <!-- After logged in: Transactions -->\n        <li class=\"nav-item active\"\n        [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions] =\"{exact:true}\"\n        *ngIf=\"authService.isLoggedIn()\">\n          <a class=\"nav-link btn\" [routerLink]=\"['/user/transactions']\">Transactions</a>\n        </li>\n        &nbsp;&nbsp;\n\n        <!-- After logged in: Receipts -->\n        <li class=\"nav-item active\"\n        [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions] =\"{exact:true}\"\n        *ngIf=\"authService.isLoggedIn()\">\n          <a class=\"nav-link btn\" [routerLink]=\"['/user/receipts']\">Receipts</a>\n        </li>\n        &nbsp;&nbsp;\n\n        <!-- After logged in: Setting -->\n        <li class=\"nav-item active\"\n        [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions] =\"{exact:true}\"\n        *ngIf=\"authService.isLoggedIn()\">\n          <a class=\"nav-link btn\" [routerLink]=\"['/user/setting']\">Setting</a>\n        </li>\n        &nbsp;&nbsp;\n\n        <!-- After logged in: Register wont show -->\n        <li class=\"nav-item active\"\n        [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions] =\"{exact:true}\"\n        *ngIf=\"!authService.isLoggedIn()\">\n          <a class=\"nav-link btn\" [routerLink]=\"['/register']\">Register</a>\n        </li>\n        &nbsp;&nbsp;\n\n         <!-- Before logged in: Log out wont show -->\n        <li class=\"nav-item active\"\n        *ngIf=\"authService.isLoggedIn()\">\n          <a class=\"nav-link btn\" [routerLink]=\"['/']\" (click)=\"onLogoutClick()\">Log out</a>\n        </li>\n        \n      </ul>\n      <!-- End right links -->\n  \n    </div>\n\n</nav>"

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

module.exports = ""

/***/ }),

/***/ "./src/app/receipts/receipts.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  receipts works!\n</p>\n"

/***/ }),

/***/ "./src/app/receipts/receipts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiptsComponent; });
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

var ReceiptsComponent = /** @class */ (function () {
    function ReceiptsComponent() {
    }
    ReceiptsComponent.prototype.ngOnInit = function () {
    };
    ReceiptsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-receipts',
            template: __webpack_require__("./src/app/receipts/receipts.component.html"),
            styles: [__webpack_require__("./src/app/receipts/receipts.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "\n<div class=\"row\" id=\"user_form\" *ngIf=\"!authService.isLoggedIn()\">\n    <div class=\"col align-self-center\">\n    <h2 class=\"page-header\">Register</h2>\n    <form class=\"form-signin\">\n        <!-- <div class=\"form-group row\">\n          <label for=\"firstname\" class=\"col-sm-3 col-form-label\">First Name</label>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"*Michael\" [(ngModel)]=\"firstname\" name=\"firstname\">\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"lastname\" class=\"col-sm-3 col-form-label\">Last Name</label>\n            <div class=\"col-sm-9\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"*Scott\" [(ngModel)]=\"lastname\" name=\"lastname\">\n            </div>\n        </div> -->\n        \n        <div class=\"form-group row\">\n            <label for=\"name\" class=\"col-sm-3 col-form-label\">Name</label>\n            <div class=\"col-sm-9\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"*Michael Scott\" [(ngModel)]=\"name\" name=\"name\">\n            </div>\n        </div>\n    \n        <div class=\"form-group row\">\n            <label for=\"email\" class=\"col-sm-3 col-form-label\">Email</label>\n            <div class=\"col-sm-9\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"*mscott@dundermifflin.com\" [(ngModel)]=\"email\" name=\"email\">\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"username\" class=\"col-sm-3 col-form-label\">Username</label>\n            <div class=\"col-sm-9\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"*michaelscott\" [(ngModel)]=\"username\" name=\"username\">\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"password\" class=\"col-sm-3 col-form-label\">Password</label>\n            <div class=\"col-sm-9\">\n              <input type=\"password\" class=\"form-control\" placeholder=\"*******\" [(ngModel)]=\"password\" name=\"password\">\n            </div>\n        </div>\n\n      </form>\n      \n      <button class=\"btn btn-success\" (click)=\"onRegisterSubmit()\">Register</button>&nbsp;\n      <button class=\"btn btn-danger\" (click)=\"onCancelSubmit()\">Cancel</button><br><br>\n      <p>Already have an account? <a [routerLink] = \"['/login']\">Login Here</a></p>\n \n</div>\n</div>"

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
    function RegisterComponent(router, validateService, authService, toastr, vcr) {
        this.router = router;
        this.validateService = validateService;
        this.authService = authService;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vcr);
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
            __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
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


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        // =========== Http base uri and headers =============================
        this.baseUri = "http://localhost:8080";
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
    // GET: user profile
    AuthService.prototype.userProfile = function () {
        // Load the token into the authToken const:
        this.loadToken();
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', this.authToken);
        return this.http.get(this.baseUri + '/user/setting', { headers: this.headers });
    };
    // GET: user dashboard
    AuthService.prototype.userDashboard = function () {
        // Load the token into the authToken const:
        this.loadToken();
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
    FilterPipe.prototype.transform = function (contactlist, inputString) {
        // Check if the search inputString is empty/undefined
        if (inputString === undefined) {
            return contactlist;
        }
        // If there is input string to search:
        return contactlist.filter(function (retVal) {
            return retVal.firstName.toLowerCase().includes(inputString.toLowerCase());
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

module.exports = "<p>\n  setting works!\n</p>\n"

/***/ }),

/***/ "./src/app/setting/setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
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

var SettingComponent = /** @class */ (function () {
    function SettingComponent() {
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    SettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__("./src/app/setting/setting.component.html"),
            styles: [__webpack_require__("./src/app/setting/setting.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/transactions/transactions.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/transactions/transactions.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  transactions works!\n</p>\n"

/***/ }),

/***/ "./src/app/transactions/transactions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsComponent; });
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

var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent() {
    }
    TransactionsComponent.prototype.ngOnInit = function () {
    };
    TransactionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transactions',
            template: __webpack_require__("./src/app/transactions/transactions.component.html"),
            styles: [__webpack_require__("./src/app/transactions/transactions.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
    production: false
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