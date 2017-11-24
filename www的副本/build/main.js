webpackJsonp([9],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotFoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotFoundPage = (function () {
    function NotFoundPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.time = 3;
        this.timer = null;
    }
    NotFoundPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad NotFoundPage');
        if (this.timer) {
            return;
        }
        this.timer = setInterval(function () {
            _this.time--;
            if (_this.time == 0) {
                console.log("定时器已经结束了");
                clearInterval(_this.timer);
                _this.timer = null;
                _this.navCtrl.pop();
            }
        }, 1000);
    };
    NotFoundPage.prototype.ionViewWillLeave = function () {
        if (this.timer) {
            console.log('准备离开404页面时，发现没关，现在关了');
            clearInterval(this.timer);
            this.timer = null;
        }
    };
    return NotFoundPage;
}());
NotFoundPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-not-found',template:/*ion-inline-start:"/Users/kunyashaw/Demos/Ionic2DemosCLI/XZStore/XZStore/src/pages/not-found/not-found.html"*/'<!--\n  Generated template for the NotFoundPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>notFound</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div style="text-align: center">\n    <img src="assets/img/404/404_img1.png" alt="">\n    <br/>\n    <img src="assets/img/404/404_img2.png" alt="">\n    <br/>\n    <h3>页面开发中...</h3>\n    <h2>{{time}}s后自动返回上一页</h2>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/kunyashaw/Demos/Ionic2DemosCLI/XZStore/XZStore/src/pages/not-found/not-found.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], NotFoundPage);

//# sourceMappingURL=not-found.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PayPage = (function () {
    function PayPage(viewCtrl, loadCtr, toastCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.loadCtr = loadCtr;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PayPage');
    };
    PayPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    PayPage.prototype.payOrder = function () {
        var _this = this;
        this.loadCtr.create({
            content: '支付中...',
            duration: 1500
        }).present();
        setTimeout(function () {
            _this.toastCtrl.create({
                message: '支付成功!', duration: 500
            }).present();
            _this.closeModal();
            console.log("navCtrl", _this.navCtrl);
            console.log("navCtrl", _this.viewCtrl);
        }, 1500);
    };
    return PayPage;
}());
PayPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pay',template:/*ion-inline-start:"/Users/kunyashaw/Demos/Ionic2DemosCLI/XZStore/XZStore/src/pages/pay/pay.html"*/'<!--\n  Generated template for the PayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <div style="height:300px;width:100%;  background: rgba(0,0,0,0.5);">\n\n  </div>\n  <br/>\n  <ion-grid style="\n  position: absolute;\n  top: 300px;\ndisplay: block;\nwidth: 100%;\nheight: 62%;\nbackground-color:\'#f4f4f4\';\n">\n    <ion-row align-items-center>\n      <ion-col col-3>\n        <button ion-button clear large block>\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col style="text-align:center">\n        <h3>确认付款</h3>\n        <hr/>\n      </ion-col>\n      <ion-col col-3>\n        <button ion-button clear large block>\n          <ion-icon name="help"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-center>\n      <ion-col style="text-align:center">\n        <h2>$300</h2>\n      </ion-col>\n    </ion-row>\n\n    <ion-row justify-content-center>\n      <ion-col style="text-align:left">\n        <span>支付账号</span>\n      </ion-col>\n      <ion-col style="text-align:right">\n        kk***@gmail.com\n      </ion-col>\n    </ion-row>\n\n    <ion-row justify-content-center>\n      <ion-col style="text-align:left">\n        <span>付款账号</span>\n      </ion-col>\n      <ion-col style="text-align:right">\n        花呗>\n      </ion-col>\n    </ion-row>\n\n    <ion-row justify-content-center>\n      <ion-col>\n        <button (click)="payOrder()" ion-button color="secondary" block>支付</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/kunyashaw/Demos/Ionic2DemosCLI/XZStore/XZStore/src/pages/pay/pay.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _e || Object])
], PayPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=pay.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_index__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_confirm_order_confirm__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_center_user_center__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.index = __WEBPACK_IMPORTED_MODULE_2__index_index__["a" /* IndexPage */];
        this.cart = __WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */];
        this.orderConfirm = __WEBPACK_IMPORTED_MODULE_4__order_confirm_order_confirm__["a" /* OrderConfirmPage */];
        this.userCenter = __WEBPACK_IMPORTED_MODULE_5__user_center_user_center__["a" /* UserCenterPage */];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/kunyashaw/Demos/Ionic2DemosCLI/XZStore/XZStore/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>home</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding>\n  <ion-tabs #myTabs>\n    <ion-tab tabIcon="home" tabTitle="首页" [root]="index"></ion-tab>\n    <ion-tab tabIcon="cart" tabsHideOnSubPages="true" tabTitle="购物车" [root]="cart"></ion-tab>\n    <ion-tab tabIcon="person" tabTitle="我的" [root]="userCenter"></ion-tab>\n    <ion-tab tabIcon="settings" tabTitle="设置" [root]="orderConfirm"></ion-tab>\n  </ion-tabs>\n</ion-content>'/*ion-inline-end:"/Users/kunyashaw/Demos/Ionic2DemosCLI/XZStore/XZStore/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCenterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_utility_service_myhttp_service__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UserCenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserCenterPage = (function () {
    function UserCenterPage(myHttp, navCtrl, navParams) {
        this.myHttp = myHttp;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserCenterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserCenterPage');
    };
    UserCenterPage.prototype.logout = function () {
        var _this = this;
        this.myHttp
            .sendRequest(this, "http://localhost/Framework_codes/data/user/logout.php")
            .subscribe(function (data) {
            if (data.code == 200) {
                _this.myHttp.showToast('退出成功');
                _this.navCtrl.parent.select(0);
            }
        });
    };
    return UserCenterPage;
}());
UserCenterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-center',template:/*ion-inline-start:"/Users/kunyashaw/Demos/Ionic2DemosCLI/XZStore/XZStore/src/pages/user-center/user-center.html"*/'<!--\n  Generated template for the UserCenterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>用户中心</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div text-center>\n    <img style="width:100px;height:100px;border-radius: 50%;" src="assets/img/1.jpg" />\n    <h2>testName</h2>\n  </div>\n\n  <button (click)="logout()" ion-button color="danger" block>退出登录</button>\n</ion-content>'/*ion-inline-end:"/Users/kunyashaw/Demos/Ionic2DemosCLI/XZStore/XZStore/src/pages/user-center/user-center.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_utility_service_myhttp_service__["a" /* MyHttpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], UserCenterPage);

