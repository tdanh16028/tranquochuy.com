(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-product-details-product-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/components/product-details/product-details.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/components/product-details/product-details.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Main Section -->\n<section uk-grid class=\"uk-grid-medium uk-padding-large\">\n\n  <!-- Breadcrumb -->\n  <app-breadcrumb [breadcrumbItems]=\"breadcrumbItems\" class=\"uk-width-1-1\"></app-breadcrumb>\n\n  <!-- Section Content -->\n  <div class=\"uk-width-1-1 uk-width-2-3@s uk-width-3-4@m uk-width-4-5@xl\">\n\n    <!-- Section Product Details -->\n    <div class=\"uk-grid-medium\" uk-grid>\n\n      <!-- Product Image -->\n      <div class=\"uk-width-1-1 uk-width-1-3@m uk-grid-item-match\">\n        <img [src]=\"post.images[0]\" width=\"\" height=\"\" alt=\"\" uk-img>\n      </div>\n\n      <!-- Product Short Details -->\n      <div class=\"uk-width-1-1 uk-width-2-3@m uk-width-1-3@xl\">\n        <ul uk-tab>\n          <li class=\"uk-active\"><a><span class=\"uk-text-large\">{{ post.title }}</span></a></li>\n        </ul>\n        <span class=\"uk-label uk-text-large uk-width-auto\">{{ post.estateProperties.price.amount | number:'':'en-US' }}\n          VND</span>\n        <p>{{ post.moreInfo }}</p>\n      </div>\n\n      <!-- Product Details -->\n      <div class=\"uk-width-1-1 uk-width-1-3@xl\">\n        <div class=\"uk-section uk-section-muted uk-section-xsmall\">\n          <ul uk-tab>\n            <li class=\"uk-active\"><a><span style=\"font-size: 120%\">Chi Tiết Sản Phẩm</span></a></li>\n          </ul>\n          <div class=\"uk-grid-divider uk-padding-small uk-padding-remove-vertical\" uk-grid>\n            <div class=\"uk-width-1-2\">\n              <p><b>Rộng:</b> {{ post.estateProperties.width }}m</p>\n              <p><b>Dài:</b> {{ post.estateProperties.length }}m</p>\n              <p><b>Diện tích:</b> {{ post.estateProperties.area }} m<sup>2</sup></p>\n            </div>\n            <div class=\"uk-width-1-2\">\n              <p><b>Hướng:</b> {{ post.estateProperties.direction }}</p>\n              <p><b>Lộ giới:</b> {{ post.estateProperties.roadWidth }}m</p>\n              <p><b>Pháp lý:</b> {{ post.estateProperties.juridical }}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Product Gallery -->\n      <div class=\"uk-width-1-1\">\n        <div class=\"uk-section uk-section-muted uk-section-xsmall\">\n          <ul uk-tab>\n            <li class=\"uk-active\"><a><span style=\"font-size: 120%\">Hình Ảnh Sản Phẩm</span></a></li>\n          </ul>\n          <div class=\"uk-padding-small uk-padding-remove-vertical\">\n            <app-slider [listImageLink]=\"post.images\"></app-slider>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <!-- END Section Product Details -->\n\n  </div>\n  <!-- END Section Content -->\n\n  <!-- Section Contact & Info -->\n  <div class=\"uk-width-1-1 uk-width-1-3@s uk-width-1-4@m uk-width-1-5@xl\">\n\n    <!-- Section Contact -->\n    <app-box-contact></app-box-contact>\n    <!-- END Section Contact -->\n\n    <!-- Section Facebook -->\n    <app-box-facebook></app-box-facebook>\n    <!-- END Section Facebook -->\n\n    <!-- Section Product Related -->\n    <app-product-related [listPost]=\"listPostRelated\"></app-product-related>\n    <!-- END Section Product Related -->\n\n  </div>\n  <!-- END Section Contact & Info -->\n\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/components/product-related-card/product-related-card.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/components/product-related-card/product-related-card.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [routerLink]=\"'/chi-tiet-san-pham/' + post._id\" class=\"uk-card uk-card-default uk-card-small uk-card-hover uk-grid-collapse\" uk-grid>\n  <div class=\"uk-card-media-left uk-cover-container uk-width-1-3\">\n    <img [src]=\"post.images[0]\" alt=\"\" uk-cover>\n    <canvas width=\"\" height=\"180\"></canvas>\n  </div>\n  <div class=\"uk-width-2-3\">\n    <div class=\"uk-card-body\">\n      <h5 class=\"\" [attr.uk-tooltip]=\"post.title\">{{ post.title }}</h5>\n      <span class=\"uk-label\">{{ post.estateProperties.price.amount | number:'':'en-US' }} <sup class=\"uk-text-lowercase\">đ</sup></span>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/components/product-related/product-related.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/components/product-related/product-related.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"uk-section uk-section-muted uk-margin-medium-bottom uk-padding-small\">\n  <ul uk-tab>\n    <li class=\"uk-active\"><a>Sản Phẩm Liên Quan</a></li>\n  </ul>\n  <div class=\"uk-grid-column-small uk-grid-row-medium\" uk-grid>\n    <div *ngFor=\"let post of listPost\">\n      <app-product-related-card [post]=\"post\"></app-product-related-card>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/product-details/components/product-details/product-details.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/product-details/components/product-details/product-details.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul[uk-tab] {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hL0Rvd25sb2Fkcy90cmFucXVvY2h1eS5jb20vY2xpZW50L3NyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWRldGFpbHMvY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWxbdWstdGFiXSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iLCJ1bFt1ay10YWJdIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/product-details/components/product-details/product-details.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/product-details/components/product-details/product-details.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/posts.service */ "./src/app/shared/services/posts.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(activatedRoute, postService) {
        this.activatedRoute = activatedRoute;
        this.postService = postService;
        this.breadcrumbItems = [
            { title: 'Trang Chủ', routerLink: '/' },
            { title: '', routerLink: '' },
            { title: '', routerLink: '' }
        ];
        this.breadcrumbCategories = [
            { title: 'Sản Phẩm Đất Nền', routerLink: '/danh-muc/san-pham-dat-nen' },
            { title: 'Sản Phẩm Nhà Ở', routerLink: '/danh-muc/san-pham-nha-o' },
            { title: 'Sản Phẩm Đã Bán', routerLink: '/danh-muc/san-pham-da-ban' },
        ];
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    ngOnInit() {
        // this.generateDemoData();
        this.subscriptions.add(this.activatedRoute.paramMap.subscribe(paramMap => {
            const postId = paramMap.get('postId');
            this.getData(postId);
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    getData(postId) {
        const categoryId = postId.substring(0, postId.lastIndexOf('-'));
        this.post = this.postService.get(postId);
        this.listPostRelated = this.postService.getRelatedProducts(postId);
        this.breadcrumbItems[1] = this.breadcrumbCategories.find(md => md.routerLink.endsWith(categoryId));
        this.breadcrumbItems[2] = { title: this.post.title, routerLink: '' };
    }
    generateDemoData() {
        this.post = this.getRandomItem(this.postService.listProductSold);
        this.listPostRelated = this.postService.listProductSold;
        this.breadcrumbItems[1] = this.getRandomItem(this.breadcrumbCategories);
        this.breadcrumbItems[2] = { title: this.post.title, routerLink: '' };
    }
    getRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }
    getRandomItem(arr) {
        return arr[this.getRandomNumber(arr.length)];
    }
};
ProductDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _shared_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] }
];
ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/components/product-details/product-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-details.component.scss */ "./src/app/product-details/components/product-details/product-details.component.scss")).default]
    })
], ProductDetailsComponent);



