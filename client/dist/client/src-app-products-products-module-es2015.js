(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-products-products-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/components/products/products.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/components/products/products.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Main Section -->\n<section uk-grid class=\"uk-grid-medium uk-padding-large\">\n\n  <!-- Breadcrumb -->\n  <app-breadcrumb [breadcrumbItems]=\"breadcrumbItems\" class=\"uk-width-1-1\"></app-breadcrumb>\n\n  <!-- Section Content -->\n  <div class=\"uk-width-1-1 uk-width-2-3@s uk-width-3-4@m\">\n\n    <!-- Section Product List -->\n    <app-product-list [title]=\"title\" [listPost]=\"listProduct\"></app-product-list>\n    <!-- END Section Product List -->\n\n    <!-- Section Pagination -->\n    <app-pagination [totalPage]=\"17\"></app-pagination>\n    <!-- END Section Pagination -->\n\n  </div>\n  <!-- END Section Content -->\n\n  <!-- Section Contact & Info -->\n  <div class=\"uk-width-1-1 uk-width-1-3@s uk-width-1-4@m\">\n\n    <!-- Section Contact -->\n    <app-box-contact></app-box-contact>\n    <!-- END Section Contact -->\n\n    <!-- Section Facebook -->\n    <app-box-facebook></app-box-facebook>\n    <!-- END Section Facebook -->\n\n  </div>\n  <!-- END Section Contact & Info -->\n\n</section>\n");

/***/ }),

/***/ "./src/app/products/components/products/products.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/products/components/products/products.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/products/components/products/products.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/products/components/products/products.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/posts.service */ "./src/app/shared/services/posts.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let ProductsComponent = class ProductsComponent {
    constructor(activatedRoute, postService) {
        this.activatedRoute = activatedRoute;
        this.postService = postService;
        this.breadcrumbItems = [
            { title: 'Trang Chủ', routerLink: '/' },
            { title: '', routerLink: '' }
        ];
        this.metadata = [];
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    ngOnInit() {
        this.metadata = [
            {
                slug: 'san-pham-dat-nen',
                title: 'Sản Phẩm Đất Nền',
                listProduct: this.postService.listProductLand
            },
            {
                slug: 'san-pham-nha-o',
                title: 'Sản Phẩm Nhà Ở',
                listProduct: this.postService.listProductHouse
            },
            {
                slug: 'san-pham-da-ban',
                title: 'Sản Phẩm Đã Bán',
                listProduct: this.postService.listProductSold
            },
        ];
        this.subscriptions.add(this.activatedRoute.paramMap.subscribe(paramMap => {
            const categorySlug = paramMap.get('categorySlug');
            const data = this.metadata.find(md => md.slug === categorySlug);
            this.title = data.title;
            this.listProduct = data.listProduct;
            this.breadcrumbItems[1] = { title: data.title, routerLink: '' };
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products/components/products/products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.scss */ "./src/app/products/components/products/products.component.scss")).default]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/products/products-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/products-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/products/components/products/products.component.ts");




const routes = [
    {
        path: ':categorySlug',
        component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
    }
];
let ProductsRoutingModule = class ProductsRoutingModule {
};
ProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProductsRoutingModule);



/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/products/products-routing.module.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/products/components/products/products.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






let ProductsModule = class ProductsModule {
};
ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], ProductsModule);



/***/ })

}]);
//# sourceMappingURL=src-app-products-products-module-es2015.js.map