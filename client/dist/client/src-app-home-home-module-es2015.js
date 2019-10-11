(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/home/home.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/home/home.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Only display in homepage -->\n<app-slideshow></app-slideshow>\n\n<!-- Main Section -->\n<section uk-grid class=\"uk-grid-medium uk-padding-large uk-padding-remove-vertical\">\n\n  <!-- Section Content -->\n  <div class=\"uk-width-1-1 uk-width-2-3@s uk-width-3-4@m\">\n\n    <!-- Section Product Land -->\n    <app-product-list title=\"Sản Phẩm Đất Nền\" [listPost]=\"listProductLand\" buttonViewMoreLink=\"/danh-muc/san-pham-dat-nen\"></app-product-list>\n    <!-- END Section Product Land -->\n\n    <!-- Section Product House -->\n    <app-product-list title=\"Sản Phẩm Nhà Ở\" [listPost]=\"listProductHouse\" buttonViewMoreLink=\"/danh-muc/san-pham-nha-o\"></app-product-list>\n    <!-- END Section Product House -->\n\n    <!-- Section Product Sold -->\n    <app-product-list title=\"Sản Phẩm Đã Bán\" [listPost]=\"listProductSold\" buttonViewMoreLink=\"/danh-muc/san-pham-da-ban\"></app-product-list>\n    <!-- END Section Product Sold -->\n\n  </div>\n  <!-- END Section Content -->\n\n  <!-- Section Contact & Info -->\n  <div class=\"uk-width-1-1 uk-width-1-3@s uk-width-1-4@m\">\n\n    <!-- Section Contact -->\n    <app-box-contact></app-box-contact>\n    <!-- END Section Contact -->\n\n    <!-- Section Facebook -->\n    <app-box-facebook></app-box-facebook>\n    <!-- END Section Facebook -->\n\n  </div>\n  <!-- END Section Contact & Info -->\n\n</section>\n");

/***/ }),

/***/ "./src/app/home/components/home/home.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/home/components/home/home.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home/components/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/home/components/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/posts.service */ "./src/app/shared/services/posts.service.ts");



let HomeComponent = class HomeComponent {
    constructor(postService) {
        this.postService = postService;
        this.listProductLand = [];
        this.listProductHouse = [];
        this.listProductSold = [];
    }
    ngOnInit() {
        this.generateDemoData();
    }
    generateDemoData() {
        this.listProductLand = this.postService.listProductLand;
        this.listProductHouse = this.postService.listProductHouse;
        this.listProductSold = this.postService.listProductSold;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _shared_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/components/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/home/components/home/home.component.ts");




const routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/home/components/home/home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], HomeModule);



/***/ })

}]);
//# sourceMappingURL=src-app-home-home-module-es2015.js.map