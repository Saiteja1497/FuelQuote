(self["webpackChunkangular_signup_verification_boilerplate"] = self["webpackChunkangular_signup_verification_boilerplate"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 3041:
/*!************************************************!*\
  !*** ./src/app/_components/alert.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/_models */ 3027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/_services */ 9949);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);






function AlertComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AlertComponent_div_0_div_2_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const alert_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r3.removeAlert(alert_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r1.cssClasses(alert_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", alert_r2.message, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AlertComponent_div_0_div_2_Template, 4, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.alerts);
} }
class AlertComponent {
    constructor(router, alertService) {
        this.router = router;
        this.alertService = alertService;
        this.id = 'default-alert';
        this.fade = true;
        this.alerts = [];
    }
    ngOnInit() {
        // subscribe to new alert notifications
        this.alertSubscription = this.alertService.onAlert(this.id)
            .subscribe(alert => {
            // clear alerts when an empty alert is received
            if (!alert.message) {
                // filter out alerts without 'keepAfterRouteChange' flag
                this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);
                // remove 'keepAfterRouteChange' flag on the rest
                this.alerts.forEach(x => delete x.keepAfterRouteChange);
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // auto close alert if required
            if (alert.autoClose) {
                setTimeout(() => this.removeAlert(alert), 3000);
            }
        });
        // clear alerts on location change
        this.routeSubscription = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationStart) {
                this.alertService.clear(this.id);
            }
        });
    }
    ngOnDestroy() {
        // unsubscribe to avoid memory leaks
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }
    removeAlert(alert) {
        // check if already removed to prevent error on auto close
        if (!this.alerts.includes(alert))
            return;
        if (this.fade) {
            // fade out alert
            alert.fade = true;
            // remove alert after faded out
            setTimeout(() => {
                this.alerts = this.alerts.filter(x => x !== alert);
            }, 250);
        }
        else {
            // remove alert
            this.alerts = this.alerts.filter(x => x !== alert);
        }
    }
    cssClasses(alert) {
        if (!alert)
            return;
        const classes = ['alert', 'alert-dismissable'];
        const alertTypeClass = {
            [_app_models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Success]: 'alert alert-success',
            [_app_models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Error]: 'alert alert-danger',
            [_app_models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Info]: 'alert alert-info',
            [_app_models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Warning]: 'alert alert-warning'
        };
        classes.push(alertTypeClass[alert.type]);
        if (alert.fade) {
            classes.push('fade');
        }
        return classes.join(' ');
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__.AlertService)); };
AlertComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["alert"]], inputs: { id: "id", fade: "fade" }, decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "m-3"], [3, "class", 4, "ngFor", "ngForOf"], [1, "close", 3, "click"], [3, "innerHTML"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.alerts.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], encapsulation: 2 });


/***/ }),

/***/ 3130:
/*!**************************************!*\
  !*** ./src/app/_components/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* reexport safe */ _alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent)
/* harmony export */ });
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ 3041);



/***/ }),

/***/ 5197:
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/_services */ 9949);



class AuthGuard {
    constructor(router, accountService) {
        this.router = router;
        this.accountService = accountService;
    }
    canActivate(route, state) {
        const account = this.accountService.accountValue;
        if (account) {
            if (route.data.roles && !route.data.roles.includes(account.Role)) {
                // role not authorized so redirect to home page
                this.router.navigate(['/admin']);
                return false;
            }
            return true;
        }
        // not logged in so redirect to login page with the return url 
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.AccountService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7901:
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/_services */ 9949);




class ErrorInterceptor {
    constructor(accountService) {
        this.accountService = accountService;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
            if ([401, 403].includes(err.status) && this.accountService.accountValue) {
                // auto logout if 401 or 403 response returned from api
                this.accountService.logout();
            }
            const error = (err && err.error && err.error.message) || err.statusText;
            console.error(err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.AccountService)); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ 9067:
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* reexport safe */ _auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard),
/* harmony export */   "ErrorInterceptor": () => (/* reexport safe */ _error_interceptor__WEBPACK_IMPORTED_MODULE_1__.ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ 5197);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ 7901);




