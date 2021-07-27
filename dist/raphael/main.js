(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rajan/muna/Fun@Work/jy/tech/Raphael/src/main.ts */"zUnb");


/***/ }),

/***/ "3OcW":
/*!************************************************!*\
  !*** ./src/app/shared/constants/field-info.ts ***!
  \************************************************/
/*! exports provided: FieldType, FieldInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldType", function() { return FieldType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldInfo", function() { return FieldInfo; });
class FieldType {
    constructor(options = {}) {
        this.value = options.value || '';
        this.label = options.label || '';
        this.key = options.key || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.type = options.type || '';
        this.options = options.options || [];
    }
}
// defining all the fields used in the app
const FieldInfo = {
    id: new FieldType({
        label: 'id',
        key: 'id',
        required: true,
        order: 1,
        type: 'number',
    }),
    name: new FieldType({
        label: 'Name',
        key: 'name',
        required: true,
        order: 1,
        type: 'text',
    }),
    phone: new FieldType({
        label: 'Phone',
        key: 'phone',
        required: true,
        order: 2,
        type: 'number',
    }),
    dob: new FieldType({
        label: 'DOB',
        key: 'dob',
        required: true,
        order: 2,
        type: 'date',
    }),
    company: new FieldType({
        label: 'Company',
        key: 'company',
        required: true,
        order: 3,
        type: 'text',
    }),
    email: new FieldType({
        label: 'Email ID',
        key: 'email',
        required: true,
        order: 3,
        type: 'email',
    }),
    active: new FieldType({
        label: 'Is Active',
        key: 'active',
        required: true,
        order: 4,
        type: 'checkbox',
    }),
    fresher: new FieldType({
        label: 'Is New',
        key: 'fresher',
        required: true,
        order: 4,
        type: 'checkbox',
    }),
    organisationId: new FieldType({
        label: 'Organisation ID',
        key: 'organisationId',
        required: true,
        order: 5,
        type: 'number',
    }),
    orgUniqueId: new FieldType({
        label: 'Organisation Unique ID',
        key: 'orgUniqueId',
        required: true,
        order: 5,
        type: 'number',
    }),
    createdOn: new FieldType({
        label: 'Created On',
        key: 'createdOn',
        required: true,
        order: 2,
        type: 'date',
    }),
    roleName: new FieldType({
        label: 'Role Name',
        key: 'roleName',
        required: true,
        order: 1,
        type: 'text',
    }),
    description: new FieldType({
        label: 'Description',
        key: 'description',
        required: true,
        order: 1,
        type: 'text',
    }),
    startDate: new FieldType({
        label: 'Start Date',
        key: 'startDate',
        required: true,
        order: 2,
        type: 'date',
    }),
    endDate: new FieldType({
        label: 'End Date',
        key: 'endDate',
        required: true,
        order: 2,
        type: 'date',
    }),
    isRecurring: new FieldType({
        label: 'Is Recurring',
        key: 'isRecurring',
        required: true,
        order: 4,
        type: 'checkbox',
    }),
    numberOfOccurence: new FieldType({
        label: 'Number Of Occurence',
        key: 'numberOfOccurence',
        required: true,
        order: 2,
        type: 'number',
    }),
    occurence: new FieldType({
        label: 'Occurence',
        key: 'occurence',
        required: true,
        order: 1,
        type: 'text',
    }),
};


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBdeMliUD5kmdQWK78eqsK3sJrbIyHjGmg",
        authDomain: "crwn-db-9a1af.firebaseapp.com",
        projectId: "crwn-db-9a1af",
        storageBucket: "crwn-db-9a1af.appspot.com",
        messagingSenderId: "886134710218",
        appId: "1:886134710218:web:3f5b21ad5cdbb8d112f933",
        measurementId: "G-G4D1Q6FTVP"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BJH9":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/rf-sidenav/rf-sidenav.component.ts ***!
  \**********************************************************************/