//# sourceMappingURL=user-center.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cart/cart.module": [
		276,
		8
	],
	"../pages/detail/detail.module": [
		278,
		7
	],
	"../pages/home/home.module": [
		277,
		6
	],
	"../pages/index/index.module": [
		279,
		5
	],
	"../pages/login/login.module": [
		280,
		4
	],
	"../pages/not-found/not-found.module": [
		281,
		3
	],
	"../pages/order-confirm/order-confirm.module": [
		282,
		2
	],
	"../pages/pay/pay.module": [
		283,
		1
	],
	"../pages/user-center/user-center.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utility_service_myhttp_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utility_pipe_mydetail_pipe__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_index_index__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_detail_detail__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_order_confirm_order_confirm__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_not_found_not_found__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_user_center_user_center__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_pay_pay__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_index_index__["a" /* IndexPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_order_confirm_order_confirm__["a" /* OrderConfirmPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__utility_pipe_mydetail_pipe__["a" /* MyDetailPipe */],
            __WEBPACK_IMPORTED_MODULE_15__pages_not_found_not_found__["a" /* NotFoundPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_user_center_user_center__["a" /* UserCenterPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_pay_pay__["a" /* PayPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                tabsHideOnSubPages: true,
            }, {
                links: [
                    { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/index/index.module#IndexPageModule', name: 'IndexPage', segment: 'index', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/not-found/not-found.module#NotFoundPageModule', name: 'NotFoundPage', segment: 'not-found', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/order-confirm/order-confirm.module#OrderConfirmPageModule', name: 'OrderConfirmPage', segment: 'order-confirm', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pay/pay.module#PayPageModule', name: 'PayPage', segment: 'pay', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/user-center/user-center.module#UserCenterPageModule', name: 'UserCenterPage', segment: 'user-center', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_index_index__["a" /* IndexPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_order_confirm_order_confirm__["a" /* OrderConfirmPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_not_found_not_found__["a" /* NotFoundPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_user_center_user_center__["a" /* UserCenterPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_pay_pay__["a" /* PayPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__utility_service_myhttp_service__["a" /* MyHttpService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDetailPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MyDetailPipe = (function () {
    function MyDetailPipe() {
    }
    /* <div class="content_tpl">
    <div class="formwork" >
     <div class="formwork_img" >
     <img class="" src= "//img20.360buyimg.com/vc/jfs/t3034/151/748569500/226790/d6cd86a2/57b15612N81dc489d.jpg" > </div></div> <div class="formwork" > <div class="formwork_img" > <img class="" src= "//img20.360buyimg.com/vc/jfs/t2683/60/4222930118/169462/233c7678/57b15616N1e285f09.jpg" > </div></div> <div class="formwork" > <div class="formwork_text" > 技术规格 请前往 www.apple.com / cn / macbook - air / specs.html 查看完整内容。</div></div> </div>"
    */
    MyDetailPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value + '...';
    };
    return MyDetailPipe;
}());
MyDetailPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'myDetail'
    })
], MyDetailPipe);