/***/ }),

/***/ "./src/app/product-details/components/product-related-card/product-related-card.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/product-details/components/product-related-card/product-related-card.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h5 {\n  height: 2.8em;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hL0Rvd25sb2Fkcy90cmFucXVvY2h1eS5jb20vY2xpZW50L3NyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL2NvbXBvbmVudHMvcHJvZHVjdC1yZWxhdGVkLWNhcmQvcHJvZHVjdC1yZWxhdGVkLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9jb21wb25lbnRzL3Byb2R1Y3QtcmVsYXRlZC1jYXJkL3Byb2R1Y3QtcmVsYXRlZC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWRldGFpbHMvY29tcG9uZW50cy9wcm9kdWN0LXJlbGF0ZWQtY2FyZC9wcm9kdWN0LXJlbGF0ZWQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg1IHtcbiAgaGVpZ2h0OiAyLjhlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiIsImg1IHtcbiAgaGVpZ2h0OiAyLjhlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/product-details/components/product-related-card/product-related-card.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/product-details/components/product-related-card/product-related-card.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProductRelatedCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRelatedCardComponent", function() { return ProductRelatedCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductRelatedCardComponent = class ProductRelatedCardComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductRelatedCardComponent.prototype, "post", void 0);
ProductRelatedCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-related-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-related-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/components/product-related-card/product-related-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-related-card.component.scss */ "./src/app/product-details/components/product-related-card/product-related-card.component.scss")).default]
    })
], ProductRelatedCardComponent);



/***/ }),

/***/ "./src/app/product-details/components/product-related/product-related.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/product-details/components/product-related/product-related.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9jb21wb25lbnRzL3Byb2R1Y3QtcmVsYXRlZC9wcm9kdWN0LXJlbGF0ZWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/product-details/components/product-related/product-related.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/product-details/components/product-related/product-related.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProductRelatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRelatedComponent", function() { return ProductRelatedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductRelatedComponent = class ProductRelatedComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductRelatedComponent.prototype, "listPost", void 0);
ProductRelatedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-related',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-related.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/components/product-related/product-related.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-related.component.scss */ "./src/app/product-details/components/product-related/product-related.component.scss")).default]
    })
], ProductRelatedComponent);



/***/ }),

/***/ "./src/app/product-details/product-details-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/product-details/product-details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProductDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsRoutingModule", function() { return ProductDetailsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product-details/product-details.component */ "./src/app/product-details/components/product-details/product-details.component.ts");




const routes = [
    {
        path: ':postId',
        component: _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailsComponent"]
    }
];
let ProductDetailsRoutingModule = class ProductDetailsRoutingModule {
};
ProductDetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProductDetailsRoutingModule);



/***/ }),

/***/ "./src/app/product-details/product-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsModule", function() { return ProductDetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _product_details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-details-routing.module */ "./src/app/product-details/product-details-routing.module.ts");
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product-details/product-details.component */ "./src/app/product-details/components/product-details/product-details.component.ts");
/* harmony import */ var _components_product_related_product_related_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/product-related/product-related.component */ "./src/app/product-details/components/product-related/product-related.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_product_related_card_product_related_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/product-related-card/product-related-card.component */ "./src/app/product-details/components/product-related-card/product-related-card.component.ts");








let ProductDetailsModule = class ProductDetailsModule {
};
ProductDetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"], _components_product_related_product_related_component__WEBPACK_IMPORTED_MODULE_5__["ProductRelatedComponent"], _components_product_related_card_product_related_card_component__WEBPACK_IMPORTED_MODULE_7__["ProductRelatedCardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _product_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductDetailsRoutingModule"]
        ]
    })
], ProductDetailsModule);



/***/ })

}]);
//# sourceMappingURL=src-app-product-details-product-details-module-es2015.js.map