/*! exports provided: RfSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RfSidenavComponent", function() { return RfSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants_page_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/page-info */ "mJUZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function RfSidenavComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RfSidenavComponent_li_27_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const menu_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.navToPage(menu_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "bi-" + ctx_r0.pageInfo[menu_r1].logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getCapsMenuName(menu_r1));
} }
class RfSidenavComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.pageInfo = _constants_page_info__WEBPACK_IMPORTED_MODULE_1__["PageInfo"];
        this.menuList = [''];
        this.isOpen = false;
    }
    ngOnInit() {
        this.menuList = Object.keys(this.pageInfo);
    }
    toggleOpen() {
        this.isOpen = !this.isOpen;
    }
    navToPage(pageName) {
        this.router.navigate(['/main', pageName]);
    }
    getCapsMenuName(menu) {
        return menu.charAt(0).toUpperCase() + menu.slice(1);
    }
    signOut() {
        this.authService.signOut();
    }
    deleteAccount() {
        var _a;
        (_a = this.authService.deleteAccount()) === null || _a === void 0 ? void 0 : _a.subscribe((resp) => console.log(resp));
    }
}
RfSidenavComponent.ɵfac = function RfSidenavComponent_Factory(t) { return new (t || RfSidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
RfSidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RfSidenavComponent, selectors: [["app-rf-sidenav"]], decls: 28, vars: 5, consts: [[1, "s-layout-sidebar"], [1, "s-sidebar-trigger"], [1, "rounded-circle", "border-0", "toggle-btn", "btn", "btn-primary", "btn-icon", 3, "click"], [1, "bi", "bi-list"], [1, "s-sidebar-nav"], ["title", "Jesus Youth", "href", "/", 1, "d-flex", "align-items-center", "text-decoration-none", "nav-title-wrap"], ["alt", "Jesus Youth Logo", "src", "/assets/JY_Logo.png"], [1, "fs-3", "mx-2", "nav-title"], [1, "s-sidebar-nav-link", 3, "click"], [1, "bi", "bi-box-arrow-left"], [1, "bi", "bi-trash"], [1, "s-sidebar-nav-link"], [1, "bi", "bi-house"], [4, "ngFor", "ngForOf"], [1, "bi", 3, "ngClass"]], template: function RfSidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RfSidenavComponent_Template_button_click_2_listener() { return ctx.toggleOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Raphael ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RfSidenavComponent_Template_a_click_12_listener() { return ctx.signOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RfSidenavComponent_Template_a_click_17_listener() { return ctx.deleteAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Delete Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RfSidenavComponent_li_27_Template, 5, 2, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.isOpen)("close", !ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["em {\n  font-style: normal;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\n/* Layout */\n\n.s-layout {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n}\n\n.s-layout-content {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  flex: 1;\n}\n\n/* Sidebar */\n\n.s-sidebar-trigger {\n  z-index: 2;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 5rem;\n  height: 4rem;\n  display: flex;\n  align-items: center;\n}\n\n.s-sidebar-trigger button {\n  margin-left: 1rem;\n}\n\n.s-sidebar-nav {\n  position: fixed;\n  top: 0;\n  left: -15rem;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  transition: all 0.3s ease-in;\n  width: 15rem;\n  height: 100%;\n  background-color: #4e73df;\n  background-image: linear-gradient(180deg, #4e73df 10%, #224abe 100%);\n  color: white;\n}\n\n.s-sidebar-nav .nav-title {\n  color: white;\n}\n\n.s-sidebar-nav .nav-title-wrap {\n  margin-left: 4rem;\n  padding: 0.5rem 0;\n}\n\n.s-sidebar-nav .nav-title-wrap img {\n  width: 3rem;\n}\n\n.s-sidebar-nav ul {\n  margin: 0;\n  padding: 0;\n}\n\n.s-sidebar-nav ul li {\n  width: 100%;\n}\n\n.s-sidebar-nav ul li a.s-sidebar-nav-link {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.s-sidebar-nav ul li a.s-sidebar-nav-link:hover {\n  background: white;\n  color: #4e73df;\n}\n\n.s-sidebar-nav ul li a.s-sidebar-nav-link > i {\n  margin: 0.5rem 1rem;\n  overflow: visible;\n  font-size: 1.5em;\n}\n\n.s-sidebar-nav.open,\n.s-sidebar-nav:hover,\n.s-sidebar-nav:focus {\n  left: 0;\n}\n\n.s-sidebar-nav.close {\n  left: -15rem;\n}\n\n/* Mobile First */\n\n@media (min-width: 768px) {\n  main.s-layout-content > app-rf-table-n-form {\n    margin-left: 4rem;\n    width: calc(100% - 4rem);\n  }\n\n  /* Sidebar */\n  .s-sidebar-trigger {\n    display: none;\n  }\n\n  .s-sidebar-nav {\n    width: 4rem;\n    left: 0 !important;\n  }\n  .s-sidebar-nav .nav-title-wrap {\n    margin-left: 0.5rem;\n  }\n\n  .s-sidebar-nav:hover,\n.s-sidebar-nav:focus,\n.s-sidebar-trigger:hover + .s-sidebar-nav,\n.s-sidebar-trigger:focus + .s-sidebar-nav {\n    width: 15rem;\n  }\n}\n\n@media (min-width: 992px) {\n  main.s-layout-content > app-rf-table-n-form {\n    margin-left: 15rem;\n    width: calc(100% - 15rem);\n  }\n\n  /* Sidebar */\n  .s-sidebar-trigger {\n    display: none;\n  }\n\n  .s-sidebar-nav {\n    width: 15rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JmLXNpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQ0EsV0FBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUFFRjs7QUFDQSxZQUFBOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUU7RUFDRSxpQkFBQTtBQUVKOztBQUVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG9FQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVFO0VBQ0UsWUFBQTtBQUFKOztBQUVFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUNJO0VBQ0UsV0FBQTtBQUNOOztBQUlFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFGSjs7QUFHSTtFQUNFLFdBQUE7QUFETjs7QUFFTTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFEUjs7QUFJUTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQUZWOztBQU1RO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSlY7O0FBV0E7OztFQUdFLE9BQUE7QUFSRjs7QUFXQTtFQUNFLFlBQUE7QUFSRjs7QUFXQSxpQkFBQTs7QUFDQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSx3QkFBQTtFQVJGOztFQVdBLFlBQUE7RUFDQTtJQUVFLGFBQUE7RUFURjs7RUFZQTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtFQVRGO0VBVUU7SUFDRSxtQkFBQTtFQVJKOztFQVlBOzs7O0lBSUUsWUFBQTtFQVRGO0FBQ0Y7O0FBWUE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EseUJBQUE7RUFWRjs7RUFjQSxZQUFBO0VBQ0E7SUFDRSxhQUFBO0VBWEY7O0VBY0E7SUFDRSxZQUFBO0VBWEY7QUFDRiIsImZpbGUiOiJyZi1zaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZW0ge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi8qIExheW91dCAqL1xyXG4ucy1sYXlvdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnMtbGF5b3V0LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLyogU2lkZWJhciAqL1xyXG4ucy1zaWRlYmFyLXRyaWdnZXIge1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA1cmVtO1xyXG4gIGhlaWdodDogNHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5zLXNpZGViYXItbmF2IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0xNXJlbTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgd2lkdGg6IDE1cmVtO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU3M2RmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM0ZTczZGYgMTAlLCAjMjI0YWJlIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgLy8tLS0tLS0tLS0tTkFWIFRJVExFLS0tLS0tLS0tLVxyXG4gIC5uYXYtdGl0bGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAubmF2LXRpdGxlLXdyYXAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8tLS0tLS0tLS0tTkFWIExJU1QtLS0tLS0tLVxyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBhLnMtc2lkZWJhci1uYXYtbGluayB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBjb2xvcjogIzRlNzNkZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLVNWRy0tLS0tLS0tLS0tXHJcbiAgICAgICAgJiA+IGkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMXJlbTtcclxuICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zLXNpZGViYXItbmF2Lm9wZW4sXHJcbi5zLXNpZGViYXItbmF2OmhvdmVyLFxyXG4ucy1zaWRlYmFyLW5hdjpmb2N1cyB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLnMtc2lkZWJhci1uYXYuY2xvc2Uge1xyXG4gIGxlZnQ6IC0xNXJlbTtcclxufVxyXG5cclxuLyogTW9iaWxlIEZpcnN0ICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIG1haW4ucy1sYXlvdXQtY29udGVudCA+IGFwcC1yZi10YWJsZS1uLWZvcm17XHJcbiAgICBtYXJnaW4tbGVmdDogNHJlbTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0cmVtKTtcclxuICB9XHJcbiAgXHJcbiAgLyogU2lkZWJhciAqL1xyXG4gIC5zLXNpZGViYXItdHJpZ2dlciB7XHJcbiAgICAvLyAgd2lkdGg6IDRyZW07XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnMtc2lkZWJhci1uYXYge1xyXG4gICAgd2lkdGg6IDRyZW07XHJcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAubmF2LXRpdGxlLXdyYXAge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnMtc2lkZWJhci1uYXY6aG92ZXIsXHJcbiAgLnMtc2lkZWJhci1uYXY6Zm9jdXMsXHJcbiAgLnMtc2lkZWJhci10cmlnZ2VyOmhvdmVyICsgLnMtc2lkZWJhci1uYXYsXHJcbiAgLnMtc2lkZWJhci10cmlnZ2VyOmZvY3VzICsgLnMtc2lkZWJhci1uYXYge1xyXG4gICAgd2lkdGg6IDE1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgbWFpbi5zLWxheW91dC1jb250ZW50PmFwcC1yZi10YWJsZS1uLWZvcm0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cmVtO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1cmVtKTtcclxuXHJcbiAgfVxyXG5cclxuICAvKiBTaWRlYmFyICovXHJcbiAgLnMtc2lkZWJhci10cmlnZ2VyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucy1zaWRlYmFyLW5hdiB7XHJcbiAgICB3aWR0aDogMTVyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RfSidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rf-sidenav',
                templateUrl: './rf-sidenav.component.html',
                styleUrls: ['./rf-sidenav.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "GmAO":
/*!************************************************************!*\
  !*** ./src/app/shared/services/rf-table-n-form.service.ts ***!
  \************************************************************/
/*! exports provided: RfTableNFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RfTableNFormService", function() { return RfTableNFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _constants_field_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/field-info */ "3OcW");
/* harmony import */ var _constants_page_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/page-info */ "mJUZ");





class RfTableNFormService {
    constructor() {
        this.fieldInfo = _constants_field_info__WEBPACK_IMPORTED_MODULE_2__["FieldInfo"];
        this.currentPage = '';
        this.pageInfo = _constants_page_info__WEBPACK_IMPORTED_MODULE_3__["PageInfo"];
    }
    ;
    ;
    // converting to form group
    toFormGroup(dynFields) {
        const group = {};
        dynFields.forEach((field) => {
            if (!field.value)
                switch (field.type) {
                    case 'date':
                        field.value = new Date();
                        break;
                    case 'text':
                        field.value = '';
                        break;
                    case 'number':
                        field.value = null;
                        break;
                    case 'checkbox':
                        field.value = false;
                        break;
                    default:
                        field.value = null;
                        break;
                }
            if (!['createdOn', 'id'].includes(field.key))
                group[field.key] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](field.value, field.required ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required : null);
        });
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    }
    // TODO: get from a remote source of question metadata
    getFields(pageName) {
        return this.getPageInfo(pageName).sort((a, b) => a.order - b.order);
    }
    // get the fields corresponding to the page name
    getPageInfo(pageName) {
        var pageFieldMap = [];
        if (this.pageInfo[pageName].fields)
            this.pageInfo[pageName].fields.forEach((key) => {
                pageFieldMap.push(this.fieldInfo[key]);
            });
        else {
            console.warn('incorrect page name passed');
            return [];
        }
        return pageFieldMap;
    }
    getCurrentPage() {
        return this.currentPage;
    }
    setCurrentPage(pageName) {
        this.currentPage = pageName;
    }
    getPageInfoConst() {
        return this.pageInfo;
    }
    getFieldInfoConst() {
        return this.fieldInfo;
    }
}
RfTableNFormService.ɵfac = function RfTableNFormService_Factory(t) { return new (t || RfTableNFormService)(); };
RfTableNFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RfTableNFormService, factory: RfTableNFormService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RfTableNFormService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "IRVw":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/loading-ripple/loading-ripple.component.ts ***!
  \******************************************************************************/
/*! exports provided: LoadingRippleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingRippleComponent", function() { return LoadingRippleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoadingRippleComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingRippleComponent.ɵfac = function LoadingRippleComponent_Factory(t) { return new (t || LoadingRippleComponent)(); };
LoadingRippleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingRippleComponent, selectors: [["app-loading-ripple"]], decls: 3, vars: 0, consts: [[1, "lds-ripple"]], template: function LoadingRippleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]{\n      margin: auto;\n      display: block;\n      text-align: center;\n    }\n    .lds-ripple[_ngcontent-%COMP%] {\n      display: inline-block;\n      position: relative;\n      margin: auto;\n      // display: block;\n      width: 80px;\n      height: 80px;\n    }\n    .lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n      position: absolute;\n      border: 4px solid gray;\n      opacity: 1;\n      border-radius: 50%;\n      animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n    }\n    .lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n      animation-delay: -0.5s;\n    }\n    @keyframes lds-ripple {\n      0% {\n        top: 36px;\n        left: 36px;\n        width: 0;\n        height: 0;\n        opacity: 1;\n      }\n      100% {\n        top: 0px;\n        left: 0px;\n        width: 72px;\n        height: 72px;\n        opacity: 0;\n      }\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingRippleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-ripple',
                template: `<div class="lds-ripple"><div></div><div></div></div>
  `,
                styles: [
                    `
    :host{
      margin: auto;
      display: block;
      text-align: center;
    }
    .lds-ripple {
      display: inline-block;
      position: relative;
      margin: auto;
      // display: block;
      width: 80px;
      height: 80px;
    }
    .lds-ripple div {
      position: absolute;
      border: 4px solid gray;
      opacity: 1;
      border-radius: 50%;
      animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    .lds-ripple div:nth-child(2) {
      animation-delay: -0.5s;
    }
    @keyframes lds-ripple {
      0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
      }
      100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
      }
    }
    `
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LS6v":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "vLqr");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "qXBG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_loading_ripple_loading_ripple_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/loading-ripple/loading-ripple.component */ "IRVw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function AuthComponent_app_loading_ripple_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading-ripple");
} }
function AuthComponent_div_6_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.errorMessage);
} }
function AuthComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign in with");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_div_6_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.signInWithGoogle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Or");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthComponent_div_6_Template_form_ngSubmit_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.signIn(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AuthComponent_div_6_div_28_Template, 3, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r2.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.errorMessage);
} }
class AuthComponent {
    constructor(authService) {
        this.authService = authService;
        this.errorMessage = '';
        this.isLoading = false;
    }
    ngOnInit() {
        this.authService.initAuthListener();
    }
    // IF NEEDED
    // signUp() {
    //   //   this.authService.SignUp(this.email, this.password);
    //   //  form.reset();
    // }
    signIn(form) {
        this.isLoading = true;
        if (!form.valid) {
            this.errorMessage = "Form is invalid";
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        this.authService.signIn(email, password).subscribe((res) => {
            console.log('you r in');
            this.isLoading = false;
        }, (err) => {
            this.isLoading = false;
            this.errorMessage = err;
            return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.errorMessage);
        });
        form.reset();
    }
    signOut() {
        this.authService.signOut();
    }
    signInWithGoogle() {
        this.authService.signInWithGoogle();
    }
    ngOnDestroy() {
        // this.signInObs$.unsubscribe();
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 7, vars: 2, consts: [[1, "title", "d-flex", "align-items-center", "justify-content-center"], [1, ""], ["alt", "Jesus Youth Logo", "src", "/assets/JY_Logo.png"], [1, "container-fluid", "d-flex", "flex-column", "justify-content-center", "align-items-center"], [4, "ngIf"], ["class", "card border-0", 4, "ngIf"], [1, "card", "border-0"], [1, "gradient"], [1, "card-header"], [1, "d-inline-block", "mb-0"], ["type", "button", 1, "btn", "btn-icon", "rounded-circle", "btn-primary", 3, "click"], [1, "bi", "bi-google"], [1, "row", "d-flex", "justify-content-center", "align-items-center", "mt-2"], [1, "line"], [1, "or", "text-center"], [1, "card-body"], [3, "ngSubmit"], ["authForm", "ngForm"], [1, "form-group", "row"], ["for", "email"], ["type", "email", "id", "email", "ngModel", "", "name", "email", "required", "", "email", "", 1, "form-control"], ["for", "password"], ["type", "password", "id", "password", "ngModel", "", "name", "password", "required", "", "minlength", "6", 1, "form-control"], [1, "row", "btn-container"], ["type", "submit", 1, "btn", "btn-primary", "text-center", 3, "disabled"], ["class", "alert alert-danger m-0 p-0 text-center", 4, "ngIf"], [1, "alert", "alert-danger", "m-0", "p-0", "text-center"], [1, "mb-0"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Raphael ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AuthComponent_app_loading_ripple_5_Template, 1, 0, "app-loading-ripple", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AuthComponent_div_6_Template, 29, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_loading_ripple_loading_ripple_component__WEBPACK_IMPORTED_MODULE_4__["LoadingRippleComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  display: block;\n  background: #4e73df;\n  \n  \n  background: linear-gradient(180deg, #4e73df 10%, #224abe 100%);\n  \n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  padding: 0;\n  height: 80vh;\n  position: relative;\n  top: -5vh;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 20vh;\n  margin: auto;\n  color: white;\n}\n\n.title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 8px 0px #555872;\n  transition: background-color 0.5s linear;\n  position: relative;\n  background-color: rgba(255, 255, 255, 0.6);\n  border-radius: 10px;\n  width: 100%;\n  max-width: 250px;\n}\n\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 2.5rem;\n}\n\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .border-line[_ngcontent-%COMP%] {\n  border-right: 1px solid #eeeeee;\n}\n\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 35%;\n  background-color: #e0e0e0;\n}\n\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .or[_ngcontent-%COMP%] {\n  width: 25%;\n  font-weight: bold;\n}\n\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 2rem 2.5rem;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  background-color: white;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #bdbdbd;\n  opacity: 1;\n  font-weight: 300;\n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #bdbdbd;\n  font-weight: 300;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #bdbdbd;\n  font-weight: 300;\n}\n\ninput[_ngcontent-%COMP%]:not([type=checkbox]) {\n  border: 1px solid lightgrey;\n  border-radius: 5px;\n  margin-bottom: 1rem;\n  width: 100%;\n  box-sizing: border-box;\n  color: #2c3e50;\n  font-size: 1rem;\n  letter-spacing: 1px;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  border: 1px solid #304ffe;\n  outline-width: 0;\n}\n\n@media (min-width: 768px) {\n  .card[_ngcontent-%COMP%] {\n    max-width: 300px;\n  }\n  .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    padding: 1rem 1.5rem;\n  }\n  .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 1rem 2rem;\n  }\n}\n\n@media (min-width: 992px) {\n  .card[_ngcontent-%COMP%] {\n    max-width: 350px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2F1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQXNCLDhCQUFBO0VBS25CLCtCQUFBO0VBQ0gsOERBQUE7RUFJRyxxRUFBQTtBQUpMOztBQU1BO0VBQ0MsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFIRDs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRkY7O0FBSUU7RUFDRSxXQUFBO0FBRko7O0FBTUE7RUFDRSxtQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSEY7O0FBSUU7RUFDRSxzQkFBQTtBQUZKOztBQUlJO0VBQ0UsK0JBQUE7QUFGTjs7QUFJSTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFGTjs7QUFJSTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQUZOOztBQUlJO0VBQ0Usb0JBQUE7QUFGTjs7QUFLRTtFQUNFLG9CQUFBO0FBSEo7O0FBSUk7RUFDRSxrQkFBQTtBQUZOOztBQUlJO0VBQ0Usb0JBQUE7QUFGTjs7QUFNRTtFQUNFLHVCQUFBO0FBSko7O0FBUUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBO0VBRUUsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVBGOztBQVVBOztFQUlFLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVVBO0VBQ0U7SUFDRSxnQkFBQTtFQVBGO0VBU0U7SUFDRSxvQkFBQTtFQVBKO0VBU0U7SUFDRSxrQkFBQTtFQVBKO0FBQ0Y7O0FBV0E7RUFDRTtJQUNFLGdCQUFBO0VBVEY7QUFDRiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6ICM0ZTczZGYgOyAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXHJcbiAgICAxODBkZWcsXHJcbiAgICAjNGU3M2RmIDEwJSxcclxuICAgICMyMjRhYmUgMTAwJVxyXG4gICk7IC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTgwZGVnLFxyXG4gICAgIzRlNzNkZiAxMCUsXHJcbiAgICAjMjI0YWJlIDEwMCVcclxuICApOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiBwYWRkaW5nOiAwO1xyXG4gaGVpZ2h0OiA4MHZoO1xyXG4gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gdG9wOiAtNXZoO1xyXG59XHJcbi50aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMjB2aDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDNyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggMHB4IHJnYig4NSwgODgsIDExNCk7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGxpbmVhcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAuY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMS41cmVtIDIuNXJlbTtcclxuXHJcbiAgICAuYm9yZGVyLWxpbmUge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgfVxyXG4gICAgLmxpbmUge1xyXG4gICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgIH1cclxuICAgIC5vciB7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgaDYge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAycmVtIDIuNXJlbTtcclxuICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIH1cclxuICAgIC5idG4tY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2JkYmRiZDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjYmRiZGJkO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2JkYmRiZDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG5pbnB1dDpub3QoW3R5cGU9XCJjaGVja2JveFwiXSkge1xyXG4gIC8vICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIC8vICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyxcclxudGV4dGFyZWE6Zm9jdXMge1xyXG4gIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMzA0ZmZlO1xyXG4gIG91dGxpbmUtd2lkdGg6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcblxyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgICB9XHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLmNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.scss'],
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "Nnf/":
/*!**************************************************!*\
  !*** ./src/app/auth/auth-interceptor.service.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "qXBG");




class AuthInterceptorService {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        // TAKE(1) :UNSUBSCRIBES AFTER FIRST EMISSION, EXHAUST MAP: Map to inner observable, ignore other values until that observable completes
        // Gets token and appends it to every request
        // req = req.clone({
        //   setHeaders: {
        //     Authorization: `Bearer ${this.authService.getToken$()}`,
        //   },
        // });
        // return next.handle(req);
        return this.authService.getToken$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])((user) => {
            const modifiedReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.token}`
                }
                // params: new HttpParams().set('Authorization','Bearer '+ user.token),
            });
            return next.handle(modifiedReq);
        }));
    }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) { return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AuthInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptorService, factory: AuthInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_rf_modal_rf_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/rf-modal/rf-modal.component */ "rvD9");
/* harmony import */ var _components_rf_sidenav_rf_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/rf-sidenav/rf-sidenav.component */ "BJH9");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/shared.service */ "wbvY");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/config.service */ "vihK");
/* harmony import */ var _services_rf_table_n_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/rf-table-n-form.service */ "GmAO");
/* harmony import */ var _components_loading_ripple_loading_ripple_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/loading-ripple/loading-ripple.component */ "IRVw");