/***/ }),

/***/ 9469:
/*!************************************!*\
  !*** ./src/app/_models/account.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Account": () => (/* binding */ Account)
/* harmony export */ });
class Account {
}


/***/ }),

/***/ 4653:
/*!**********************************!*\
  !*** ./src/app/_models/alert.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Alert": () => (/* binding */ Alert),
/* harmony export */   "AlertType": () => (/* binding */ AlertType)
/* harmony export */ });
class Alert {
    constructor(init) {
        Object.assign(this, init);
    }
}
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ 9468:
/*!*****************************************!*\
  !*** ./src/app/_models/api-response.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiResponseModel": () => (/* binding */ ApiResponseModel)
/* harmony export */ });
class ApiResponseModel {
}


/***/ }),

/***/ 3362:
/*!***********************************************!*\
  !*** ./src/app/_models/fuel-quote-request.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2012:
/*!***************************************!*\
  !*** ./src/app/_models/fuel-quote.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 3027:
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Account": () => (/* reexport safe */ _account__WEBPACK_IMPORTED_MODULE_0__.Account),
/* harmony export */   "Alert": () => (/* reexport safe */ _alert__WEBPACK_IMPORTED_MODULE_1__.Alert),
/* harmony export */   "AlertType": () => (/* reexport safe */ _alert__WEBPACK_IMPORTED_MODULE_1__.AlertType),
/* harmony export */   "Role": () => (/* reexport safe */ _role__WEBPACK_IMPORTED_MODULE_2__.Role),
/* harmony export */   "ApiResponseModel": () => (/* reexport safe */ _api_response__WEBPACK_IMPORTED_MODULE_4__.ApiResponseModel),
/* harmony export */   "LoginRequestModel": () => (/* reexport safe */ _login_model__WEBPACK_IMPORTED_MODULE_5__.LoginRequestModel)
/* harmony export */ });
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account */ 9469);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert */ 4653);
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role */ 3224);
/* harmony import */ var _fuel_quote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fuel-quote */ 2012);
/* harmony import */ var _api_response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-response */ 9468);
/* harmony import */ var _login_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.model */ 5975);
/* harmony import */ var _fuel_quote_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fuel-quote-request */ 3362);









/***/ }),

/***/ 5975:
/*!****************************************!*\
  !*** ./src/app/_models/login.model.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRequestModel": () => (/* binding */ LoginRequestModel)
/* harmony export */ });
class LoginRequestModel {
}


/***/ }),

/***/ 3224:
/*!*********************************!*\
  !*** ./src/app/_models/role.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Role": () => (/* binding */ Role)
/* harmony export */ });
var Role;
(function (Role) {
    Role["User"] = "User";
    Role["Admin"] = "Admin";
})(Role || (Role = {}));


/***/ }),

/***/ 7110:
/*!**********************************************!*\
  !*** ./src/app/_services/account.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3882);






const baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/Clients`;
class AccountService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.accountSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.account = this.accountSubject.asObservable();
    }
    get accountValue() {
        return this.accountSubject.value;
    }
    login(loginRequestModel) {
        return this.http.post(`${baseUrl}/authenticate`, loginRequestModel)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(account => {
            this.accountSubject.next(account.Result);
            return account;
        }));
    }
    logout() {
        this.accountSubject.next(null);
        this.router.navigate(['/account/login']);
    }
    register(account) {
        return this.http.post(`${baseUrl}/register`, account);
    }
    update(params) {
        return this.http.post(`${baseUrl}/update`, params)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((account) => {
            console.log('account :', account);
            // update the current account if it was updated
            if (account.id === this.accountValue.Id) {
                account = Object.assign(Object.assign({}, this.accountValue), account);
                this.accountSubject.next(account);
            }
            return account;
        }));
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
AccountService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1585:
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/_models */ 3027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