//# sourceMappingURL=mydetail.pipe.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_index_index__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_detail_detail__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Index', component: __WEBPACK_IMPORTED_MODULE_4__pages_index_index__["a" /* IndexPage */] },
            { title: 'Detail', component: __WEBPACK_IMPORTED_MODULE_5__pages_detail_detail__["a" /* DetailPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/kunyashaw/Demos/Ionic2DemosCLI/XZStore/XZStore/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/kunyashaw/Demos/Ionic2DemosCLI/XZStore/XZStore/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyHttpService = (function () {
    function MyHttpService(toastCtr, alertCtrl, loadCtr, http) {
        this.toastCtr = toastCtr;
        this.alertCtrl = alertCtrl;
        this.loadCtr = loadCtr;
        this.http = http;
    }
    MyHttpService.prototype.showToast = function (msg) {
        this.toastCtr.create({
            message: msg,
            duration: 500,
            position: 'bottom'
        }).present();
    };
    MyHttpService.prototype.checkUserLogin = function () {
        return this.http.get('http://localhost/Framework_codes/data/user/session_data.php', { withCredentials: true })
            .map(function (response) { return response.json(); });
    };
    MyHttpService.prototype.sendRequest = function (obj, url) {
        var _this = this;
        var myLoad = this.loadCtr.create({
            content: 'loading...',
            spinner: 'bubbles'
        });
        myLoad.present();
        console.log('准备发起请求,url is ' + url);
        //a-http-get
        return this.http.get(url, { withCredentials: true })
            .map(function (response) {
            console.log('请求成功');
            myLoad.dismiss();
            console.log(response);
            return response.json();
        })
            .catch(function (error) {
            console.log('请求失败', error.json());
            myLoad.dismiss();
            _this.alertCtrl.create({
                title: 'oops',
                message: '请求失败',
                buttons: [
                    {
                        text: '重试',
                        handler: function () {
                            console.log('准备再次发起请求');
                            obj.loadData();
                        }
                    }, {
                        text: '取消',
                        role: 'cancel'
                    }
                ]
            }).present();
            return '请求失败';
        });
    };
    return MyHttpService;
}());
MyHttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* ToastController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _d || Object])
], MyHttpService);

var _a, _b, _c, _d;
//# sourceMappingURL=myhttp.service.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_utility_service_myhttp_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IndexPage = (function () {
    function IndexPage(myHttp, navCtrl, navParams) {
        this.myHttp = myHttp;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //轮播商品
        this.carouselItems = [];
        //保存的推荐商品的对象数组
        this.recommendedItems = [];
        this.detail = __WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */];
    }
    IndexPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IndexPage');
        //this.loadData();
    };
    IndexPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    //初始化数据
    //"https://jsonplaceholder.typicode.com/posts"
    IndexPage.prototype.loadData = function () {
        var _this = this;
        this.myHttp
            .sendRequest(this, "http://localhost/framework_codes/data/product/index.php")
            .subscribe(function (data) {
            console.log(data);
            if (data && data.carouselItems) {
                //轮播图，使用slides进行autoplay
                _this.carouselItems = data.carouselItems;
                _this.recommendedItems = data.recommendedItems;
                console.log('saved recommendedItems is ', _this.recommendedItems);
            }
        });
    };
    return IndexPage;
}());
IndexPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-index',template:/*ion-inline-start:"/Users/kunyashaw/Demos/Ionic2DemosCLI/XZStore/XZStore/src/pages/index/index.html"*/'<!--\n  Generated template for the IndexPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-grid>\n    <ion-row align-items-center justify-content-center>\n      <ion-col col-1>\n        <button color="myLight" ion-button clear block>\n          <ion-icon name="camera"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col>\n        <ion-searchbar debounce=300></ion-searchbar>\n      </ion-col>\n      <ion-col col-1>\n        <button color="myLight" ion-button clear block>\n          <ion-icon name="chatboxes"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-slides style="height:100px" *ngIf="carouselItems.length > 0" pager autoplay=500 speed=1000 loop=true direction="horizontal"\n    effect="fade" paginationType="bullets">\n    <ion-slide style="height:100px" *ngFor="let item of carouselItems">\n      <img [src]="\'assets/\'+item.img" />\n    </ion-slide>\n  </ion-slides>\n\n  <ion-list no-lines>\n    <ion-list-header>\n      新货上市\n    </ion-list-header>\n    <ion-item>\n      <ion-scroll scrollX="true" style="height:230px">\n        <ion-card [navPush]="detail" [navParams]="{id:item.pid}" style="margin-top:0px;display: inline-block" *ngFor="let item of recommendedItems">\n          <img style="height:120px" [src]="\'assets/\'+item.pic" alt="">\n          <ion-card-content>\n            {{item.title}}\n          </ion-card-content>\n        </ion-card>\n      </ion-scroll>\n    </ion-item>\n  </ion-list>\n\n\n\n  <ion-list>\n    <ion-list-header>\n      推荐商品\n    </ion-list-header>\n    <ion-item text-wrap *ngFor="let item of recommendedItems">\n      <ion-thumbnail item-start>\n        <img [src]="\'assets/\'+item.pic" />\n      </ion-thumbnail>\n      <h3>{{item.title}}</h3>\n      <p>{{item.details}}</p>\n      <button ion-button item-end clear>\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/kunyashaw/Demos/Ionic2DemosCLI/XZStore/XZStore/src/pages/index/index.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_utility_service_myhttp_service__["a" /* MyHttpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], IndexPage);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_utility_service_myhttp_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_index__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_confirm_order_confirm__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = (function () {
    function CartPage(myHttp, navCtrl, navParams) {
        this.myHttp = myHttp;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productList = [];
        this.totalPrice = 0;
        this.isLogin = false;
        this.index = __WEBPACK_IMPORTED_MODULE_3__index_index__["a" /* IndexPage */];
        this.orderConfirm = __WEBPACK_IMPORTED_MODULE_4__order_confirm_order_confirm__["a" /* OrderConfirmPage */];
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage.prototype.ionViewDidEnter = function () {
        this.guard();
        this.loadData();
    };
    CartPage.prototype.loadData = function () {
        var _this = this;
        this.myHttp
            .sendRequest(this, "http://localhost/Framework_codes/data/cart/list.php")
            .subscribe(function (result) {
            console.log('cart', result);
            if (result.code == 200) {
                _this.productList = result.data;
            }
        });
    };
    CartPage.prototype.getTotalPrice = function () {
        this.totalPrice = 0;
        for (var i = 0; i < this.productList.length; i++) {
            this.totalPrice += (this.productList[i].count * this.productList[i].price);
        }
        console.log("计算后的总价格信息为", this.totalPrice);
        return this.totalPrice;
    };
    //从购物车中移除
    CartPage.prototype.deleteFromList = function (index) {
        var _this = this;
        this.myHttp.sendRequest(this, "http://localhost/Framework_codes/data/cart/del.php?iid=" + this.productList[index].iid)
            .subscribe(function (result) {
            if (result && result.code == 200) {
                _this.productList.splice(index, 1);
            }
        });
    };
    //修改购物车数量
    CartPage.prototype.modifyCount = function (isMinux, index) {
        var readyModifyCount = this.productList[index].count;
        console.log('修改前是:' + readyModifyCount);
        if (isMinux) {
            readyModifyCount--;
            if (readyModifyCount == -1) {
                return;
            }
        }
        else {
            readyModifyCount++;
        }
        this.productList[index].count = readyModifyCount;
    };
    CartPage.prototype.jumpToTabIndex = function () {
        this.navCtrl.parent.select(0);
    };
    CartPage.prototype.jumpToLogin = function () {
        this.myHttp.showToast('准备跳转到登录页面');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    //守卫
    CartPage.prototype.guard = function () {
        var _this = this;
        this.myHttp.checkUserLogin().subscribe(function (data) {
            console.log('login', data);
            if (data.uid) {
                _this.isLogin = true;
                return true;
            }
            else {
                _this.isLogin = false;
                if (_this.navCtrl.parent.getSelected().index != 1) {
                    _this.myHttp.showToast('未登录，准备跳转到登录页面');
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                }
                //if ()
                return false;
            }
        });
        return false;
    };
    return CartPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])("myTabs"),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Tabs */])
], CartPage.prototype, "myTabs", void 0);
CartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cart',template:/*ion-inline-start:"/Users/kunyashaw/Demos/Ionic2DemosCLI/XZStore/XZStore/src/pages/cart/cart.html"*/'<!--\n  Generated template for the CartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>购物车</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <!-- \n count : "10" \n iid : "1" \n lid : "1" \n pic : "img/product/sm/57b12a31N8f4f75a3.jpg"\n  price : "6988.00" \n  spec : "双核i5/8GB内存/128GB闪存"\ntitle : "Apple MacBook Air 13.3英寸笔记本 银色(Core i5 处理器/8GB内存/128GB SSD闪存 MMGF2CH/A)"\n   -->\n  <ion-list *ngIf="productList.length > 0 && isLogin">\n    <ion-item-sliding *ngFor="let p of productList;let myIndex=index">\n      <ion-item>\n        <ion-checkbox item-start></ion-checkbox>\n        <ion-thumbnail item-end>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-3>\n                <img [src]="\'assets/\'+p.pic" />\n              </ion-col>\n              <ion-col>\n                <p>{{p.title | slice:0:30 |myDetail}}</p>\n                <h4 style="color:red">{{p.price | currency:\'CNY\':true}}</h4>\n\n                <button (click)="modifyCount(true,myIndex)" ion-button clear color="dark" style="display:inline-block">\n                  <ion-icon name="remove"></ion-icon>\n                </button>\n\n                <span>{{p.count}}</span>\n\n                <button (click)="modifyCount(false,myIndex)" ion-button clear color="dark" style="display:inline-block">\n                  <ion-icon name="add"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-thumbnail>\n      </ion-item>\n      <ion-item-options side="left">\n        <button (click)="deleteFromList(myIndex)" ion-button color="danger">\n          删除\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <div text-center *ngIf="productList.length == 0 && isLogin">\n    <img src="assets/img/404/404_img2.png" />\n    <h3>购物车是空的</h3>\n    <button (click)="jumpToTabIndex()" ion-button block color="secondary">逛逛去</button>\n  </div>\n\n  <div text-center *ngIf="!isLogin">\n    <img src="assets/img/404/404_img2.png" alt="">\n    <p>只有登录后才可以查看购物车信息</p>\n    <button (click)="jumpToLogin()" ion-button block color="secondary">去登录</button>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-grid *ngIf="isLogin">\n    <!--  align-items-center 纵向对齐 -->\n    <ion-row align-items-center *ngIf="productList.length >0">\n      <ion-col col-1>\n        <ion-checkbox></ion-checkbox>\n      </ion-col>\n      <ion-col>\n        <span>全选 合计{{getTotalPrice()|currency:\'CNY\':true}}</span>\n      </ion-col>\n      <ion-col col-3>\n        <button [navPush]="orderConfirm" block ion-button color="danger">\n          去结算\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>'/*ion-inline-end:"/Users/kunyashaw/Demos/Ionic2DemosCLI/XZStore/XZStore/src/pages/cart/cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_utility_service_myhttp_service__["a" /* MyHttpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_utility_service_myhttp_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_found_not_found__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = (function () {
    function DetailPage(toastCtr, myHttp, navCtrl, navParams) {
        this.toastCtr = toastCtr;
        this.myHttp = myHttp;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cart = __WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */];
        this.notFound = __WEBPACK_IMPORTED_MODULE_3__not_found_not_found__["a" /* NotFoundPage */];
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
        //隐藏tabs,显示自己的footer
        console.log(this);
    };
    DetailPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    DetailPage.prototype.loadData = function () {
        var _this = this;
        var lid = this.navParams.get('id');
        this.myHttp
            .sendRequest(this, "http://localhost/Framework_codes/data/product/details.php?lid=" + lid)
            .subscribe(function (data) {
            console.log('details', data);
            _this.detailInfo = data.details;
        });
    };
    DetailPage.prototype.addToCart = function () {
        var _this = this;
        // cart/add.php
        this.myHttp
            .sendRequest(this, "http://localhost/Framework_codes/data/cart/add.php?lid=" + this.detailInfo.lid + "&buyCount=1")
            .subscribe(function (result) {
            console.log('addToCart', result);
            if (result) {
                var showToastMsg = "";
                if (result.code == 200) {
                    //成功之后，通过提示添加成功
                    showToastMsg = "添加成功";
                }
                else if (result.code == 500) {
                    showToastMsg = "添加失败";
                }
                else if (result.code == 300) {
                    showToastMsg = "未登录，将跳转到登录页面";
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                }
                _this.toastCtr
                    .create({
                    message: showToastMsg,
                    position: 'top',
                    duration: 1500
                })
                    .present();
            }
        });
    };
    return DetailPage;
}());
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail',template:/*ion-inline-start:"/Users/kunyashaw/Demos/Ionic2DemosCLI/XZStore/XZStore/src/pages/detail/detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>商品详情</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding *ngIf="detailInfo">\n  <!-- details/picList[0].sm/title/ -->\n  <ion-slides pager loop="true" autoplay=2000 speed=1000 direction="horizontal" effect="fade" paginationType="bullets" style="height:auto">\n    <ion-slide style="height:auto" *ngFor="let item of detailInfo.picList">\n      <img [src]="\'assets/\'+item.md" />\n    </ion-slide>\n  </ion-slides>\n  <h6>{{detailInfo.title}}</h6>\n  <p style="color:red">{{detailInfo.subtitle}}</p>\n  <h5 style="color:red">{{\'￥\'+detailInfo.price}}</h5>\n  <!-- <div [innerHTML]="detailInfo.details | myDetail">\n  </div> -->\n\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2>\n        <button [navPush]="notFound" ion-button clear block color="myLight">\n          <ion-icon name="heart"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-2>\n        <button [navPush]="cart" ion-button clear block color="myLight">\n          <ion-icon name="cart"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-2>\n        <button [navPush]="notFound" ion-button clear block color="myLight">\n          <ion-icon name="bookmark"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button (click)="addToCart()" ion-button block color="danger">\n          加入购物车\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>'/*ion-inline-end:"/Users/kunyashaw/Demos/Ionic2DemosCLI/XZStore/XZStore/src/pages/detail/detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__app_utility_service_myhttp_service__["a" /* MyHttpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], DetailPage);

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_utility_service_myhttp_service__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(myhttp, navCtrl, navParams) {
        this.myhttp = myhttp;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.uname = "";
        this.upwd = "";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.myhttp
            .sendRequest(this, "http://localhost/Framework_codes/data/user/login.php?uname=" + this.uname + "&upwd=" + this.upwd)
            .subscribe(function (data) {
            if (data) {
                if (data.code == 200) {
                    console.log('all', _this.navCtrl.getAllChildNavs());
                    _this.navCtrl.pop();
                    _this.myhttp.showToast('登录成功');
                }
                else if (data.code == 401) {
                    _this.myhttp.showToast('请输入用户名');
                }
                else if (data.code == 402) {
                    _this.myhttp.showToast('请输入密码');
                }
                else if (data.code == 201) {
                    _this.myhttp.showToast('用户名或者密码错误');
                }
            }
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/kunyashaw/Demos/Ionic2DemosCLI/XZStore/XZStore/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>请先登录</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div style="text-align:center;margin-bottom:10px">\n    <img style="width:100px;height:100px;border-radius: 50%;" src="assets/img/1.jpg" />\n  </div>\n\n\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" clearInput="true" placeholder="用户名" [(ngModel)]="uname"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="password" clearInput="false" placeholder=密码 [(ngModel)]="upwd"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3>\n        <span style="font-size:0.5em">免费注册</span>\n      </ion-col>\n      <ion-col push-6 col-3>\n        <span style="font-size:0.5em">忘记密码</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <button ion-button round block color="danger" (click)="doLogin()">登录</button>\n\n\n</ion-content>'/*ion-inline-end:"/Users/kunyashaw/Demos/Ionic2DemosCLI/XZStore/XZStore/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_utility_service_myhttp_service__["a" /* MyHttpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pay_pay__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the OrderConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderConfirmPage = (function () {
    function OrderConfirmPage(modalCtr, navCtrl, navParams) {
        this.modalCtr = modalCtr;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrderConfirmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderConfirmPage');
    };
    OrderConfirmPage.prototype.pay = function () {
        var myWidnow = this.modalCtr.create(__WEBPACK_IMPORTED_MODULE_2__pay_pay__["a" /* PayPage */]);
        console.log('准备显示');
        myWidnow.present();
    };
    return OrderConfirmPage;
}());
OrderConfirmPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order-confirm',template:/*ion-inline-start:"/Users/kunyashaw/Demos/Ionic2DemosCLI/XZStore/XZStore/src/pages/order-confirm/order-confirm.html"*/'<!--\n  Generated template for the OrderConfirmPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>确认订单</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list no-lines>\n    <!-- 收货人信息 -->\n    <ion-item text-wrap>\n      <ion-avatar item-start>\n        <ion-icon name="pin"></ion-icon>\n      </ion-avatar>\n      <h3>收货人:{{3+2}}</h3>\n      <p>收货地址:北京市 海淀区 大钟寺123号 139366668888</p>\n      <button item-end ion-button clear color="light">\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-item>\n    <hr/>\n    <!-- 产品信息 -->\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/img/product/md/57ad359dNd4a6f130.jpg" />\n      </ion-thumbnail>\n      <h3>mac air</h3>\n      <p>处理器速度升级至1.8GHz，续航依旧持久，长达12小时！</p>\n      <h3 style="color:red">￥6888.00 x 1</h3>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/img/product/md/5787107bN73d05ad5.jpg" />\n      </ion-thumbnail>\n      <h3>mac air</h3>\n      <p>处理器速度升级至1.8GHz，续航依旧持久，长达12小时！</p>\n      <h3 style="color:red">￥6888.00 x 3</h3>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/img/product/md/57871086N86c8f0ab.jpg" />\n      </ion-thumbnail>\n      <h3>mac air</h3>\n      <p>处理器速度升级至1.8GHz，续航依旧持久，长达12小时！</p>\n      <h3 style="color:red">￥6888.00 x 2</h3>\n    </ion-item>\n    <hr/>\n    <button ion-button block (click)="pay()" color="secondary" round>在线支付</button>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/kunyashaw/Demos/Ionic2DemosCLI/XZStore/XZStore/src/pages/order-confirm/order-confirm.html"*/,
        styleUrls: ['../assets/css/order_confirm.css']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], OrderConfirmPage);

//# sourceMappingURL=order-confirm.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map