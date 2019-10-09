(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-products-products-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/products/components/product-details/product-details.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/components/product-details/product-details.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductsComponentsProductDetailsProductDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Main Section -->\n<section uk-grid class=\"uk-grid-medium uk-padding-large\">\n\n  <!-- Breadcrumb -->\n  <app-breadcrumb [breadcrumbItems]=\"breadcrumbItems\" class=\"uk-width-1-1\"></app-breadcrumb>\n\n  <!-- Section Content -->\n  <div class=\"uk-width-1-1 uk-width-2-3@s uk-width-3-4@m\">\n\n    <!-- Section Product Details -->\n    <div class=\"uk-grid-medium uk-grid-match\" uk-grid>\n\n      <!-- Product Image -->\n      <div class=\"uk-width-1-1 uk-width-1-3@m\">\n        <img [src]=\"post.images[0]\" width=\"\" height=\"\" alt=\"\" uk-img>\n      </div>\n\n      <!-- Product Short Details -->\n      <div class=\"uk-width-1-1 uk-width-2-3@m\">\n        <ul uk-tab>\n          <li class=\"uk-active\"><a><span class=\"uk-text-large\">{{ post.title }}</span></a></li>\n        </ul>\n        <span class=\"uk-label uk-text-large uk-width-auto\">{{ post.estateProperties.price.amount | number:'':'en-US' }} VND</span>\n        <p>{{ post.moreInfo }}</p>\n      </div>\n\n      <!-- Product Details -->\n      <div class=\"uk-width-1-1\">\n\n        <!-- Product Details -->\n        <div class=\"uk-section uk-section-muted uk-section-xsmall uk-margin-medium-bottom\">\n          <ul uk-tab>\n            <li class=\"uk-active\"><a><span style=\"font-size: 120%\">Chi Tiết Sản Phẩm</span></a></li>\n          </ul>\n          <div class=\"uk-grid-divider uk-padding-small uk-padding-remove-vertical\" uk-grid>\n            <div class=\"uk-width-1-2\">\n              <p><b>Rộng:</b> {{ post.estateProperties.width }}m</p>\n              <p><b>Dài:</b> {{ post.estateProperties.length }}m</p>\n              <p><b>Diện tích:</b> {{ post.estateProperties.area }} m<sup>2</sup></p>\n            </div>\n            <div class=\"uk-width-1-2\">\n              <p><b>Hướng:</b> {{ post.estateProperties.direction }}</p>\n              <p><b>Lộ giới:</b> {{ post.estateProperties.roadWidth }}m</p>\n              <p><b>Pháp lý:</b> {{ post.estateProperties.juridical }}</p>\n            </div>\n          </div>\n        </div>\n\n        <!-- Product Gallery -->\n        <div class=\"uk-section uk-section-muted uk-section-xsmall uk-margin-medium-bottom\">\n          <ul uk-tab>\n            <li class=\"uk-active\"><a><span style=\"font-size: 120%\">Hình Ảnh Sản Phẩm</span></a></li>\n          </ul>\n          <div class=\"uk-padding-small uk-padding-remove-vertical\">\n            <app-slider [listImageLink]=\"post.images\"></app-slider>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n    <!-- END Section Product Details -->\n\n  </div>\n  <!-- END Section Content -->\n\n  <!-- Section Contact & Info -->\n  <div class=\"uk-width-1-1 uk-width-1-3@s uk-width-1-4@m\">\n\n    <!-- Section Contact -->\n    <app-box-contact></app-box-contact>\n    <!-- END Section Contact -->\n\n    <!-- Section Facebook -->\n    <app-box-facebook></app-box-facebook>\n    <!-- END Section Facebook -->\n\n  </div>\n  <!-- END Section Contact & Info -->\n\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/products/components/products/products.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/components/products/products.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductsComponentsProductsProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Main Section -->\n<section uk-grid class=\"uk-grid-medium uk-padding-large\">\n\n  <!-- Breadcrumb -->\n  <app-breadcrumb [breadcrumbItems]=\"breadcrumbItems\" class=\"uk-width-1-1\"></app-breadcrumb>\n\n  <!-- Section Content -->\n  <div class=\"uk-width-1-1 uk-width-2-3@s uk-width-3-4@m\">\n\n    <!-- Section Product List -->\n    <app-product-list [title]=\"title\" [listPost]=\"listProduct\"></app-product-list>\n    <!-- END Section Product List -->\n\n    <!-- Section Pagination -->\n    <app-pagination [totalPage]=\"17\"></app-pagination>\n    <!-- END Section Pagination -->\n\n  </div>\n  <!-- END Section Content -->\n\n  <!-- Section Contact & Info -->\n  <div class=\"uk-width-1-1 uk-width-1-3@s uk-width-1-4@m\">\n\n    <!-- Section Contact -->\n    <app-box-contact></app-box-contact>\n    <!-- END Section Contact -->\n\n    <!-- Section Facebook -->\n    <app-box-facebook></app-box-facebook>\n    <!-- END Section Facebook -->\n\n  </div>\n  <!-- END Section Contact & Info -->\n\n</section>\n";
    /***/
  },

  /***/
  "./src/app/products/components/product-details/product-details.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/products/components/product-details/product-details.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductsComponentsProductDetailsProductDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ul[uk-tab] {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hL0Rvd25sb2Fkcy90cmFucXVvY2h1eS5jb20vY2xpZW50L3NyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWxbdWstdGFiXSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iLCJ1bFt1ay10YWJdIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/products/components/product-details/product-details.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/products/components/product-details/product-details.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ProductDetailsComponent */

  /***/
  function srcAppProductsComponentsProductDetailsProductDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function () {
      return ProductDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/services/posts.service */
    "./src/app/shared/services/posts.service.ts");

    var ProductDetailsComponent =
    /*#__PURE__*/
    function () {
      function ProductDetailsComponent(postService) {
        this.postService = postService;
        this.breadcrumbItems = [{
          title: 'Trang Chủ',
          routerLink: '/'
        }, {
          title: '',
          routerLink: ''
        }, {
          title: '',
          routerLink: ''
        }];
        this.metadata = [{
          title: 'Sản Phẩm Đất Nền',
          routerLink: '/san-pham/dat-nen'
        }, {
          title: 'Sản Phẩm Nhà Ở',
          routerLink: '/san-pham/nha-o'
        }, {
          title: 'Sản Phẩm Đã Bán',
          routerLink: '/san-pham/da-ban'
        }];
      }

      var _proto = ProductDetailsComponent.prototype;

      _proto.ngOnInit = function ngOnInit() {
        this.generateDemoData();
      };

      _proto.generateDemoData = function generateDemoData() {
        this.post = this.getRandomItem(this.postService.listProductSold);
        this.breadcrumbItems[1] = this.getRandomItem(this.metadata);
        this.breadcrumbItems[2] = {
          title: this.post.title,
          routerLink: ''
        };
      };

      _proto.getRandomNumber = function getRandomNumber(max) {
        return Math.floor(Math.random() * max);
      };

      _proto.getRandomItem = function getRandomItem(arr) {
        return arr[this.getRandomNumber(arr.length)];
      };

      return ProductDetailsComponent;
    }();

    ProductDetailsComponent.ctorParameters = function () {
      return [{
        type: _shared_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]
      }];
    };

    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/products/components/product-details/product-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-details.component.scss */
      "./src/app/products/components/product-details/product-details.component.scss")).default]
    })], ProductDetailsComponent);
    /***/
  },

  /***/
  "./src/app/products/components/products/products.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/products/components/products/products.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductsComponentsProductsProductsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/products/components/products/products.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/products/components/products/products.component.ts ***!
    \********************************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppProductsComponentsProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/services/posts.service */
    "./src/app/shared/services/posts.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ProductsComponent =
    /*#__PURE__*/
    function () {
      function ProductsComponent(activatedRoute, postService) {
        this.activatedRoute = activatedRoute;
        this.postService = postService;
        this.breadcrumbItems = [{
          title: 'Trang Chủ',
          routerLink: '/'
        }, {
          title: '',
          routerLink: ''
        }];
        this.metadata = [];
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
      }

      var _proto2 = ProductsComponent.prototype;

      _proto2.ngOnInit = function ngOnInit() {
        var _this = this;

        this.metadata = [{
          slug: 'dat-nen',
          title: 'Sản Phẩm Đất Nền',
          listProduct: this.postService.listProductLand
        }, {
          slug: 'nha-o',
          title: 'Sản Phẩm Nhà Ở',
          listProduct: this.postService.listProductHouse
        }, {
          slug: 'da-ban',
          title: 'Sản Phẩm Đã Bán',
          listProduct: this.postService.listProductSold
        }];
        this.subscriptions.add(this.activatedRoute.paramMap.subscribe(function (paramMap) {
          var categorySlug = paramMap.get('categorySlug');

          var data = _this.metadata.find(function (md) {
            return md.slug === categorySlug;
          });

          _this.title = data.title;
          _this.listProduct = data.listProduct;
          _this.breadcrumbItems[1] = {
            title: data.title,
            routerLink: ''
          };
        }));
      };

      _proto2.ngOnDestroy = function ngOnDestroy() {
        this.subscriptions.unsubscribe();
      };

      return ProductsComponent;
    }();

    ProductsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _shared_services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]
      }];
    };

    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/products/components/products/products.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products.component.scss */
      "./src/app/products/components/products/products.component.scss")).default]
    })], ProductsComponent);
    /***/
  },

  /***/
  "./src/app/products/products-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/products/products-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProductsRoutingModule */

  /***/
  function srcAppProductsProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function () {
      return ProductsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/products/products.component */
    "./src/app/products/components/products/products.component.ts");
    /* harmony import */


    var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/product-details/product-details.component */
    "./src/app/products/components/product-details/product-details.component.ts");

    var routes = [{
      path: ':categorySlug',
      component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
    }, {
      path: 'chi-tiet/:postId',
      component: _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"]
    }];

    var ProductsRoutingModule = function ProductsRoutingModule() {};

    ProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductsRoutingModule);
    /***/
  },

  /***/
  "./src/app/products/products.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/products/products.module.ts ***!
    \*********************************************/

  /*! exports provided: ProductsModule */

  /***/
  function srcAppProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsModule", function () {
      return ProductsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _products_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./products-routing.module */
    "./src/app/products/products-routing.module.ts");
    /* harmony import */


    var _components_products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/products/products.component */
    "./src/app/products/components/products/products.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/product-details/product-details.component */
    "./src/app/products/components/product-details/product-details.component.ts");

    var ProductsModule = function ProductsModule() {};

    ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"], _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
    })], ProductsModule);
    /***/
  }
}]); //# sourceMappingURL=src-app-products-products-module-es2015.js.map
//# sourceMappingURL=src-app-products-products-module-es5.js.map