class AlertService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.defaultId = 'default-alert';
    }
    // enable subscribing to alerts observable
    onAlert(id = this.defaultId) {
        return this.subject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(x => x && x.id === id));
    }
    // convenience methods
    success(message, options) {
        this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_0__.Alert(Object.assign(Object.assign({}, options), { type: _app_models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Success, message })));
    }
    error(message, options) {
        this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_0__.Alert(Object.assign(Object.assign({}, options), { type: _app_models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Error, message })));
    }
    info(message, options) {
        this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_0__.Alert(Object.assign(Object.assign({}, options), { type: _app_models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Info, message })));
    }
    warn(message, options) {
        this.alert(new _app_models__WEBPACK_IMPORTED_MODULE_0__.Alert(Object.assign(Object.assign({}, options), { type: _app_models__WEBPACK_IMPORTED_MODULE_0__.AlertType.Warning, message })));
    }
    // core alert method
    alert(alert) {
        alert.id = alert.id || this.defaultId;
        alert.autoClose = (alert.autoClose === undefined ? true : alert.autoClose);
        this.subject.next(alert);
    }
    // clear alerts
    clear(id = this.defaultId) {
        this.subject.next(new _app_models__WEBPACK_IMPORTED_MODULE_0__.Alert({ id }));
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7783:
/*!*************************************************!*\
  !*** ./src/app/_services/fuel-quote.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FuelQuoteService": () => (/* binding */ FuelQuoteService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3882);



const baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/FuelQuote`;
class FuelQuoteService {
    constructor(http) {
        this.http = http;
    }
    Add(fuelQuote) {
        return this.http.post(`${baseUrl}/add`, fuelQuote);
    }
    GetHistory(fuelQuote) {
        return this.http.post(`${baseUrl}/getHistory`, fuelQuote);
    }
}
FuelQuoteService.ɵfac = function FuelQuoteService_Factory(t) { return new (t || FuelQuoteService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
FuelQuoteService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FuelQuoteService, factory: FuelQuoteService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9949:
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* reexport safe */ _account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService),
/* harmony export */   "AlertService": () => (/* reexport safe */ _alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService),
/* harmony export */   "FuelQuoteService": () => (/* reexport safe */ _fuel_quote_service__WEBPACK_IMPORTED_MODULE_2__.FuelQuoteService)
/* harmony export */ });
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.service */ 7110);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ 1585);
/* harmony import */ var _fuel_quote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fuel-quote.service */ 7783);





/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_helpers */ 9067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const accountModule = () => __webpack_require__.e(/*! import() */ "src_app_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 3879)).then(x => x.AccountModule);
const profileModule = () => __webpack_require__.e(/*! import() */ "src_app_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 4523)).then(x => x.ProfileModule);
const routes = [
    {
        path: '',
        redirectTo: 'account/login',
        pathMatch: 'full'
    },
    { path: 'account', loadChildren: accountModule },
    { path: 'admin', loadChildren: profileModule, canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_models */ 3027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services */ 9949);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 8055);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _components_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/alert.component */ 3041);







const _c0 = function (a0) { return { "bg-light": a0 }; };
class AppComponent {
    constructor(accountService, primengConfig) {
        this.accountService = accountService;
        this.primengConfig = primengConfig;
        this.Role = _models__WEBPACK_IMPORTED_MODULE_0__.Role;
        this.accountService.account.subscribe(x => this.account = x);
        this.primengConfig.ripple = true;
    }
    logout() {
        this.accountService.logout();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app"]], decls: 4, vars: 3, consts: [[1, "app-container", 3, "ngClass"], ["name", "subnav"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, ctx.account));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _components_alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponent], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_helpers */ 9067);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ 3130);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 6536);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services */ 9949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);




// used to create fake backend







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS, useClass: _helpers__WEBPACK_IMPORTED_MODULE_1__.ErrorInterceptor, multi: true },
        _services__WEBPACK_IMPORTED_MODULE_4__.AlertService
        // provider used to create fake backend
        //fakeBackendProvider
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
            primeng_table__WEBPACK_IMPORTED_MODULE_10__.TableModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _components__WEBPACK_IMPORTED_MODULE_3__.AlertComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_10__.TableModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:24689/api'
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
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
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map