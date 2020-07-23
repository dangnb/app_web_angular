(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["_product-product-module"],{

/***/ "./src/app/_product/product.module.ts":
/*!********************************************!*\
  !*** ./src/app/_product/product.module.ts ***!
  \********************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _hepers_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../hepers/auth.guard */ "./src/app/hepers/auth.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | supplier-supplier-module */[__webpack_require__.e("common"), __webpack_require__.e("supplier-supplier-module")]).then(__webpack_require__.bind(null, /*! ./supplier/supplier.module */ "./src/app/_product/supplier/supplier.module.ts")).then(m => m.SupplierModule), canActivate: [_hepers_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    {
        path: 'category-product',
        loadChildren: () => Promise.all(/*! import() | category-product-category-product-module */[__webpack_require__.e("common"), __webpack_require__.e("category-product-category-product-module")]).then(__webpack_require__.bind(null, /*! ./category-product/category-product.module */ "./src/app/_product/category-product/category-product.module.ts")).then(m => m.CategoryProductModule), canActivate: [_hepers_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }
];
let ProductModule = class ProductModule {
};
ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]
    })
], ProductModule);



/***/ })

}]);
//# sourceMappingURL=_product-product-module-es2015.js.map