class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [
                _services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
                _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
                _services_rf_table_n_form_service__WEBPACK_IMPORTED_MODULE_6__["RfTableNFormService"]
            ]
        };
    }
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_rf_modal_rf_modal_component__WEBPACK_IMPORTED_MODULE_2__["RfModalComponent"], _components_rf_sidenav_rf_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["RfSidenavComponent"], _components_loading_ripple_loading_ripple_component__WEBPACK_IMPORTED_MODULE_7__["LoadingRippleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_components_rf_modal_rf_modal_component__WEBPACK_IMPORTED_MODULE_2__["RfModalComponent"],
        _components_rf_sidenav_rf_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["RfSidenavComponent"],
        _components_loading_ripple_loading_ripple_component__WEBPACK_IMPORTED_MODULE_7__["LoadingRippleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_rf_modal_rf_modal_component__WEBPACK_IMPORTED_MODULE_2__["RfModalComponent"], _components_rf_sidenav_rf_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["RfSidenavComponent"], _components_loading_ripple_loading_ripple_component__WEBPACK_IMPORTED_MODULE_7__["LoadingRippleComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _components_rf_modal_rf_modal_component__WEBPACK_IMPORTED_MODULE_2__["RfModalComponent"],
                    _components_rf_sidenav_rf_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["RfSidenavComponent"],
                    _components_loading_ripple_loading_ripple_component__WEBPACK_IMPORTED_MODULE_7__["LoadingRippleComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.service */ "qXBG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AppComponent_main_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(router, authServ) {
        this.router = router;
        this.authServ = authServ;
        this.title = 'raphael';
        this.isLoading = true;
        this.authServ.userData$.subscribe((authState) => {
            // authState?.delete().then(_ => console.log('sd'))
            this.isLoading = false;
            if (authState)
                this.router.navigate(['/main', 'contact']);
            else
                this.router.navigate(['auth']);
        }, (err) => {
            this.isLoading = false;
            alert(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [[1, "s-layout"], ["class", "s-layout-content", 4, "ngIf"], [1, "s-layout-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_main_1_Template, 2, 0, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\nmain[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFPQTtFQUNFLFdBQUE7QUFKRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vIC53cmFwcGVyIHtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuXHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYztcclxuLy8gfVxyXG5tYWluIHtcclxuICB3aWR0aDogMTAwJTtcclxuICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgLy8gbWFyZ2luOiAwO1xyXG4gIC8vIHBhZGRpbmc6IDA7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiA5MHB4O1xyXG59XHJcbi8vIC5yb3d7XHJcbi8vICAgbWFyZ2luOiAwO1xyXG4vLyB9XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.component */ "LS6v");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth-interceptor.service */ "Nnf/");







// // -------FIREBASE UI AUTH MODULES---------








// const firebaseUiAuthConfig: firebaseui.auth.Config = {
//   signInFlow: 'popup',
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     {
//       requireDisplayName: false,
//       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
//     },
//   ],
//   tosUrl: '<your-tos-link>',
//   privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
//   credentialHelper: firebaseui.auth.CredentialHelper.NONE
// };
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptorService"], multi: true }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_10__["AuthComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_10__["AuthComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebaseConfig),
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"]
                ],
                providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptorService"], multi: true }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "mJUZ":
/*!***********************************************!*\
  !*** ./src/app/shared/constants/page-info.ts ***!
  \***********************************************/
/*! exports provided: PageInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageInfo", function() { return PageInfo; });
// page to fields name mapping
// make sure the property name (name,phone,dob) are consistent and same throughout the three  mappings
const PageInfo = {
    contact: {
        fields: [
            'id',
            'name',
            'phone',
            'dob',
            'company',
            'email',
            'active',
            'fresher',
            'organisationId',
            'createdOn',
        ],
        logo: 'person-plus',
        getApis: 'contact/getAllContacts',
        postApis: 'contact/createContact',
    },
    organisation: {
        fields: ['id', 'createdOn', 'name', 'orgUniqueId'],
        logo: 'people',
        getApis: 'organisation',
        postApis: 'organisation',
    },
    role: {
        fields: ['id', 'createdOn', 'roleName'],
        logo: 'person-badge',
        getApis: 'role/getAllRoles',
        postApis: 'role/createRole',
    },
    tag: {
        fields: ['id', 'createdOn', 'name', 'organisationId'],
        logo: 'bookmark',
        getApis: 'tag/getAllTags',
        postApis: 'tag/createTag',
    },
    users: {
        fields: ['id', 'name', 'phone'],
        logo: 'people',
        getApis: 'users',
        postApis: 'users',
    },
    event: {
        fields: [
            'name',
            'description',
            'startDate',
            'endDate',
            'isRecurring',
            'numberOfOccurence',
            'occurence',
        ],
        logo: 'calendar-event',
        getApis: 'event/getAllEvents',
        postApis: 'event',
    },
};


/***/ }),

/***/ "qXBG":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");






class AuthService {
    constructor(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
        this.userData$ = angularFireAuth === null || angularFireAuth === void 0 ? void 0 : angularFireAuth.authState;
        this.userData$.subscribe((response) => (this.user = response));
    }
    // -------------FETCHES JWT-----------------
    getToken$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.angularFireAuth.currentUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((user) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(user === null || user === void 0 ? void 0 : user.getIdTokenResult(true));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    // ------------LISTENS TO AUTH STATE : LOGGED IN | LOGGED OUT------------------------
    initAuthListener() {
        this.angularFireAuth.onAuthStateChanged((user) => {
            if (user) {
                // code
            }
            else {
                this.angularFireAuth.signOut();
            }
        });
    }
    // --------------SIGNIN API CALL----------------------
    signIn(email, password) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.angularFireAuth.signInWithEmailAndPassword(email, password)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleSignInError));
    }
    // ---------------SIGNIN WITH GOOGLE API CALL---------------------
    signInWithGoogle() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.angularFireAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth.GoogleAuthProvider())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    // ---------------SIGN OUT---------------------
    signOut() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.angularFireAuth.signOut()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    // -----------------DELETE ACCOUNT-------------------
    deleteAccount() {
        if (!this.user)
            return;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.user.delete()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    // ---------------ERROR HANDLER----------------
    handleError(error) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    }
    handleSignInError(errorRes) {
        var errorMessage = 'An unknown error occurred!';
        if (!errorRes || !errorRes.message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }
        switch (errorRes.code) {
            case 'auth/invalid_id_token':
                errorMessage =
                    'Invalid credentials. Please signin with valid username and password';
                break;
            case 'auth/user-not-found':
            case 'auth/email_not_found':
                errorMessage = 'Please provide an authorized email address.';
                break;
            case 'auth/wrong-password':
                errorMessage = 'Please enter a valid password.';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "rvD9":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/rf-modal/rf-modal.component.ts ***!
  \******************************************************************/
/*! exports provided: RfModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RfModalComponent", function() { return RfModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class RfModalComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.element = el.nativeElement;
    }
    clickout(event) {
        if (event && event.target && event.target.className == "rf-modal") {
            this.close();
        }
    }
    ngOnInit() {
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        this.renderer.appendChild(document.body, this.element);
    }
    // remove self from modal service when component is destroyed
    ngOnDestroy() {
        this.element.remove();
    }
    // open modal
    open() {
        this.renderer.setStyle(this.element, 'display', 'block');
        this.renderer.addClass(document.body, 'rf-modal-open');
    }
    // close modal
    close() {
        this.renderer.setStyle(this.element, 'display', 'none');
        this.renderer.removeClass(document.body, 'rf-modal-open');
    }
}
RfModalComponent.ɵfac = function RfModalComponent_Factory(t) { return new (t || RfModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
RfModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RfModalComponent, selectors: [["app-rf-modal"]], hostBindings: function RfModalComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RfModalComponent_click_HostBindingHandler($event) { return ctx.clickout($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, ngContentSelectors: _c0, decls: 4, vars: 0, consts: [[1, "rf-modal"], [1, "rf-modal-body"], [1, "rf-modal-background"]], template: function RfModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
    } }, styles: ["/* MODAL STYLES\n-------------------------------*/\napp-rf-modal {\n  /* modals are hidden by default */\n  display: none;\n}\napp-rf-modal .rf-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* z-index must be higher than .rf-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\napp-rf-modal .rf-modal .rf-modal-body {\n  padding: 20px;\n  background: #fff;\n  /* margin exposes part of the modal background */\n  margin: 40px;\n  padding: 2rem;\n  border-radius: 25px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\napp-rf-modal .rf-modal .rf-modal-body .form-group {\n  margin-bottom: 0.5rem;\n}\napp-rf-modal .rf-modal .rf-modal-body .form-group label {\n  color: #5a5a5a;\n}\napp-rf-modal .rf-modal .rf-modal-body .form-group input {\n  color: #5a5a5a;\n}\napp-rf-modal .rf-modal .rf-modal-body .custom-checkbox {\n  display: flex;\n  align-items: flex-end;\n  gap: 1rem;\n}\napp-rf-modal .rf-modal .rf-modal-body .custom-checkbox .form-check {\n  display: inline-block;\n}\napp-rf-modal .rf-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .rf-modal and above everything else  */\n  z-index: 900;\n}\nbody.rf-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JmLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO2dDQUFBO0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGFBQUE7QUFDRjtBQUNFO0VBQ0UsOENBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUVBLHFEQUFBO0VBQ0EsYUFBQTtFQUVBLHNDQUFBO0VBQ0EsY0FBQTtBQURKO0FBR0k7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnREFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw0RUFBQTtBQUROO0FBR007RUFDRSxxQkFBQTtBQURSO0FBRVE7RUFDRSxjQUFBO0FBQVY7QUFFUTtFQUNFLGNBQUE7QUFBVjtBQUdNO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQURSO0FBRVE7RUFDRSxxQkFBQTtBQUFWO0FBTUU7RUFDRSwrQ0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBRUEsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFFQSwrREFBQTtFQUNBLFlBQUE7QUFOSjtBQVVBO0VBQ0UsNkVBQUE7RUFDQSxnQkFBQTtBQVBGIiwiZmlsZSI6InJmLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTU9EQUwgU1RZTEVTXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5hcHAtcmYtbW9kYWwge1xyXG4gIC8qIG1vZGFscyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAucmYtbW9kYWwge1xyXG4gICAgLyogbW9kYWwgY29udGFpbmVyIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuXHJcbiAgICAvKiB6LWluZGV4IG11c3QgYmUgaGlnaGVyIHRoYW4gLnJmLW1vZGFsLWJhY2tncm91bmQgKi9cclxuICAgIHotaW5kZXg6IDEwMDA7XHJcblxyXG4gICAgLyogZW5hYmxlcyBzY3JvbGxpbmcgZm9yIHRhbGwgbW9kYWxzICovXHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAucmYtbW9kYWwtYm9keSB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIC8qIG1hcmdpbiBleHBvc2VzIHBhcnQgb2YgdGhlIG1vZGFsIGJhY2tncm91bmQgKi9cclxuICAgICAgbWFyZ2luOiA0MHB4O1xyXG4gICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmN1c3RvbS1jaGVja2JveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgZ2FwOiAxcmVtO1xyXG4gICAgICAgIC5mb3JtLWNoZWNrIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yZi1tb2RhbC1iYWNrZ3JvdW5kIHtcclxuICAgIC8qIG1vZGFsIGJhY2tncm91bmQgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG5cclxuICAgIC8qIHNlbWktdHJhbnNwYXJlbnQgYmxhY2sgICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgb3BhY2l0eTogMC43NTtcclxuXHJcbiAgICAvKiB6LWluZGV4IG11c3QgYmUgYmVsb3cgLnJmLW1vZGFsIGFuZCBhYm92ZSBldmVyeXRoaW5nIGVsc2UgICovXHJcbiAgICB6LWluZGV4OiA5MDA7XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5LnJmLW1vZGFsLW9wZW4ge1xyXG4gIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RfModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rf-modal',
                templateUrl: './rf-modal.component.html',
                styleUrls: ['./rf-modal.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { clickout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.component */ "LS6v");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");






const routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    {
        path: 'main/:pagename',
        loadChildren: () => __webpack_require__.e(/*! import() | shared-components-rf-table-n-form-rf-table-n-form-module */ "shared-components-rf-table-n-form-rf-table-n-form-module").then(__webpack_require__.bind(null, /*! ./shared/components/rf-table-n-form/rf-table-n-form.module */ "kYGi")).then((m) => m.RfTableNFormModule),
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthGuard"]]
    },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] }),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vihK":
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _constants_page_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/page-info */ "mJUZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






const configUrl = 'https://raphael-service.herokuapp.com/api/';
class ConfigService {
    constructor(http) {
        this.http = http;
        this.pageInfo = _constants_page_info__WEBPACK_IMPORTED_MODULE_3__["PageInfo"];
    }
    //----------RETURNS CORRESPONDING PAGE'S GETAPIS FROM PAGEINFO CONSTANT--------------
    getGetApi(page) {
        return this.pageInfo[page].getApis;
    }
    //-----------RETURNS CORRESPONSING PAGE'S POSTAPIS PAGEINFO CONSTANT-------------
    getCreateApi(page) {
        return this.pageInfo[page].postApis;
    }
    //----------APPENDING ORG ID FOR EVENT PAGE ONLY--------------
    getPreUrl(page, orgId) {
        // prepends organization ID for event page, else : returns ''
        return orgId ? orgId + '/' : page == 'event' ? '0/' : '';
    }
    //------------RETURNING HTTP REQUEST FOR GET------------
    getAllData(page, orgId) {
        var url = this.getPreUrl(page, orgId) + this.getGetApi(page);
        return this.http.get(configUrl + url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    //------------RETURNING HTTP REQUEST FOR POST------------
    postFormData(page, formData, orgId) {
        var url = this.getPreUrl(page, orgId) + this.getCreateApi(page);
        return this.http
            .post(configUrl + url, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "wbvY":
/*!***************************************************!*\
  !*** ./src/app/shared/services/shared.service.ts ***!
  \***************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SharedService {
    constructor() { }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map