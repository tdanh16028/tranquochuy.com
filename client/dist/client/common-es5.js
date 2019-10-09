(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/shared/services/posts.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/services/posts.service.ts ***!
    \**************************************************/

  /*! exports provided: PostsService */

  /***/
  function srcAppSharedServicesPostsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsService", function () {
      return PostsService;
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


    var _model_post_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../model/post.enums */
    "./src/model/post.enums.ts");

    var PostsService =
    /*#__PURE__*/
    function () {
      function PostsService() {
        var _this = this;

        this.listProductLand = [];
        this.listProductHouse = [];
        this.listProductSold = [];
        this.listTitleLand = ['NỀN MẶT TIỀN HỒ BÚN XÁNG (BỤNG HỒ)', 'NỀN BIỆT THỰ ĐƯỜNG SỐ 13 CỒN KHƯƠNG', 'NỀN ĐS 3 KDC ĐẠI NGÂN, NGUYỄN VĂN CỪ', 'NỀN TRỤC CHÍNH HẺM 113 TRẦN VĂN KHÉO', 'NỀN MẶT TIỀN LÒ MỔ', 'NỀN KDC CÔNG AN', 'NỀN ĐƯỜNG A4 KDC PHÚ AN', 'NỀN ĐƯỜNG 7A KHU VĂN HOÁ TÂY ĐÔ', 'NỀN BIỆT THỰ ĐS 6 KDC XÂY DỰNG', 'NỀN HẺM TRẦN HƯNG ĐẠO, CÁI RĂNG', 'NỀN KDC THIÊN LỘC', '4 NỀN LIỀN KỀ KHU TTTM MÁI DẦM', 'BIỆT THỰ ĐƯỜNG SỐ 12 LONG THỊNH', 'NỀN HẺM NHÁNH 12-20 NGUYỄN VĂN CỪ', 'NỀN BIỆT THỰ KDC NAM LONG', 'NỀN HẺM ĐƯỜNG HOÀNG QUỐC VIỆT', 'NỀN ĐƯỜNG B2 KDC PHÚ AN', 'NỀN MẶT TIỀN MAI CHÍ THỌ KDC 586', 'NỀN ĐƯỜNG D1 CỒN KHƯƠNG', 'NỀN MẶT TIỀN TRẦN NAM PHÚ'];
        this.listTitleHouse = ['NHÀ MỚI TRỆT LẦU KHU BIỆT THỰ HƯNG LỢI', 'NHÀ 1 TRỆT HẺM 2 NGUYỄN VIỆT HỒNG', 'NHÀ TRỆT 2 LẦU ĐƯỜNG B5 KDC 91B', 'CHUNG CƯ CADIF 2PN KDC HƯNG PHÚ 1', 'CHO THUÊ MẶT BẰNG MẶT TIỀN ĐƯỜNG 30/4', 'CHO THUÊ PHÒNG CAO CẤP ĐƯỜNG 30/4', 'NHÀ TRỆT LẦU HẺM 61 TRẦN BÌNH TRỌNG', 'NHÀ TRỆT MẶT TIỀN NGUYỄN VĂN CỪ', 'NHÀ 1 TRỆT 2 LẦU NGUYỄN VIỆT HỒNG', 'NHÀ 1 TRỆT 3 LẦU NGUYỄN VIỆT DŨNG', 'NHÀ TRỆT 3 LẦU KDC SỐ 9 ĐƯỜNG 30/4', 'NHÀ TRỆT 2 LẦU ĐƯỜNG 3E KDC ĐH Y DƯỢC', 'NHÀ TRỆT MẶT TIỀN NGUYỄN VĂN CỪ', 'NHÀ TRỆT CŨ HẺM NHÁNH HẺM LIÊN TỔ 12-20 NGUYỄN VĂN CỪ', 'NHÀ TRỆT 2 LẦU KDC NAM LONG', 'NHÀ TRỆT 2 LẦU HẺM 87 PHẠM NGŨ LÃO', 'NHÀ MỚI TRỆT 2 LẦU KHU BIỆT THỰ HƯNG LỢI', 'NHÀ 1 TRỆT 2 LẦU KDC 351 ĐƯỜNG 30/4', 'NHÀ MỚI TRỆT LẦU HẺM 50 QUANG TRUNG', 'NHÀ TRỆT LẦU KDC 148 ĐƯỜNG 3/2'];
        this.listTitleSold = ['NỀN KDC ĐẠI NGÂN, NGUYỄN VĂN CỪ', 'CHUNG CƯ CADIF 3 PN KDC HƯNG PHÚ 1', 'NỀN ĐƯỜNG SỐ 13 CỒN KHƯƠNG', 'NỀN ĐƯỜNG B7 KDC PHÚ AN', 'CHUNG CƯ CADIF 2 PHÒNG NGỦ', 'NỀN ĐS 7 KDC ĐHCT', 'NỀN KDC 91B GIAI ĐOẠN 3', 'NHÀ CŨ HẺM 6 BÙI THỊ XUÂN', 'NHÀ LẦU MỚI HẺM 9 PHẠM NGỌC HƯNG', 'NHÀ HẺM 311 NGUYỄN VĂN CỪ', 'NHÀ ĐƯỜNG PHAN HUY CHÚ KDC THỚI NHỰT', '3 NỀN LIỀN KỀ ĐƯỜNG A2 KDC HƯNG PHÚ 1', 'NỀN ĐƯỜNG SỐ 1 KDC ĐHCT', 'NỀN ĐƯỜNG 36 KHU TĐC BV UNG BƯỚU', 'NỀN BIỆT THỰ KDC NAM LONG GĐ2', 'NỀN ĐƯỜNG D24 KDC HỒNG LOAN', 'NỀN KDC ĐẠI NGÂN, NGUYỄN VĂN CỪ', 'NỀN GÓC HẺM 234 HOÀNG QUỐC VIỆT', 'NỀN MẶT TIỀN HỒ BÚN XÁNG', '3 NỀN LIỀN KỀ ĐƯỜNG A2 KDC HƯNG PHÚ 1'];
        this.listImages = ['assets/images/photo.jpg', 'assets/images/light.jpg', 'assets/images/dark.jpg'];
        this.listDirection = [_model_post_enums__WEBPACK_IMPORTED_MODULE_2__["Direction"].SOUTHEAST, _model_post_enums__WEBPACK_IMPORTED_MODULE_2__["Direction"].NORTHEAST, _model_post_enums__WEBPACK_IMPORTED_MODULE_2__["Direction"].SOUTHWEST, _model_post_enums__WEBPACK_IMPORTED_MODULE_2__["Direction"].NORTHWEST];
        this.listProductLand = this.listTitleLand.slice(0, 9).map(function (title, index) {
          return _this.getRandomPost(title, index);
        });
        this.listProductHouse = this.listTitleHouse.slice(0, 9).map(function (title, index) {
          return _this.getRandomPost(title, index);
        });
        this.listProductSold = this.listTitleSold.slice(0, 9).map(function (title, index) {
          return _this.getRandomPost(title, index);
        });
      }

      var _proto = PostsService.prototype;

      _proto.getRandomPost = function getRandomPost(title, id) {
        var _this2 = this;

        return {
          _id: id + '',
          title: title,
          images: new Array(Math.floor(Math.random() * 5) + 5).fill(0).map(function () {
            return _this2.getRandomImage();
          }),
          estateProperties: this.getRandomEstateProperties(),
          // tslint:disable-next-line:max-line-length
          moreInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue risus sed pulvinar fringilla. Etiam ac tortor dapibus, volutpat leo a, commodo libero. Cras vel tempus leo. Donec interdum luctus enim, id varius eros viverra vel. Vivamus tristique mauris nulla, vestibulum pretium neque imperdiet non. Nunc tincidunt gravida condimentum. Donec non tortor ligula.'
        };
      };

      _proto.getRandomImage = function getRandomImage() {
        return this.listImages[Math.floor(Math.random() * this.listImages.length)];
      };

      _proto.getRandomDirection = function getRandomDirection() {
        return this.listDirection[Math.floor(Math.random() * this.listDirection.length)];
      };

      _proto.getRandomEstateProperties = function getRandomEstateProperties() {
        var width = Math.floor(Math.random() * 6) + 5; // From 5 to 10 (0 to 5 + 5 = 5 to 10)

        var length = Math.floor(Math.random() * 11) + 15; // From 15 to 25

        var area = width * length;
        var roadWidth = Math.floor(Math.random() * 11) + 5; // From 5 to 15

        var amount = (Math.floor(Math.random() * 10) + 1) * 1000000000; // From 1.000.000.000 to 9.000.000.000

        return {
          price: {
            amount: amount
          },
          direction: this.getRandomDirection(),
          juridical: 'Sổ đỏ',
          width: width,
          length: length,
          area: area,
          project: null,
          roadWidth: roadWidth
        };
      };

      return PostsService;
    }();

    PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PostsService);
    /***/
  },

  /***/
  "./src/model/post.enums.ts":
  /*!*********************************!*\
    !*** ./src/model/post.enums.ts ***!
    \*********************************/

  /*! exports provided: PriceUnit, Direction */

  /***/
  function srcModelPostEnumsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PriceUnit", function () {
      return PriceUnit;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Direction", function () {
      return Direction;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PriceUnit;

    (function (PriceUnit) {
      PriceUnit["SQUARE_METERS"] = "m2";
      PriceUnit["TOTAL_AREA"] = "t\u1ED5ng di\u1EC7n t\xEDch";
    })(PriceUnit || (PriceUnit = {}));

    var Direction;

    (function (Direction) {
      Direction["EAST"] = "\u0110\xF4ng";
      Direction["WEST"] = "T\xE2y";
      Direction["SOUTH"] = "Nam";
      Direction["NORTH"] = "B\u1EAFc";
      Direction["NORTHEAST"] = "\u0110\xF4ng B\u1EAFc";
      Direction["SOUTHEAST"] = "\u0110\xF4ng Nam";
      Direction["NORTHWEST"] = "T\xE2y B\u1EAFc";
      Direction["SOUTHWEST"] = "T\xE2y Nam";
    })(Direction || (Direction = {}));
    /***/

  }
}]); //# sourceMappingURL=common-es2015.js.map
//# sourceMappingURL=common-es5.js.map