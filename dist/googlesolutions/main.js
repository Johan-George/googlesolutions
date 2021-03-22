(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+lJh":
/*!*******************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/terminal/EndElseIf.ts ***!
  \*******************************************************************/
/*! exports provided: EndElseIf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndElseIf", function() { return EndElseIf; });
/**
 * TerminalBlock representing the end of an ElseIf Block
 * See block-command.ts for specific documentation
 * on properties and methods
 */
class EndElseIf {
    constructor() {
        this.terminate = null;
    }
    getId() {
        return EndElseIf.id;
    }
    getLabel() {
        return EndElseIf.label;
    }
    getAsCode() {
        return '}';
    }
}
EndElseIf.label = 'End Else If';
EndElseIf.id = btoa(EndElseIf.name);


/***/ }),

/***/ "+v1C":
/*!*******************************************!*\
  !*** ./src/app/models/game/units/Unit.ts ***!
  \*******************************************/
/*! exports provided: Unit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unit", function() { return Unit; });
/* harmony import */ var _database_DatabaseData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/DatabaseData */ "jJWq");
/* harmony import */ var createjs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! createjs-module */ "ZWlK");
/* harmony import */ var createjs_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(createjs_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_SpriteConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/SpriteConstants */ "Y2Iu");



/**
 * Object that represents a Unit on the grid
 */
class AnimationConstants {
}
AnimationConstants.walk = 'walk';
AnimationConstants.idle = 'idle';
AnimationConstants.attack = 'attack';
class Unit {
    constructor() {
        /**
         * The Id number on the grid of the unit
         */
        this.id = -1;
        /**
         * The team that the unit belongs to
         */
        this.team = -1;
        /**
         * the location of the unit on the grid
         */
        this.location = { x: 0, y: 0 };
        /**
         * The code the that unit can run
         */
        this.codeType = _database_DatabaseData__WEBPACK_IMPORTED_MODULE_0__["CodeType"].NONE;
        this.activecode = [];
        this.maxHealth = 100;
        this.health = 100;
        this.defense = 10;
        this.strength = 20;
        this.attackRange = 1;
    }
    initSprite(imageData) {
        let data = {
            'images': [imageData],
            'frames': { width: _services_SpriteConstants__WEBPACK_IMPORTED_MODULE_2__["SpriteConstants"].spriteSize,
                height: _services_SpriteConstants__WEBPACK_IMPORTED_MODULE_2__["SpriteConstants"].spriteSize, regX: 20, regY: 20, spacing: 0, margin: 0 },
            'animations': {
                'idle': [0],
                'walk': [this.walk_frames[0], this.walk_frames[1], 'idle'],
                'attack': [this.attack_frames[0], this.attack_frames[1], 'idle']
            }
        };
        let spriteSheet = new createjs_module__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"](data);
        this.sprite = new createjs_module__WEBPACK_IMPORTED_MODULE_1__["Sprite"](spriteSheet, 'idle');
    }
    doIdleAnimation() {
        this.sprite.gotoAndPlay(AnimationConstants.idle);
    }
    doAttackAnimation() {
        this.sprite.gotoAndPlay(AnimationConstants.attack);
    }
    doWalkAnimation() {
        this.sprite.gotoAndPlay(AnimationConstants.walk);
    }
}


/***/ }),

/***/ "/f9s":
/*!*****************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/executable/South.ts ***!
  \*****************************************************************/
/*! exports provided: South */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "South", function() { return South; });
/* harmony import */ var src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/game/GameAction */ "IiXB");
/* harmony import */ var _services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/game/grid-parser.service */ "qLgx");
/* harmony import */ var _Wait__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wait */ "lo65");



/**
 * Executable representing a right movement
 * See block-command.ts for specific documentation
 * on properties and methods
 */
class South {
    constructor() { }
    execute(grid, unit) {
        let newLocation = { x: unit.location.x, y: unit.location.y + 1 };
        if (_services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_1__["GridParserService"].isInBounds(newLocation, grid) && !_services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_1__["GridParserService"].isUnitOccupied(newLocation, grid)) {
            grid[unit.location.x][unit.location.y] = null;
            unit.location = newLocation;
            unit.doWalkAnimation();
            return new src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_0__["GameAction"](South.name, unit, null, false);
        }
        else {
            return new src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_0__["GameAction"](_Wait__WEBPACK_IMPORTED_MODULE_2__["Wait"].name, unit, null, false);
        }
    }
    getId() {
        return South.id;
    }
    getLabel() {
        return South.label;
    }
    getAsCode() {
        return South.asCode;
    }
}
South.label = 'Go south';
South.id = btoa(South.name);
South.asCode = 'this.postMessage({result: \'South\'});';


/***/ }),

/***/ "/nkg":
/*!***************************************************!*\
  !*** ./src/app/components/info/info.component.ts ***!
  \***************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




class InfoComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
}
InfoComponent.ɵfac = function InfoComponent_Factory(t) { return new (t || InfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoComponent, selectors: [["app-info"]], decls: 2, vars: 1, template: function InfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data);
    } }, styles: ["p[_ngcontent-%COMP%]{\r\n  font-family: Roboto;\r\n  color: #2CDD3E;\r\n  font-size: 13px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmZvL2luZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgY29sb3I6ICMyQ0REM0U7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info',
                templateUrl: './info.component.html',
                styleUrls: ['./info.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\John\WebstormProjects\googlesolutions\src\main.ts */"zUnb");


/***/ }),

/***/ "0A9r":
/*!*************************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/predicate/FalsePredicate.ts ***!
  \*************************************************************************/
/*! exports provided: FalsePredicate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FalsePredicate", function() { return FalsePredicate; });
/**
 * Predicate representing the False condition
 * This condition is always false
 * See block-command.ts for specific documentation
 * on properties and methods
 */
class FalsePredicate {
    constructor() {
        this.negate = false;
        this.conjunction = '';
    }
    evaluation(grid, unit) {
        return false;
    }
    getId() {
        return FalsePredicate.id;
    }
    getLabel() {
        return FalsePredicate.label;
    }
    getAsCode() {
        return FalsePredicate.asCode;
    }
}
FalsePredicate.id = btoa(FalsePredicate.name);
FalsePredicate.label = 'false';
FalsePredicate.asCode = 'false';


/***/ }),

/***/ "1hNk":
/*!***************************************************!*\
  !*** ./src/app/components/docs/docs.component.ts ***!
  \***************************************************/
/*! exports provided: DocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsComponent", function() { return DocsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login/authy-login.service */ "PISR");





class DocsComponent {
    constructor(viewPortScroller, router, auth) {
        this.viewPortScroller = viewPortScroller;
        this.router = router;
        this.auth = auth;
    }
    ngOnInit() {
        if (!this.auth.checkSigninStatus()) {
            this.router.navigate(['']);
        }
    }
    scrollToSection(sectionName) {
        this.viewPortScroller.scrollToAnchor(sectionName);
    }
    goToJavascriptGuide() {
        this.router.navigate(['learn-js']);
        window.scroll(0, 0);
    }
}
DocsComponent.ɵfac = function DocsComponent_Factory(t) { return new (t || DocsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_3__["AuthyLoginService"])); };
DocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocsComponent, selectors: [["app-docs"]], decls: 1789, vars: 11, consts: [["id", "main-header"], ["id", "title"], ["id", "main-content"], ["id", "book-marks"], [3, "click"], ["id", "docs-content"], ["id", "getting-started-with-coding-a-scripting-siege-unit"], [1, "link", 3, "click"], ["id", "how-this-works"], [1, "lang-javascript"], [1, "hljs-title"], [1, "hljs-class"], [1, "hljs-keyword"], [1, "hljs-type"], ["href", "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#web_workers_api", 1, "link"], ["id", "receiving-and-sending-messages", 1, "page-ref"], [1, "hljs-function"], [1, "hljs-params"], [1, "hljs-string"], ["id", "reading-message-data", 1, "page-ref"], [1, "lang-json"], [1, "hljs-attr"], [1, "hljs-literal"], [1, "hljs-number"], [1, "hljs-attribute"], [1, "hljs-built_in"], ["id", "sending-back-a-response", 1, "page-ref"], [1, "hljs-selector-tag"], [1, "hljs-selector-class"], ["id", "conclusion", 1, "page-ref"], ["href", "https://github.com/john-amiscaray/Scripting-Siege-API-Docs-With-A-Usable-Example", 1, "link"]], template: function DocsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocsComponent_Template_a_click_5_listener() { return ctx.scrollToSection("receiving-and-sending-messages"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Receiving And Sending messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocsComponent_Template_a_click_8_listener() { return ctx.scrollToSection("reading-message-data"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Reading Message Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocsComponent_Template_a_click_11_listener() { return ctx.scrollToSection("sending-back-a-response"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sending Back A Response");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocsComponent_Template_a_click_14_listener() { return ctx.scrollToSection("conclusion"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Conclusion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Getting Started With Coding a Scripting Siege Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "This guide will teach you how to get started writing real code to use for your scripting siege units. By the end of this guide, you will be able to learn and practice Javascript by just playing a video game! Although if you don't know the basics of Javascript, first have a look at our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocsComponent_Template_a_click_22_listener() { return ctx.goToJavascriptGuide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "free guide.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "How this works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Every turn, the game will send a message with specific data about everything on the grid and the unit whose turn started. This data is in the form of a JSON payload. All it is is some text representing the data in a specific format, specifically in the form of a Javascript object. For you to read this data, (or at least in a non-infuriating way) you need to first convert it to a real Javascript object and not a text representation of it. Fortunately, it\u2019s as easy as a single line of code:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "JSON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, ".parse('");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "JSON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "goes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "here'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, ");");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "With this data, you can analyze it to make the best decision possible for your unit. Once you\u2019ve figured out what you want to do, you will send a message back to the unit telling it what you want them to do. But, if the game does not recognize what move your code is telling it to perform, then your unit will just wait around confused about what you told them. The same is true if you tell it to perform an action that is not possible like attacking when nothing is in range. As well, you need to make sure you are sending one message at a time. If you try to cheat the system and send multiple messages for one turn the game will only accept the first one. Also, if your code takes too long to return an action then your unit will just wait. In the heat of the battle, your unit can't wait for you forever! As a last note for the more knowledgeable or curious among you, the code you will be writing is for the game to create a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Web Worker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, ". Although you don\u2019t have to necessarily understand Web Workers to write your own code for this game.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Receiving and Sending messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "In your code, you need to provide a function (a collection of related code) to perform whenever you receive a message. Within the function, you would post a message back to the server using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "postMessage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " function with text representing the action. For example, you use a code file that looks something like this:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, ".onmessage = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "function");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "(turnEvent)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "'East'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "});\n\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Here, whenever we get a message indicating it\u2019s our unit\u2019s turn, we just tell it to go forward.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Reading Message Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "In the code example above, you will notice in our function there is something called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "turnEvent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " in brackets. This indicates that our function will take the game data as an object called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "turnEvent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, ". Within the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "turnEvent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " object is the data the game gives you about the state of the game. Recall that the data sent is in the form of JSON and we need to first convert it to a Javascript object to more easily read it. We would so like this:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "code", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "JSON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, ".parse(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "turnEvent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, ");");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "For you to understand the data you will receive, let's have a look at the format of the data so we can discuss its significance:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "code", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\"grid\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, ": [\n    [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "],\n    [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "],\n    [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "\"id\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, ",\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "\"team\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, ",\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "\"location\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "\"x\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, ",\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "\"y\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "\n           },\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "\"maxHealth\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, ",\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "\"health\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, ",\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "\"defense\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, ",\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "\"strength\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, ",\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "\"attackRange\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "\n      },\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "\"id\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, ",\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "\"team\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, ",\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "\"location\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "\"x\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, ",\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "\"y\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "\n          },\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "\"maxHealth\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, ",\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "\"health\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "\"defense\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, ",\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "\"strength\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "\"attackRange\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "\n      },\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "],\n    [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "],\n    [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](510, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](516, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](520, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](525, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](529, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](531, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "],\n    [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](534, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](537, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](538, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](540, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](543, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](549, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](555, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](556, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](558, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](559, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](561, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](562, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](564, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](565, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](567, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](568, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](570, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](573, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](576, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](577, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](580, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](583, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](585, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](586, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](588, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](589, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](591, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](592, "],\n    [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](593, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](594, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](595, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](597, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](598, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](600, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](601, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](604, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](606, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](609, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](610, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](612, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](613, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](615, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](618, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](619, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](621, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](622, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](623, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](624, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](627, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](628, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](630, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](631, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](633, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](634, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](636, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](637, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](639, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](640, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](642, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](643, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](645, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](646, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](648, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](649, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](650, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](651, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](652, "],\n    [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](653, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](654, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](655, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](657, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](658, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](659, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](660, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](661, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](663, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](664, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](665, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](666, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](667, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](668, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](669, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](670, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](672, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](673, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](675, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](676, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](677, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](678, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](679, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](680, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](681, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](682, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](683, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](684, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](685, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](687, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](688, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](690, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](691, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](692, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](693, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](694, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](696, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](697, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](698, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](699, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](700, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](702, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](703, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](705, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](706, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](708, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](709, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](711, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](712, "],\n    [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](713, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](714, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](715, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](716, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](717, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](718, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](720, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](721, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](722, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](723, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](724, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](726, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](727, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](729, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](730, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](732, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](733, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](735, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](736, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](738, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](739, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](741, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](742, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](743, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](744, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](745, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](747, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](748, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](750, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](751, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](752, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](753, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](754, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](756, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](757, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](759, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](760, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](762, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](763, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](765, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](766, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](767, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](768, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](769, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](771, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](772, "],\n    [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](774, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](775, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](777, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](778, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](779, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](780, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](781, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](782, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](783, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](784, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](786, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](787, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](788, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](789, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](790, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](791, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](792, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](793, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](795, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](796, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](797, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](798, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](799, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](800, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](801, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](802, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](803, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](804, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](805, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](807, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](808, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](809, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](810, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](811, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](813, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](814, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](815, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](816, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](817, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](818, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](819, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](820, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](822, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](823, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](824, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](825, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](826, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](827, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](828, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](829, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](831, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](832, "],\n    [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](833, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](834, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](835, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](836, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](837, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](838, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](839, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](840, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](841, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](843, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](844, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](845, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](846, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](847, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](848, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](849, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](850, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](851, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](852, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](853, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](854, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](855, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](856, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](857, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](858, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](859, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](860, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](861, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](862, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](863, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](864, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](865, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](866, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](867, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](868, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](869, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](870, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](871, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](872, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](873, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](874, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](875, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](876, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](877, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](878, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](879, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](880, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](881, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](882, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](883, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](884, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](885, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](886, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](887, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](888, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](889, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](890, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](891, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](892, "],\n    [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](893, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](894, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](895, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](896, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](897, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](898, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](899, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](900, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](901, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](902, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](903, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](904, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](905, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](906, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](907, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](908, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](909, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](910, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](911, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](912, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](913, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](914, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](915, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](916, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](917, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](918, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](919, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](920, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](921, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](922, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](923, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](924, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](925, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](926, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](927, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](928, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](929, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](930, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](931, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](932, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](933, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](934, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](935, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](936, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](937, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](938, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](939, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](940, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](941, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](942, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](943, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](944, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](945, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](946, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](947, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](948, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](949, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](950, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](951, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](952, "],\n    [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](953, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](954, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](955, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](956, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](957, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](958, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](959, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](960, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](961, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](962, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](963, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](964, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](965, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](966, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](967, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](968, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](969, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](970, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](971, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](972, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](973, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](974, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](975, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](976, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](977, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](978, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](979, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](980, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](981, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](982, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](983, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](984, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](985, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](986, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](987, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](988, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](989, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](990, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](991, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](992, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](993, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](994, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](995, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](996, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](997, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](998, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](999, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1000, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1001, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1002, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1003, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1004, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1005, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1006, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1007, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1008, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1009, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1010, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1011, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1012, "],\n    [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1013, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1014, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1015, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1016, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1017, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1018, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1019, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1020, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1021, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1022, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1023, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1024, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1025, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1026, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1027, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1028, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1029, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1030, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1031, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1032, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1033, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1034, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1035, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1036, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1037, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1038, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1039, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1040, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1041, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1042, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1043, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1044, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1045, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1046, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1047, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1048, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1049, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1050, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1051, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1052, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1053, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1054, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1055, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1056, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1057, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1058, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1059, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1060, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1061, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1062, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1063, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1064, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1065, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1066, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1067, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1068, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1069, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1070, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1071, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1072, "],\n    [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1073, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1074, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1075, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1076, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1077, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1078, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1079, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1080, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1081, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1082, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1083, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1084, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1085, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1086, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1087, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1088, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1089, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1090, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1091, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1092, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1093, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1094, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1095, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1096, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1097, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1098, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1099, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1100, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1101, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1102, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1103, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1104, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1105, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1106, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1107, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1108, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1109, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1110, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1111, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1112, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1113, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1114, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1115, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1116, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1117, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1118, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1119, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1120, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1121, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1122, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1123, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1124, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1125, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1126, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1127, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1128, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1129, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1130, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1131, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1132, "],\n    [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1133, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1134, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1135, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1136, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1137, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1138, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1139, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1140, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1141, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1142, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1143, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1144, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1145, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1146, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1147, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1148, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1149, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1150, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1151, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1152, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1153, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1154, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1155, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1156, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1157, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1158, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1159, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1160, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1161, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1162, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1163, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1164, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1165, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1166, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1167, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1168, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1169, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1170, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1171, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1172, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1173, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1174, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1175, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1176, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1177, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1178, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1179, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1180, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1181, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1182, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1183, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1184, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1185, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1186, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1187, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1188, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1189, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1190, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1191, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1192, "],\n    [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1193, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1194, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1195, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1196, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1197, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1198, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1199, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1200, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1201, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1202, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1203, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1204, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1205, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1206, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1207, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1208, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1209, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1210, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1211, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1212, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1213, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1214, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1215, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1216, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1217, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1218, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1219, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1220, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1221, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1222, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1223, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1224, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1225, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1226, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1227, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1228, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1229, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1230, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1231, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1232, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1233, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1234, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1235, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1236, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1237, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1238, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1239, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1240, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1241, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1242, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1243, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1244, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1245, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1246, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1247, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1248, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1249, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1250, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1251, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1252, "],\n    [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1253, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1254, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1255, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1256, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1257, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1258, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1259, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1260, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1261, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1262, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1263, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1264, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1265, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1266, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1267, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1268, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1269, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1270, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1271, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1272, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1273, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1274, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1275, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1276, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1277, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1278, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1279, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1280, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1281, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1282, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1283, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1284, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1285, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1286, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1287, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1288, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1289, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1290, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1291, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1292, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1293, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1294, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1295, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1296, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1297, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1298, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1299, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1300, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1301, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1302, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1303, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1304, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1305, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1306, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1307, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1308, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1309, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1310, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1311, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1312, "],\n    [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1313, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1314, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1315, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1316, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1317, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1318, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1319, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1320, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1321, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1322, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1323, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1324, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1325, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1326, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1327, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1328, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1329, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1330, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1331, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1332, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1333, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1334, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1335, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1336, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1337, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1338, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1339, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1340, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1341, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1342, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1343, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1344, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1345, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1346, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1347, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1348, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1349, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1350, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1351, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1352, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1353, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1354, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1355, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1356, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1357, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1358, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1359, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1360, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1361, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1362, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1363, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1364, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1365, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1366, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1367, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1368, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1369, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1370, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1371, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1372, "],\n    [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1373, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1374, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1375, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1376, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1377, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1378, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1379, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1380, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1381, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1382, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1383, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1384, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1385, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1386, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1387, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1388, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1389, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1390, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1391, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1392, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1393, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1394, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1395, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1396, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1397, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1398, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1399, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1400, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1401, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1402, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1403, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1404, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1405, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1406, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1407, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1408, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1409, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1410, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1411, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1412, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1413, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1414, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1415, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1416, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1417, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1418, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1419, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1420, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1421, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1422, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1423, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1424, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1425, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1426, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1427, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1428, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1429, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1430, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1431, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1432, "]\n  ],\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1433, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1434, "\"unit\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1435);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1436, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1437, "\"id\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1438, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1439, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1440, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1441, ",\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1442, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1443, "\"team\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1444, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1445, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1446, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1447, ",\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1448, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1449, "\"location\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1450);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1451, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1452, "\"y\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1453, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1454, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1455, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1456, ",\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1457, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1458, "\"x\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1459, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1460, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1461, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1462, "\n    },\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1463, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1464, "\"maxHealth\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1465, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1466, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1467, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1468, ",\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1469, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1470, "\"health\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1471, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1472, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1473, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1474, ",\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1475, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1476, "\"defense\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1477, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1478, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1479, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1480, ",\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1481, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1482, "\"strength\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1483, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1484, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1485, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1486, ",\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1487, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1488, "\"attackRange\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1489, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1490, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1491, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1492, "\n  }\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1493, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1494, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1495, "Note we indented it this way just for the sake of clarity. In reality, the JSON data will be in one line. Also, it would all be wrapped in quotation marks.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1496, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1497, "This might look like quite a bit to unpack for some of you but we\u2019ll do our best to explain what this data format represents. Everything in the curly braces (these: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1498, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1499);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1500, ") represents a Javascript object. An object is just a collection of related data each with a name to refer to each of them by. Data within an object can be anything from text, a true or false value, an array (a list of data), or even other objects. You will notice in these objects, we have some text in quotation marks followed by a colon and some data. The text in the quotes is the name of the data right of the colon. When we convert the JSON data to a real object, we will use those names to access the data. For instance, we have some data in the object called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1501, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1502, "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1503, ", and another called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1504, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1505, "unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1506, ". The data called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1507, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1508, "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1509, " is a list containing inner lists, representing what unit, if any, is on each tile. If you haven't noticed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1510, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1511, "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1512, " is 20 by 20 (20 inner lists each with 20 items) just like the 20 by 20 in-game grid. Each item in the inner lists represents a tile, more specifically what unit is on that tile. If there isn\u2019t a unit on a tile, then there is a value of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1513, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1514, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1515, ", otherwise, you get an object representing that unit. Each inner list represents a column in the game while the items in those inner lists represent what unit is on a tile on that column. You will notice in the above example, only the third list contains objects. In that third list, there are two objects representing units. This would mean on the third column, there are two units, while all the null values in the inner lists mean the other tiles on the grid have no units on them. Within these unit objects, you will see that you are given the exact location on the grid that these units are on. Note that the x and y values range from 0-19, representing 20 rows and 20 columns. Since the numbering starts from 0, the third column will be column number 2, the first column will be number 0, etc (programming languages tend to number stuff starting at 0). Lastly, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1516, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1517, "unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1518, " data in the outer object (the object that contains the grid data), is just a representation of the unit you are controlling. Now that you have an idea of what data the game sends, we can go over how to use it. The below code takes the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1519, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1520, "unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1521, " data and stores it in a variable called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1522, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1523, "you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1524, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1525, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1526, "code", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1527, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1528, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1529, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1530, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1531, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1532, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1533, " = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1534, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1535, "JSON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1536, ".parse(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1537, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1538, "turnEvent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1539, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1540, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1541, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1542, ");");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1543, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1544, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1545, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1546, " you = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1547, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1548, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1549, "data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1550, ".unit;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1551, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1552, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1553, "Then, to get the health of the unit stored as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1554, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1555, "you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1556, " you would simply do this:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1557, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1558, "code", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1559, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1560, "let health");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1561, " = you.health;\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1562, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1563, "To get the x value of the location of the unit you would do the following:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1564, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1565, "code", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1566, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1567, "let xLocation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1568, " = you.location.x;\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1569, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1570, "To get a specific unit in the grid is a bit more involved than what we just did, but we will go into more detail about it. Here's how you'd get the unit on the third column of the sixth row:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1571, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1572, "code", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1573, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1574, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1575, " data = JSON.parse(turnEvent.data);\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1576, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1577, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1578, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1579, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1580, "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1581, " = data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1582, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1583, "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1584, ";\n// Get the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1585, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1586, "third");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1587, " column of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1588, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1589, "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1590, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1591, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1592, "and");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1593, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1594, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1595, "get");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1596, " the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1597, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1598, "first");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1599, " unit found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1600, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1601, "in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1602, " that column (located on x: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1603, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1604, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1605, ", y: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1606, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1607, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1608, ").\n// Remember we count stuff starting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1609, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1610, "at");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1611, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1612, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1613, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1614, ", so the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1615, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1616, "third");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1617, " column will be number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1618, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1619, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1620, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1621, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1622, "and");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1623, "\n// the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1624, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1625, "sixth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1626, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1627, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1628, "row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1629, " will be number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1630, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1631, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1632, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1633, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1634, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1635, " person = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1636, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1637, "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1638, "[");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1639, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1640, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1641, "][");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1642, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1643, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1644, "];\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1645, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1646, "First, we get the grid data within the data object. This grid data is a list of lists (as seen in the JSON data above), which we store as a variable called grid. Then we get the third item of the list (another list) and get the sixth item of that inner list. This would be a single unit object as seen in the JSON data above. We would then store it in a variable called person so we can do operations like what you've seen above. The tables below are a summary of all that exists in the data we send you:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1647, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1648, "The Data Sent From Each Turn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1649, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1650, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1651, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1652, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1653, "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1654, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1655, "Definition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1656, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1657, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1658, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1659, "grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1660, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1661, "A 20 by 20 list of lists (20 inner lists, each with 20 items) representing the 20 by 20 in-game grid. Each inner list represents an in-game column where each item represents what unit (if any) is on each tile of that column. If there is no unit on a tile, then that tile has a null value.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1662, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1663, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1664, "unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1665, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1666, "A unit object representing the stats of the unit you are controlling (ex. health, defense, attack range, etc).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1667, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1668, "The Contents of all Unit objects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1669, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1670, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1671, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1672, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1673, "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1674, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1675, "Definition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1676, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1677, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1678, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1679, "id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1680, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1681, "An id for the unit (number).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1682, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1683, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1684, "team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1685, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1686, "The team the unit is on (number).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1687, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1688, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1689, "location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1690, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1691, "An object containing the x (number) and y (number) values of the location of the unit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1692, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1693, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1694, "maxHealth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1695, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1696, "The maximum health of the unit (number).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1697, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1698, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1699, "health");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1700, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1701, "Current health of the unit (number).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1702, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1703, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1704, "defense");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1705, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1706, "The defense of the unit (A number. How much damage it can take in a single attack before it loses some health).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1707, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1708, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1709, "strength");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1710, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1711, "The strength of the unit (A number. How much damage it can deal in a single attack).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1712, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1713, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1714, "attackRange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1715, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1716, "How many tiles in any direction a unit can attack (number).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1717, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1718, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1719, "Sending Back A Response");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1720, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1721, "Once you\u2019ve decided what you want your unit to do, you have to post a message back to it to tell it about it. You would do this by simply calling the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1722, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1723, "postMessage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1724, " function like so:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1725, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1726, "code", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1727, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1728, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1729, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1730, ".postMessage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1731);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1732, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1733, "result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1734, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1735, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1736, "'Your action here'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1737, "});\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1738, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1739, "Remember that the game only accepts a set of recognized actions that you can send back to it. The following lists all the commands that can be sent back to the game. You would simply replace the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1740, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1741, "Your action here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1742, " in the code above with the name of the action in the quotes:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1743, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1744, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1745, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1746, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1747, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1748, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1749, "Definition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1750, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1751, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1752, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1753, "Attack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1754, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1755, "Attack the first enemy unit in range if any. Otherwise, just wait.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1756, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1757, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1758, "Wait");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1759, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1760, "End the turn without acting.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1761, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1762, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1763, "West");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1764, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1765, "Walk one tile West. If the tile is occupied by another unit or the area is out of bounds wait.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1766, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1767, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1768, "East");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1769, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1770, "Walk one tile East. If the tile is occupied by another unit or the area is out of bounds wait.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1771, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1772, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1773, "North");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1774, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1775, "Walk one tile North. If the tile is occupied by another unit or the area is out of bounds wait.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1776, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1777, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1778, "South");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1779, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1780, "Walk one tile South. If the tile is occupied by another unit or the area is out of bounds wait.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1781, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1782, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1783, "Conclusion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1784, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1785, "In this guide, we went over all you need to know to start coding the behavior of your scripting siege units. With this knowledge, you will be able to write more complex custom behavior to your units to perform better in the game and learn to code in the process. You can find some example code to get you started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1786, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1787, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1788, ". Good luck and have fun!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "{", "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](".postMessage(", "{", "result: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](",\n      ", "{", "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](":\n          ", "{", "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](",\n      ", "{", "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](":\n          ", "{", "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1086);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", "{", "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", "{", "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "{", "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](232);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", "{", "");
    } }, styles: ["#main-content[_ngcontent-%COMP%]{\r\n\r\n  background-color: #141C34;\r\n  color: white;\r\n  width: 1188px;\r\n  margin: 0 auto;\r\n  padding: 0 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n}\r\n\r\n#docs-content[_ngcontent-%COMP%]{\r\n\r\n  flex-grow: 3;\r\n  flex-basis: 85%;\r\n  padding-top: 54px;\r\n  overflow-x: auto;\r\n\r\n}\r\n\r\n#book-marks[_ngcontent-%COMP%]{\r\n\r\n  flex-grow: 1;\r\n  flex-basis: 15%;\r\n  padding: 54px 10px;\r\n  margin-right: 45px;\r\n  border-right: 1px solid white;\r\n\r\n}\r\n\r\n#book-marks[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n\r\n  font-size: 15px;\r\n\r\n}\r\n\r\n#book-marks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n\r\n  color: #2CDD3E;\r\n\r\n}\r\n\r\n.link[_ngcontent-%COMP%]{\r\n\r\n  text-decoration: none;\r\n  color: #A4000F;\r\n\r\n}\r\n\r\n.link[_ngcontent-%COMP%]:hover{\r\n\r\n  color: #2CDD3E;\r\n\r\n}\r\n\r\ncode[_ngcontent-%COMP%]{\r\n\r\n  color: #2CDD3E;\r\n  font-family: codefont;\r\n\r\n}\r\n\r\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  border: 1px solid white;\r\n  border-collapse: collapse;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]{\r\n\r\n  width: 500px;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\r\n\r\n  padding: 10px;\r\n\r\n}\r\n\r\nth[_ngcontent-%COMP%]{\r\n\r\n  text-align: center;\r\n\r\n}\r\n\r\n#main-header[_ngcontent-%COMP%]{\r\n\r\n  color: #2CDD3E;\r\n  margin: 100px auto 57px;\r\n  width: 1228px;\r\n\r\n}\r\n\r\n#title[_ngcontent-%COMP%]{\r\n\r\n  font-family: codefont;\r\n  font-size: 60px;\r\n\r\n}\r\n\r\n.page-ref[_ngcontent-%COMP%]{\r\n\r\n  text-decoration: none;\r\n  color: white;\r\n\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n\r\n  width: 100%;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb2NzL2RvY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7O0FBRWhDOztBQUVBOztFQUVFLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjs7QUFFbEI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDZCQUE2Qjs7QUFFL0I7O0FBRUE7O0VBRUUsZUFBZTs7QUFFakI7O0FBRUE7O0VBRUUsY0FBYzs7QUFFaEI7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLGNBQWM7O0FBRWhCOztBQUVBOztFQUVFLGNBQWM7O0FBRWhCOztBQUdBOztFQUVFLGNBQWM7RUFDZCxxQkFBcUI7O0FBRXZCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjs7QUFFckI7O0FBRUE7O0VBRUUsYUFBYTs7QUFFZjs7QUFFQTs7RUFFRSxrQkFBa0I7O0FBRXBCOztBQUVBOztFQUVFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsYUFBYTs7QUFFZjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsZUFBZTs7QUFFakI7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLFlBQVk7O0FBRWQ7O0FBRUE7O0VBRUUsV0FBVzs7QUFFYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jcy9kb2NzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1jb250ZW50e1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxQzM0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTE4OHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbn1cclxuXHJcbiNkb2NzLWNvbnRlbnR7XHJcblxyXG4gIGZsZXgtZ3JvdzogMztcclxuICBmbGV4LWJhc2lzOiA4NSU7XHJcbiAgcGFkZGluZy10b3A6IDU0cHg7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuXHJcbn1cclxuXHJcbiNib29rLW1hcmtze1xyXG5cclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZmxleC1iYXNpczogMTUlO1xyXG4gIHBhZGRpbmc6IDU0cHggMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XHJcblxyXG59XHJcblxyXG4jYm9vay1tYXJrcyBoM3tcclxuXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG5cclxufVxyXG5cclxuI2Jvb2stbWFya3MgYTpob3ZlcntcclxuXHJcbiAgY29sb3I6ICMyQ0REM0U7XHJcblxyXG59XHJcblxyXG4ubGlua3tcclxuXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjQTQwMDBGO1xyXG5cclxufVxyXG5cclxuLmxpbms6aG92ZXJ7XHJcblxyXG4gIGNvbG9yOiAjMkNERDNFO1xyXG5cclxufVxyXG5cclxuXHJcbmNvZGV7XHJcblxyXG4gIGNvbG9yOiAjMkNERDNFO1xyXG4gIGZvbnQtZmFtaWx5OiBjb2RlZm9udDtcclxuXHJcbn1cclxuXHJcbnRhYmxlLCB0aCwgdGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbnRhYmxle1xyXG5cclxuICB3aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxufVxyXG5cclxudGgsIHRke1xyXG5cclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxufVxyXG5cclxudGh7XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbiNtYWluLWhlYWRlcntcclxuXHJcbiAgY29sb3I6ICMyQ0REM0U7XHJcbiAgbWFyZ2luOiAxMDBweCBhdXRvIDU3cHg7XHJcbiAgd2lkdGg6IDEyMjhweDtcclxuXHJcbn1cclxuXHJcbiN0aXRsZXtcclxuXHJcbiAgZm9udC1mYW1pbHk6IGNvZGVmb250O1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuXHJcbn1cclxuXHJcbi5wYWdlLXJlZntcclxuXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbmltZ3tcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-docs',
                templateUrl: './docs.component.html',
                styleUrls: ['./docs.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_3__["AuthyLoginService"] }]; }, null); })();


/***/ }),

/***/ "5VXY":
/*!*******************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/conditional/ElseIf.ts ***!
  \*******************************************************************/
/*! exports provided: ElseIf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElseIf", function() { return ElseIf; });
/* harmony import */ var _predicate_EmptyPredicate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../predicate/EmptyPredicate */ "c5BP");
/* harmony import */ var _terminal_EndElseIf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../terminal/EndElseIf */ "+lJh");
/* harmony import */ var _Else__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Else */ "RLPw");
/* harmony import */ var _If__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./If */ "mK3C");




/**
 * ConditionalBlock representing an Else-If statement
 * See block-command.ts for specific documentation
 * on properties and methods
 */
class ElseIf {
    constructor() {
        this.conditions = [new _predicate_EmptyPredicate__WEBPACK_IMPORTED_MODULE_0__["EmptyPredicate"]()];
        this.terminal_blocks = [ElseIf.label, _terminal_EndElseIf__WEBPACK_IMPORTED_MODULE_1__["EndElseIf"].label, _Else__WEBPACK_IMPORTED_MODULE_2__["Else"].label];
        this.terminate = null;
        this.condition = new _predicate_EmptyPredicate__WEBPACK_IMPORTED_MODULE_0__["EmptyPredicate"]();
    }
    getId() {
        return ElseIf.id;
    }
    getLabel() {
        return ElseIf.label;
    }
    getAsCode() {
        return '}else ' + _If__WEBPACK_IMPORTED_MODULE_3__["If"].asCode(this.conditions);
    }
}
ElseIf.id = btoa(ElseIf.name);
ElseIf.label = 'Else if';


/***/ }),

/***/ "7AdY":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




class ErrorComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 2, vars: 1, template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data);
    } }, styles: ["h3[_ngcontent-%COMP%]{\r\n    color: red;\r\n    font-family: codefont;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgze1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtZmFtaWx5OiBjb2RlZm9udDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "7zeS":
/*!***************************************************************!*\
  !*** ./src/app/services/program-construction/code.service.ts ***!
  \***************************************************************/
/*! exports provided: CodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeService", function() { return CodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_blockCommands_blocks_conditional_Else__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/conditional/Else */ "RLPw");
/* harmony import */ var src_app_models_blockCommands_blocks_conditional_ElseIf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/conditional/ElseIf */ "5VXY");
/* harmony import */ var src_app_models_blockCommands_blocks_conditional_If__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/conditional/If */ "mK3C");
/* harmony import */ var src_app_models_blockCommands_blocks_predicate_EmptyPredicate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/predicate/EmptyPredicate */ "c5BP");
/* harmony import */ var src_app_models_blockCommands_blocks_terminal_End__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/terminal/End */ "qpLt");
/* harmony import */ var src_app_models_blockCommands_blocks_terminal_Start__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/terminal/Start */ "GJhz");
/* harmony import */ var _models_blockCommands_blocks_predicate_CompoundPredicate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/blockCommands/blocks/predicate/CompoundPredicate */ "IC9Q");
/* harmony import */ var _models_blockCommands_blocks_terminal_EndElseIf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/blockCommands/blocks/terminal/EndElseIf */ "+lJh");
/* harmony import */ var _models_blockCommands_blocks_terminal_EndElse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/blockCommands/blocks/terminal/EndElse */ "txq3");
/* harmony import */ var _block_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./block.service */ "NC9t");












/**
 * Service for compiling and validating code
 */
class CodeService {
    constructor(blockService) {
        this.blockService = blockService;
    }
    /**
     * Compiles and validates code into function array
     * @param commands The Array of commands to compile
     */
    compileToExecutableCode(commands) {
        let actions = [];
        let executable_count = 0;
        for (let i = 0; i < commands.length; i++) {
            if (this.blockService.isExecutable(commands[i])) {
                actions.push(commands[i].execute);
                executable_count += 1;
            }
            else if (commands[i].getLabel() === src_app_models_blockCommands_blocks_conditional_If__WEBPACK_IMPORTED_MODULE_3__["If"].label) {
                let condition = this.createConditionalFunction(i, commands, executable_count);
                i = condition[0];
                actions.push(condition[1]);
            }
            else if (commands[i].getLabel() === src_app_models_blockCommands_blocks_conditional_ElseIf__WEBPACK_IMPORTED_MODULE_2__["ElseIf"].label) {
                throw new Error(CodeErrorFormatters.ELSE_IF_WITHOUT_IF(i + 1));
            }
            else if (this.blockService.isTerminal(commands[i])) {
                if (!(commands[i].getLabel() === src_app_models_blockCommands_blocks_terminal_Start__WEBPACK_IMPORTED_MODULE_6__["Start"].label || commands[i].getLabel() === src_app_models_blockCommands_blocks_terminal_End__WEBPACK_IMPORTED_MODULE_5__["End"].label)) {
                    if (commands[i].getLabel() === src_app_models_blockCommands_blocks_conditional_Else__WEBPACK_IMPORTED_MODULE_1__["Else"].label) {
                        throw new Error(CodeErrorFormatters.ELSE_WITHOUT_IF(i + 1));
                    }
                    else {
                        throw new Error(CodeErrorFormatters.ADDED_TERMINAL_WITHOUT_SEQUENCE(i + 1));
                    }
                }
            }
            if (executable_count > 1) {
                throw new Error(CodeErrorFormatters.ONLY_ONE_ACTION());
            }
        }
        return actions;
    }
    /**
     * Serializes Code to string array for storage
     * @param commands Code to Serialize
     */
    serializeBlocks(commands) {
        let repr = [];
        for (let command of commands) {
            if (!this.blockService.isConditional(command)) {
                repr.push(String(command.getId()));
            }
            else {
                if (command.condition.getId() !== _models_blockCommands_blocks_predicate_CompoundPredicate__WEBPACK_IMPORTED_MODULE_7__["CompoundPredicate"].id) {
                    repr.push(String(command.getId() + '_'
                        + command.condition.getId()));
                }
                else {
                    let conditional = command;
                    let serialized = command.getId() + '_' + (conditional.conditions[0].negate ? '!' : '') + conditional.conditions[0].getId();
                    for (let i = 1; i < conditional.conditions.length; i++) {
                        let condition = conditional.conditions[i];
                        serialized += (condition.conjunction + (condition.negate ? '!' : '') + condition.getId());
                    }
                    repr.push(serialized);
                }
            }
        }
        return repr;
    }
    /**
     * Deserializes code into a Block Command Array
     * @param repr Code string array to deserialize
     */
    deserializeToBlocks(repr) {
        let commands = [];
        console.log('HELLO');
        for (let rep of repr) {
            if (rep.includes('_')) {
                debugger;
                let ids = rep.split('_');
                let conditional = this.blockService.getById(ids[0]);
                // Make the list empty because it starts off with an empty predicate
                conditional.conditions = [];
                if (ids[1].includes('&') || ids[1].includes('|')) {
                    let start = -1;
                    let complexCondition = ids[1];
                    let nextCondition = 0;
                    while (nextCondition !== -1) {
                        let nextAnd = complexCondition.indexOf('&', start + 1);
                        let nextOr = complexCondition.indexOf('|', start + 1);
                        if (nextOr !== -1) {
                            if (nextAnd < nextOr && nextAnd !== -1) {
                                nextCondition = nextAnd;
                            }
                            else {
                                nextCondition = nextOr;
                            }
                        }
                        else if (nextAnd !== -1) {
                            nextCondition = nextAnd;
                        }
                        else {
                            nextCondition = -1;
                        }
                        let conjunction = start !== -1 ? complexCondition[start] : '';
                        let id = complexCondition.slice(start + 1, nextCondition !== -1 ? nextCondition : complexCondition.length);
                        let negate = false;
                        start = nextCondition;
                        if (id.charAt(0) === '!') {
                            negate = true;
                            id = id.slice(1, id.length);
                        }
                        let condition = this.blockService.getById(id);
                        condition.negate = negate;
                        condition.conjunction = conjunction;
                        conditional.conditions.push(condition);
                    }
                    commands.push(conditional);
                }
                else {
                    conditional.conditions.push(this.blockService.getById(ids[1]));
                    commands.push(conditional);
                }
                if (conditional.getId() !== src_app_models_blockCommands_blocks_conditional_Else__WEBPACK_IMPORTED_MODULE_1__["Else"].id) {
                    this.compileConditions(conditional, 0);
                }
            }
            else {
                commands.push(this.blockService.getById(rep));
            }
        }
        return commands;
    }
    /**
     * Creates ConditionalBlock object
     * @param i location of conditional block in code
     * @param commands code to place
     * @param executable_count the amount of executables seen in the global scope of the code
     */
    createConditionalFunction(i, commands, executable_count) {
        this.compileConditions(commands[i], i);
        let condition = commands[i].condition;
        let global_executables = executable_count;
        let local_executables = 0;
        let start = i;
        let foundElse = false;
        // if(condition.getLabel() === EmptyPredicate.label){
        //   throw new Error('An if block is missing a condition');
        // }
        let terminal_blocks = commands[i].terminal_blocks;
        let elseIfs = [];
        let elseActions = [];
        i++;
        // holds the actions to be executed if the evaluation method returns true
        let conditional_actions = [];
        while (!terminal_blocks.includes(commands[i].getLabel())) {
            if (commands[i].getLabel() === src_app_models_blockCommands_blocks_terminal_End__WEBPACK_IMPORTED_MODULE_5__["End"].label) {
                throw new Error(CodeErrorFormatters.CONDITIONAL_NOT_CLOSED(start + 1));
            }
            if (commands[i].getLabel() === src_app_models_blockCommands_blocks_conditional_If__WEBPACK_IMPORTED_MODULE_3__["If"].label) {
                let inner_condition = this.createConditionalFunction(i, commands, local_executables + global_executables);
                i = inner_condition[0];
                conditional_actions.push(inner_condition[1]);
                i++;
            }
            else if (commands[i].getLabel() === src_app_models_blockCommands_blocks_conditional_ElseIf__WEBPACK_IMPORTED_MODULE_2__["ElseIf"].label) {
                this.compileConditions(commands[i], i);
                let next = this.parseElseIfOrElse(i, commands, global_executables);
                elseIfs.push([next[1], next[2]]);
                i = next[0];
            }
            else if (commands[i].getLabel() === src_app_models_blockCommands_blocks_conditional_Else__WEBPACK_IMPORTED_MODULE_1__["Else"].label) {
                let next = this.parseElseIfOrElse(i, commands, global_executables);
                elseActions = next[2];
                i = next[0];
                foundElse = true;
            }
            else {
                conditional_actions.push(commands[i].execute);
                i++;
                local_executables++;
            }
            if (global_executables + local_executables > 1) {
                throw new Error(CodeErrorFormatters.ONLY_ONE_ACTION());
            }
        }
        if (elseIfs.length === 0 && commands[i].getLabel() === _models_blockCommands_blocks_terminal_EndElseIf__WEBPACK_IMPORTED_MODULE_8__["EndElseIf"].label) {
            throw new Error(CodeErrorFormatters.CONDITIONAL_NOT_CLOSED(i + 1));
        }
        else if (!foundElse && commands[i].getLabel() === _models_blockCommands_blocks_terminal_EndElse__WEBPACK_IMPORTED_MODULE_9__["EndElse"].label) {
            throw new Error(CodeErrorFormatters.CONDITIONAL_NOT_CLOSED(i + 1));
        }
        /*
        Append to the actions array a new function that will execute all the functions in the conditional_actions array
        if the given evaluation function returns true. Otherwise it will look through the else ifs to see if any of
        those conditions are matching, otherwise it goes to the else.
         */
        return [i, (grid, unit) => {
                if (condition.evaluation(grid, unit)) {
                    return conditional_actions[0](grid, unit);
                }
                else {
                    let i = 0;
                    while (i < elseIfs.length) {
                        if (elseIfs[i][0].evaluation(grid, unit)) {
                            return elseIfs[i][1][0](grid, unit);
                        }
                        i++;
                    }
                    if (i === elseIfs.length && elseActions.length !== 0) {
                        return elseActions[0](grid, unit);
                    }
                }
            }];
    }
    /**
     * Parses ElseIf or Else statement into a conditional and its actions
     * @param i the index location of of the statement
     * @param commands the code to compare against
     * @param executable_count the amount of executable blocks seen in the global scope of the code
     */
    parseElseIfOrElse(i, commands, executable_count) {
        let condition = null;
        let global_executables = executable_count;
        let local_executables = 0;
        let start = i;
        if (commands[i].getLabel() === src_app_models_blockCommands_blocks_conditional_ElseIf__WEBPACK_IMPORTED_MODULE_2__["ElseIf"].label) {
            condition = commands[i].condition;
        }
        let conditional_actions = [];
        let terminal_blocks = commands[i].terminal_blocks;
        i++;
        while (!(terminal_blocks.includes(commands[i].getLabel()))) {
            if (commands[i].getLabel() === src_app_models_blockCommands_blocks_terminal_End__WEBPACK_IMPORTED_MODULE_5__["End"].label) {
                throw new Error(CodeErrorFormatters.CONDITIONAL_NOT_CLOSED(start + 1));
            }
            if (commands[i].getLabel() === src_app_models_blockCommands_blocks_conditional_If__WEBPACK_IMPORTED_MODULE_3__["If"].label) {
                let inner = this.createConditionalFunction(i, commands, local_executables + global_executables);
                i = inner[0];
                conditional_actions.push(inner[1]);
            }
            else {
                conditional_actions.push(commands[i].execute);
                i++;
                local_executables++;
            }
        }
        if (local_executables + global_executables > 1) {
            throw new Error(CodeErrorFormatters.ONLY_ONE_ACTION());
        }
        return [i, condition, conditional_actions];
    }
    compileConditions(conditional, blockIndex) {
        for (let i = 0; i < conditional.conditions.length; i++) {
            let condition = conditional.conditions[i];
            if (condition.getLabel() === src_app_models_blockCommands_blocks_predicate_EmptyPredicate__WEBPACK_IMPORTED_MODULE_4__["EmptyPredicate"].label) {
                throw new Error(CodeErrorFormatters.MISSING_CONDITIONS(blockIndex + 1));
            }
        }
        conditional.condition = this.convertToSingleCondition(conditional.conditions, 0, blockIndex);
    }
    /**
     * Converts the conditions of a complex conditional statement into a single predicate.
     * @param conditions The predicates used for a complex conditional statement
     * @param index The index to start iterating from
     */
    convertToSingleCondition(conditions, index = 0, blockLocation) {
        //debugger;
        if (conditions.length === 1) {
            return conditions[0];
        }
        let evaluations = [conditions[index]];
        let i = index + 1;
        while (i < conditions.length && conditions[i].conjunction === '&') {
            evaluations.push(conditions[i]);
            i++;
        }
        console.log(evaluations);
        let condition = (grid, unit) => {
            for (let evaluation of evaluations) {
                if (evaluation.negate) {
                    if (evaluation.evaluation(grid, unit)) {
                        return false;
                    }
                }
                else {
                    if (!evaluation.evaluation(grid, unit)) {
                        return false;
                    }
                }
            }
            return true;
        };
        if (i < conditions.length) {
            if (conditions[i].conjunction !== '|') {
                throw new Error(CodeErrorFormatters.NO_CONJUNCTION_SPECIFIED(blockLocation + 1));
            }
            else {
                // If I don't do this there will be infinite recursion because it will think I'm trying to make a recursive call inside
                let cond = condition;
                condition = (grid, unit) => {
                    return cond(grid, unit) || this.convertToSingleCondition(conditions, i, blockLocation).evaluation(grid, unit);
                };
            }
        }
        let result = new _models_blockCommands_blocks_predicate_CompoundPredicate__WEBPACK_IMPORTED_MODULE_7__["CompoundPredicate"]();
        result.evaluation = condition;
        return result;
    }
}
CodeService.ɵfac = function CodeService_Factory(t) { return new (t || CodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_block_service__WEBPACK_IMPORTED_MODULE_10__["BlockService"])); };
CodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CodeService, factory: CodeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _block_service__WEBPACK_IMPORTED_MODULE_10__["BlockService"] }]; }, null); })();
class CodeErrorFormatters {
}
CodeErrorFormatters.ELSE_WITHOUT_IF = function (index) {
    return `Else without If at block ${index}`;
};
CodeErrorFormatters.MISSING_CONDITIONS = function (index) {
    return `Conditional Block is missing a condition at block ${index}`;
};
CodeErrorFormatters.ONLY_ONE_ACTION = function () {
    return 'Only one action allowed per turn';
};
CodeErrorFormatters.CONDITIONAL_NOT_CLOSED = function (index) {
    return `Conditional not closed properly for block ${index}`;
};
CodeErrorFormatters.ELSE_IF_WITHOUT_IF = function (index) {
    return `Else if without if at block ${index}`;
};
CodeErrorFormatters.ADDED_TERMINAL_WITHOUT_SEQUENCE = function (index) {
    return `Added terminal block without sequence to terminate at block ${index}`;
};
CodeErrorFormatters.SOMETHING_WENT_WRONG = function () {
    return 'Something probably went wrong on our end! Please send a bug report.';
};
CodeErrorFormatters.NO_CONJUNCTION_SPECIFIED = function (index) {
    return `AND or OR not specified for a conditional block at block ${index}`;
};


/***/ }),

/***/ "87ey":
/*!********************************************!*\
  !*** ./src/app/models/game/units/Tower.ts ***!
  \********************************************/
/*! exports provided: Tower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tower", function() { return Tower; });
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "+v1C");

class Tower extends _Unit__WEBPACK_IMPORTED_MODULE_0__["Unit"] {
    constructor() {
        super();
        this.id = -1;
        this.maxHealth = 100;
        this.health = 80;
        this.defense = 30;
        this.strength = 15;
        this.attackRange = 5;
        this.walk_frames = [0, 1];
        this.attack_frames = [2, 5];
    }
}
Tower.dbid = btoa(Tower.name);


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
    production: false
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

/***/ "BbXq":
/*!*****************************************!*\
  !*** ./src/app/dataStructures/Stack.ts ***!
  \*****************************************/
/*! exports provided: Stack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return Stack; });
/**
 * Object for the Stack Data structure type
 * This uses Generic typing
 */
class Stack {
    constructor() {
        /**
         * The array representing the data stored inside
         */
        this.store = [];
    }
    /**
     * Pushes value on top of the stack
     * @param val the value to place in the stack
     */
    push(val) {
        this.store.push(val);
    }
    /**
     * Removes and returns the item on the top of the stack
     */
    pop() {
        return this.store.pop();
    }
    /**
     * returns the item on the top of the stack without removing
     */
    peek() {
        return this.store[this.store.length - 1];
    }
    /**
     * returns the number of elements inside the stack
     */
    size() {
        return this.store.length;
    }
    /**
     * Removes all items within the stack
     */
    clear() {
        this.store = [];
    }
}


/***/ }),

/***/ "BggK":
/*!***********************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/executable/TestAction2.ts ***!
  \***********************************************************************/
/*! exports provided: TextAction2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAction2", function() { return TextAction2; });
/* harmony import */ var src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/game/GameAction */ "IiXB");

/**
 * Executable for testing
 * See block-command.ts for specific documentation
 * on properties and methods
 */
class TextAction2 {
    execute(grid, unit) {
        return new src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_0__["GameAction"](unit.id + " Action2", unit, null, false);
    }
    getId() {
        return TextAction2.id;
    }
    getLabel() {
        return TextAction2.label;
    }
    getAsCode() {
        return TextAction2.asCode;
    }
}
TextAction2.label = 'Action2';
TextAction2.id = btoa(TextAction2.name);
TextAction2.asCode = 'textAction2();';


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 94, vars: 0, consts: [[1, "bigDave"], ["src", "assets/logo.png", "alt", "this is an image", 1, "leftElement"], [1, "textBox", "rightElement"], ["mat-button", "", "routerLink", "./signin"], [1, "spacer"], [1, "textBox", "leftElement"], ["src", "assets/stockimages/code-editor-screenshot.png", "alt", "this is an image", 1, "rightElement"], ["id", "mission"], [1, "missioncell"], [1, "cellP"], ["id", "team"], [1, "teamrow"], [1, "teamcol"], [1, "teamcell"], ["src", "assets/pfp/kd.jpg", "alt", "this is an image", 1, "missionImg"], ["href", "https://www.linkedin.com/in/kyle-jacob-dulce/"], ["href", "https://github.com/KyleDulce"], ["src", "assets/pfp/ja.jpg", "alt", "this is an image", 1, "missionImg"], ["href", "https://www.linkedin.com/in/john-amiscaray-7333a91b2/"], ["href", "https://github.com/john-amiscaray"], ["src", "assets/pfp/ha.png", "alt", "this is an image", 1, "missionImg"], ["href", "https://www.linkedin.com/in/hanna-frances-b-9a38491b5/"], ["href", "https://github.com/Hanna-Frances"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SCRIPTING SEIGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Program Your units.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Win the war.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Scripting Siege is a free educational game for both beginner and intermediate programmers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "> PLAY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Learn to Code. For Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Scripting siege is a free educational game for both beginner and intermediate programmers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Choose between easy to read blockcode or program your units with javascript. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "OUR MISSION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Learn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Understand the basics of JavaScript with Scripting seige!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Practice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Many levels to play with!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Improve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "As your characters get smarter, so do you!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "OUR TEAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "My name is Kyle Dulce and I am a Software Engineering Student at the University of Ottawa. I have a passion for learning about software development and developing software of my own. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "My LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "My Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "My name is John Amiscaray, a computer science student at Ryerson University. I am an aspiring software engineer always trying to perfect his skill and look for new opportunities. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "My LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "My Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "I'm Hanna Bobis and I am a Computer Science undergraduate at Ryerson University. I did the art and helped with designing the webpage. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "My LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "My Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["h1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 50px;\r\n\r\n    color: #2cdd3e;\r\n    font-family: Roboto;\r\n    font-weight: 500;\r\n    font-size: 30px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    color: #2cdd3e;\r\n    font-family: Roboto;\r\n    font-weight: 500;\r\n    font-size: 25px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    color: #2cdd3e;\r\n    font-family: Roboto;\r\n    font-weight: 200;\r\n    font-size: 20px;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #2cdd3e;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    color: #038C1F;\r\n    background-color: #2cdd3e;\r\n}\r\n\r\n.bigDave[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n    width: 1000px;\r\n    margin-left: auto;\r\n    margin-right:auto;\r\n}\r\n\r\n.rightElement[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    height: 500px;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n.rightElement[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n    display: inline;\r\n}\r\n\r\n.leftElement[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    height: 500px;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n.leftElement[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n    display: inline;\r\n}\r\n\r\n.textBox[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n    height: 500px;\r\n    margin-top: 100px;\r\n}\r\n\r\n#mission[_ngcontent-%COMP%] {\r\n    width: 1000px;\r\n    height: 50px;\r\n    position: relative;\r\n}\r\n\r\n#team[_ngcontent-%COMP%] {\r\n    width: 1000px;\r\n    position: relative;\r\n}\r\n\r\n.missioncell[_ngcontent-%COMP%] {\r\n    text-align: center; \r\n    padding: 30px 10px 30px 10px;\r\n    background-color: #1c2541;\r\n    margin: 20px 20px 20px 20px;\r\n    width: 30%;\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    height: 100px\r\n}\r\n\r\n.teamrow[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.teamcol[_ngcontent-%COMP%] {\r\n    width: 248px;\r\n    padding: 0px 0px 0px 0px;\r\n}\r\n\r\n.teamcell[_ngcontent-%COMP%] {\r\n    text-align: center; \r\n    padding: 30px 10px 30px 10px;\r\n    margin: 20px 20px 20px 20px;\r\n    width: 300px;\r\n}\r\n\r\n.missionImg[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n}\r\n\r\n.cellP[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    color: #10c6f9;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCOztJQUVoQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQSx1Q0FBdUM7O0FBQ3ZDO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUEsdUNBQXVDOztBQUN2QztJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUdBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gICAgY29sb3I6ICMyY2RkM2U7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgY29sb3I6ICMyY2RkM2U7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxucCB7XHJcbiAgICBjb2xvcjogIzJjZGQzZTtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjMmNkZDNlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgY29sb3I6ICMwMzhDMUY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmNkZDNlO1xyXG59XHJcblxyXG4uYmlnRGF2ZSB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbn1cclxuXHJcbi5yaWdodEVsZW1lbnQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIHRha2UgYWxsIGVsZW1lbnRzIGluIHJpZ2h0IGVsZW1lbnQgKi9cclxuLnJpZ2h0RWxlbWVudCA+ICoge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLmxlZnRFbGVtZW50IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiB0YWtlIGFsbCBlbGVtZW50cyBpbiByaWdodCBlbGVtZW50ICovXHJcbi5sZWZ0RWxlbWVudCA+ICoge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuXHJcbi50ZXh0Qm94IHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuI21pc3Npb24ge1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI3RlYW0ge1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1pc3Npb25jZWxsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHggMzBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMjU0MTtcclxuICAgIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDBweFxyXG59XHJcblxyXG4udGVhbXJvdyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50ZWFtY29sIHtcclxuICAgIHdpZHRoOiAyNDhweDtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcclxufVxyXG5cclxuLnRlYW1jZWxsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHggMzBweCAxMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4ubWlzc2lvbkltZyB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jZWxsUCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzEwYzZmOTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "CBun":
/*!**********************************************************************************!*\
  !*** ./src/app/services/game/levelDataInterface/level-data-interface.service.ts ***!
  \**********************************************************************************/
/*! exports provided: LevelDataInterfaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelDataInterfaceService", function() { return LevelDataInterfaceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/database/DatabaseData */ "jJWq");
/* harmony import */ var src_app_models_game_units_Unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/game/units/Unit */ "+v1C");
/* harmony import */ var _models_game_units_Archer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/game/units/Archer */ "aon7");
/* harmony import */ var src_app_models_game_units_Swordsman__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/game/units/Swordsman */ "ieil");
/* harmony import */ var src_app_models_blockCommands_blocks_executable_Wait__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/executable/Wait */ "lo65");
/* harmony import */ var src_app_models_game_units_Tower__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/game/units/Tower */ "87ey");
/* harmony import */ var _database_firestore_database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../database/firestore-database.service */ "ilXD");
/* harmony import */ var _program_construction_code_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../program-construction/code.service */ "7zeS");










class LevelDataInterfaceService {
    constructor(database, codeServ) {
        this.database = database;
        this.codeServ = codeServ;
    }
    getGameInfo(levelid, programid) {
        var self = this;
        var curUnitId = 0;
        return new Promise((resolutionFunc, rejectionFunc) => {
            var returnObject = { team1Units: [], team2Units: [], griddimensions: LevelDataInterfaceService.PLAYSPACE_SIZE };
            this.database.getLevelProgram(levelid, function (prog) {
                var progPromises = [];
                //fill team units
                for (var x = 0; x < prog.Units.length; x++) {
                    var u = self.newUnitOnType(prog.Units[x].TroopType);
                    u.id = curUnitId++;
                    u.team = 2;
                    u.location = prog.Units[x].location;
                    if (prog.Units[x].CodeType === src_app_models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_1__["CodeType"].BLOCK) {
                        u.codeType = src_app_models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_1__["CodeType"].BLOCK;
                        u.activecode = self.deserializeBlockCode(prog.Units[x].CodeBlocks);
                    }
                    else if (prog.Units[x].CodeType === src_app_models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_1__["CodeType"].FILE) {
                        u.codeType = src_app_models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_1__["CodeType"].FILE;
                        // progPromises.push(new Promise((resolveP, rejectP) => {
                        //   // self.database.getUserCodeFromStorage(prog.Units[x].CodeFile.storageRef, prog.Units[x].CodeFile.filename, function (data) {
                        //   //   u.activecode = data;
                        //   //   console.log("loaded " + u.activecode)
                        //   //   resolveP();
                        //   // });
                        // }));
                        progPromises.push(self.getStorageReadPromise(prog.Units[x].CodeFile.storageRef, prog.Units[x].CodeFile.filename, u));
                    }
                    else {
                        console.log("Illegal code type, continuing");
                        continue;
                    }
                    returnObject.team2Units.push(u);
                }
                self.database.getProgramData(programid, function (playerProg) {
                    //fill team units
                    for (var x = 0; x < playerProg.Units.length; x++) {
                        var u = self.newUnitOnType(playerProg.Units[x].TroopType);
                        u.id = curUnitId++;
                        u.team = 1;
                        u.location = playerProg.Units[x].location;
                        if (playerProg.Units[x].CodeType == src_app_models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_1__["CodeType"].BLOCK) {
                            u.codeType = src_app_models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_1__["CodeType"].BLOCK;
                            u.activecode = self.deserializeBlockCode(playerProg.Units[x].CodeBlocks);
                        }
                        else if (playerProg.Units[x].CodeType == src_app_models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_1__["CodeType"].FILE) {
                            u.codeType = src_app_models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_1__["CodeType"].FILE;
                            // progPromises.push(new Promise((resolveP, rejectP) => {
                            //   self.database.getUserCodeFromStorage(playerProg.Units[x].CodeFile.storageRef, playerProg.Units[x].CodeFile.filename, function (data) {
                            //     u.activecode = data;
                            //     resolveP();
                            //   });
                            // }));
                            progPromises.push(self.getStorageReadPromise(playerProg.Units[x].CodeFile.storageRef, playerProg.Units[x].CodeFile.filename, u));
                        }
                        else {
                            console.log("Illegal code type, continuing of type " + (playerProg.Units[x].CodeType.toString()));
                            continue;
                        }
                        returnObject.team1Units.push(u);
                    }
                    Promise.all(progPromises).then(function (val) {
                        resolutionFunc(returnObject);
                    });
                });
            });
        });
    }
    getGameInfoTesting(programData) {
        return new Promise((resolutionFunc, rejectionFunc) => {
            var testUnit = new _models_game_units_Archer__WEBPACK_IMPORTED_MODULE_3__["Archer"]();
            testUnit.codeType = src_app_models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_1__["CodeType"].BLOCK;
            testUnit.activecode = [new src_app_models_blockCommands_blocks_executable_Wait__WEBPACK_IMPORTED_MODULE_5__["Wait"]()];
            testUnit.team = 2;
            testUnit.location = { x: 10, y: 9 };
            var result = {
                team1Units: [],
                team2Units: [testUnit],
                griddimensions: LevelDataInterfaceService.TESTGRID_SIZE
            };
            var progPromises = [];
            var curUnitId = 0;
            var self = this;
            for (var x = 0; x < programData.Units.length; x++) {
                var u = this.newUnitOnType(programData.Units[x].TroopType);
                u.id = curUnitId++;
                u.team = 1;
                u.location = programData.Units[x].location;
                if (programData.Units[x].CodeType == src_app_models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_1__["CodeType"].BLOCK) {
                    u.codeType = src_app_models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_1__["CodeType"].BLOCK;
                    u.activecode = this.deserializeBlockCode(programData.Units[x].CodeBlocks);
                }
                else if (programData.Units[x].CodeType == src_app_models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_1__["CodeType"].FILE) {
                    u.codeType = src_app_models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_1__["CodeType"].FILE;
                    u.fileUrl = programData.Units[x].CodeFile.storageRef;
                    // progPromises.push(new Promise<void>((resolveP, rejectP) => {
                    //   self.database.getUserCodeFromStorage(programData.Units[x].CodeFile.storageRef, programData.Units[x].CodeFile.filename, function (data) {
                    //     u.activecode = data;
                    //     resolveP();
                    //   });
                    //}));
                    if (!(u.fileUrl.startsWith('blob'))) {
                        progPromises.push(self.getStorageReadPromise(programData.Units[x].CodeFile.storageRef, programData.Units[x].CodeFile.filename, u));
                    }
                    else {
                        u.activecode = new Worker(u.fileUrl);
                    }
                }
                else {
                    console.log("Illegal code type, continuing");
                    continue;
                }
                result.team1Units.push(u);
                Promise.all(progPromises).then(function (val) {
                    resolutionFunc(result);
                });
            }
        });
    }
    newUnitOnType(id) {
        switch (id) {
            case _models_game_units_Archer__WEBPACK_IMPORTED_MODULE_3__["Archer"].dbid:
                return new _models_game_units_Archer__WEBPACK_IMPORTED_MODULE_3__["Archer"]();
            case src_app_models_game_units_Swordsman__WEBPACK_IMPORTED_MODULE_4__["Swordsman"].dbid:
                return new src_app_models_game_units_Swordsman__WEBPACK_IMPORTED_MODULE_4__["Swordsman"]();
            case src_app_models_game_units_Tower__WEBPACK_IMPORTED_MODULE_6__["Tower"].dbid:
                return new src_app_models_game_units_Tower__WEBPACK_IMPORTED_MODULE_6__["Tower"]();
            default:
                return new src_app_models_game_units_Unit__WEBPACK_IMPORTED_MODULE_2__["Unit"]();
        }
    }
    deserializeBlockCode(code) {
        return this.codeServ.deserializeToBlocks(code);
    }
    getStorageReadPromise(storageRef, filename, passedunit) {
        var self = this;
        return new Promise((resolveP, rejectP) => {
            self.database.getUserCodeFromStorage(storageRef, filename, function (data) {
                console.log("recieved " + filename);
                passedunit.activecode = data;
                resolveP();
            });
        });
    }
}
LevelDataInterfaceService.PLAYSPACE_SIZE = { x: 15, y: 15 };
LevelDataInterfaceService.TESTGRID_SIZE = { x: 15, y: 10 };
LevelDataInterfaceService.ɵfac = function LevelDataInterfaceService_Factory(t) { return new (t || LevelDataInterfaceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_database_firestore_database_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreDatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_program_construction_code_service__WEBPACK_IMPORTED_MODULE_8__["CodeService"])); };
LevelDataInterfaceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LevelDataInterfaceService, factory: LevelDataInterfaceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LevelDataInterfaceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _database_firestore_database_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreDatabaseService"] }, { type: _program_construction_code_service__WEBPACK_IMPORTED_MODULE_8__["CodeService"] }]; }, null); })();


/***/ }),

/***/ "DXK3":
/*!************************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/predicate/EastAvailable.ts ***!
  \************************************************************************/
/*! exports provided: EastAvailable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EastAvailable", function() { return EastAvailable; });
/* harmony import */ var _services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/game/grid-parser.service */ "qLgx");

class EastAvailable {
    constructor() {
        this.conjunction = '';
        this.negate = false;
    }
    evaluation(grid, unit) {
        let east = { x: unit.location.x + 1, y: unit.location.y };
        return _services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_0__["GridParserService"].isInBounds(east, grid)
            && !_services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_0__["GridParserService"].isUnitOccupied(east, grid);
    }
    getAsCode() {
        return EastAvailable.asCode;
    }
    getId() {
        return EastAvailable.id;
    }
    getLabel() {
        return EastAvailable.label;
    }
}
EastAvailable.id = btoa(EastAvailable.name);
EastAvailable.label = 'East Available';
EastAvailable.asCode = 'locationAvailable(grid, {x: me.location.x + 1, y: me.location.y})';


/***/ }),

/***/ "EHdO":
/*!*************************************************!*\
  !*** ./src/app/services/game/sprite.service.ts ***!
  \*************************************************/
/*! exports provided: SpriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteService", function() { return SpriteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var createjs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! createjs-module */ "ZWlK");
/* harmony import */ var createjs_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(createjs_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SpriteConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SpriteConstants */ "Y2Iu");




window.createjs = createjs_module__WEBPACK_IMPORTED_MODULE_1__;
class SpriteService {
    constructor() { }
    static loadSpriteSheets() {
        let manifest = [
            { id: _SpriteConstants__WEBPACK_IMPORTED_MODULE_2__["SpriteConstants"].archer, src: 'assets/animations/archer sprite sheet.png' },
            { id: _SpriteConstants__WEBPACK_IMPORTED_MODULE_2__["SpriteConstants"].swordsmen, src: 'assets/animations/swordsman sprite sheet.png' },
            { id: _SpriteConstants__WEBPACK_IMPORTED_MODULE_2__["SpriteConstants"].tower, src: 'assets/animations/tower sprite sheet.png' },
            { id: _SpriteConstants__WEBPACK_IMPORTED_MODULE_2__["SpriteConstants"].testMap, src: 'assets/maps/test map.png' }
        ];
        let queue = new createjs_module__WEBPACK_IMPORTED_MODULE_1__["LoadQueue"]();
        queue.loadManifest(manifest);
        return queue;
    }
    initSpritesForAll(units, imageQueue) {
        for (let unit of units) {
            if (unit === null) {
                continue;
            }
            unit.initSprite(imageQueue.getResult(unit.constructor.name));
        }
    }
    flipSpriteInPlace(unit) {
        unit.sprite.scaleX = -unit.sprite.scaleX;
    }
}
SpriteService.ɵfac = function SpriteService_Factory(t) { return new (t || SpriteService)(); };
SpriteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpriteService, factory: SpriteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpriteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "GJhz":
/*!***************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/terminal/Start.ts ***!
  \***************************************************************/
/*! exports provided: Start */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Start", function() { return Start; });
/**
 * TerminalBlock representing the start of the code
 * See block-command.ts for specific documentation
 * on properties and methods
 */
class Start {
    constructor() {
        this.terminate = null;
        this.indentationLevel = 0;
    }
    getId() {
        return Start.id;
    }
    getLabel() {
        return Start.label;
    }
    getAsCode() {
        return 'this.onmessage = function (turnEvent){';
    }
}
Start.label = 'When Turn';
Start.id = btoa(Start.name);


/***/ }),

/***/ "H3xd":
/*!*****************************************************!*\
  !*** ./src/app/components/level/level.component.ts ***!
  \*****************************************************/
/*! exports provided: LevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelComponent", function() { return LevelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var createjs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! createjs-module */ "ZWlK");
/* harmony import */ var createjs_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(createjs_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_game_sprite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game/sprite.service */ "EHdO");
/* harmony import */ var _services_SpriteConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/SpriteConstants */ "Y2Iu");
/* harmony import */ var _services_game_levelDataInterface_level_data_interface_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/game/levelDataInterface/level-data-interface.service */ "CBun");
/* harmony import */ var _models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/database/DatabaseData */ "jJWq");
/* harmony import */ var _models_game_units_Archer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/game/units/Archer */ "aon7");
/* harmony import */ var _models_blockCommands_blocks_executable_East__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/blockCommands/blocks/executable/East */ "inrU");
/* harmony import */ var _models_game_units_Swordsman__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/game/units/Swordsman */ "ieil");
/* harmony import */ var _services_program_construction_code_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/program-construction/code.service */ "7zeS");
/* harmony import */ var _services_game_gameloop_game_loop_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/game/gameloop/game-loop.service */ "pv0v");













window.createjs = createjs_module__WEBPACK_IMPORTED_MODULE_1__;
let stage;
// TODO, makes these dynamic
let tiles_on_x = _services_game_levelDataInterface_level_data_interface_service__WEBPACK_IMPORTED_MODULE_4__["LevelDataInterfaceService"].TESTGRID_SIZE.x;
let tiles_on_y = _services_game_levelDataInterface_level_data_interface_service__WEBPACK_IMPORTED_MODULE_4__["LevelDataInterfaceService"].TESTGRID_SIZE.y;
let canvas_width = tiles_on_x * 40;
let canvas_height = tiles_on_y * 40;
class LevelComponent {
    constructor(sprite, code, loopservice) {
        this.sprite = sprite;
        this.code = code;
        this.loopservice = loopservice;
        this.loading = "loading";
        this.gameStart = false;
        this.width = canvas_width;
        this.height = canvas_height;
        this.codeIndexGraphics = [];
        this.tickCount = 0;
        this.unitClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveStateEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.gameActionLogger = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.gridDataEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contextMenu = null;
        this.contextMenuBounds = { x: 0, y: 0, w: 0, h: 0 };
        this.unitsLeft = 5;
        this.imageQueue = null;
    }
    ngOnDestroy() {
        this.gameStart = false;
    }
    ngOnInit() {
        if (this.testMode !== undefined && this.programData !== undefined) {
            this.loadGridData(this.programData);
        }
        else {
            throw new Error('display mode and program data must be defined in the component');
        }
        if (this.run !== undefined) {
            this.run.subscribe(_ => {
                if (this.loading === 'done') {
                    if (!this.gameStart) {
                        this.startGame();
                        this.closeContextMenu();
                    }
                    else {
                        this.resetGame();
                    }
                }
            });
        }
        if (this.unitCodeChange !== undefined && this.testMode) {
            this.unitCodeChange.subscribe(data => {
                this.changeCodeIndexOfUnit(data.unit, data.index, data.color);
            });
        }
        if (this.saveFormationsAndCode !== undefined) {
            this.saveFormationsAndCode.subscribe(_ => {
                this.saveStateEvent.emit(this.grid);
            });
        }
        else {
            if (this.testMode) {
                throw new Error('Save Formation And Code Subject must be defined in test mode');
            }
        }
        if (this.updateProgramData !== undefined && this.testMode) {
            this.updateProgramData.subscribe(data => {
                this.programData = data;
            });
        }
        if (this.giveGridData !== undefined && this.testMode) {
            this.giveGridData.subscribe(_ => {
                this.gridDataEvent.emit(this.grid);
            });
        }
        createjs_module__WEBPACK_IMPORTED_MODULE_1__["Ticker"].on('tick', _ => {
            if (stage !== undefined) {
                stage.update();
                this.tickCount += 1;
                if (this.lastAction !== undefined && !(this.lastAction.actionId === "GameEnd2" || this.lastAction.actionId === "GameEnd1") && this.gameStart
                    && this.tickCount % 20 === 0 && this.loading === 'done') {
                    this.step();
                }
            }
        });
    }
    initGridSize() {
        if (this.testMode) {
            tiles_on_x = _services_game_levelDataInterface_level_data_interface_service__WEBPACK_IMPORTED_MODULE_4__["LevelDataInterfaceService"].TESTGRID_SIZE.x;
            tiles_on_y = _services_game_levelDataInterface_level_data_interface_service__WEBPACK_IMPORTED_MODULE_4__["LevelDataInterfaceService"].TESTGRID_SIZE.y;
        }
        else {
            tiles_on_x = _services_game_levelDataInterface_level_data_interface_service__WEBPACK_IMPORTED_MODULE_4__["LevelDataInterfaceService"].PLAYSPACE_SIZE.x;
            tiles_on_y = _services_game_levelDataInterface_level_data_interface_service__WEBPACK_IMPORTED_MODULE_4__["LevelDataInterfaceService"].PLAYSPACE_SIZE.y;
        }
        canvas_width = tiles_on_x * 40;
        canvas_height = tiles_on_y * 40;
        this.width = canvas_width;
        this.height = canvas_height;
    }
    loadGridData(programData) {
        this.initGridSize();
        if (this.testMode) {
            let self = this;
            this.loopservice.loadTestData(programData).then(result => {
                self.gameInit();
            });
        }
        else {
            //run the game
            let self = this;
            if (this.gameLevelDataNum !== undefined && this.gamePlayerDataNum !== undefined) {
                this.loopservice.loadData(this.gameLevelDataNum, this.gamePlayerDataNum).then(result => {
                    self.gameInit();
                });
            }
            else {
                throw new Error("a level number and program number for the player must be defined when not in test mode");
            }
        }
    }
    gameInit() {
        var self = this;
        if (this.loopservice.prepLoop()) {
            self.grid = self.loopservice.grid;
            let imageQueue = _services_game_sprite_service__WEBPACK_IMPORTED_MODULE_2__["SpriteService"].loadSpriteSheets();
            stage = new createjs_module__WEBPACK_IMPORTED_MODULE_1__["Stage"]('battlegrounds');
            imageQueue.on('complete', () => {
                let shape = new createjs_module__WEBPACK_IMPORTED_MODULE_1__["Shape"]();
                shape.graphics.beginBitmapFill(imageQueue.getResult(_services_SpriteConstants__WEBPACK_IMPORTED_MODULE_3__["SpriteConstants"].testMap)).drawRect(0, 0, canvas_width, canvas_height);
                stage.addChild(shape);
                this.drawGrid();
                this.imageQueue = imageQueue;
                for (let row of self.grid) {
                    this.sprite.initSpritesForAll(row, imageQueue);
                    self.placeAllOnScreen(row);
                }
                self.addAllCodeIndexGraphics();
            });
            this.loading = "done";
        }
    }
    placeOnScreen(unit) {
        let half_sprite_length = _services_SpriteConstants__WEBPACK_IMPORTED_MODULE_3__["SpriteConstants"].spriteSize / 2;
        /*
        Add half a sprite length in the end because the center of the sprite is placed at the corner of the
        square
         */
        unit.sprite.x = (unit.location.x * _services_SpriteConstants__WEBPACK_IMPORTED_MODULE_3__["SpriteConstants"].spriteSize) + half_sprite_length;
        unit.sprite.y = (unit.location.y * _services_SpriteConstants__WEBPACK_IMPORTED_MODULE_3__["SpriteConstants"].spriteSize) + half_sprite_length;
        if (this.testMode && !this.gameStart) {
            let numberOffSetX = 10;
            let numberOffSetY = 8;
            if (!this.codeIndexGraphicExistsForUnit(unit)) {
                let number = new createjs_module__WEBPACK_IMPORTED_MODULE_1__["Text"](`${unit.testCodeIndex !== undefined ? unit.testCodeIndex : ''}`, "13px Roboto", "#7A3DB8");
                number.x = unit.sprite.x + numberOffSetX;
                number.y = unit.sprite.y + numberOffSetY;
                let numberRep = { number: number, location: unit.location };
                this.codeIndexGraphics.push(numberRep);
                stage.addChild(number);
            }
            // make the unit draggable to set formation
            unit.sprite.on('pressmove', e => {
                if (!this.gameStart && unit.team === 1) {
                    // @ts-ignore
                    e.target.x = e.stageX;
                    // @ts-ignore
                    e.target.y = e.stageY;
                }
            });
            // snap the dragged unit to the center of the nearest tile
            unit.sprite.on('pressup', e => {
                if (!this.gameStart && unit.team === 1) {
                    //@ts-ignore
                    let sprite = e.target;
                    // @ts-ignore
                    let new_x = (Math.floor(e.stageX / 40) * 40) + half_sprite_length;
                    new_x = new_x < 400 ? new_x : 360 + half_sprite_length;
                    // @ts-ignore
                    let new_y = (Math.floor(e.stageY / 40) * 40) + half_sprite_length;
                    let new_location = {
                        x: Math.floor((new_x - half_sprite_length) / _services_SpriteConstants__WEBPACK_IMPORTED_MODULE_3__["SpriteConstants"].spriteSize),
                        y: Math.floor((new_y - half_sprite_length) / _services_SpriteConstants__WEBPACK_IMPORTED_MODULE_3__["SpriteConstants"].spriteSize)
                    };
                    if (this.grid[new_location.x][new_location.y] === null) {
                        this.grid[unit.location.x][unit.location.y] = null;
                        for (let numRep of this.codeIndexGraphics) {
                            if (numRep.location === unit.location) {
                                numRep.number.x = new_x + numberOffSetX;
                                numRep.number.y = new_y + numberOffSetY;
                                numRep.location = new_location;
                                break;
                            }
                        }
                        unit.location = new_location;
                        this.grid[unit.location.x][unit.location.y] = unit;
                        sprite.x = new_x;
                        sprite.y = new_y;
                        this.giveGridData.next(true);
                    }
                    else {
                        unit.sprite.x = (unit.location.x * _services_SpriteConstants__WEBPACK_IMPORTED_MODULE_3__["SpriteConstants"].spriteSize) + half_sprite_length;
                        unit.sprite.y = (unit.location.y * _services_SpriteConstants__WEBPACK_IMPORTED_MODULE_3__["SpriteConstants"].spriteSize) + half_sprite_length;
                    }
                }
            });
        }
    }
    /**
     * inits all the units on screen (only called on game init)
     * @param units a row on the grid
     */
    placeAllOnScreen(units) {
        for (let unit of units) {
            if (unit === null) {
                continue;
            }
            this.placeOnScreen(unit);
            stage.addChild(unit.sprite);
            // Assuming units of team 2 face west
            if (unit.team === 2) {
                this.sprite.flipSpriteInPlace(unit);
            }
        }
    }
    drawGrid() {
        for (let i = 0; i < tiles_on_x; i++) {
            for (let j = 0; j < tiles_on_y; j++) {
                let shape = new createjs_module__WEBPACK_IMPORTED_MODULE_1__["Shape"]();
                shape.graphics
                    .beginStroke('black')
                    .drawRect(i * _services_SpriteConstants__WEBPACK_IMPORTED_MODULE_3__["SpriteConstants"].spriteSize, j * _services_SpriteConstants__WEBPACK_IMPORTED_MODULE_3__["SpriteConstants"].spriteSize, _services_SpriteConstants__WEBPACK_IMPORTED_MODULE_3__["SpriteConstants"].spriteSize, _services_SpriteConstants__WEBPACK_IMPORTED_MODULE_3__["SpriteConstants"].spriteSize);
                stage.addChild(shape);
            }
        }
        let shape = new createjs_module__WEBPACK_IMPORTED_MODULE_1__["Shape"]();
        shape.graphics.setStrokeDash([2, 2]);
        shape.graphics.setStrokeStyle(1)
            .beginStroke('red')
            .moveTo(400, 0)
            .lineTo(400, canvas_height)
            .endStroke();
        stage.addChild(shape);
    }
    step() {
        this.loading = "loading";
        var prom = this.loopservice.stepGame();
        prom.then(result => {
            this.lastAction = result;
            this.loading = "done";
            this.gameActionLogger.emit(this.lastAction);
            if (!(this.lastAction.doer === null)) {
                this.placeOnScreen(this.lastAction.doer);
                this.placeOnGrid(this.lastAction.doer);
            }
            if (this.lastAction.hasDied) {
                let dead = this.lastAction.receiver;
                stage.removeChild(dead.sprite);
                console.log('Death happened');
            }
        });
        prom.catch(result => {
            this.loading = "error last action!";
        });
    }
    startGame() {
        this.step();
        if (this.codeIndexGraphics.length !== 0) {
            for (let numGraphic of this.codeIndexGraphics) {
                stage.removeChild(numGraphic.number);
            }
        }
        this.gameStart = true;
    }
    resetGame() {
        this.loading = 'loading';
        this.grid = null;
        this.loopservice.grid = null;
        this.gameStart = false;
        stage.removeAllChildren();
        this.loadGridData(this.programData);
        this.tickCount = 0;
        this.lastAction = undefined;
    }
    placeOnGrid(unit) {
        this.grid[unit.location.x][unit.location.y] = unit;
    }
    onGridClick(event) {
        let location = {
            x: Math.floor((event.pageX - event.target.offsetLeft) / 40),
            y: Math.floor((event.pageY - event.target.offsetTop) / 40)
        };
        if (!this.inContextMenuBounds(location.x * 40, location.y * 40)) {
            this.closeContextMenu();
        }
        let unit = this.grid[location.x][location.y];
        if (unit !== null && unit !== undefined) {
            this.unitClickEvent.emit(unit);
        }
    }
    changeCodeIndexOfUnit(unit, index, color) {
        unit.testCodeIndex = index;
        for (let numRep of this.codeIndexGraphics) {
            if (numRep.location === unit.location) {
                numRep.number.text = `${index}`;
                numRep.number.color = color;
            }
        }
    }
    codeIndexGraphicExistsForUnit(unit) {
        for (let numRep of this.codeIndexGraphics) {
            if (numRep.location === unit.location) {
                return true;
            }
        }
        return false;
    }
    removeCodeIndexGraphicForUnit(unit) {
        let index = this.codeIndexGraphics.findIndex(graphic => {
            return graphic.location === unit.location;
        });
        stage.removeChild(this.codeIndexGraphics[index].number);
        this.codeIndexGraphics.splice(index, 1);
    }
    ;
    addAllCodeIndexGraphics() {
        for (let shape of this.codeIndexGraphics) {
            stage.addChild(shape.number);
        }
    }
    renderContextMenuAt(x, y, tileX, tileY) {
        // create context menu
        let container = new createjs_module__WEBPACK_IMPORTED_MODULE_1__["Container"]();
        let containerConstants = { w: 100, h: 100, absx: x, absy: y };
        container.x = containerConstants.absx;
        container.y = containerConstants.absy;
        let background = new createjs_module__WEBPACK_IMPORTED_MODULE_1__["Shape"]();
        background.graphics.beginFill('#BEBEBE').drawRect(0, 0, containerConstants.w, containerConstants.h);
        background.graphics.beginStroke('black').drawRect(0, 0, containerConstants.w, containerConstants.h);
        container.addChild(background);
        // add units left text
        let unitsLeft = new createjs_module__WEBPACK_IMPORTED_MODULE_1__["Text"]();
        let unitsLeftTextConstants = { x: 3, y: 10 };
        unitsLeft.font = '12px JetBrains Mono';
        unitsLeft.text = `Units Left: ${this.unitsLeft}`;
        unitsLeft.color = 'black';
        unitsLeft.x = unitsLeftTextConstants.x;
        unitsLeft.y = unitsLeftTextConstants.y;
        container.addChild(unitsLeft);
        // create add archer button
        let addArcherButton = new createjs_module__WEBPACK_IMPORTED_MODULE_1__["Shape"]();
        let archerButtonConstants = { x: 5, y: 25, w: 90, h: 20 };
        let addArcherTextConstants = { x: 17, y: 30 };
        addArcherButton.graphics.beginFill('white').drawRect(archerButtonConstants.x, archerButtonConstants.y, archerButtonConstants.w, archerButtonConstants.h);
        addArcherButton.graphics.beginStroke('black').drawRect(archerButtonConstants.x, archerButtonConstants.y, archerButtonConstants.w, archerButtonConstants.h);
        container.addChild(addArcherButton);
        let self = this;
        addArcherButton.on('click', _ => {
            if (self.loopservice.grid[tileX][tileY] === null && this.imageQueue !== null && this.unitsLeft > 0) {
                let unit = new _models_game_units_Archer__WEBPACK_IMPORTED_MODULE_6__["Archer"]();
                unit.team = 1;
                let team = self.loopservice.team1units;
                unit.id = team.length > 0 ? team[team.length - 1].id + 1 : 0;
                unit.activecode = [new _models_blockCommands_blocks_executable_East__WEBPACK_IMPORTED_MODULE_7__["East"]()];
                unit.location.x = tileX;
                unit.codeType = _models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_5__["CodeType"].BLOCK;
                unit.location.y = tileY;
                unit.initSprite(self.imageQueue.getResult(_services_SpriteConstants__WEBPACK_IMPORTED_MODULE_3__["SpriteConstants"].archer));
                self.loopservice.team1units.push(unit);
                self.loopservice.grid[tileX][tileY] = unit;
                self.placeOnGrid(unit);
                self.placeAllOnScreen([unit]);
                self.closeContextMenu();
                self.unitsLeft -= 1;
                self.giveGridData.next(true);
            }
        });
        let addArcher = new createjs_module__WEBPACK_IMPORTED_MODULE_1__["Text"]();
        addArcher.font = '11px JetBrains Mono';
        addArcher.text = 'Add Archer';
        addArcher.color = 'black';
        addArcher.x = addArcherTextConstants.x;
        addArcher.y = addArcherTextConstants.y;
        container.addChild(addArcher);
        // create add swordsman button
        let addSwordsmanButton = new createjs_module__WEBPACK_IMPORTED_MODULE_1__["Shape"]();
        let addSwordsmanButtonConstants = { x: 5, y: 50, w: 90, h: 20 };
        let addSwordsmanTextConstants = { x: 7, y: 55 };
        addSwordsmanButton.graphics.beginFill('white').drawRect(addSwordsmanButtonConstants.x, addSwordsmanButtonConstants.y, addSwordsmanButtonConstants.w, addSwordsmanButtonConstants.h);
        addSwordsmanButton.graphics.beginStroke('black').drawRect(addSwordsmanButtonConstants.x, addSwordsmanButtonConstants.y, addSwordsmanButtonConstants.w, addSwordsmanButtonConstants.h);
        container.addChild(addSwordsmanButton);
        addSwordsmanButton.on('click', _ => {
            if (self.loopservice.grid[tileX][tileY] === null && this.imageQueue !== null && this.unitsLeft > 0) {
                let unit = new _models_game_units_Swordsman__WEBPACK_IMPORTED_MODULE_8__["Swordsman"]();
                unit.team = 1;
                let team = self.loopservice.team1units;
                unit.id = team.length > 0 ? team[team.length - 1].id + 1 : 0;
                unit.activecode = [new _models_blockCommands_blocks_executable_East__WEBPACK_IMPORTED_MODULE_7__["East"]()];
                unit.location.x = tileX;
                unit.codeType = _models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_5__["CodeType"].BLOCK;
                unit.location.y = tileY;
                unit.initSprite(self.imageQueue.getResult(_services_SpriteConstants__WEBPACK_IMPORTED_MODULE_3__["SpriteConstants"].swordsmen));
                self.loopservice.team1units.push(unit);
                self.loopservice.grid[tileX][tileY] = unit;
                self.placeOnGrid(unit);
                self.placeAllOnScreen([unit]);
                self.closeContextMenu();
                self.unitsLeft -= 1;
                self.giveGridData.next(true);
            }
        });
        let addSwordsman = new createjs_module__WEBPACK_IMPORTED_MODULE_1__["Text"]();
        addSwordsman.font = '11px JetBrains Mono';
        addSwordsman.text = 'Add Swordsman';
        addSwordsman.color = 'black';
        addSwordsman.x = addSwordsmanTextConstants.x;
        addSwordsman.y = addSwordsmanTextConstants.y;
        container.addChild(addSwordsman);
        // create delete button
        let deleteButton = new createjs_module__WEBPACK_IMPORTED_MODULE_1__["Shape"]();
        let deleteButtonText = new createjs_module__WEBPACK_IMPORTED_MODULE_1__["Text"]();
        let deleteButtonConstants = { x: 5, y: 75, w: 90, h: 20 };
        let deleteButtonTextConstants = { x: 13, y: 80 };
        deleteButton.graphics.beginFill('white').drawRect(0, 0, deleteButtonConstants.w, deleteButtonConstants.h);
        deleteButton.graphics.beginStroke('black').drawRect(0, 0, deleteButtonConstants.w, deleteButtonConstants.h);
        deleteButton.x = deleteButtonConstants.x;
        deleteButton.y = deleteButtonConstants.y;
        container.addChild(deleteButton);
        deleteButton.on('click', _ => {
            if (self.loopservice.grid[tileX][tileY] !== null && self.loopservice.grid[tileX][tileY].team !== 2 && this.unitsLeft !== 5) {
                let unit = self.loopservice.grid[tileX][tileY];
                stage.removeChild(unit.sprite);
                this.loopservice.deleteUnit(unit);
                self.removeCodeIndexGraphicForUnit(unit);
                self.unitsLeft += 1;
                self.closeContextMenu();
                self.giveGridData.next(true);
            }
        });
        deleteButtonText.font = '11px JetBrains Mono';
        deleteButtonText.text = 'Delete Unit';
        deleteButtonText.color = 'black';
        deleteButtonText.x = deleteButtonTextConstants.x;
        deleteButtonText.y = deleteButtonTextConstants.y;
        container.addChild(deleteButtonText);
        this.contextMenu = container;
        this.contextMenuBounds.x = containerConstants.absx;
        this.contextMenuBounds.y = containerConstants.absy;
        this.contextMenuBounds.w = containerConstants.w;
        this.contextMenuBounds.h = containerConstants.h;
        stage.addChild(container);
    }
    onContextMenuOpen(event) {
        event.preventDefault();
        if (this.contextMenu === null && !this.gameStart && this.testMode && this.loading === 'done') {
            this.renderContextMenuAt(event.pageX - event.target.offsetLeft, event.pageY - event.target.offsetTop, Math.floor((event.pageX - event.target.offsetLeft) / 40), Math.floor((event.pageY - event.target.offsetTop) / 40));
        }
    }
    inContextMenuBounds(x, y) {
        return x >= this.contextMenuBounds.x && x <= this.contextMenuBounds.x + this.contextMenuBounds.w &&
            y >= this.contextMenuBounds.y && y <= this.contextMenuBounds.y + this.contextMenuBounds.h;
    }
    closeContextMenu() {
        stage.removeChild(this.contextMenu);
        this.contextMenu = null;
    }
}
LevelComponent.ɵfac = function LevelComponent_Factory(t) { return new (t || LevelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_sprite_service__WEBPACK_IMPORTED_MODULE_2__["SpriteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_program_construction_code_service__WEBPACK_IMPORTED_MODULE_9__["CodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_gameloop_game_loop_service__WEBPACK_IMPORTED_MODULE_10__["GameLoopServiceService"])); };
LevelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LevelComponent, selectors: [["app-level"]], inputs: { testMode: "testMode", programData: "programData", run: "run", unitCodeChange: "unitCodeChange", saveFormationsAndCode: "saveFormationsAndCode", gameLevelDataNum: "gameLevelDataNum", gamePlayerDataNum: "gamePlayerDataNum", updateProgramData: "updateProgramData", giveGridData: "giveGridData" }, outputs: { unitClickEvent: "unitClickEvent", saveStateEvent: "saveStateEvent", gameActionLogger: "gameActionLogger", gridDataEvent: "gridDataEvent" }, decls: 1, vars: 2, consts: [["id", "battlegrounds", 3, "width", "height", "click", "contextmenu"]], template: function LevelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "canvas", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LevelComponent_Template_canvas_click_0_listener($event) { return ctx.onGridClick($event); })("contextmenu", function LevelComponent_Template_canvas_contextmenu_0_listener($event) { return ctx.onContextMenuOpen($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.width)("height", ctx.height);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGV2ZWwvbGV2ZWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LevelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-level',
                templateUrl: './level.component.html',
                styleUrls: ['./level.component.css']
            }]
    }], function () { return [{ type: _services_game_sprite_service__WEBPACK_IMPORTED_MODULE_2__["SpriteService"] }, { type: _services_program_construction_code_service__WEBPACK_IMPORTED_MODULE_9__["CodeService"] }, { type: _services_game_gameloop_game_loop_service__WEBPACK_IMPORTED_MODULE_10__["GameLoopServiceService"] }]; }, { testMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], programData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], run: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], unitCodeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], saveFormationsAndCode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], unitClickEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], saveStateEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gameLevelDataNum: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gamePlayerDataNum: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], updateProgramData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], giveGridData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gameActionLogger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], gridDataEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "IC9Q":
/*!****************************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/predicate/CompoundPredicate.ts ***!
  \****************************************************************************/
/*! exports provided: CompoundPredicate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompoundPredicate", function() { return CompoundPredicate; });
/**
 * Predicate used to store complex conditions involving and + or of other predicates
 */
class CompoundPredicate {
    evaluation(grid, unit) {
        return false;
    }
    getAsCode() {
        return '';
    }
    getId() {
        return CompoundPredicate.id;
    }
    getLabel() {
        return '';
    }
}
CompoundPredicate.id = btoa(CompoundPredicate.name);


/***/ }),

/***/ "IiXB":
/*!*******************************************!*\
  !*** ./src/app/models/game/GameAction.ts ***!
  \*******************************************/
/*! exports provided: GameAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameAction", function() { return GameAction; });
/**
 * Object that represents a single action that occured in 1 step of the game
 */
class GameAction {
    /**
     * Main Constructor for game action
     * @param id String Id of what happened
     * @param doer The unit object that committed the action (null if no unit has commited the action)
     * @param receiver The unit object that recieved the action (null if no unit has recieved the action)
     * @param died true if any unit died, false otherwise
     */
    constructor(id, doer, receiver, died) {
        /**
         * The action in String representation of what occured in the previous step
         */
        this.actionId = null;
        /**
         * The Unit object that was committing the action
         * null if the action was not committed by the unit
         */
        this.doer = null;
        /**
         * The Unit object that was receiving the action
         * null if the action aws not acted to another unit
         */
        this.receiver = null;
        /**
         * The boolean value that represents if any unit has died
         * after the previous action.
         */
        this.hasDied = false;
        this.actionId = id;
        this.doer = doer;
        this.receiver = receiver;
        this.hasDied = died;
    }
}


/***/ }),

/***/ "LAVv":
/*!*************************************************************!*\
  !*** ./src/app/components/levelplay/levelplay.component.ts ***!
  \*************************************************************/
/*! exports provided: LevelplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelplayComponent", function() { return LevelplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_database_firestore_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/database/firestore-database.service */ "ilXD");
/* harmony import */ var src_app_services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login/authy-login.service */ "PISR");
/* harmony import */ var _level_level_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../level/level.component */ "H3xd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










const _c0 = ["datalogTable"];
function LevelplayComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LevelplayComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r7.id);
} }
function LevelplayComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LevelplayComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r8.msg);
} }
function LevelplayComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
} }
function LevelplayComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
class LevelplayComponent {
    constructor(route, changeDetectorRefs, db, Auth, router) {
        this.route = route;
        this.changeDetectorRefs = changeDetectorRefs;
        this.db = db;
        this.Auth = Auth;
        this.router = router;
        this.run = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.testmode = false;
        this.nullprogramData = null;
        this.logColumns = ["id", "msg"];
        this.logData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.actionLog = [];
        this.actionlogNum = 1;
        this.started = false;
        if (!Auth.checkSigninStatus()) {
            router.navigate(['/signin']);
        }
        else {
            var self = this;
            db.getUserData(Auth.getUser().uid, function (result) {
                console.log("Recieved UserData");
                self.userData = result;
            });
            route.queryParams.subscribe(params => {
                this.levData = params.l;
                this.progData = params.p;
            });
        }
    }
    startGame() {
        this.run.next(true);
    }
    newGameAction(action) {
        console.log("called");
        switch (action.actionId) {
            case "GameEnd2":
                this.addActionToLog("You lost the game");
                break;
            case "GameEnd1":
                this.addActionToLog("You won the game");
                this.addWinToPlayer();
                break;
            case "NoEvent":
                this.addActionToLog("Nothing Happened");
                break;
            case "Attack":
                this.addActionToLog("Unit " + action.doer.id + " attacked unit " + action.receiver.id);
                if (action.hasDied) {
                    this.addActionToLog("Unit " + action.receiver.id + " died");
                }
                break;
            case "Wait":
                this.addActionToLog("Unit " + action.doer.id + " Waited");
                break;
            case "North":
                this.addActionToLog("Unit " + action.doer.id + " moved " + action.actionId);
                break;
            case "East":
                this.addActionToLog("Unit " + action.doer.id + " moved " + action.actionId);
                break;
            case "South":
                this.addActionToLog("Unit " + action.doer.id + " moved " + action.actionId);
                break;
            case "West":
                this.addActionToLog("Unit " + action.doer.id + " moved " + action.actionId);
                break;
            default:
                this.addActionToLog("Unexpected action: \"" + action.actionId + "\"" + action.doer.id);
        }
        this.changeDetectorRefs.detectChanges();
        console.log("length " + this.actionLog.length);
    }
    addActionToLog(msg) {
        this.actionLog.push({ id: this.actionlogNum, msg });
        this.logData.data = this.actionLog;
        this.actionlogNum++;
        this.datalogTable.nativeElement.scrollTop = this.datalogTable.nativeElement.scrollHeight;
    }
    addWinToPlayer() {
        if (this.userData != undefined) {
            if (this.userData.CompletedLevels.indexOf(parseInt(this.levData)) < 0) {
                this.userData.CompletedLevels.push(parseInt(this.levData));
                this.db.setUserData(this.Auth.getUser().uid, this.userData);
            }
        }
        else {
            console.log("Database is taking wayyyy too long");
        }
    }
}
LevelplayComponent.ɵfac = function LevelplayComponent_Factory(t) { return new (t || LevelplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_database_firestore_database_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreDatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_5__["AuthyLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LevelplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LevelplayComponent, selectors: [["app-levelplay"]], viewQuery: function LevelplayComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.datalogTable = _t.first);
    } }, decls: 18, vars: 10, consts: [["id", "playspace", 3, "testMode", "programData", "run", "gameLevelDataNum", "gamePlayerDataNum", "gameActionLogger"], ["id", "ActionLog"], ["mat-table", "", 3, "dataSource"], ["datalogTable", ""], ["matColumnDef", "id"], ["mat-header-cell", "", "class", "idCol", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "idCol", 4, "matCellDef"], ["matColumnDef", "msg"], ["mat-header-cell", "", "class", "actionCol", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "actionCol", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-raised-button", "", 3, "click"], ["mat-header-cell", "", 1, "idCol"], ["mat-cell", "", 1, "idCol"], ["mat-header-cell", "", 1, "actionCol"], ["mat-cell", "", 1, "actionCol"], ["mat-header-row", ""], ["mat-row", ""]], template: function LevelplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-level", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gameActionLogger", function LevelplayComponent_Template_app_level_gameActionLogger_2_listener($event) { return ctx.newGameAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Action Log");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LevelplayComponent_th_9_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LevelplayComponent_td_10_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LevelplayComponent_th_12_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LevelplayComponent_td_13_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LevelplayComponent_tr_14_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LevelplayComponent_tr_15_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LevelplayComponent_Template_button_click_16_listener() { return ctx.startGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Start Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Level ", ctx.levData, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("testMode", ctx.testmode)("programData", ctx.nullprogramData)("run", ctx.run)("gameLevelDataNum", ctx.levData)("gamePlayerDataNum", ctx.progData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.logData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.logColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.logColumns);
    } }, directives: [_level_level_component__WEBPACK_IMPORTED_MODULE_6__["LevelComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], styles: ["#playspace[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 30px 30px 50px 30px;\r\n    height: 600px;\r\n    width: 600px;\r\n    float:left;\r\n}\r\n\r\n#ActionLog[_ngcontent-%COMP%] {\r\n    float:right;\r\n    width: 600px;\r\n    margin-right: 30px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 30px auto 50px auto;\r\n    width: 600px;\r\n    height: 300px;\r\n    overflow: auto;\r\n    background-color: #1c2541;\r\n}\r\n\r\n.idCol[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    color: #2cdd3e;\r\n    font-weight: 500;\r\n}\r\n\r\n.actionCol[_ngcontent-%COMP%] {\r\n    width: 520px;\r\n    color: #2cdd3e;\r\n    font-weight: 500;\r\n}\r\n\r\ntr[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    color: #2cdd3e;\r\n    font-family: Roboto;\r\n    font-size: 30px;\r\n    font-weight: 500;\r\n\r\n    text-align: center;\r\n\r\n    margin-top: 40px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    color: #2cdd3e;\r\n    font-family: Roboto;\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n\r\n    text-align: center;\r\n\r\n    margin-top: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZXZlbHBsYXkvbGV2ZWxwbGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksY0FBYztJQUNkLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCOztJQUVoQixrQkFBa0I7O0lBRWxCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjs7SUFFaEIsa0JBQWtCOztJQUVsQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xldmVscGxheS9sZXZlbHBsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jcGxheXNwYWNlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAzMHB4IDMwcHggNTBweCAzMHB4O1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbiNBY3Rpb25Mb2cge1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gNTBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMjU0MTtcclxufVxyXG5cclxuLmlkQ29sIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgY29sb3I6ICMyY2RkM2U7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYWN0aW9uQ29sIHtcclxuICAgIHdpZHRoOiA1MjBweDtcclxuICAgIGNvbG9yOiAjMmNkZDNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxudHIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGNvbG9yOiAjMmNkZDNlO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGNvbG9yOiAjMmNkZDNlO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LevelplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-levelplay',
                templateUrl: './levelplay.component.html',
                styleUrls: ['./levelplay.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: src_app_services_database_firestore_database_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreDatabaseService"] }, { type: src_app_services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_5__["AuthyLoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { datalogTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["datalogTable", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ }),

/***/ "Lzm4":
/*!***************************************************************!*\
  !*** ./src/app/components/pageheader/pageheader.component.ts ***!
  \***************************************************************/
/*! exports provided: PageheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageheaderComponent", function() { return PageheaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login/authy-login.service */ "PISR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");







function PageheaderComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PageheaderComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.username);
} }
function PageheaderComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Level Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PageheaderComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PageheaderComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Guides");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-menu-trigger-for", _r6);
} }
class PageheaderComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        // this.loggedIn = this.auth.checkSigninStatus();
        //
        // if(this.loggedIn) {
        //   this.username = this.auth.getUser().authDisplayName;
        // }
    }
    logout() {
        this.auth.logout();
        this.router.navigate([""]);
    }
}
PageheaderComponent.ɵfac = function PageheaderComponent_Factory(t) { return new (t || PageheaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_1__["AuthyLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PageheaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageheaderComponent, selectors: [["app-pageheader"]], inputs: { loggedIn: "loggedIn", username: "username" }, decls: 23, vars: 5, consts: [[2, "background-color", "#0b132b"], ["mat-button", "", "routerLink", "", 1, "typebutton"], ["mat-button", "", "id", "Sign", "class", "typebutton right-buttons", "routerLink", "/signin", 4, "ngIf"], ["mat-button", "", "id", "Username", "class", "typebutton right-buttons", 3, "matMenuTriggerFor", 4, "ngIf"], ["mat-button", "", "id", "LevelSelect", "class", "typebutton right-buttons", "routerLink", "/levelSelect", 4, "ngIf"], ["mat-button", "", "id", "CodeNow", "class", "typebutton right-buttons", "routerLink", "/code", 4, "ngIf"], ["mat-button", "", "id", "Docs", "class", "typebutton right-buttons", 3, "mat-menu-trigger-for", 4, "ngIf"], ["xPosition", "before"], ["profiledropdown", "matMenu"], ["mat-menu-item", "", "routerLink", "/profile"], ["mat-menu-item", "", 3, "click"], ["xPosition", "after"], ["guidedropdown", "matMenu"], ["mat-menu-item", "", "routerLink", "/using-the-code-editor"], ["mat-menu-item", "", "routerLink", "/learn-js"], ["mat-menu-item", "", "routerLink", "/docs"], [2, "margin-bottom", "0", "background-color", "#3a506b", "height", "5px", "border", "none"], ["mat-button", "", "id", "Sign", "routerLink", "/signin", 1, "typebutton", "right-buttons"], ["mat-button", "", "id", "Username", 1, "typebutton", "right-buttons", 3, "matMenuTriggerFor"], ["mat-button", "", "id", "LevelSelect", "routerLink", "/levelSelect", 1, "typebutton", "right-buttons"], ["mat-button", "", "id", "CodeNow", "routerLink", "/code", 1, "typebutton", "right-buttons"], ["mat-button", "", "id", "Docs", 1, "typebutton", "right-buttons", 3, "mat-menu-trigger-for"]], template: function PageheaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PageheaderComponent_button_3_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PageheaderComponent_button_4_Template, 2, 2, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PageheaderComponent_button_5_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PageheaderComponent_button_6_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PageheaderComponent_button_7_Template, 2, 1, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageheaderComponent_Template_button_click_12_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-menu", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Using The Scripting Siege Code Editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Learn Javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Scripting Siege Javascript API docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"]], styles: ["#Sign[_ngcontent-%COMP%] {\r\n    display: block;\r\n    float: right;\r\n}\r\n\r\n.typebutton[_ngcontent-%COMP%] {\r\n    margin: 20px 50px 20px 50px;\r\n\r\n    font-family: Roboto;\r\n    font-size: 20px;\r\n\r\n    color: #2cdd3e;\r\n}\r\n\r\n.right-buttons[_ngcontent-%COMP%]{\r\n  display: block;\r\n  float: right;\r\n}\r\n\r\nhr[_ngcontent-%COMP%]{\r\n    margin: 0 0 0 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlaGVhZGVyL3BhZ2VoZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCOztJQUUzQixtQkFBbUI7SUFDbkIsZUFBZTs7SUFFZixjQUFjO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VoZWFkZXIvcGFnZWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI1NpZ24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi50eXBlYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMjBweCA1MHB4IDIwcHggNTBweDtcclxuXHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxuICAgIGNvbG9yOiAjMmNkZDNlO1xyXG59XHJcblxyXG4ucmlnaHQtYnV0dG9uc3tcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbmhye1xyXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageheaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pageheader',
                templateUrl: './pageheader.component.html',
                styleUrls: ['./pageheader.component.css']
            }]
    }], function () { return [{ type: src_app_services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_1__["AuthyLoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { loggedIn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], username: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "NC9t":
/*!****************************************************************!*\
  !*** ./src/app/services/program-construction/block.service.ts ***!
  \****************************************************************/
/*! exports provided: BlockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockService", function() { return BlockService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_blockCommands_blocks_conditional_Else__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/conditional/Else */ "RLPw");
/* harmony import */ var src_app_models_blockCommands_blocks_conditional_ElseIf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/conditional/ElseIf */ "5VXY");
/* harmony import */ var src_app_models_blockCommands_blocks_conditional_If__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/conditional/If */ "mK3C");
/* harmony import */ var src_app_models_blockCommands_blocks_executable_Attack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/executable/Attack */ "feZx");
/* harmony import */ var src_app_models_blockCommands_blocks_executable_West__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/executable/West */ "YZHe");
/* harmony import */ var src_app_models_blockCommands_blocks_executable_East__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/executable/East */ "inrU");
/* harmony import */ var src_app_models_blockCommands_blocks_executable_North__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/executable/North */ "ltGn");
/* harmony import */ var src_app_models_blockCommands_blocks_executable_South__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/executable/South */ "/f9s");
/* harmony import */ var src_app_models_blockCommands_blocks_executable_Wait__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/executable/Wait */ "lo65");
/* harmony import */ var src_app_models_blockCommands_blocks_predicate_EmptyPredicate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/predicate/EmptyPredicate */ "c5BP");
/* harmony import */ var src_app_models_blockCommands_blocks_predicate_EnemyNear__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/predicate/EnemyNear */ "OicT");
/* harmony import */ var src_app_models_blockCommands_blocks_predicate_HealthBelow30Percent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/predicate/HealthBelow30Percent */ "spD5");
/* harmony import */ var src_app_models_blockCommands_blocks_terminal_End__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/terminal/End */ "qpLt");
/* harmony import */ var src_app_models_blockCommands_blocks_terminal_EndElse__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/terminal/EndElse */ "txq3");
/* harmony import */ var src_app_models_blockCommands_blocks_terminal_EndElseIf__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/terminal/EndElseIf */ "+lJh");
/* harmony import */ var src_app_models_blockCommands_blocks_terminal_Endif__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/terminal/Endif */ "aww8");
/* harmony import */ var src_app_models_blockCommands_blocks_terminal_Start__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/terminal/Start */ "GJhz");
/* harmony import */ var _models_blockCommands_blocks_executable_TestAction1__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../models/blockCommands/blocks/executable/TestAction1 */ "g7Zv");
/* harmony import */ var _models_blockCommands_blocks_executable_TestAction2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../models/blockCommands/blocks/executable/TestAction2 */ "BggK");
/* harmony import */ var _models_blockCommands_blocks_predicate_TruePredicate__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../models/blockCommands/blocks/predicate/TruePredicate */ "vq8i");
/* harmony import */ var _models_blockCommands_blocks_predicate_FalsePredicate__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../models/blockCommands/blocks/predicate/FalsePredicate */ "0A9r");
/* harmony import */ var _models_blockCommands_blocks_predicate_CompoundPredicate__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../models/blockCommands/blocks/predicate/CompoundPredicate */ "IC9Q");
/* harmony import */ var _models_blockCommands_blocks_predicate_EastAvailable__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../models/blockCommands/blocks/predicate/EastAvailable */ "DXK3");
/* harmony import */ var _models_blockCommands_blocks_predicate_WestAvailable__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../models/blockCommands/blocks/predicate/WestAvailable */ "jjhM");
/* harmony import */ var _models_blockCommands_blocks_predicate_NorthAvailable__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../models/blockCommands/blocks/predicate/NorthAvailable */ "QFXJ");
/* harmony import */ var _models_blockCommands_blocks_predicate_SouthAvailable__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../models/blockCommands/blocks/predicate/SouthAvailable */ "iM+8");




























/**
 * Service that aids in programming using the BlockCommand Designer and
 * compiling
 */
class BlockService {
    constructor() { }
    /**
     * returns true if the BlockCommand is a ConditionalBlock Object
     * @param command The BlockCommand to check
     */
    isConditional(command) {
        return command.conditions !== undefined;
    }
    /**
     * returns true if the BlockCommand is an Executable Object
     * @param command The BlockCommand to check
     */
    isExecutable(command) {
        return command.execute !== undefined;
    }
    /**
     * returns true if the BlockCommand is a TerminalBlock Object
     * @param command The BlockCommand to check
     */
    isTerminal(command) {
        return command.terminate !== undefined;
    }
    /**
     * Returns CommandBlock from id
     * @param id the Id of the block to search for
     */
    getById(id) {
        switch (id) {
            case src_app_models_blockCommands_blocks_conditional_If__WEBPACK_IMPORTED_MODULE_3__["If"].id:
                return new src_app_models_blockCommands_blocks_conditional_If__WEBPACK_IMPORTED_MODULE_3__["If"]();
            case src_app_models_blockCommands_blocks_executable_Attack__WEBPACK_IMPORTED_MODULE_4__["Attack"].id:
                return new src_app_models_blockCommands_blocks_executable_Attack__WEBPACK_IMPORTED_MODULE_4__["Attack"]();
            case src_app_models_blockCommands_blocks_executable_North__WEBPACK_IMPORTED_MODULE_7__["North"].id:
                return new src_app_models_blockCommands_blocks_executable_North__WEBPACK_IMPORTED_MODULE_7__["North"]();
            case src_app_models_blockCommands_blocks_executable_South__WEBPACK_IMPORTED_MODULE_8__["South"].id:
                return new src_app_models_blockCommands_blocks_executable_South__WEBPACK_IMPORTED_MODULE_8__["South"]();
            case src_app_models_blockCommands_blocks_executable_East__WEBPACK_IMPORTED_MODULE_6__["East"].id:
                return new src_app_models_blockCommands_blocks_executable_East__WEBPACK_IMPORTED_MODULE_6__["East"]();
            case src_app_models_blockCommands_blocks_executable_West__WEBPACK_IMPORTED_MODULE_5__["West"].id:
                return new src_app_models_blockCommands_blocks_executable_West__WEBPACK_IMPORTED_MODULE_5__["West"]();
            case src_app_models_blockCommands_blocks_executable_Wait__WEBPACK_IMPORTED_MODULE_9__["Wait"].id:
                return new src_app_models_blockCommands_blocks_executable_Wait__WEBPACK_IMPORTED_MODULE_9__["Wait"]();
            case src_app_models_blockCommands_blocks_conditional_ElseIf__WEBPACK_IMPORTED_MODULE_2__["ElseIf"].id:
                return new src_app_models_blockCommands_blocks_conditional_ElseIf__WEBPACK_IMPORTED_MODULE_2__["ElseIf"]();
            case src_app_models_blockCommands_blocks_conditional_Else__WEBPACK_IMPORTED_MODULE_1__["Else"].id:
                return new src_app_models_blockCommands_blocks_conditional_Else__WEBPACK_IMPORTED_MODULE_1__["Else"]();
            case src_app_models_blockCommands_blocks_terminal_Endif__WEBPACK_IMPORTED_MODULE_16__["EndIf"].id:
                return new src_app_models_blockCommands_blocks_terminal_Endif__WEBPACK_IMPORTED_MODULE_16__["EndIf"]();
            case src_app_models_blockCommands_blocks_terminal_EndElseIf__WEBPACK_IMPORTED_MODULE_15__["EndElseIf"].id:
                return new src_app_models_blockCommands_blocks_terminal_EndElseIf__WEBPACK_IMPORTED_MODULE_15__["EndElseIf"]();
            case src_app_models_blockCommands_blocks_terminal_EndElse__WEBPACK_IMPORTED_MODULE_14__["EndElse"].id:
                return new src_app_models_blockCommands_blocks_terminal_EndElse__WEBPACK_IMPORTED_MODULE_14__["EndElse"]();
            case _models_blockCommands_blocks_executable_TestAction1__WEBPACK_IMPORTED_MODULE_18__["TextAction1"].id:
                return new _models_blockCommands_blocks_executable_TestAction1__WEBPACK_IMPORTED_MODULE_18__["TextAction1"]();
            case _models_blockCommands_blocks_executable_TestAction2__WEBPACK_IMPORTED_MODULE_19__["TextAction2"].id:
                return new _models_blockCommands_blocks_executable_TestAction2__WEBPACK_IMPORTED_MODULE_19__["TextAction2"]();
            case src_app_models_blockCommands_blocks_predicate_HealthBelow30Percent__WEBPACK_IMPORTED_MODULE_12__["HealthBelow30Percent"].id:
                return new src_app_models_blockCommands_blocks_predicate_HealthBelow30Percent__WEBPACK_IMPORTED_MODULE_12__["HealthBelow30Percent"]();
            case src_app_models_blockCommands_blocks_predicate_EnemyNear__WEBPACK_IMPORTED_MODULE_11__["EnemyNear"].id:
                return new src_app_models_blockCommands_blocks_predicate_EnemyNear__WEBPACK_IMPORTED_MODULE_11__["EnemyNear"]();
            case _models_blockCommands_blocks_predicate_TruePredicate__WEBPACK_IMPORTED_MODULE_20__["TruePredicate"].id:
                return new _models_blockCommands_blocks_predicate_TruePredicate__WEBPACK_IMPORTED_MODULE_20__["TruePredicate"]();
            case _models_blockCommands_blocks_predicate_FalsePredicate__WEBPACK_IMPORTED_MODULE_21__["FalsePredicate"].id:
                return new _models_blockCommands_blocks_predicate_FalsePredicate__WEBPACK_IMPORTED_MODULE_21__["FalsePredicate"]();
            case src_app_models_blockCommands_blocks_predicate_EmptyPredicate__WEBPACK_IMPORTED_MODULE_10__["EmptyPredicate"].id:
                return new src_app_models_blockCommands_blocks_predicate_EmptyPredicate__WEBPACK_IMPORTED_MODULE_10__["EmptyPredicate"]();
            case _models_blockCommands_blocks_predicate_CompoundPredicate__WEBPACK_IMPORTED_MODULE_22__["CompoundPredicate"].id:
                return new _models_blockCommands_blocks_predicate_CompoundPredicate__WEBPACK_IMPORTED_MODULE_22__["CompoundPredicate"]();
            case _models_blockCommands_blocks_predicate_EastAvailable__WEBPACK_IMPORTED_MODULE_23__["EastAvailable"].id:
                return new _models_blockCommands_blocks_predicate_EastAvailable__WEBPACK_IMPORTED_MODULE_23__["EastAvailable"]();
            case _models_blockCommands_blocks_predicate_WestAvailable__WEBPACK_IMPORTED_MODULE_24__["WestAvailable"].id:
                return new _models_blockCommands_blocks_predicate_WestAvailable__WEBPACK_IMPORTED_MODULE_24__["WestAvailable"]();
            case _models_blockCommands_blocks_predicate_NorthAvailable__WEBPACK_IMPORTED_MODULE_25__["NorthAvailable"].id:
                return new _models_blockCommands_blocks_predicate_NorthAvailable__WEBPACK_IMPORTED_MODULE_25__["NorthAvailable"]();
            case _models_blockCommands_blocks_predicate_SouthAvailable__WEBPACK_IMPORTED_MODULE_26__["SouthAvailable"].id:
                return new _models_blockCommands_blocks_predicate_SouthAvailable__WEBPACK_IMPORTED_MODULE_26__["SouthAvailable"]();
            case src_app_models_blockCommands_blocks_terminal_Start__WEBPACK_IMPORTED_MODULE_17__["Start"].id:
                return new src_app_models_blockCommands_blocks_terminal_Start__WEBPACK_IMPORTED_MODULE_17__["Start"]();
            case src_app_models_blockCommands_blocks_terminal_End__WEBPACK_IMPORTED_MODULE_13__["End"].id:
                return new src_app_models_blockCommands_blocks_terminal_End__WEBPACK_IMPORTED_MODULE_13__["End"]();
            default:
                throw new Error(`Id of ${id} is not recognized.`);
        }
    }
    cloneBlock(block) {
        return Object.create(block);
    }
}
/**
 * Array of all BlockCommands that can be placed on the code designer
 */
BlockService.placeableBlocks = [
    new src_app_models_blockCommands_blocks_conditional_If__WEBPACK_IMPORTED_MODULE_3__["If"](), new src_app_models_blockCommands_blocks_executable_Attack__WEBPACK_IMPORTED_MODULE_4__["Attack"](), new src_app_models_blockCommands_blocks_executable_North__WEBPACK_IMPORTED_MODULE_7__["North"](), new src_app_models_blockCommands_blocks_executable_South__WEBPACK_IMPORTED_MODULE_8__["South"](), new src_app_models_blockCommands_blocks_executable_East__WEBPACK_IMPORTED_MODULE_6__["East"](),
    new src_app_models_blockCommands_blocks_executable_West__WEBPACK_IMPORTED_MODULE_5__["West"](), new src_app_models_blockCommands_blocks_executable_Wait__WEBPACK_IMPORTED_MODULE_9__["Wait"](), new src_app_models_blockCommands_blocks_terminal_Endif__WEBPACK_IMPORTED_MODULE_16__["EndIf"](), new src_app_models_blockCommands_blocks_conditional_Else__WEBPACK_IMPORTED_MODULE_1__["Else"](), new src_app_models_blockCommands_blocks_conditional_ElseIf__WEBPACK_IMPORTED_MODULE_2__["ElseIf"](),
    new src_app_models_blockCommands_blocks_terminal_EndElse__WEBPACK_IMPORTED_MODULE_14__["EndElse"](), new src_app_models_blockCommands_blocks_terminal_EndElseIf__WEBPACK_IMPORTED_MODULE_15__["EndElseIf"](), new _models_blockCommands_blocks_executable_TestAction2__WEBPACK_IMPORTED_MODULE_19__["TextAction2"](), new _models_blockCommands_blocks_executable_TestAction1__WEBPACK_IMPORTED_MODULE_18__["TextAction1"]()
];
BlockService.actionBlocks = [
    new src_app_models_blockCommands_blocks_executable_North__WEBPACK_IMPORTED_MODULE_7__["North"](), new src_app_models_blockCommands_blocks_executable_South__WEBPACK_IMPORTED_MODULE_8__["South"](), new src_app_models_blockCommands_blocks_executable_East__WEBPACK_IMPORTED_MODULE_6__["East"](),
    new src_app_models_blockCommands_blocks_executable_West__WEBPACK_IMPORTED_MODULE_5__["West"](), new src_app_models_blockCommands_blocks_executable_Wait__WEBPACK_IMPORTED_MODULE_9__["Wait"](), new src_app_models_blockCommands_blocks_executable_Attack__WEBPACK_IMPORTED_MODULE_4__["Attack"]()
];
BlockService.conditionalBlocks = [
    new src_app_models_blockCommands_blocks_conditional_If__WEBPACK_IMPORTED_MODULE_3__["If"](), new src_app_models_blockCommands_blocks_terminal_Endif__WEBPACK_IMPORTED_MODULE_16__["EndIf"](), new src_app_models_blockCommands_blocks_conditional_Else__WEBPACK_IMPORTED_MODULE_1__["Else"](), new src_app_models_blockCommands_blocks_conditional_ElseIf__WEBPACK_IMPORTED_MODULE_2__["ElseIf"](),
    new src_app_models_blockCommands_blocks_terminal_EndElse__WEBPACK_IMPORTED_MODULE_14__["EndElse"](), new src_app_models_blockCommands_blocks_terminal_EndElseIf__WEBPACK_IMPORTED_MODULE_15__["EndElseIf"]()
];
/**
 * Array representing all BlockCommands
 */
BlockService.allBlocks = BlockService.placeableBlocks.concat(new src_app_models_blockCommands_blocks_terminal_Start__WEBPACK_IMPORTED_MODULE_17__["Start"](), new src_app_models_blockCommands_blocks_terminal_End__WEBPACK_IMPORTED_MODULE_13__["End"](), new src_app_models_blockCommands_blocks_predicate_EmptyPredicate__WEBPACK_IMPORTED_MODULE_10__["EmptyPredicate"]());
/**
 * Array representing all Predicates available
 */
BlockService.predicates = [new src_app_models_blockCommands_blocks_predicate_EnemyNear__WEBPACK_IMPORTED_MODULE_11__["EnemyNear"](), new src_app_models_blockCommands_blocks_predicate_HealthBelow30Percent__WEBPACK_IMPORTED_MODULE_12__["HealthBelow30Percent"](),
    new _models_blockCommands_blocks_predicate_NorthAvailable__WEBPACK_IMPORTED_MODULE_25__["NorthAvailable"](), new _models_blockCommands_blocks_predicate_SouthAvailable__WEBPACK_IMPORTED_MODULE_26__["SouthAvailable"](), new _models_blockCommands_blocks_predicate_EastAvailable__WEBPACK_IMPORTED_MODULE_23__["EastAvailable"](), new _models_blockCommands_blocks_predicate_WestAvailable__WEBPACK_IMPORTED_MODULE_24__["WestAvailable"]()];
BlockService.ɵfac = function BlockService_Factory(t) { return new (t || BlockService)(); };
BlockService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BlockService, factory: BlockService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OicT":
/*!********************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/predicate/EnemyNear.ts ***!
  \********************************************************************/
/*! exports provided: EnemyNear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnemyNear", function() { return EnemyNear; });
/**
 * Predicate representing The EnemyNear Condition
 * Condition checks if there is an enemy near the unit
 * See block-command.ts for specific documentation
 * on properties and methods
 */
class EnemyNear {
    constructor() {
        this.negate = false;
        this.conjunction = '';
    }
    evaluation(grid, unit) {
        for (let x = 0; x < grid.length; x++) {
            for (let y = 0; y < grid[0].length; y++) {
                let other = grid[x][y];
                if (!((unit.location.x === x && unit.location.y === y) || other === null || other.team === unit.team)) {
                    if ((x >= unit.location.x - unit.attackRange && x <= unit.location.x + unit.attackRange) &&
                        (y >= unit.location.y - unit.attackRange && y <= unit.location.y + unit.attackRange)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    getId() {
        return EnemyNear.id;
    }
    getLabel() {
        return EnemyNear.label;
    }
    getAsCode() {
        return EnemyNear.asCode;
    }
}
EnemyNear.label = 'Enemy In Range';
EnemyNear.id = btoa(EnemyNear.name);
EnemyNear.asCode = 'enemyInRange(grid, me)';


/***/ }),

/***/ "OoWN":
/*!***************************************************************!*\
  !*** ./src/app/components/block-code/block-code.component.ts ***!
  \***************************************************************/
/*! exports provided: BlockCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockCodeComponent", function() { return BlockCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var src_app_models_blockCommands_blocks_terminal_End__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/terminal/End */ "qpLt");
/* harmony import */ var src_app_models_blockCommands_blocks_terminal_Start__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/terminal/Start */ "GJhz");
/* harmony import */ var src_app_services_program_construction_block_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/program-construction/block.service */ "NC9t");
/* harmony import */ var src_app_models_blockCommands_blocks_conditional_Else__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/conditional/Else */ "RLPw");
/* harmony import */ var _models_blockCommands_actual_code_RealCodeRepr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/blockCommands/actual-code/RealCodeRepr */ "PFxY");
/* harmony import */ var _models_blockCommands_blocks_predicate_HealthBelow30Percent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/blockCommands/blocks/predicate/HealthBelow30Percent */ "spD5");
/* harmony import */ var _models_blockCommands_blocks_predicate_EnemyNear__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/blockCommands/blocks/predicate/EnemyNear */ "OicT");
/* harmony import */ var _models_blockCommands_blocks_predicate_EmptyPredicate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/blockCommands/blocks/predicate/EmptyPredicate */ "c5BP");
/* harmony import */ var _models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/database/DatabaseData */ "jJWq");
/* harmony import */ var _models_game_units_Swordsman__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/game/units/Swordsman */ "ieil");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../error/error.component */ "7AdY");
/* harmony import */ var _set_name_set_name_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../set-name/set-name.component */ "TpX2");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../info/info.component */ "/nkg");
/* harmony import */ var _models_blockCommands_blocks_predicate_NorthAvailable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../models/blockCommands/blocks/predicate/NorthAvailable */ "QFXJ");
/* harmony import */ var _models_blockCommands_blocks_predicate_SouthAvailable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../models/blockCommands/blocks/predicate/SouthAvailable */ "iM+8");
/* harmony import */ var _models_blockCommands_blocks_predicate_WestAvailable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../models/blockCommands/blocks/predicate/WestAvailable */ "jjhM");
/* harmony import */ var _models_blockCommands_blocks_predicate_EastAvailable__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../models/blockCommands/blocks/predicate/EastAvailable */ "DXK3");
/* harmony import */ var _models_blockCommands_blocks_executable_East__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../models/blockCommands/blocks/executable/East */ "inrU");
/* harmony import */ var src_app_services_program_construction_code_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/services/program-construction/code.service */ "7zeS");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_database_firestore_database_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../services/database/firestore-database.service */ "ilXD");
/* harmony import */ var _services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../services/login/authy-login.service */ "PISR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _level_level_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../level/level.component */ "H3xd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








































function BlockCodeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockCodeComponent_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const tab_r7 = ctx.$implicit; const i_r8 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.changeTab(tab_r7, i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tab-not-selected", tab_r7 !== ctx_r0.currentCode)("tab-selected", tab_r7 === ctx_r0.currentCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r8 + 1, " ");
} }
function BlockCodeComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function BlockCodeComponent_div_6_Template_div_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onSelectJsCode($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("code-select", ctx_r1.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.jsCodeTabs[ctx_r1.tabIndex - 1].content);
} }
function BlockCodeComponent_mat_card_9_div_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockCodeComponent_mat_card_9_div_2_div_1_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const block_r13 = ctx_r24.$implicit; const i_r14 = ctx_r24.index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.deleteCondition(block_r13.conditions, i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-radio-group", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BlockCodeComponent_mat_card_9_div_2_div_1_div_1_Template_mat_radio_group_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const j_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const block_r13 = ctx_r27.$implicit; const i_r14 = ctx_r27.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.setConjunction(block_r13.conditions[j_r19], $event.value, i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-radio-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "And");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-radio-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Or");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const condition_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", condition_r18.conjunction === "&");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", condition_r18.conjunction === "|");
} }
function BlockCodeComponent_mat_card_9_div_2_div_1_mat_form_field_4_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const predicate_r31 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r30.blockService.cloneBlock(predicate_r31));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", predicate_r31.getLabel(), " ");
} }
function BlockCodeComponent_mat_card_9_div_2_div_1_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select Condition:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function BlockCodeComponent_mat_card_9_div_2_div_1_mat_form_field_4_Template_mat_select_selectionChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const j_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const block_r13 = ctx_r33.$implicit; const i_r14 = ctx_r33.index; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.onChangeCondition(block_r13, $event.value, j_r19, i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BlockCodeComponent_mat_card_9_div_2_div_1_mat_form_field_4_mat_option_4_Template, 2, 2, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const block_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", block_r13.conditions[j_r19]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r21.predicates);
} }
function BlockCodeComponent_mat_card_9_div_2_div_1_mat_checkbox_5_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlockCodeComponent_mat_card_9_div_2_div_1_mat_checkbox_5_Template_mat_checkbox_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const condition_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return condition_r18.negate = $event; })("change", function BlockCodeComponent_mat_card_9_div_2_div_1_mat_checkbox_5_Template_mat_checkbox_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.refreshCode(i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Negate condition (not) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const condition_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", condition_r18.negate);
} }
function BlockCodeComponent_mat_card_9_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlockCodeComponent_mat_card_9_div_2_div_1_div_1_Template, 9, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BlockCodeComponent_mat_card_9_div_2_div_1_mat_form_field_4_Template, 5, 2, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BlockCodeComponent_mat_card_9_div_2_div_1_mat_checkbox_5_Template, 2, 1, "mat-checkbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r19 = ctx.index;
    const block_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", j_r19 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", block_r13.conditions[j_r19].negate ? "Not" : "", " ", block_r13.conditions[j_r19].getLabel(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.isConditional(block_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.isConditional(block_r13));
} }
function BlockCodeComponent_mat_card_9_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlockCodeComponent_mat_card_9_div_2_div_1_Template, 6, 5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockCodeComponent_mat_card_9_div_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const block_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.addCondition(block_r13.conditions); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " add condition ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", block_r13.conditions);
} }
function BlockCodeComponent_mat_card_9_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockCodeComponent_mat_card_9_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.onDeleteBlock(i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlockCodeComponent_mat_card_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlockCodeComponent_mat_card_9_div_2_Template, 4, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BlockCodeComponent_mat_card_9_button_3_Template, 3, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r13 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", block_r13.indentationLevel * 50 + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("executable-block", !ctx_r3.isEndBlock(block_r13) && !ctx_r3.isConditional(block_r13) && !ctx_r3.isTerminalBlock(block_r13))("end-code-block", ctx_r3.isEndBlock(block_r13))("code-select", ctx_r3.selected)("conditional-code-block", (ctx_r3.isConditional(block_r13) || ctx_r3.isTerminalBlock(block_r13)) && !ctx_r3.isEndBlock(block_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", block_r13.getLabel(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isConditional(block_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isEndBlock(block_r13));
} }
function BlockCodeComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockCodeComponent_div_10_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const i_r55 = ctx.index; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r56.updateCategorySelected(i_r55); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tab-not-selected", !cat_r54.selected)("tab-selected", cat_r54.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", cat_r54.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r54.type);
} }
function BlockCodeComponent_div_10_mat_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const block_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](block_r58.getLabel());
} }
function BlockCodeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlockCodeComponent_div_10_div_2_Template, 3, 6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function BlockCodeComponent_div_10_Template_div_cdkDropListDropped_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.onDrop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BlockCodeComponent_div_10_mat_card_5_Template, 2, 1, "mat-card", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.blockCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx_r4.getBlocksOfSelectedCategory())("cdkDropListConnectedTo", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.getBlocksOfSelectedCategory());
} }
function BlockCodeComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockCodeComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.uploadJavascript(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BlockCodeComponent_button_18_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.retrieveJavascriptCode($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " upload code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlockCodeComponent_div_23_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const line_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", line_r65.indentationLevel * 10 + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", line_r65.code, " ");
} }
function BlockCodeComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "// This is your block code as actual javascript code!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BlockCodeComponent_div_23_p_3_Template, 2, 3, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", 200 + ctx_r6.realCode.length * 15 + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.realCode);
} }
class BlockCodeComponent {
    constructor(codeService, blockService, dialog, db, auth, router) {
        this.codeService = codeService;
        this.blockService = blockService;
        this.dialog = dialog;
        this.db = db;
        this.auth = auth;
        this.router = router;
        this.codeBlocks = src_app_services_program_construction_block_service__WEBPACK_IMPORTED_MODULE_4__["BlockService"].placeableBlocks;
        this.predicates = src_app_services_program_construction_block_service__WEBPACK_IMPORTED_MODULE_4__["BlockService"].predicates;
        this.codeTabs = [
            [new src_app_models_blockCommands_blocks_terminal_Start__WEBPACK_IMPORTED_MODULE_3__["Start"](), new src_app_models_blockCommands_blocks_terminal_End__WEBPACK_IMPORTED_MODULE_2__["End"]()],
            [new src_app_models_blockCommands_blocks_terminal_Start__WEBPACK_IMPORTED_MODULE_3__["Start"](), new src_app_models_blockCommands_blocks_terminal_End__WEBPACK_IMPORTED_MODULE_2__["End"]()],
            [new src_app_models_blockCommands_blocks_terminal_Start__WEBPACK_IMPORTED_MODULE_3__["Start"](), new src_app_models_blockCommands_blocks_terminal_End__WEBPACK_IMPORTED_MODULE_2__["End"]()],
            [new src_app_models_blockCommands_blocks_terminal_Start__WEBPACK_IMPORTED_MODULE_3__["Start"](), new src_app_models_blockCommands_blocks_terminal_End__WEBPACK_IMPORTED_MODULE_2__["End"]()]
        ];
        this.jsCodeTabs = this.codeBlocks.map(_ => { return { content: '', file: null, ref: '', rawFile: null }; });
        this.verified = this.codeTabs.map(_ => false);
        this.selected = false;
        this.currentCode = this.codeTabs[0];
        this.blockCategories = [
            { type: 'Action', selected: true },
            { type: 'Conditional', selected: false }
        ];
        this.selectedCategory = this.blockCategories[0];
        this.realCode = this.currentCode.map(block => new _models_blockCommands_actual_code_RealCodeRepr__WEBPACK_IMPORTED_MODULE_6__["RealCodeRepr"](block));
        this.extraLinesAdded = 3;
        this.hasHealthFunc = false;
        this.hasEnemyNearFunc = false;
        this.hasLocationAvailableFunc = false;
        this.tabIndex = 1;
        this.run = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        this.gameRun = false;
        this.unitCodeChange = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        this.saveFormationsAndCode = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        this.javascriptMode = false;
        this.giveGridData = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        this.updateProgramData = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
    }
    ngOnInit() {
        if (this.auth.checkSigninStatus()) {
            this.programData = new _models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_10__["ProgramData"]();
            this.programData.Name = 'Test';
            let unit = new _models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_10__["UnitData"]();
            unit.CodeBlocks = [_models_blockCommands_blocks_executable_East__WEBPACK_IMPORTED_MODULE_20__["East"].id];
            unit.CodeType = _models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_10__["CodeType"].BLOCK;
            unit.TroopType = _models_game_units_Swordsman__WEBPACK_IMPORTED_MODULE_11__["Swordsman"].dbid;
            unit.location = { x: 1, y: 2 };
            this.programData.Units = [unit];
            this.initStarterCode();
        }
        else {
            this.router.navigate(['signin']);
        }
    }
    unverifyCode() {
        this.verified[this.tabIndex - 1] = false;
        this.selected = false;
    }
    onDrop(event) {
        if (event.container.data === this.currentCode &&
            event.currentIndex != 0 && !(event.currentIndex >= this.currentCode.length)) {
            this.unverifyCode();
            let block = event.previousContainer.data[event.previousIndex];
            let copy = this.blockService.cloneBlock(block);
            this.setIndentationLevel(event, block);
            if (this.blockService.isConditional(block)) {
                copy.conditions = [new _models_blockCommands_blocks_predicate_EmptyPredicate__WEBPACK_IMPORTED_MODULE_9__["EmptyPredicate"]()];
                copy.condition = new _models_blockCommands_blocks_predicate_EmptyPredicate__WEBPACK_IMPORTED_MODULE_9__["EmptyPredicate"]();
            }
            event.previousContainer.data.push(copy);
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            this.realCode.splice(event.currentIndex + this.extraLinesAdded, 0, new _models_blockCommands_actual_code_RealCodeRepr__WEBPACK_IMPORTED_MODULE_6__["RealCodeRepr"](copy));
        }
    }
    onDeleteBlock(index) {
        this.unverifyCode();
        this.currentCode.splice(index, 1);
        this.realCode.splice(index + this.extraLinesAdded, 1);
        this.recalculateIndentation();
    }
    exportCode() {
        this.saveFormationsAndCode.next(true);
    }
    saveProgramData(state, saveFile = false, name = "test") {
        this.programData = new _models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_10__["ProgramData"]();
        this.programData.Name = name;
        this.programData.Verified = true;
        this.programData.Units = [];
        let savedFiles = [];
        for (let row of state) {
            for (let tile of row) {
                if (tile != null && tile.team === 1) {
                    let unit = new _models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_10__["UnitData"]();
                    unit.TroopType = btoa(tile.constructor.name);
                    if (tile.codeType === _models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_10__["CodeType"].BLOCK) {
                        unit.CodeType = _models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_10__["CodeType"].BLOCK;
                        unit.CodeBlocks = this.codeService.serializeBlocks(tile.activecode);
                    }
                    else if (tile.codeType === _models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_10__["CodeType"].FILE) {
                        unit.CodeType = _models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_10__["CodeType"].FILE;
                        if (saveFile) {
                            for (let tab of this.jsCodeTabs) {
                                if (tab.file === tile.fileUrl) {
                                    tile.fileUrl = tab.ref;
                                }
                            }
                        }
                        unit.CodeFile = { storageRef: tile.fileUrl, filename: tile.fileUrl.split('/')[3] };
                        if (saveFile) {
                            let code = null;
                            for (let file of this.jsCodeTabs) {
                                if (file.ref === tile.fileUrl) {
                                    code = file.rawFile;
                                }
                            }
                            if (code === null) {
                                throw new Error("Couldn't find file. Something went wrong. Your code is spaghetti lel");
                            }
                            if (!savedFiles.includes(tile.fileUrl)) {
                                this.db.storeCodeAtLocation(tile.fileUrl, code);
                                savedFiles.push(tile.fileUrl);
                            }
                        }
                    }
                    unit.location = Object.freeze(tile.location);
                    this.programData.Units.push(unit);
                }
            }
        }
        this.updateProgramData.next(this.programData);
    }
    saveState(state) {
        let data = {
            name: '',
            cancelled: false
        };
        let name_dia = this.dialog.open(_set_name_set_name_component__WEBPACK_IMPORTED_MODULE_14__["SetNameComponent"], {
            data: data
        });
        name_dia.afterClosed().subscribe(_ => {
            if (data.name !== '' && !data.cancelled) {
                let self = this;
                self.saveProgramData(state, true, data.name);
                let id = 0;
                function setProgram(id) {
                    self.db.doesProgramExist(`${id}`, result => {
                        if (result) {
                            let id = self.getRandomInt(200);
                            setProgram(id);
                        }
                        else {
                            self.db.setProgramData(`${id}`, self.programData).then(_ => {
                                let uid = self.auth.getUser().uid;
                                self.db.getUserData(uid, result => {
                                    let user = result;
                                    user.Programs.push(id);
                                    self.db.setUserData(uid, user).then(_ => {
                                        self.dialog.open(_info_info_component__WEBPACK_IMPORTED_MODULE_15__["InfoComponent"], { data: 'Code and formation saved successfully!' });
                                    }).catch(_ => {
                                        self.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"], { data: 'Whoops! Something went wrong on our end. Please try again or send a bug report' });
                                    });
                                });
                            });
                        }
                    });
                }
                setProgram(id);
            }
        });
    }
    onChangeCondition(block, value, index, blockIndex) {
        console.log('HERE');
        let conjunction = block.conditions[index].conjunction;
        block.conditions[index] = value;
        block.conditions[index].conjunction = conjunction;
        this.unverifyCode();
        this.refreshCode(blockIndex);
        if (value.getLabel() === _models_blockCommands_blocks_predicate_HealthBelow30Percent__WEBPACK_IMPORTED_MODULE_7__["HealthBelow30Percent"].label && !this.hasHealthFunc) {
            this.addFunctionToRealCode(_models_blockCommands_actual_code_RealCodeRepr__WEBPACK_IMPORTED_MODULE_6__["healthBelow30PercentFunc"]);
            this.hasHealthFunc = true;
        }
        else if (value.getLabel() === _models_blockCommands_blocks_predicate_EnemyNear__WEBPACK_IMPORTED_MODULE_8__["EnemyNear"].label && !this.hasEnemyNearFunc) {
            this.addFunctionToRealCode(_models_blockCommands_actual_code_RealCodeRepr__WEBPACK_IMPORTED_MODULE_6__["enemyNearFunc"]);
            this.hasEnemyNearFunc = true;
        }
        else if ([_models_blockCommands_blocks_predicate_NorthAvailable__WEBPACK_IMPORTED_MODULE_16__["NorthAvailable"].label, _models_blockCommands_blocks_predicate_SouthAvailable__WEBPACK_IMPORTED_MODULE_17__["SouthAvailable"].label, _models_blockCommands_blocks_predicate_EastAvailable__WEBPACK_IMPORTED_MODULE_19__["EastAvailable"].label, _models_blockCommands_blocks_predicate_WestAvailable__WEBPACK_IMPORTED_MODULE_18__["WestAvailable"].label].includes(value.getLabel())
            && !this.hasLocationAvailableFunc) {
            this.addFunctionToRealCode(_models_blockCommands_actual_code_RealCodeRepr__WEBPACK_IMPORTED_MODULE_6__["locationAvailableFunc"]);
            this.hasLocationAvailableFunc = true;
        }
    }
    isConditional(block) {
        return this.blockService.isConditional(block) && !(block.getLabel() === src_app_models_blockCommands_blocks_conditional_Else__WEBPACK_IMPORTED_MODULE_5__["Else"].label);
    }
    isEndBlock(block) {
        return block.getLabel() === src_app_models_blockCommands_blocks_terminal_Start__WEBPACK_IMPORTED_MODULE_3__["Start"].label || block.getLabel() === src_app_models_blockCommands_blocks_terminal_End__WEBPACK_IMPORTED_MODULE_2__["End"].label;
    }
    isTerminalBlock(block) {
        return this.blockService.isTerminal(block);
    }
    /*
     If the event argument is set to null, we assume you are doing it based on index, otherwise if index is null
     or not specified then we do it based on the event. The reason this is the way it is because when we drag the
     blocks we get their index using the event. But we also need the option to do it by indent when we recalculate
     the indentation when blocks are deleted or when we import the code.
     */
    setIndentationLevel(event, block, index = null) {
        let blockIndex = index;
        if (event !== null) {
            blockIndex = event.currentIndex;
        }
        let blockAbove = this.currentCode[blockIndex - 1];
        if (blockIndex === 1) {
            block.indentationLevel = 1;
        }
        else if (this.blockService.isConditional(blockAbove) && !(this.blockService.isTerminal(block))) {
            block.indentationLevel = blockAbove.indentationLevel + 1;
        }
        else if (this.blockService.isTerminal(block) && !(blockAbove.indentationLevel === 1)
            && !(this.blockService.isConditional(blockAbove))) {
            block.indentationLevel = blockAbove.indentationLevel - 1;
        }
        else {
            block.indentationLevel = blockAbove.indentationLevel;
        }
    }
    recalculateIndentation() {
        for (let i = 1; i < this.currentCode.length - 1; i++) {
            let block = this.currentCode[i];
            this.setIndentationLevel(null, block, i);
            this.realCode[i + this.extraLinesAdded].indentationLevel = block.indentationLevel;
        }
    }
    initStarterCode() {
        let dataInit = new _models_blockCommands_actual_code_RealCodeRepr__WEBPACK_IMPORTED_MODULE_6__["RealCodeRepr"](null, 'let data = JSON.parse(turnEvent.data);');
        dataInit.indentationLevel = 1;
        this.realCode.splice(1, 0, dataInit);
        let gridInit = new _models_blockCommands_actual_code_RealCodeRepr__WEBPACK_IMPORTED_MODULE_6__["RealCodeRepr"](null, 'let grid = data.grid;');
        gridInit.indentationLevel = 1;
        this.realCode.splice(2, 0, gridInit);
        let unitInit = new _models_blockCommands_actual_code_RealCodeRepr__WEBPACK_IMPORTED_MODULE_6__["RealCodeRepr"](null, 'let me = data.unit;');
        unitInit.indentationLevel = 1;
        this.realCode.splice(this.extraLinesAdded, 0, unitInit);
    }
    addFunctionToRealCode(funcCode) {
        let codeReprs = _models_blockCommands_actual_code_RealCodeRepr__WEBPACK_IMPORTED_MODULE_6__["RealCodeRepr"].funcToRealCodeRepr(funcCode);
        for (let line of codeReprs) {
            this.realCode.push(line);
        }
    }
    addCondition(conditions) {
        conditions.push(new _models_blockCommands_blocks_predicate_EmptyPredicate__WEBPACK_IMPORTED_MODULE_9__["EmptyPredicate"]());
    }
    setConjunction(predicate, conj, index) {
        predicate.conjunction = conj;
        this.refreshCode(index);
    }
    deleteCondition(conditions, index) {
        conditions.splice(index, 1);
        this.refreshCode(index);
    }
    refreshCode(index) {
        this.realCode[index + this.extraLinesAdded].code = this.currentCode[index].getAsCode();
    }
    refreshAllCode() {
        this.realCode = [];
        for (let block of this.currentCode) {
            this.realCode.push(new _models_blockCommands_actual_code_RealCodeRepr__WEBPACK_IMPORTED_MODULE_6__["RealCodeRepr"](block));
        }
        this.initStarterCode();
    }
    updateCategorySelected(index) {
        for (let category of this.blockCategories) {
            category.selected = false;
        }
        this.blockCategories[index].selected = true;
        this.selectedCategory = this.blockCategories[index];
    }
    getBlocksOfSelectedCategory() {
        if (this.selectedCategory === this.blockCategories[0]) {
            return src_app_services_program_construction_block_service__WEBPACK_IMPORTED_MODULE_4__["BlockService"].actionBlocks;
        }
        else {
            return src_app_services_program_construction_block_service__WEBPACK_IMPORTED_MODULE_4__["BlockService"].conditionalBlocks;
        }
    }
    changeTab(tab, index) {
        this.currentCode = tab;
        this.tabIndex = index + 1;
        this.unverifyCode();
        this.refreshAllCode();
    }
    updateSelected() {
        this.selected = !this.selected;
    }
    onSelectBlockCode(event) {
        if (!this.javascriptMode) {
            event.preventDefault();
            this.updateSelected();
            this.verifyCode();
        }
    }
    onSelectJsCode(event) {
        event.preventDefault();
        this.updateSelected();
    }
    verifyCode() {
        if (!this.verified[this.tabIndex - 1]) {
            try {
                this.codeService.compileToExecutableCode(this.currentCode);
                this.verified[this.tabIndex - 1] = true;
            }
            catch (error) {
                let dialog = this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"], {
                    data: error.message
                });
                dialog.afterClosed().subscribe(_ => {
                    this.updateSelected();
                });
            }
        }
    }
    addCodeToUnit(unit) {
        let invalidCode = false;
        if (this.selected && ((this.verified[this.tabIndex - 1] && !this.javascriptMode) || this.javascriptMode)) {
            if (!this.javascriptMode) {
                if (this.verified[this.tabIndex - 1]) {
                    unit.codeType = _models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_10__["CodeType"].BLOCK;
                    unit.activecode = [...this.currentCode];
                }
                else {
                    invalidCode = true;
                }
            }
            else {
                if (this.jsCodeTabs[this.tabIndex - 1].file !== null) {
                    unit.codeType = _models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_10__["CodeType"].FILE;
                    unit.activecode = new Worker(this.jsCodeTabs[this.tabIndex - 1].file);
                    unit.fileUrl = this.jsCodeTabs[this.tabIndex - 1].file;
                }
                else {
                    invalidCode = true;
                }
            }
            this.updateSelected();
            if (!invalidCode) {
                this.unitCodeChange.next({ unit: unit, index: this.tabIndex, color: this.javascriptMode ? '#7A3DB8' : '#A4000F' });
                this.giveGridData.next(true);
            }
        }
    }
    runOrResetTest() {
        this.run.next(true);
        this.gameRun = !this.gameRun;
    }
    switchEditorMode() {
        this.javascriptMode = !this.javascriptMode;
        this.selected = false;
    }
    uploadJavascript() {
        document.getElementById('file').click();
    }
    retrieveJavascriptCode(event) {
        let file = event.target.files[0];
        let reader = new FileReader();
        let self = this;
        reader.onload = function (event) {
            if (typeof event.target.result === 'string') {
                let fileRepr = self.jsCodeTabs[self.tabIndex - 1];
                fileRepr.content = event.target.result;
                fileRepr.file = window.URL.createObjectURL(file);
                console.log(fileRepr.file);
                fileRepr.rawFile = file;
                // TODO: set the ref variable of the file object to be the appropriate file location for firebase
                fileRepr.ref = `/user_code/${self.auth.getUser().uid}/${new Date().getTime()}`;
            }
        };
        reader.readAsText(file);
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    goToHelpPage() {
        this.router.navigate(['using-the-code-editor']);
        window.scroll(0, 0);
    }
}
BlockCodeComponent.ɵfac = function BlockCodeComponent_Factory(t) { return new (t || BlockCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_program_construction_code_service__WEBPACK_IMPORTED_MODULE_21__["CodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_program_construction_block_service__WEBPACK_IMPORTED_MODULE_4__["BlockService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_database_firestore_database_service__WEBPACK_IMPORTED_MODULE_23__["FirestoreDatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_24__["AuthyLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__["Router"])); };
BlockCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockCodeComponent, selectors: [["app-block-code"]], decls: 24, vars: 28, consts: [["id", "content-wrapper"], ["id", "left-content"], ["id", "top-left-content"], [1, "tabs"], ["class", "tab tab-not-selected", 3, "tab-not-selected", "tab-selected", "click", 4, "ngFor", "ngForOf"], ["id", "code-boundary"], ["id", "user-js-code-console", 3, "code-select", "contextmenu", 4, "ngIf"], ["cdkDrag", "", "cdkDropList", "", "cdkDropListOrientation", "vertical", "id", "current-code-list", "cdkDragBoundary", "#code-boundary", 3, "cdkDropListData", "cdkDropListDropped", "contextmenu"], ["yourCode", "cdkDropList"], ["cdkDrag", "", "cdkDragDisabled", "", "class", "code-block-used", 3, "executable-block", "end-code-block", "code-select", "conditional-code-block", "left", 4, "ngFor", "ngForOf"], ["id", "bottom-left-content", 4, "ngIf"], ["id", "right-content"], ["id", "map", 3, "testMode", "programData", "run", "unitCodeChange", "saveFormationsAndCode", "giveGridData", "updateProgramData", "unitClickEvent", "saveStateEvent", "gridDataEvent"], ["id", "options"], ["mat-raised-button", "", "color", "primary", "id", "export", 3, "click"], ["mat-raised-button", "", "id", "run", 3, "click"], ["mat-raised-button", "", "id", "upload", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "id", "help", 3, "click"], ["mat-raised-button", "", "id", "switch", 3, "click"], ["id", "actual-code", 3, "height", 4, "ngIf"], [1, "tab", "tab-not-selected", 3, "click"], ["id", "user-js-code-console", 3, "contextmenu"], ["id", "user-js-code"], ["cdkDrag", "", "cdkDragDisabled", "", 1, "code-block-used"], ["class", "conditional-options-wrapper", 4, "ngIf"], ["mat-button", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "conditional-options-wrapper"], ["class", "conditional-options", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "add-condition", 3, "click"], [1, "conditional-options"], ["class", "further-conditions", 4, "ngIf"], [1, "condition-label"], ["appearance", "fill", 4, "ngIf"], ["name", "negate", 3, "ngModel", "ngModelChange", "change", 4, "ngIf"], [1, "further-conditions"], ["mat-button", "", 3, "click"], [1, "and-or", 3, "change"], ["value", "&", 3, "checked"], ["value", "|", 3, "checked"], ["appearance", "fill"], [3, "value", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "negate", 3, "ngModel", "ngModelChange", "change"], ["mat-button", "", "color", "primary", 3, "click"], ["id", "bottom-left-content"], ["id", "lower-tabs", 1, "tabs"], ["class", "tab", 3, "tab-not-selected", "tab-selected", "click", 4, "ngFor", "ngForOf"], ["id", "card-list-boundary"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", "id", "card-list", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["cdkDrag", "", "class", "code-block-unused", 4, "ngFor", "ngForOf"], [1, "tab", 3, "click"], ["cdkDrag", "", 1, "code-block-unused"], ["mat-raised-button", "", "id", "upload", 3, "click"], ["id", "file", "type", "file", "hidden", "", "accept", ".js", 3, "change"], ["id", "actual-code"], [1, "code"], ["class", "code", 3, "left", 4, "ngFor", "ngForOf"]], template: function BlockCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BlockCodeComponent_div_4_Template, 3, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BlockCodeComponent_div_6_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function BlockCodeComponent_Template_div_cdkDropListDropped_7_listener($event) { return ctx.onDrop($event); })("contextmenu", function BlockCodeComponent_Template_div_contextmenu_7_listener($event) { return ctx.onSelectBlockCode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BlockCodeComponent_mat_card_9_Template, 4, 13, "mat-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BlockCodeComponent_div_10_Template, 6, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-level", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("unitClickEvent", function BlockCodeComponent_Template_app_level_unitClickEvent_12_listener($event) { return ctx.addCodeToUnit($event); })("saveStateEvent", function BlockCodeComponent_Template_app_level_saveStateEvent_12_listener($event) { return ctx.saveState($event); })("gridDataEvent", function BlockCodeComponent_Template_app_level_gridDataEvent_12_listener($event) { return ctx.saveProgramData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockCodeComponent_Template_button_click_14_listener() { return ctx.exportCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockCodeComponent_Template_button_click_16_listener() { return ctx.runOrResetTest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, BlockCodeComponent_button_18_Template, 3, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockCodeComponent_Template_button_click_19_listener() { return ctx.goToHelpPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " help ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockCodeComponent_Template_button_click_21_listener() { return ctx.switchEditorMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, BlockCodeComponent_div_23_Template, 4, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.javascriptMode ? "90%" : "60%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.javascriptMode ? "5%" : "7%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.codeTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("scrollbar-width", ctx.javascriptMode ? "none" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.javascriptMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-visually-hidden", ctx.javascriptMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx.currentCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.javascriptMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("testMode", true)("programData", ctx.programData)("run", ctx.run)("unitCodeChange", ctx.unitCodeChange)("saveFormationsAndCode", ctx.saveFormationsAndCode)("giveGridData", ctx.giveGridData)("updateProgramData", ctx.updateProgramData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("run-test", !ctx.gameRun)("test-running", ctx.gameRun);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.gameRun ? "reset" : "run", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.javascriptMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.javascriptMode ? "go to blocks" : "go to js", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.javascriptMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_26__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _level_level_component__WEBPACK_IMPORTED_MODULE_27__["LevelComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_29__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIcon"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatOption"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_35__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_36__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_36__["NgModel"]], styles: ["#content-wrapper[_ngcontent-%COMP%]{\r\n\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n\r\n}\r\n\r\n#left-content[_ngcontent-%COMP%]{\r\n\r\n  margin-top: 50px;\r\n  flex-basis: 80%;\r\n  flex-grow: 4;\r\n  height: 100%;\r\n\r\n}\r\n\r\n#bottom-left-content[_ngcontent-%COMP%]{\r\n\r\n  height: 30%;\r\n  margin-top: 10px;\r\n\r\n}\r\n\r\n#top-left-content[_ngcontent-%COMP%]{\r\n\r\n  width: 100%;\r\n\r\n}\r\n\r\n#code-boundary[_ngcontent-%COMP%]{\r\n\r\n  background-color: #3A506B;\r\n  width: 95%;\r\n  height: 93%;\r\n  max-width: 900px;\r\n  border-radius: 2px;\r\n  margin: 0 auto;\r\n  overflow-y: scroll;\r\n  overflow-x: auto;\r\n  box-shadow: 2px 2px black;\r\n\r\n}\r\n\r\n#code-boundary[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n\r\n  display: none;\r\n\r\n}\r\n\r\n#card-list-boundary[_ngcontent-%COMP%]{\r\n\r\n  background-color: #3A506B;\r\n  width: 95%;\r\n  height: 90%;\r\n  border-radius: 2px;\r\n  margin: 0 auto;\r\n  box-shadow: 2px 2px black;\r\n\r\n}\r\n\r\n#right-content[_ngcontent-%COMP%]{\r\n\r\n  margin-top: 50px;\r\n  flex-basis: 20%;\r\n  flex-grow: 1;\r\n\r\n}\r\n\r\n.code-block-unused[_ngcontent-%COMP%]{\r\n  color: #2CDD3E;\r\n  font-family: codefont;\r\n  flex-grow: 1;\r\n  flex-shrink: 1;\r\n  flex-basis: 10%;\r\n  margin-left: 2px;\r\n}\r\n\r\n.end-code-block[_ngcontent-%COMP%]{\r\n\r\n  background-color: #10C6F9;\r\n\r\n}\r\n\r\n.conditional-code-block[_ngcontent-%COMP%]{\r\n\r\n  background-color: #7A3DB8;\r\n\r\n}\r\n\r\n.executable-block[_ngcontent-%COMP%]{\r\n\r\n  background-color: #EDF67D;\r\n\r\n}\r\n\r\n.code-block-used[_ngcontent-%COMP%]{\r\n  color: black;\r\n  font-family: codefont;\r\n  width: 250px;\r\n  position: relative;\r\n  margin: auto;\r\n}\r\n\r\n#card-list[_ngcontent-%COMP%]{\r\n  width: 95%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  position: relative;\r\n  margin: 0 auto;\r\n  top: 25%;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.tabs[_ngcontent-%COMP%]{\r\n\r\n  display: flex;\r\n  height: 20%;\r\n  margin: 0 auto;\r\n  width: 95%;\r\n  flex-direction: row;\r\n\r\n}\r\n\r\n#top-left-content[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{\r\n\r\n  height: 7%;\r\n\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]{\r\n\r\n  text-align: center;\r\n  color: #2CDD3E;\r\n  margin-right: 5px;\r\n  flex-basis: 10%;\r\n  border-radius: 2px;\r\n  height: 100%;\r\n\r\n}\r\n\r\n.tab-not-selected[_ngcontent-%COMP%]{\r\n\r\n  background-color: #1C2541;\r\n\r\n}\r\n\r\n.tab-selected[_ngcontent-%COMP%]{\r\n\r\n  background-color: #3A506B;\r\n\r\n}\r\n\r\n.tab[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n\r\n  font-family: codefont;\r\n  font-size: 12px;\r\n\r\n}\r\n\r\n#lower-tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n\r\n  position: relative;\r\n  top: 5px;\r\n\r\n}\r\n\r\n#current-code-list[_ngcontent-%COMP%]{\r\n  width: 75%;\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n\r\n#options[_ngcontent-%COMP%]{\r\n\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n\r\n}\r\n\r\n#options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n\r\n  font-family: codefont;\r\n  font-size: 15px;\r\n  margin-right: 5px;\r\n  flex-basis: 10%;\r\n  flex-grow: 1;\r\n  text-align: center;\r\n  margin-bottom: 5px;\r\n  padding: 2px;\r\n\r\n}\r\n\r\n#switch[_ngcontent-%COMP%]{\r\n\r\n  background-color: #3A506B;\r\n\r\n}\r\n\r\n#export[_ngcontent-%COMP%]{\r\n\r\n  background-color: #10C6F9;\r\n}\r\n\r\n#upload[_ngcontent-%COMP%]{\r\n\r\n  background-color: #7A3DB8;\r\n\r\n}\r\n\r\n#help[_ngcontent-%COMP%]{\r\n\r\n  background-color: orange;\r\n\r\n}\r\n\r\n.run-test[_ngcontent-%COMP%]{\r\n\r\n  background-color: #2cdd3e;\r\n  color: #038C1F;\r\n\r\n}\r\n\r\n.test-running[_ngcontent-%COMP%]{\r\n\r\n  background-color: red;\r\n  color: #A4000F;\r\n\r\n}\r\n\r\n#actual-code[_ngcontent-%COMP%]{\r\n  background-color: black;\r\n  width: 600px;\r\n  height: 200px;\r\n  font-size: 13px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.code[_ngcontent-%COMP%]{\r\n  color: #2CDD3E;\r\n  position: relative;\r\n  margin-bottom: 0;\r\n  font-family: codefont;\r\n}\r\n\r\n.and-or[_ngcontent-%COMP%]{\r\n\r\n  display: inline-block;\r\n  margin-top: 5px;\r\n  margin-bottom: 20px;\r\n\r\n}\r\n\r\n.and-or[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%]{\r\n  padding: 5px;\r\n}\r\n\r\n.conditional-options[_ngcontent-%COMP%]{\r\n\r\n  padding-bottom: 5px;\r\n  border-bottom: 1px solid #1c2541;\r\n\r\n}\r\n\r\n.add-condition[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n}\r\n\r\n.condition-label[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n\r\n.further-conditions[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  right: 40px;\r\n}\r\n\r\n.code-select[_ngcontent-%COMP%]{\r\n\r\n  border: 1px solid white;\r\n\r\n}\r\n\r\n#map[_ngcontent-%COMP%]{\r\n\r\n  overflow: scroll;\r\n\r\n}\r\n\r\n#user-js-code-console[_ngcontent-%COMP%]{\r\n\r\n  background-color: black;\r\n  font-size: 13px;\r\n  overflow-y: scroll;\r\n  overflow-x: auto;\r\n  width: 90%;\r\n  height: 90%;\r\n  margin: 25px auto;\r\n  position: relative;\r\n\r\n}\r\n\r\n#user-js-code[_ngcontent-%COMP%]{\r\n\r\n  font-family: codefont;\r\n  color: #2CDD3E;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9jay1jb2RlL2Jsb2NrLWNvZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7O0FBRWY7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTs7QUFFZDs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsZ0JBQWdCOztBQUVsQjs7QUFFQTs7RUFFRSxXQUFXOztBQUViOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCOztBQUUzQjs7QUFFQTs7RUFFRSxhQUFhOztBQUVmOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QseUJBQXlCOztBQUUzQjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSx5QkFBeUI7O0FBRTNCOztBQUVBOztFQUVFLHlCQUF5Qjs7QUFFM0I7O0FBRUE7O0VBRUUseUJBQXlCOztBQUUzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFFBQVE7RUFDUixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGFBQWE7RUFDYixXQUFXO0VBQ1gsY0FBYztFQUNkLFVBQVU7RUFDVixtQkFBbUI7O0FBRXJCOztBQUVBOztFQUVFLFVBQVU7O0FBRVo7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZOztBQUVkOztBQUVBOztFQUVFLHlCQUF5Qjs7QUFFM0I7O0FBRUE7O0VBRUUseUJBQXlCOztBQUUzQjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsZUFBZTs7QUFFakI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFFBQVE7O0FBRVY7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsMkJBQTJCOztBQUU3Qjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTs7QUFFZDs7QUFFQTs7RUFFRSx5QkFBeUI7O0FBRTNCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSx5QkFBeUI7O0FBRTNCOztBQUVBOztFQUVFLHdCQUF3Qjs7QUFFMUI7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLGNBQWM7O0FBRWhCOztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixjQUFjOztBQUVoQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBQ0E7O0VBRUUscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixtQkFBbUI7O0FBRXJCOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFLG1CQUFtQjtFQUNuQixnQ0FBZ0M7O0FBRWxDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsdUJBQXVCOztBQUV6Qjs7QUFFQTs7RUFFRSxnQkFBZ0I7O0FBRWxCOztBQUVBOztFQUVFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7O0FBRXBCOztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixjQUFjOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvY2stY29kZS9ibG9jay1jb2RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudC13cmFwcGVye1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbn1cclxuXHJcbiNsZWZ0LWNvbnRlbnR7XHJcblxyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgZmxleC1iYXNpczogODAlO1xyXG4gIGZsZXgtZ3JvdzogNDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG59XHJcblxyXG4jYm90dG9tLWxlZnQtY29udGVudHtcclxuXHJcbiAgaGVpZ2h0OiAzMCU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbn1cclxuXHJcbiN0b3AtbGVmdC1jb250ZW50e1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcbiNjb2RlLWJvdW5kYXJ5e1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1MDZCO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgaGVpZ2h0OiA5MyU7XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbiNjb2RlLWJvdW5kYXJ5Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcblxyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG59XHJcblxyXG4jY2FyZC1saXN0LWJvdW5kYXJ5e1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1MDZCO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggYmxhY2s7XHJcblxyXG59XHJcblxyXG4jcmlnaHQtY29udGVudHtcclxuXHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBmbGV4LWJhc2lzOiAyMCU7XHJcbiAgZmxleC1ncm93OiAxO1xyXG5cclxufVxyXG5cclxuLmNvZGUtYmxvY2stdW51c2Vke1xyXG4gIGNvbG9yOiAjMkNERDNFO1xyXG4gIGZvbnQtZmFtaWx5OiBjb2RlZm9udDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZmxleC1zaHJpbms6IDE7XHJcbiAgZmxleC1iYXNpczogMTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuXHJcbi5lbmQtY29kZS1ibG9ja3tcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwQzZGOTtcclxuXHJcbn1cclxuXHJcbi5jb25kaXRpb25hbC1jb2RlLWJsb2Nre1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0EzREI4O1xyXG5cclxufVxyXG5cclxuLmV4ZWN1dGFibGUtYmxvY2t7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFREY2N0Q7XHJcblxyXG59XHJcblxyXG4uY29kZS1ibG9jay11c2Vke1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogY29kZWZvbnQ7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbiNjYXJkLWxpc3R7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRvcDogMjUlO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnRhYnN7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDk1JTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxufVxyXG5cclxuI3RvcC1sZWZ0LWNvbnRlbnQgLnRhYnN7XHJcblxyXG4gIGhlaWdodDogNyU7XHJcblxyXG59XHJcblxyXG4udGFie1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMyQ0REM0U7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgZmxleC1iYXNpczogMTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG59XHJcblxyXG4udGFiLW5vdC1zZWxlY3RlZHtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFDMjU0MTtcclxuXHJcbn1cclxuXHJcbi50YWItc2VsZWN0ZWR7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUwNkI7XHJcblxyXG59XHJcblxyXG4udGFiIGgze1xyXG5cclxuICBmb250LWZhbWlseTogY29kZWZvbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxufVxyXG5cclxuI2xvd2VyLXRhYnMgLnRhYiBoM3tcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNXB4O1xyXG5cclxufVxyXG5cclxuI2N1cnJlbnQtY29kZS1saXN0e1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI29wdGlvbnN7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG5cclxufVxyXG5cclxuI29wdGlvbnMgYnV0dG9ue1xyXG5cclxuICBmb250LWZhbWlseTogY29kZWZvbnQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIGZsZXgtYmFzaXM6IDEwJTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBwYWRkaW5nOiAycHg7XHJcblxyXG59XHJcblxyXG4jc3dpdGNoe1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1MDZCO1xyXG5cclxufVxyXG5cclxuI2V4cG9ydHtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwQzZGOTtcclxufVxyXG5cclxuI3VwbG9hZHtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdBM0RCODtcclxuXHJcbn1cclxuXHJcbiNoZWxwe1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcblxyXG59XHJcblxyXG4ucnVuLXRlc3R7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyY2RkM2U7XHJcbiAgY29sb3I6ICMwMzhDMUY7XHJcblxyXG59XHJcblxyXG4udGVzdC1ydW5uaW5ne1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgY29sb3I6ICNBNDAwMEY7XHJcblxyXG59XHJcblxyXG4jYWN0dWFsLWNvZGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLmNvZGV7XHJcbiAgY29sb3I6ICMyQ0REM0U7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgZm9udC1mYW1pbHk6IGNvZGVmb250O1xyXG59XHJcbi5hbmQtb3J7XHJcblxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbn1cclxuLmFuZC1vciBtYXQtcmFkaW8tYnV0dG9ue1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmNvbmRpdGlvbmFsLW9wdGlvbnN7XHJcblxyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxYzI1NDE7XHJcblxyXG59XHJcblxyXG4uYWRkLWNvbmRpdGlvbntcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY29uZGl0aW9uLWxhYmVse1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZnVydGhlci1jb25kaXRpb25ze1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogNDBweDtcclxufVxyXG5cclxuLmNvZGUtc2VsZWN0e1xyXG5cclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbiNtYXB7XHJcblxyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcblxyXG59XHJcblxyXG4jdXNlci1qcy1jb2RlLWNvbnNvbGV7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIG1hcmdpbjogMjVweCBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbn1cclxuXHJcbiN1c2VyLWpzLWNvZGV7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBjb2RlZm9udDtcclxuICBjb2xvcjogIzJDREQzRTtcclxuXHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-block-code',
                templateUrl: './block-code.component.html',
                styleUrls: ['./block-code.component.css']
            }]
    }], function () { return [{ type: src_app_services_program_construction_code_service__WEBPACK_IMPORTED_MODULE_21__["CodeService"] }, { type: src_app_services_program_construction_block_service__WEBPACK_IMPORTED_MODULE_4__["BlockService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialog"] }, { type: _services_database_firestore_database_service__WEBPACK_IMPORTED_MODULE_23__["FirestoreDatabaseService"] }, { type: _services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_24__["AuthyLoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_25__["Router"] }]; }, null); })();


/***/ }),

/***/ "PFxY":
/*!******************************************************************!*\
  !*** ./src/app/models/blockCommands/actual-code/RealCodeRepr.ts ***!
  \******************************************************************/
/*! exports provided: RealCodeRepr, healthBelow30PercentFunc, enemyNearFunc, locationAvailableFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealCodeRepr", function() { return RealCodeRepr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "healthBelow30PercentFunc", function() { return healthBelow30PercentFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enemyNearFunc", function() { return enemyNearFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationAvailableFunc", function() { return locationAvailableFunc; });
class RealCodeRepr {
    // Why don't overloaded constructors exist ;-;
    constructor(block = null, lineOfCode = null) {
        this.indentationLevel = 0;
        if (block !== null && lineOfCode !== null) {
            throw new Error('Illegal use of this constructor');
        }
        else if (lineOfCode !== null) {
            this.code = lineOfCode;
        }
        else {
            this.code = block.getAsCode();
            this.indentationLevel = block.indentationLevel;
        }
    }
    static funcToRealCodeRepr(func) {
        let codeReprs = [];
        let lines = func.split('@');
        console.log(lines.length);
        for (let line of lines) {
            let count = line.split('^').length - 1;
            // @ts-ignore
            let codeRepr = new RealCodeRepr(null, line.replaceAll('^', ''));
            codeRepr.indentationLevel = count;
            codeReprs.push(codeRepr);
        }
        return codeReprs;
    }
}
//@ -> new line ^ -> tab (assuming we don't use @ or ^ in the actual code
const healthBelow30PercentFunc = 'function healthLessThan30Percent(you){@' +
    '^return ((you.health / you.maxHealth) * 100) < 30;' +
    '@' +
    '}';
const enemyNearFunc = 'function enemyInRange(grid, you){@' +
    '^for(let x = 0; x < grid.length; x++){@' +
    '^^for(let y = 0; y < grid[0].length; y++){@' +
    '^^^let other = grid[x][y];@' +
    '^^^if(!((you.location.x === x && you.location.y === y) || other === null || you.team === other.team)){@' +
    '^^^^if((x >= you.location.x - you.attackRange && x <= you.location.x + you.attackRange) &&@' +
    '^^^^^(y >= you.location.y - you.attackRange && y <= you.location.y + you.attackRange)){@' +
    '^^^^^^return true;@' +
    '^^^^^}@' +
    '^^^^}@' +
    '^^^}@' +
    '^^}@' +
    '^return false;@' +
    '}';
const locationAvailableFunc = 'function locationAvailable(grid, location){@' +
    '^return grid[location.x][location.y] === null && location.x >= 0 && location.x < grid.length && location.y >= 0 && location.y < grid[0].length;@' +
    '}';


/***/ }),

/***/ "PISR":
/*!*******************************************************!*\
  !*** ./src/app/services/login/authy-login.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthyLoginService, UserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthyLoginService", function() { return AuthyLoginService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return UserInfo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthyLoginService {
    constructor(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    checkSigninStatus() {
        if (AuthyLoginService.user == null) {
            var sessionData = sessionStorage.getItem(AuthyLoginService.SESSION_STORAGE_USER_ID);
            if (sessionData != null) {
                AuthyLoginService.user = JSON.parse(sessionData);
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    AuthLogin(route) {
        if (AuthyLoginService.user == null) {
            //check for session
            var sessionData = sessionStorage.getItem(AuthyLoginService.SESSION_STORAGE_USER_ID);
            if (sessionData != null) {
                AuthyLoginService.user = JSON.parse(sessionData);
                this.router.navigate([route]);
            }
            else {
                this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider())
                    .then((userCred) => {
                    AuthyLoginService.user = new UserInfo();
                    AuthyLoginService.user.uid = userCred.user.uid;
                    AuthyLoginService.user.authDisplayName = userCred.user.displayName;
                    sessionStorage.setItem(AuthyLoginService.SESSION_STORAGE_USER_ID, JSON.stringify(AuthyLoginService.user));
                    this.router.navigate([route]);
                    console.log("Logged in user " + AuthyLoginService.user.authDisplayName);
                }).catch(error => {
                    console.log("Could not login due to " + error);
                });
            }
        }
        else {
            this.router.navigate([route]);
        }
    }
    logout() {
        this.afAuth.signOut().then(() => {
            AuthyLoginService.user = null;
            sessionStorage.removeItem(AuthyLoginService.SESSION_STORAGE_USER_ID);
            console.log("User signout");
            this.router.navigate([""]);
        });
    }
    getUser() {
        return AuthyLoginService.user;
    }
}
AuthyLoginService.SESSION_STORAGE_USER_ID = "ScriptSAuthCred";
//See docs for user at https://firebase.google.com/docs/reference/js/firebase.User
AuthyLoginService.user = null;
AuthyLoginService.ɵfac = function AuthyLoginService_Factory(t) { return new (t || AuthyLoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthyLoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthyLoginService, factory: AuthyLoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthyLoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();
class UserInfo {
}


/***/ }),

/***/ "PS8/":
/*!***************************************************!*\
  !*** ./src/app/models/game/units/UnitReadOnly.ts ***!
  \***************************************************/
/*! exports provided: UnitReadOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitReadOnly", function() { return UnitReadOnly; });
class UnitReadOnly {
    constructor(unit) {
        /**
         * The Id number on the grid of the unit
         */
        this.id = -1;
        /**
         * The team that the unit belongs to
         */
        this.team = -1;
        /**
         * the location of the unit on the grid
         */
        this.location = { x: 0, y: 0 };
        this.maxHealth = 100;
        this.health = 100;
        this.defense = 10;
        this.strength = 20;
        this.attackRange = 1;
        this.id = unit.id;
        this.team = unit.team;
        this.location = unit.location;
        this.maxHealth = unit.maxHealth;
        this.health = unit.health;
        this.strength = unit.strength;
        this.attackRange = unit.attackRange;
    }
}


/***/ }),

/***/ "PuqQ":
/*!*****************************************************************************!*\
  !*** ./src/app/components/code-editor-guide/code-editor-guide.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CodeEditorGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeEditorGuideComponent", function() { return CodeEditorGuideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login/authy-login.service */ "PISR");





class CodeEditorGuideComponent {
    constructor(viewPortScroller, router, auth) {
        this.viewPortScroller = viewPortScroller;
        this.router = router;
        this.auth = auth;
    }
    ngOnInit() {
        if (!this.auth.checkSigninStatus()) {
            this.router.navigate(['']);
        }
    }
    scrollToSection(sectionName) {
        this.viewPortScroller.scrollToAnchor(sectionName);
    }
    goToDocs() {
        this.router.navigate(['docs']);
        window.scroll(0, 0);
    }
}
CodeEditorGuideComponent.ɵfac = function CodeEditorGuideComponent_Factory(t) { return new (t || CodeEditorGuideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_3__["AuthyLoginService"])); };
CodeEditorGuideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodeEditorGuideComponent, selectors: [["app-code-editor-guide"]], decls: 71, vars: 0, consts: [["id", "main-header"], ["id", "title"], ["id", "main-content"], ["id", "book-marks"], [3, "click"], ["id", "docs-content"], ["id", "editing-your-block-code"], ["src", "assets/guides/code-editor-guide/imgs/default%20blocks.PNG"], ["src", "assets/guides/code-editor-guide/imgs/action%20blocks.PNG"], ["id", "adding-conditional-logic-to-your-block-code"], ["src", "assets/guides/code-editor-guide/imgs/If.PNG"], ["src", "assets/guides/code-editor-guide/imgs/If%20in%20range%20attack.PNG"], ["id", "testing-your-block-code"], ["id", "editing-the-grid"], ["id", "using-javascript-mode"], [1, "link", 3, "click"], ["id", "saving-your-code-and-unit-formation"]], template: function CodeEditorGuideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Using Our Code Editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CodeEditorGuideComponent_Template_a_click_5_listener() { return ctx.scrollToSection("editing-your-block-code"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Editing Your Block Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CodeEditorGuideComponent_Template_a_click_8_listener() { return ctx.scrollToSection("adding-conditional-logic-to-your-block-code"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Adding Conditional Logic to Your Block Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CodeEditorGuideComponent_Template_a_click_11_listener() { return ctx.scrollToSection("testing-your-block-code"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Testing Your Block Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CodeEditorGuideComponent_Template_a_click_14_listener() { return ctx.scrollToSection("editing-the-grid"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Editing the Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CodeEditorGuideComponent_Template_a_click_17_listener() { return ctx.scrollToSection("using-javascript-mode"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Using Javascript Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CodeEditorGuideComponent_Template_a_click_20_listener() { return ctx.scrollToSection("saving-your-code-and-unit-formation"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Saving Your Code and Unit Formation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " The Scripting Siege code editor is where you\u2019ll be doing your coding and testing before entering the game. Getting comfortable with it is an important first step to beginning to learn and have fun with our platform. The editor is split into two different modes representing the two styles of coding we offer, Javascript programming and our pseudo programming language (block code). We will go over how to use each mode to produce functional game code and later test it within the editor. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Editing Your Block Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " First, let\u2019s begin by talking about how to use our pseudo programming language, block code. By default, the editor will be in block mode but you can press the \u201Cgo to js\u201D button to go to Javascript mode. Once you are in Javascript mode you can go back to block mode by pressing the \u201Cgo to blocks\u201D button that should appear where the \u201Cgo to js\u201D button was. On the left-hand side, you should see two blue blocks stacked on top of each other that say \u201CWhen turn\u201D, and \u201CEnd turn\u201D: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " As the text on those blocks suggests, they represent the start of your code (when your unit\u2019s turn begins) and the end of your code (when your unit\u2019s code ends). Below that panel, you will see another panel containing black blocks laid out like so: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " You can drag these blocks between the \u201CWhen turn\u201D and \u201CEnd turn\u201D blocks above to start giving your unit instructions. Note in each turn your unit is limited to performing a single action at a time. You must ensure that in your code your unit will only perform at most one action by the end of the turn. As the names of the tabs suggest, any block under the \u201CAction\u201D tab is considered an action for your unit to execute. Once you\u2019ve dragged a block onto your code, you will notice a trash can icon on it. Clicking it will remove the block from your code if you\u2019ve ever made a mistake. You will notice after placing your block the Javascript console on the lower right updates. This console shows you how your code would look like as actual Javascript code. This will be very useful to help you learn a little more about Javascript along the way and give you an idea of how to code units with real Javascript code. Also, note that you can click the numbered tabs above to work on multiple block code snippets at once. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Adding Conditional Logic to Your Block Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " You will notice in the lower panel with the unplaced blocks there\u2019s a tab titled \u201CConditional\u201D. These contain special blocks that allow you to create conditional logic (if this then do that, otherwise do this). When you place an if block you will notice it will render like this: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " From here, you can select the condition to check for during that turn, negate that condition (check that the condition is not true), or add more conditions with AND and OR logic. If you place a block below the if condition, you will notice that it is indented further right than the if block like so: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " This means that the block below the if block will be executed only if the condition in the if block is met. Once you\u2019re done adding code your unit will execute under the condition, you need to close the \u201Cif\u201D statement. In other words, you need to tell our block code interpreter that you\u2019re done adding code it will use if the condition is met. To do so you need to add either an \u201Cend if\u201D block, an \u201Celse if\u201D block, or an \u201Celse\u201D block. The \u201Celse if\u201D block is for if you want to add another condition to check if the first condition was not met. Then like the if block you can add code under that condition for if that condition is met. To close the \u201Celse if\u201D statement, you would add either another \u201Celse if\u201D block to check for more conditions, an \u201Cend else if\u201D block, or an \u201Celse\u201D block. An \u201Celse\u201D block is a block that can close an \u201Cif\u201D statement or an \u201Celse if\u201D statement. It\u2019s used when you want to add code to be executed if none of the \u201Cif\u201D or \u201Celse if\u201D conditions in your conditional logic are met. Otherwise, if you don\u2019t need \u201Celse\u201D logic, you can add an \u201Cend else if\u201D block to close your \u201Celse if\u201D statement. Similarly, if you want to close an \u201Cif\u201D statement without an \u201Celse if\u201D block or an \u201Celse\u201D block, you would use an \u201Cend if\u201D block. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Testing Your Block Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Once you\u2019re satisfied with the code you\u2019ve written and want to try it out, right-click your block code. This will first verify that your code is made properly. If there is an error in your code, you will be prompted to fix it with a hint as to where the mistake occurred. Once your code has been verified, you can click a unit on the grid to assign the code to. Note you can only assign code to units that are facing right. Once you added your code a number will appear on the tile the unit is on indicating the tab which contains its code. Then simply click on the run button to test out your code. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Editing the Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Our code editor also provides the option to add units to the grid and move them. To move your unit across the grid simply drag it to move it to where you want it to be. To add units on the grid, right-click the tile you want to add a unit on and you will see an option to units or delete units. Note you are limited to 6 of your own units on the grid at a time. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Using Javascript Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " If you feel comfortable coding your units in Javascript, then you can try using the Javascript mode of our code editor! To re-iterate, you can switch to Javascript mode by clicking the \u201Cgo to js\u201D button in the editor. Once there, your code tabs will turn into Javascript consoles. As of right now, you cannot type code into those consoles nor do we have plans to allow that. Instead, you can code Javascript code in the code environment of your choice and upload the code file. When you upload your code it will appear in the console of the currently opened tab. Like the block code editor, you right-click the console to select it and then click the unit to assign it to. Note: that we do not currently verify the Javascript code for usability in the game. There\u2019s no guarantee that your code will even work properly in the game if you made a mistake in it. To find out how to code for your units in Javascript refer to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CodeEditorGuideComponent_Template_a_click_60_listener() { return ctx.goToDocs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Saving Your Code and Unit Formation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Once you\u2019re satisfied with all the code you\u2019ve written and the placement of your units, you can save the code and formation using the save button. This will prompt you to give a name to refer to your work. Once you\u2019ve saved your code and formation, you can bring it to the game. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Conclusion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Now that you have hopefully learned how to use our code editor, you can start having fun and learn Javascript using our platform. Don\u2019t be discouraged if you\u2019re code doesn\u2019t work the way you want it to the first time, the goal here is for you to learn. Over time, you\u2019ll get figure out what strategies work and start understanding programming concepts along the way. Even once you\u2019ve learned the basics there\u2019s a lot of potential for you to practice more with our platform and create a more complex strategy. Happy coding! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#main-content[_ngcontent-%COMP%]{\r\n\r\n  background-color: #141C34;\r\n  color: white;\r\n  width: 1188px;\r\n  margin: 0 auto;\r\n  padding: 0 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n}\r\n\r\n#docs-content[_ngcontent-%COMP%]{\r\n\r\n  flex-grow: 3;\r\n  flex-basis: 85%;\r\n  padding-top: 54px;\r\n  overflow-x: auto;\r\n\r\n}\r\n\r\n#book-marks[_ngcontent-%COMP%]{\r\n\r\n  flex-grow: 1;\r\n  flex-basis: 15%;\r\n  padding: 54px 10px;\r\n  margin-right: 45px;\r\n  border-right: 1px solid white;\r\n\r\n}\r\n\r\n#book-marks[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n\r\n  font-size: 15px;\r\n\r\n}\r\n\r\n#book-marks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n\r\n  color: #2CDD3E;\r\n\r\n}\r\n\r\n.link[_ngcontent-%COMP%]{\r\n\r\n  text-decoration: none;\r\n  color: #A4000F;\r\n\r\n}\r\n\r\n.link[_ngcontent-%COMP%]:hover{\r\n\r\n  color: #2CDD3E;\r\n\r\n}\r\n\r\ncode[_ngcontent-%COMP%]{\r\n\r\n  color: #2CDD3E;\r\n  font-family: codefont;\r\n\r\n}\r\n\r\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  border: 1px solid white;\r\n  border-collapse: collapse;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]{\r\n\r\n  width: 500px;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\r\n\r\n  padding: 10px;\r\n\r\n}\r\n\r\nth[_ngcontent-%COMP%]{\r\n\r\n  text-align: center;\r\n\r\n}\r\n\r\n#main-header[_ngcontent-%COMP%]{\r\n\r\n  color: #2CDD3E;\r\n  margin: 100px auto 57px;\r\n  width: 1228px;\r\n\r\n}\r\n\r\n#title[_ngcontent-%COMP%]{\r\n\r\n  font-family: codefont;\r\n  font-size: 60px;\r\n\r\n}\r\n\r\n.page-ref[_ngcontent-%COMP%]{\r\n\r\n  text-decoration: none;\r\n  color: white;\r\n\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n\r\n  width: 100%;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb2NzL2RvY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7O0FBRWhDOztBQUVBOztFQUVFLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjs7QUFFbEI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDZCQUE2Qjs7QUFFL0I7O0FBRUE7O0VBRUUsZUFBZTs7QUFFakI7O0FBRUE7O0VBRUUsY0FBYzs7QUFFaEI7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLGNBQWM7O0FBRWhCOztBQUVBOztFQUVFLGNBQWM7O0FBRWhCOztBQUdBOztFQUVFLGNBQWM7RUFDZCxxQkFBcUI7O0FBRXZCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjs7QUFFckI7O0FBRUE7O0VBRUUsYUFBYTs7QUFFZjs7QUFFQTs7RUFFRSxrQkFBa0I7O0FBRXBCOztBQUVBOztFQUVFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsYUFBYTs7QUFFZjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsZUFBZTs7QUFFakI7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLFlBQVk7O0FBRWQ7O0FBRUE7O0VBRUUsV0FBVzs7QUFFYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jcy9kb2NzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1jb250ZW50e1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxQzM0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTE4OHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbn1cclxuXHJcbiNkb2NzLWNvbnRlbnR7XHJcblxyXG4gIGZsZXgtZ3JvdzogMztcclxuICBmbGV4LWJhc2lzOiA4NSU7XHJcbiAgcGFkZGluZy10b3A6IDU0cHg7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuXHJcbn1cclxuXHJcbiNib29rLW1hcmtze1xyXG5cclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZmxleC1iYXNpczogMTUlO1xyXG4gIHBhZGRpbmc6IDU0cHggMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XHJcblxyXG59XHJcblxyXG4jYm9vay1tYXJrcyBoM3tcclxuXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG5cclxufVxyXG5cclxuI2Jvb2stbWFya3MgYTpob3ZlcntcclxuXHJcbiAgY29sb3I6ICMyQ0REM0U7XHJcblxyXG59XHJcblxyXG4ubGlua3tcclxuXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjQTQwMDBGO1xyXG5cclxufVxyXG5cclxuLmxpbms6aG92ZXJ7XHJcblxyXG4gIGNvbG9yOiAjMkNERDNFO1xyXG5cclxufVxyXG5cclxuXHJcbmNvZGV7XHJcblxyXG4gIGNvbG9yOiAjMkNERDNFO1xyXG4gIGZvbnQtZmFtaWx5OiBjb2RlZm9udDtcclxuXHJcbn1cclxuXHJcbnRhYmxlLCB0aCwgdGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbnRhYmxle1xyXG5cclxuICB3aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxufVxyXG5cclxudGgsIHRke1xyXG5cclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxufVxyXG5cclxudGh7XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbiNtYWluLWhlYWRlcntcclxuXHJcbiAgY29sb3I6ICMyQ0REM0U7XHJcbiAgbWFyZ2luOiAxMDBweCBhdXRvIDU3cHg7XHJcbiAgd2lkdGg6IDEyMjhweDtcclxuXHJcbn1cclxuXHJcbiN0aXRsZXtcclxuXHJcbiAgZm9udC1mYW1pbHk6IGNvZGVmb250O1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuXHJcbn1cclxuXHJcbi5wYWdlLXJlZntcclxuXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbmltZ3tcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeEditorGuideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-code-editor-guide',
                templateUrl: './code-editor-guide.component.html',
                styleUrls: ['../docs/docs.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_3__["AuthyLoginService"] }]; }, null); })();


/***/ }),

/***/ "QFXJ":
/*!*************************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/predicate/NorthAvailable.ts ***!
  \*************************************************************************/
/*! exports provided: NorthAvailable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NorthAvailable", function() { return NorthAvailable; });
/* harmony import */ var _services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/game/grid-parser.service */ "qLgx");

class NorthAvailable {
    constructor() {
        this.conjunction = '';
        this.negate = false;
    }
    evaluation(grid, unit) {
        let north = { x: unit.location.x, y: unit.location.y - 1 };
        return _services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_0__["GridParserService"].isInBounds(north, grid)
            && !_services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_0__["GridParserService"].isUnitOccupied(north, grid);
    }
    getAsCode() {
        return NorthAvailable.asCode;
    }
    getId() {
        return NorthAvailable.id;
    }
    getLabel() {
        return NorthAvailable.label;
    }
}
NorthAvailable.id = btoa(NorthAvailable.name);
NorthAvailable.label = 'North Available';
NorthAvailable.asCode = 'locationAvailable(grid, {x: me.location.x, y: me.location.y - 1})';


/***/ }),

/***/ "RLPw":
/*!*****************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/conditional/Else.ts ***!
  \*****************************************************************/
/*! exports provided: Else */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Else", function() { return Else; });
/* harmony import */ var _terminal_EndElse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../terminal/EndElse */ "txq3");
/* harmony import */ var _predicate_EmptyPredicate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../predicate/EmptyPredicate */ "c5BP");


/**
 * ConditionalBlock representing an Else statement
 * See block-command.ts for specific documentation
 * on properties and methods
 */
class Else {
    constructor() {
        this.conditions = [new _predicate_EmptyPredicate__WEBPACK_IMPORTED_MODULE_1__["EmptyPredicate"]()];
        this.terminal_blocks = [_terminal_EndElse__WEBPACK_IMPORTED_MODULE_0__["EndElse"].label];
        this.terminate = null;
        this.condition = new _predicate_EmptyPredicate__WEBPACK_IMPORTED_MODULE_1__["EmptyPredicate"]();
    }
    getId() {
        return Else.id;
    }
    getLabel() {
        return Else.label;
    }
    getAsCode() {
        return Else.asCode;
    }
}
Else.id = btoa(Else.name);
Else.label = 'Else';
Else.asCode = '} else {';


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
/* harmony import */ var _services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/login/authy-login.service */ "PISR");
/* harmony import */ var _components_pageheader_pageheader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pageheader/pageheader.component */ "Lzm4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(auth) {
        this.auth = auth;
        this.title = 'googlesolutions';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_1__["AuthyLoginService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [[3, "loggedIn", "username"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pageheader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loggedIn", ctx.auth.checkSigninStatus())("username", ctx.auth.getUser() !== null ? ctx.auth.getUser().authDisplayName : "");
    } }, directives: [_components_pageheader_pageheader_component__WEBPACK_IMPORTED_MODULE_2__["PageheaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_1__["AuthyLoginService"] }]; }, null); })();


/***/ }),

/***/ "TA28":
/*!*****************************************************************!*\
  !*** ./src/app/components/signin-page/signin-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: SigninPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageComponent", function() { return SigninPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login/authy-login.service */ "PISR");



class SigninPageComponent {
    constructor(authyService) {
        this.authyService = authyService;
        //Page Path to go to after log in successful
        this.routeToAfterLogin = "/profile";
        if (this.authyService.checkSigninStatus()) {
            this.authyService.router.navigate([this.routeToAfterLogin]);
        }
    }
    loginUser() {
        this.authyService.AuthLogin(this.routeToAfterLogin);
    }
}
SigninPageComponent.ɵfac = function SigninPageComponent_Factory(t) { return new (t || SigninPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_1__["AuthyLoginService"])); };
SigninPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SigninPageComponent, selectors: [["app-signin-page"]], decls: 6, vars: 0, consts: [["id", "background"], ["id", "centerElement"], ["id", "buttonSign", "type", "image", "src", "assets/google/auth/btn_google_signin_light_normal_web@2x.png", 3, "click"]], template: function SigninPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Start Learning today with Scripting Siege");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninPageComponent_Template_input_click_5_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#background[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    overflow: auto;\r\n}\r\n\r\n#centerElement[_ngcontent-%COMP%] {\r\n    background-color: #1c2541;\r\n    margin: 5% auto auto auto;\r\n    width: 25%;\r\n    height: 50%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    display: inline-block;\r\n    text-align: center;\r\n    color: white;\r\n    font-family: Roboto;\r\n\r\n    width: 100%;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\n#buttonSign[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 20% auto auto auto;\r\n    width: 200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4tcGFnZS9zaWduaW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjs7SUFFbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbmluLXBhZ2Uvc2lnbmluLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jYmFja2dyb3VuZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuI2NlbnRlckVsZW1lbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMjU0MTtcclxuICAgIG1hcmdpbjogNSUgYXV0byBhdXRvIGF1dG87XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNidXR0b25TaWduIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAyMCUgYXV0byBhdXRvIGF1dG87XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signin-page',
                templateUrl: './signin-page.component.html',
                styleUrls: ['./signin-page.component.css']
            }]
    }], function () { return [{ type: src_app_services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_1__["AuthyLoginService"] }]; }, null); })();


/***/ }),

/***/ "TpX2":
/*!***********************************************************!*\
  !*** ./src/app/components/set-name/set-name.component.ts ***!
  \***********************************************************/
/*! exports provided: SetNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetNameComponent", function() { return SetNameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








class SetNameComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    cancel() {
        this.data.cancelled = true;
        this.dialogRef.close();
    }
    enter() {
        if (this.data.name !== '') {
            this.dialogRef.close();
        }
    }
}
SetNameComponent.ɵfac = function SetNameComponent_Factory(t) { return new (t || SetNameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
SetNameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SetNameComponent, selectors: [["app-set-name"]], decls: 8, vars: 1, consts: [["id", "cancel", 3, "click"], ["appearance", "fill", "id", "field", 3, "keydown.enter"], ["matInput", "", 3, "ngModel", "ngModelChange"]], template: function SetNameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetNameComponent_Template_mat_icon_click_0_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enter a name to save this formation and code under:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function SetNameComponent_Template_mat_form_field_keydown_enter_4_listener() { return ctx.enter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SetNameComponent_Template_input_ngModelChange_7_listener($event) { return ctx.data.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.name);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["h3[_ngcontent-%COMP%]{\r\n\r\n  font-family: codefont;\r\n  margin-top: 30px;\r\n\r\n}\r\n\r\n#field[_ngcontent-%COMP%]{\r\n\r\n  display: block;\r\n  margin: 0 auto;\r\n\r\n}\r\n\r\n#cancel[_ngcontent-%COMP%]{\r\n\r\n  float: left;\r\n  position: relative;\r\n  bottom: 15px;\r\n  right: 15px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXQtbmFtZS9zZXQtbmFtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHFCQUFxQjtFQUNyQixnQkFBZ0I7O0FBRWxCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxjQUFjOztBQUVoQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXOztBQUViIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZXQtbmFtZS9zZXQtbmFtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBjb2RlZm9udDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5cclxufVxyXG5cclxuI2ZpZWxke1xyXG5cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbn1cclxuXHJcbiNjYW5jZWx7XHJcblxyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDE1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcblxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetNameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-set-name',
                templateUrl: './set-name.component.html',
                styleUrls: ['./set-name.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Us7Y":
/*!*****************************************************************!*\
  !*** ./src/app/components/levelselect/levelselect.component.ts ***!
  \*****************************************************************/
/*! exports provided: LevelselectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelselectComponent", function() { return LevelselectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _prog_select_dialog_prog_select_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prog-select-dialog/prog-select-dialog.component */ "z5jU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_database_firestore_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/database/firestore-database.service */ "ilXD");
/* harmony import */ var src_app_services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login/authy-login.service */ "PISR");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function LevelselectComponent_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Level Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LevelselectComponent_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tutorial Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LevelselectComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading Level Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LevelselectComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "We encountered a problem, please try again");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "highlightElement": a0 }; };
function LevelselectComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LevelselectComponent_div_6_div_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const d_r6 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.goToLevel(d_r6.dbid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, d_r6.completed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r6.id);
} }
function LevelselectComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LevelselectComponent_div_6_div_1_Template, 4, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.ldata);
} }
class LevelselectComponent {
    constructor(router, db, auth, dialog) {
        this.router = router;
        this.db = db;
        this.auth = auth;
        this.dialog = dialog;
        this.levelSelect = true;
        this.loadingData = true;
        this.noData = false;
        this.ownedProgs = [];
        this.ldata = [];
        if (!auth.checkSigninStatus()) {
            router.navigate(['signin']);
        }
        var self = this;
        if (router.url === '/tutorials') {
            this.levelSelect = false;
        }
        else {
            this.levelSelect = true;
        }
        db.getAllLevels(function (result) {
            for (let doc of result.docs) {
                if (router.url === '/tutorials') {
                    if (doc.exists && doc.id.length > 2 && doc.id.indexOf("99") == 0) {
                        self.ldata.push({ id: "Tutorial: " + doc.id.substring(2, doc.id.length), completed: false, dbid: doc.id });
                    }
                }
                else {
                    if (doc.exists && doc.id.indexOf("99") != 0) {
                        self.ldata.push({ id: "Level: " + doc.id, completed: false, dbid: doc.id });
                    }
                }
            }
            db.getUserData(auth.getUser().uid, function (result) {
                if (result == null) {
                    router.navigate(['profile']);
                }
                for (let l of result.CompletedLevels) {
                    for (let d of self.ldata) {
                        console.log("checking " + d.id);
                        if (self.levelSelect) {
                            if (d.id.substring(7, d.id.length) == l) {
                                d.completed = true;
                            }
                        }
                        else {
                            if (("99" + d.id.substring(10, d.id.length)) == l) {
                                d.completed = true;
                            }
                        }
                    }
                }
                for (let p of result.Programs) {
                    self.db.getProgramData(p.toString(), function (result) {
                        self.ownedProgs.push({ id: p.toString(), prog: result });
                    });
                }
                self.loadingData = false;
                if (self.ldata.length <= 0) {
                    self.noData = true;
                }
            });
        });
    }
    goToLevel(i) {
        //open dialog for program select
        const dialogRef = this.dialog.open(_prog_select_dialog_prog_select_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ProgSelectDialogComponent"], { data: this.ownedProgs, panelClass: 'defaultDialog' });
        dialogRef.afterClosed().subscribe(result => {
            if (result != undefined) {
                //had returned a value
                this.router.navigate(["play"], {
                    queryParams: {
                        l: i,
                        p: result
                    }
                });
            }
        });
    }
}
LevelselectComponent.ɵfac = function LevelselectComponent_Factory(t) { return new (t || LevelselectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_database_firestore_database_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreDatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_4__["AuthyLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
LevelselectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LevelselectComponent, selectors: [["app-levelselect"]], hostAttrs: [1, "fullpage"], decls: 7, vars: 5, consts: [["id", "backgroundComponent"], ["id", "containerElement"], [4, "ngIf"], ["id", "LoadingDiv", 4, "ngIf"], ["class", "colparent", 4, "ngIf"], ["id", "LoadingDiv"], [1, "colparent"], ["class", "levelObject", 4, "ngFor", "ngForOf"], [1, "levelObject"], ["src", "assets/maps/test map.png", "alt", "Image not found", 3, "ngClass"], ["mat-button", "", 3, "click"]], template: function LevelselectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LevelselectComponent_h1_2_Template, 2, 0, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LevelselectComponent_h1_3_Template, 2, 0, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LevelselectComponent_div_4_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LevelselectComponent_div_5_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LevelselectComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.levelSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.levelSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadingData && ctx.noData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadingData && !ctx.noData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: ["#backgroundComponent[_ngcontent-%COMP%] {\r\n    background-color: #0b132b;\r\n    min-height: 100%;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    padding-top: 30px;\r\n    padding-bottom: 100px;\r\n}\r\n\r\n#containerElement[_ngcontent-%COMP%] {\r\n    margin: auto auto auto auto;\r\n    width: 80%;\r\n}\r\n\r\n#LoadingDiv[_ngcontent-%COMP%] {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: auto auto auto auto;\r\n}\r\n\r\n#LoadingDiv[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    margin: 50px auto auto auto;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    color: #2cdd3e;\r\n    font-weight: 800;\r\n    font-family: Roboto;\r\n    font-size: 30px;\r\n    margin-top: 30px;\r\n    text-align: center;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    color: #2cdd3e;\r\n    font-weight: 800;\r\n    font-family: Roboto;\r\n    font-size: 30px;\r\n    margin-top: 10px!important;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n    width: 200px;\r\n}\r\n\r\n.levelObject[_ngcontent-%COMP%] {\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    width: 33.333%;\r\n    display: inline-block;\r\n}\r\n\r\n.levelObject[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]{\r\n    margin: 50px auto auto auto;\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\n.highlightElement[_ngcontent-%COMP%] {\r\n    \r\n    opacity: 0.4;\r\n    filter: alpha(opacity=40);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZXZlbHNlbGVjdC9sZXZlbHNlbGVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJOzswQkFFc0I7SUFDdEIsWUFBWTtJQUNaLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGV2ZWxzZWxlY3QvbGV2ZWxzZWxlY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jYmFja2dyb3VuZENvbXBvbmVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIxMzJiO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuI2NvbnRhaW5lckVsZW1lbnQge1xyXG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuI0xvYWRpbmdEaXYge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG59XHJcblxyXG4jTG9hZGluZ0RpdiA+ICoge1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG8gYXV0byBhdXRvO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBjb2xvcjogIzJjZGQzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjMmNkZDNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5sZXZlbE9iamVjdCB7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgd2lkdGg6IDMzLjMzMyU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5sZXZlbE9iamVjdCA+ICp7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0byBhdXRvIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhpZ2hsaWdodEVsZW1lbnQge1xyXG4gICAgLyogYm9yZGVyLWNvbG9yOiAjMmNkZDNlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkOyAqL1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LevelselectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-levelselect',
                templateUrl: './levelselect.component.html',
                styleUrls: ['./levelselect.component.css'],
                host: {
                    class: 'fullpage'
                }
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_database_firestore_database_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreDatabaseService"] }, { type: src_app_services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_4__["AuthyLoginService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "Y2Iu":
/*!*********************************************!*\
  !*** ./src/app/services/SpriteConstants.ts ***!
  \*********************************************/
/*! exports provided: SpriteConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteConstants", function() { return SpriteConstants; });
class SpriteConstants {
}
SpriteConstants.archer = 'Archer';
SpriteConstants.swordsmen = 'Swordsman';
SpriteConstants.testMap = 'testMap';
SpriteConstants.tower = 'Tower';
SpriteConstants.spriteSize = 40;


/***/ }),

/***/ "YZHe":
/*!****************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/executable/West.ts ***!
  \****************************************************************/
/*! exports provided: West */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "West", function() { return West; });
/* harmony import */ var src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/game/GameAction */ "IiXB");
/* harmony import */ var _Wait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wait */ "lo65");
/* harmony import */ var _services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/game/grid-parser.service */ "qLgx");



/**
 * Executable representing a backward movement
 * See block-command.ts for specific documentation
 * on properties and methods
 */
class West {
    constructor() { }
    execute(grid, unit) {
        let newLocation = { x: unit.location.x - 1, y: unit.location.y };
        if (_services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_2__["GridParserService"].isInBounds(newLocation, grid) && !_services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_2__["GridParserService"].isUnitOccupied(newLocation, grid)) {
            grid[unit.location.x][unit.location.y] = null;
            unit.location = newLocation;
            unit.doWalkAnimation();
            return new src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_0__["GameAction"](West.name, unit, null, false);
        }
        else {
            return new src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_0__["GameAction"](_Wait__WEBPACK_IMPORTED_MODULE_1__["Wait"].name, unit, null, false);
        }
    }
    getId() {
        return West.id;
    }
    getLabel() {
        return West.label;
    }
    getAsCode() {
        return West.asCode;
    }
}
West.label = 'Go west';
West.id = btoa(West.name);
West.asCode = 'this.postMessage({result: \'West\'});';


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _components_block_code_block_code_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/block-code/block-code.component */ "OoWN");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/error/error.component */ "7AdY");
/* harmony import */ var _components_signin_page_signin_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/signin-page/signin-page.component */ "TA28");
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/test/test.component */ "ar80");
/* harmony import */ var _components_level_level_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/level/level.component */ "H3xd");
/* harmony import */ var _components_pageheader_pageheader_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/pageheader/pageheader.component */ "Lzm4");
/* harmony import */ var _components_profilepages_profilepages_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/profilepages/profilepages.component */ "bBaE");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _components_docs_docs_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/docs/docs.component */ "1hNk");
/* harmony import */ var _components_levelselect_levelselect_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/levelselect/levelselect.component */ "Us7Y");
/* harmony import */ var _components_set_name_set_name_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/set-name/set-name.component */ "TpX2");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _components_levelplay_levelplay_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/levelplay/levelplay.component */ "LAVv");
/* harmony import */ var _components_info_info_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/info/info.component */ "/nkg");
/* harmony import */ var _components_prog_select_dialog_prog_select_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/prog-select-dialog/prog-select-dialog.component */ "z5jU");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_javascript_guide_javascript_guide_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/javascript-guide/javascript-guide.component */ "zO2K");
/* harmony import */ var _components_code_editor_guide_code_editor_guide_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/code-editor-guide/code-editor-guide.component */ "PuqQ");





























//import { NewUserPageComponent } from './components/new-user-page/new-user-page.component';












const firebaseConfig = {
    apiKey: "AIzaSyB25gxYu7PkMvnjKhisCzPP62grU_OEMLU",
    authDomain: "solutions2021-efce9.firebaseapp.com",
    projectId: "solutions2021-efce9",
    storageBucket: "solutions2021-efce9.appspot.com",
    messagingSenderId: "1033043841752",
    appId: "1:1033043841752:web:d1f78f6778f22f4d423dad"
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            //firebase
            _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__["AngularFireStorageModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_block_code_block_code_component__WEBPACK_IMPORTED_MODULE_21__["BlockCodeComponent"],
        _components_error_error_component__WEBPACK_IMPORTED_MODULE_22__["ErrorComponent"],
        _components_signin_page_signin_page_component__WEBPACK_IMPORTED_MODULE_23__["SigninPageComponent"],
        _components_test_test_component__WEBPACK_IMPORTED_MODULE_24__["TestComponent"],
        _components_level_level_component__WEBPACK_IMPORTED_MODULE_25__["LevelComponent"],
        _components_pageheader_pageheader_component__WEBPACK_IMPORTED_MODULE_26__["PageheaderComponent"],
        _components_profilepages_profilepages_component__WEBPACK_IMPORTED_MODULE_27__["ProfilepagesComponent"],
        _components_docs_docs_component__WEBPACK_IMPORTED_MODULE_29__["DocsComponent"],
        _components_levelselect_levelselect_component__WEBPACK_IMPORTED_MODULE_30__["LevelselectComponent"],
        _components_set_name_set_name_component__WEBPACK_IMPORTED_MODULE_31__["SetNameComponent"],
        _components_levelplay_levelplay_component__WEBPACK_IMPORTED_MODULE_33__["LevelplayComponent"],
        _components_info_info_component__WEBPACK_IMPORTED_MODULE_34__["InfoComponent"],
        _components_prog_select_dialog_prog_select_dialog_component__WEBPACK_IMPORTED_MODULE_35__["ProgSelectDialogComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_36__["HomeComponent"],
        _components_javascript_guide_javascript_guide_component__WEBPACK_IMPORTED_MODULE_37__["JavascriptGuideComponent"],
        _components_code_editor_guide_code_editor_guide_component__WEBPACK_IMPORTED_MODULE_38__["CodeEditorGuideComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestoreModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__["AngularFireStorageModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_block_code_block_code_component__WEBPACK_IMPORTED_MODULE_21__["BlockCodeComponent"],
                    _components_error_error_component__WEBPACK_IMPORTED_MODULE_22__["ErrorComponent"],
                    _components_signin_page_signin_page_component__WEBPACK_IMPORTED_MODULE_23__["SigninPageComponent"],
                    _components_test_test_component__WEBPACK_IMPORTED_MODULE_24__["TestComponent"],
                    _components_level_level_component__WEBPACK_IMPORTED_MODULE_25__["LevelComponent"],
                    _components_pageheader_pageheader_component__WEBPACK_IMPORTED_MODULE_26__["PageheaderComponent"],
                    _components_profilepages_profilepages_component__WEBPACK_IMPORTED_MODULE_27__["ProfilepagesComponent"],
                    _components_docs_docs_component__WEBPACK_IMPORTED_MODULE_29__["DocsComponent"],
                    _components_levelselect_levelselect_component__WEBPACK_IMPORTED_MODULE_30__["LevelselectComponent"],
                    _components_set_name_set_name_component__WEBPACK_IMPORTED_MODULE_31__["SetNameComponent"],
                    _components_levelplay_levelplay_component__WEBPACK_IMPORTED_MODULE_33__["LevelplayComponent"],
                    _components_info_info_component__WEBPACK_IMPORTED_MODULE_34__["InfoComponent"],
                    _components_prog_select_dialog_prog_select_dialog_component__WEBPACK_IMPORTED_MODULE_35__["ProgSelectDialogComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_36__["HomeComponent"],
                    _components_javascript_guide_javascript_guide_component__WEBPACK_IMPORTED_MODULE_37__["JavascriptGuideComponent"],
                    _components_code_editor_guide_code_editor_guide_component__WEBPACK_IMPORTED_MODULE_38__["CodeEditorGuideComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    //firebase
                    _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(firebaseConfig),
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestoreModule"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"],
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__["AngularFireStorageModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aon7":
/*!*********************************************!*\
  !*** ./src/app/models/game/units/Archer.ts ***!
  \*********************************************/
/*! exports provided: Archer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Archer", function() { return Archer; });
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "+v1C");

class Archer extends _Unit__WEBPACK_IMPORTED_MODULE_0__["Unit"] {
    constructor() {
        super();
        this.id = -1;
        this.maxHealth = 100;
        this.health = 100;
        this.defense = 5;
        this.strength = 15;
        this.attackRange = 4;
        this.walk_frames = [12, 19];
        this.attack_frames = [24, 35];
    }
}
Archer.dbid = btoa(Archer.name);


/***/ }),

/***/ "ar80":
/*!***************************************************!*\
  !*** ./src/app/components/test/test.component.ts ***!
  \***************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_database_firestore_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/database/firestore-database.service */ "ilXD");
/* harmony import */ var src_app_services_program_construction_code_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/program-construction/code.service */ "7zeS");
/* harmony import */ var src_app_services_game_gameloop_game_loop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/game/gameloop/game-loop.service */ "pv0v");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TestComponent_table_0_tr_1_td_1_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Id: ", col_r7.id, " Team: ", col_r7.team, "");
} }
function TestComponent_table_0_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TestComponent_table_0_tr_1_td_1_p_1_Template, 2, 2, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r7);
} }
function TestComponent_table_0_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TestComponent_table_0_tr_1_td_1_Template, 2, 1, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r4);
} }
function TestComponent_table_0_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Last Action: ", ctx_r2.lastAction.actionId, "");
} }
function TestComponent_table_0_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Action: None");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TestComponent_table_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TestComponent_table_0_tr_1_Template, 2, 1, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TestComponent_table_0_p_3_Template, 2, 1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TestComponent_table_0_p_4_Template, 2, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestComponent_table_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.stepGameButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Step Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.map);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.lastAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.lastAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.loading);
} }
class TestComponent {
    constructor(db, cds, loopservice) {
        // db.getProgramData("1", function(data) {
        //   console.log(data.Units[0].TroopType);
        // });
        //
        // var state = new If();
        // state.condition = new FalsePredicate();
        this.db = db;
        this.cds = cds;
        this.loopservice = loopservice;
        this.loading = "loading";
        // var state2 = new ElseIf();
        // state2.condition = new FalsePredicate();
        // var cb = cds.serializeBlocks([state, new TextAction1(), state2, new TextAction1(), state2, new TextAction1(), new Else(), new TextAction2(), new EndElse()]);
        // db.setProgramData("2", {Name: "Hello", Verified: true,
        //     Units: [{TroopType:1, CodeBlocks: cb, location: {x:1,y:1}, CodeType: CodeType.BLOCK,
        //           CodeFile: null}]});
        //
        // db.setProgramData("993", {Name: "Level3", Verified: true,
        //   Units: [
        //             // {
        //             //   TroopType:Archer.dbid, 
        //             //   CodeBlocks: null, 
        //             //   location: {x:14,y:7}, 
        //             //   CodeType: CodeType.FILE, 
        //             //   CodeFile: {storageRef: "code/EnemyArcher.js", filename: "EnemyArcher.js"} 
        //             // },
        //             // {
        //             //   TroopType:Archer.dbid, 
        //             //   CodeBlocks: null, 
        //             //   location: {x:14,y:10}, 
        //             //   CodeType: CodeType.FILE, 
        //             //   CodeFile: {storageRef: "code/EnemyArcher.js", filename: "EnemyArcher.js"} 
        //             // },
        //             // {
        //             //   TroopType:Archer.dbid, 
        //             //   CodeBlocks: null, 
        //             //   location: {x:14,y:11}, 
        //             //   CodeType: CodeType.FILE, 
        //             //   CodeFile: {storageRef: "code/EnemyArcher.js", filename: "EnemyArcher.js"} 
        //             // },
        // db.setProgramData("993", {Name: "TestSetup", Verified: true,
        //   Units: [
        //             {
        //               TroopType:Swordsman.dbid, 
        //               CodeBlocks: null, 
        //               location: {x:11,y:7}, 
        //               CodeType: CodeType.FILE, 
        //               CodeFile: {storageRef: "code/EnemySwordsmen.js", filename: "EnemySwordsmen.js"} 
        //             },
        //             {
        //               TroopType:Swordsman.dbid, 
        //               CodeBlocks: null, 
        //               location: {x:12,y:8}, 
        //               CodeType: CodeType.FILE, 
        //               CodeFile: {storageRef: "code/EnemySwordsmen.js", filename: "EnemySwordsmen.js"} 
        //             },
        //             {
        //               TroopType:Swordsman.dbid, 
        //               CodeBlocks: null, 
        //               location: {x:12,y:6}, 
        //               CodeType: CodeType.FILE, 
        //               CodeFile: {storageRef: "code/EnemySwordsmen.js", filename: "EnemySwordsmen.js"} 
        //             },
        //             {
        //               TroopType:Swordsman.dbid, 
        //               CodeBlocks: null, 
        //               location: {x:13,y:5}, 
        //               CodeType: CodeType.FILE, 
        //               CodeFile: {storageRef: "code/EnemySwordsmen.js", filename: "EnemySwordsmen.js"} 
        //             },
        //             {
        //               TroopType:Swordsman.dbid, 
        //               CodeBlocks: null, 
        //               location: {x:13,y:7}, 
        //               CodeType: CodeType.FILE, 
        //               CodeFile: {storageRef: "code/EnemySwordsmen.js", filename: "EnemySwordsmen.js"} 
        //             },
        //             {
        //               TroopType:Swordsman.dbid, 
        //               CodeBlocks: null, 
        //               location: {x:13,y:9}, 
        //               CodeType: CodeType.FILE, 
        //               CodeFile: {storageRef: "code/EnemySwordsmen.js", filename: "EnemySwordsmen.js"} 
        //             },
        //             {
        //               TroopType:Tower.dbid, 
        //               CodeBlocks: null, 
        //               location: {x:14,y:4}, 
        //               CodeType: CodeType.FILE, 
        //               CodeFile: {storageRef: "code/EnemyTower.js", filename: "EnemyTower.js"} 
        //             },
        //             {
        //               TroopType:Tower.dbid, 
        //               CodeBlocks: null, 
        //               location: {x:14,y:7}, 
        //               CodeType: CodeType.FILE, 
        //               CodeFile: {storageRef: "code/EnemyTower.js", filename: "EnemyTower.js"} 
        //             },
        //             {
        //               TroopType:Tower.dbid, 
        //               CodeBlocks: null, 
        //               location: {x:14,y:10}, 
        //               CodeType: CodeType.FILE, 
        //               CodeFile: {storageRef: "code/EnemyTower.js", filename: "EnemyTower.js"} 
        //             },
        //           ]}
        // );
        // var self = this;
        // db.getProgramData("1", function (data) {
        //   //run the game
        //   loopservice.loadTestData(data).then(result => {
        //     if (loopservice.prepLoop()) {
        //       self.map = self.loopservice.grid;
        //       this.loading = "done";
        //     }
        //   });
        // });
    }
    stepGameButton() {
        this.loading = "loading";
        var prom = this.loopservice.stepGame();
        prom.then(result => {
            this.lastAction = result;
            this.loading = "done";
        });
        prom.catch(result => {
            this.loading = "error last action!";
        });
    }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_database_firestore_database_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreDatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_program_construction_code_service__WEBPACK_IMPORTED_MODULE_2__["CodeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_game_gameloop_game_loop_service__WEBPACK_IMPORTED_MODULE_3__["GameLoopServiceService"])); };
TestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], decls: 1, vars: 1, consts: [["class", "table", 4, "ngIf"], [1, "table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "click"]], template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TestComponent_table_0_Template, 9, 4, "table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.map);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdC90ZXN0LmNvbXBvbmVudC5jc3MifQ== */", "td[_ngcontent-%COMP%] {\n      border-style: solid;\n      border-width: 3px;\n      min-width: 50px;\n      min-height: 50px;\n    }\n    tr[_ngcontent-%COMP%]{\n      min-height: 50px;\n      height: 25px;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test',
                templateUrl: './test.component.html',
                styleUrls: ['./test.component.css']
            }]
    }], function () { return [{ type: src_app_services_database_firestore_database_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreDatabaseService"] }, { type: src_app_services_program_construction_code_service__WEBPACK_IMPORTED_MODULE_2__["CodeService"] }, { type: src_app_services_game_gameloop_game_loop_service__WEBPACK_IMPORTED_MODULE_3__["GameLoopServiceService"] }]; }, null); })();


/***/ }),

/***/ "aww8":
/*!***************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/terminal/Endif.ts ***!
  \***************************************************************/
/*! exports provided: EndIf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndIf", function() { return EndIf; });
/**
 * TerminalBlock representing the end of an If block
 * See block-command.ts for specific documentation
 * on properties and methods
 */
class EndIf {
    constructor() {
        this.terminate = null;
    }
    getId() {
        return EndIf.id;
    }
    getLabel() {
        return EndIf.label;
    }
    getAsCode() {
        return '}';
    }
}
EndIf.label = 'End if';
EndIf.id = btoa(EndIf.name);


/***/ }),

/***/ "bBaE":
/*!*******************************************************************!*\
  !*** ./src/app/components/profilepages/profilepages.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfilepagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilepagesComponent", function() { return ProfilepagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/database/DatabaseData */ "jJWq");
/* harmony import */ var src_app_services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login/authy-login.service */ "PISR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_database_firestore_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/database/firestore-database.service */ "ilXD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ProfilepagesComponent_ul_17_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfilepagesComponent_ul_17_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.changeSelected(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r3.Name);
} }
function ProfilepagesComponent_ul_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfilepagesComponent_ul_17_li_1_Template, 2, 1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.codes);
} }
function ProfilepagesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Programs Avaliable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfilepagesComponent {
    constructor(Auth, router, db) {
        this.Auth = Auth;
        this.router = router;
        this.db = db;
        this.username = "User";
        this.levelStatus = "Level: 9000+";
        this.profileDescription = "I am a user";
        this.codes = [];
        this.selected = -1;
        var self = this;
        if (!Auth.checkSigninStatus()) {
            router.navigate(['/signin']);
        }
        else {
            db.getUserData(Auth.getUser().uid, function (result) {
                var usd;
                if (result == null) {
                    usd = new src_app_models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_1__["UserData"]();
                    usd.CompletedLevels = [];
                    usd.Description = "I am a user";
                    usd.Level = 1;
                    usd.Programs = [];
                    usd.Username = Auth.getUser().authDisplayName;
                    self.db.setUserData(Auth.getUser().uid, usd).catch((reason) => {
                        console.log("database write failed due to " + reason);
                    });
                }
                else {
                    usd = result;
                }
                self.username = usd.Username;
                self.levelStatus = "Level: " + usd.Level.toString();
                self.profileDescription = usd.Description;
                for (var x = 0; x < usd.Programs.length; x++) {
                    db.getProgramData(usd.Programs[x].toString(), function (result) {
                        self.codes.push(result);
                    });
                }
            });
        }
    }
    changeSelected(x) {
        this.selected = x;
    }
}
ProfilepagesComponent.ɵfac = function ProfilepagesComponent_Factory(t) { return new (t || ProfilepagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_2__["AuthyLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_database_firestore_database_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreDatabaseService"])); };
ProfilepagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilepagesComponent, selectors: [["app-profilepages"]], decls: 19, vars: 5, consts: [["id", "backgrounddiv"], [1, "row"], [1, "SideCol"], ["id", "DescriptionBox"], ["src", "./assets/stockimages/pexels-mood-valley-4399983.jpg", "alt", "avatar", 1, "avatar"], [1, "verticalRow"], [1, "verticalRowElement"], ["id", "ProgramLabel"], ["id", "CodeArea"], ["id", "CodeSelection"], [4, "ngIf"], ["mat-button", "", "class", "ProgramButton", 3, "click", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "ProgramButton", 3, "click"], ["mat-button", "", 1, "ProgramButton"]], template: function ProfilepagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Programs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfilepagesComponent_ul_17_Template, 2, 1, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfilepagesComponent_div_18_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.levelStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profileDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.codes.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.codes.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["#backgrounddiv[_ngcontent-%COMP%] {\r\n    background-color: #0b132b;\r\n    margin-top: 0px;\r\n    overflow: auto;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    color: #2cdd3e;\r\n    font-size: 40px;\r\n    font-weight: 500;\r\n    font-family: Roboto;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    color: #2cdd3e;\r\n    font-size: 25px;\r\n    font-weight: 300;\r\n    font-family: Roboto;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n    margin: 100px auto 50px auto;\r\n    width: 80%;\r\n    display: flex\r\n}\r\n\r\n.verticalRow[_ngcontent-%COMP%] {\r\n    margin: 100px auto 50px auto;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    width: 80%;\r\n}\r\n\r\n.SideCol[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    display: inline-block;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n}\r\n\r\n.verticalRowElement[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 0 auto 0 auto;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    height: 300px;\r\n    border-radius: 50%;\r\n}\r\n\r\n#DescriptionBox[_ngcontent-%COMP%] {\r\n    background-color: #1c2541;\r\n\r\n    height: 200px;\r\n    width: 400px;\r\n    padding: 20px 40px 20px 40px ;\r\n\r\n    color: #2cdd3e;\r\n    font-size: 18px;\r\n    font-family: Roboto;\r\n}\r\n\r\n#CodeArea[_ngcontent-%COMP%] {\r\n    background-color: #1c2541;\r\n\r\n    height: 500px;\r\n    width: 940px;\r\n\r\n    padding: 30px 30px 30px 30px;\r\n    \r\n    overflow-x: auto;\r\n    overflow-y: auto;\r\n}\r\n\r\n#DisplayArea[_ngcontent-%COMP%] {\r\n    background-color: #3a506b;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#CodeSelection[_ngcontent-%COMP%] {\r\n    \r\n    float: left;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #10c6f9;\r\n    font-size: 20px;\r\n    font-family: Roboto;\r\n}\r\n\r\n#RightArea[_ngcontent-%COMP%] {\r\n    width: 810px;\r\n    height: 460px;\r\n    float: left;\r\n}\r\n\r\n.ProgramButton[_ngcontent-%COMP%] {\r\n    color: white;\r\n    font-size: 20px;\r\n    font-family: Roboto;\r\n    \r\n    margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlcGFnZXMvcHJvZmlsZXBhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFVBQVU7SUFDVjtBQUNKOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsMEJBQWtCO0lBQWxCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCOztJQUV6QixhQUFhO0lBQ2IsWUFBWTtJQUNaLDZCQUE2Qjs7SUFFN0IsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7O0lBRXpCLGFBQWE7SUFDYixZQUFZOztJQUVaLDRCQUE0Qjs7SUFFNUIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGVwYWdlcy9wcm9maWxlcGFnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jYmFja2dyb3VuZGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIxMzJiO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgY29sb3I6ICMyY2RkM2U7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxufVxyXG5cclxuaDJ7XHJcbiAgICBjb2xvcjogIzJjZGQzZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIG1hcmdpbjogMTAwcHggYXV0byA1MHB4IGF1dG87XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogZmxleFxyXG59XHJcblxyXG4udmVydGljYWxSb3cge1xyXG4gICAgbWFyZ2luOiAxMDBweCBhdXRvIDUwcHggYXV0bztcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5TaWRlQ29sIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbFJvd0VsZW1lbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuI0Rlc2NyaXB0aW9uQm94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzI1NDE7XHJcblxyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggNDBweCAyMHB4IDQwcHggO1xyXG5cclxuICAgIGNvbG9yOiAjMmNkZDNlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxufVxyXG5cclxuI0NvZGVBcmVhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzI1NDE7XHJcblxyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHdpZHRoOiA5NDBweDtcclxuXHJcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweCAzMHB4O1xyXG4gICAgXHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuI0Rpc3BsYXlBcmVhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTUwNmI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI0NvZGVTZWxlY3Rpb24ge1xyXG4gICAgLyogd2lkdGg6IDUwMHB4OyAqL1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMTBjNmY5O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxufVxyXG5cclxuI1JpZ2h0QXJlYSB7XHJcbiAgICB3aWR0aDogODEwcHg7XHJcbiAgICBoZWlnaHQ6IDQ2MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5Qcm9ncmFtQnV0dG9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAvKiB3aWR0aDogMTAwcHg7ICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilepagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profilepages',
                templateUrl: './profilepages.component.html',
                styleUrls: ['./profilepages.component.css']
            }]
    }], function () { return [{ type: src_app_services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_2__["AuthyLoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_database_firestore_database_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreDatabaseService"] }]; }, null); })();


/***/ }),

/***/ "c5BP":
/*!*************************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/predicate/EmptyPredicate.ts ***!
  \*************************************************************************/
/*! exports provided: EmptyPredicate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyPredicate", function() { return EmptyPredicate; });
/**
 * Predicate representing No condition in the conditional
 * See block-command.ts for specific documentation
 * on properties and methods
 */
class EmptyPredicate {
    constructor() {
        this.conjunction = '';
        this.negate = false;
    }
    evaluation(grid, unit) {
        return false;
    }
    getId() {
        return EmptyPredicate.id;
    }
    getLabel() {
        return EmptyPredicate.label;
    }
    getAsCode() {
        return '';
    }
}
EmptyPredicate.id = btoa(EmptyPredicate.name);
EmptyPredicate.label = 'No Condition Selected';


/***/ }),

/***/ "feZx":
/*!******************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/executable/Attack.ts ***!
  \******************************************************************/
/*! exports provided: Attack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attack", function() { return Attack; });
/* harmony import */ var src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/game/GameAction */ "IiXB");
/* harmony import */ var _Wait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wait */ "lo65");


/**
 * Executable representing an attack
 * See block-command.ts for specific documentation
 * on properties and methods
 */
class Attack {
    execute(grid, unit) {
        // for(let x = 0; x < grid.length; x++){
        //   for(let y = 0; y < grid[0].length; y++){
        //     let other = grid[x][y];
        //     if(!((unit.location.x === x && unit.location.y === y) || other === null || other.team === unit.team)){
        //       if((x >= unit.location.x - unit.attackRange && x <= unit.location.x + unit.attackRange) &&
        //         (y >= unit.location.y - unit.attackRange && y <= unit.location.x + unit.attackRange)){
        //         let died = false;
        //         let damage = unit.strength - other.defense;
        //         other.health = damage > 0 ? other.health - damage : other.health;
        //         if(other.health <= 0){
        //           died = true;
        //         }
        //         console.log(other.health);
        //         unit.doAttackAnimation();
        //         return new GameAction(Attack.name, unit, other, died);
        //       }
        //     }
        //   }
        // }
        var closestUnit = this.getClosestEnemy(grid, unit);
        if (closestUnit != null) {
            if ((closestUnit.location.x >= unit.location.x - unit.attackRange && closestUnit.location.x <= unit.location.x + unit.attackRange) &&
                (closestUnit.location.y >= unit.location.y - unit.attackRange && closestUnit.location.y <= unit.location.y + unit.attackRange)) {
                //they are in range
                let died = false;
                let damage = unit.strength - closestUnit.defense;
                closestUnit.health = damage > 0 ? closestUnit.health - damage : closestUnit.health;
                if (closestUnit.health <= 0) {
                    died = true;
                }
                console.log(closestUnit.health);
                unit.doAttackAnimation();
                return new src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_0__["GameAction"](Attack.name, unit, closestUnit, died);
            }
        }
        return new src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_0__["GameAction"](_Wait__WEBPACK_IMPORTED_MODULE_1__["Wait"].name, unit, null, false);
    }
    getId() {
        return Attack.id;
    }
    getLabel() {
        return Attack.label;
    }
    getAsCode() {
        return Attack.asCode;
    }
    //finds closest enemy of another team
    getClosestEnemy(grid, unit) {
        var closest = null;
        var closestDist = 1000;
        for (let x = 0; x < grid.length; x++) {
            for (let y = 0; y < grid[0].length; y++) {
                let other = grid[x][y];
                if (!((unit.location.x === x && unit.location.y === y) || other === null || other.team === unit.team)) {
                    var distance = Math.floor(Math.sqrt(Math.pow(unit.location.x - x, 2) + Math.pow(unit.location.y - y, 2)));
                    if (distance < closestDist) {
                        closest = other;
                        closestDist = distance;
                    }
                }
            }
        }
        return closest;
    }
}
Attack.label = 'Attack';
Attack.id = btoa(Attack.name);
Attack.asCode = 'this.postMessage({result: \'Attack\'});';


/***/ }),

/***/ "g7Zv":
/*!***********************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/executable/TestAction1.ts ***!
  \***********************************************************************/
/*! exports provided: TextAction1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAction1", function() { return TextAction1; });
/* harmony import */ var src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/game/GameAction */ "IiXB");

/**
 * Executable for testing
 * See block-command.ts for specific documentation
 * on properties and methods
 */
class TextAction1 {
    execute(grid, unit) {
        return new src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_0__["GameAction"](unit.id + " Action1", unit, null, false);
    }
    getId() {
        return TextAction1.id;
    }
    getLabel() {
        return TextAction1.label;
    }
    getAsCode() {
        return TextAction1.asCode;
    }
}
TextAction1.label = 'Action1';
TextAction1.id = btoa(TextAction1.name);
TextAction1.asCode = 'textAction1();';


/***/ }),

/***/ "iM+8":
/*!*************************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/predicate/SouthAvailable.ts ***!
  \*************************************************************************/
/*! exports provided: SouthAvailable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SouthAvailable", function() { return SouthAvailable; });
/* harmony import */ var _services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/game/grid-parser.service */ "qLgx");

class SouthAvailable {
    evaluation(grid, unit) {
        let south = { x: unit.location.x, y: unit.location.y + 1 };
        return _services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_0__["GridParserService"].isInBounds(south, grid)
            && !_services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_0__["GridParserService"].isUnitOccupied(south, grid);
    }
    getAsCode() {
        return SouthAvailable.asCode;
    }
    getId() {
        return SouthAvailable.id;
    }
    getLabel() {
        return SouthAvailable.label;
    }
}
SouthAvailable.id = btoa(SouthAvailable.name);
SouthAvailable.label = 'South Available';
SouthAvailable.asCode = 'locationAvailable(grid, {x: me.location.x, y: me.location.y + 1})';


/***/ }),

/***/ "ieil":
/*!************************************************!*\
  !*** ./src/app/models/game/units/Swordsman.ts ***!
  \************************************************/
/*! exports provided: Swordsman */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swordsman", function() { return Swordsman; });
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "+v1C");

class Swordsman extends _Unit__WEBPACK_IMPORTED_MODULE_0__["Unit"] {
    constructor() {
        super();
        this.id = -1;
        this.maxHealth = 100;
        this.health = 100;
        this.defense = 10;
        this.strength = 25;
        this.attackRange = 1;
        this.walk_frames = [11, 18];
        this.attack_frames = [24, 32];
    }
}
Swordsman.dbid = btoa(Swordsman.name);


/***/ }),

/***/ "ilXD":
/*!*****************************************************************!*\
  !*** ./src/app/services/database/firestore-database.service.ts ***!
  \*****************************************************************/
/*! exports provided: FirestoreDatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreDatabaseService", function() { return FirestoreDatabaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/database/DatabaseData */ "jJWq");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");





/**
 * Service that Manages interactions between client database
 */
class FirestoreDatabaseService {
    constructor(db, storage) {
        this.db = db;
        this.storage = storage;
        //constants for the names of database collections
        /**
         * Firestore Collection id for User Data
         */
        this.USER_DATA = "User_Data";
        /**
         * Firestore Collection id for Program Data
         */
        this.CODE_DATA = "Code_Data";
        /**
         * Firestore Collection id for Level Data
         */
        this.LEVEL_DATA = "Level_Data";
    }
    /**
     * Sends a request to database for the specified document in the collection
     * returns the observable for the request
     * @param collection The collection the database is checking
     * @param documentname the document id that is being requested
     */
    queryDocument(collection, documentname) {
        return this.db.collection(collection).doc(documentname).get();
    }
    /**
     * Sends a request to database for the deletion of the specified document
     * returns a promise with the success of the request
     * @param collection the collection the database is checking
     * @param documentname the document id that is being request
     */
    deleteDocument(collection, documentname) {
        return this.db.collection(collection).doc(documentname).delete();
    }
    /**
     * Sends a request to database for updating the data of the specified document.
     * Creates a new document of the specified name/id if it doesnt already exist
     * Returns a promise with the success of the request.
     * @param collection the collection of the document in the database is updating
     * @param documentname the document id that is being update
     * @param data the data to update with
     */
    updateDocument(collection, documentname, data) {
        return this.db.collection(collection).doc(documentname).set(data);
    }
    /**
     * Checks if a document exists, returns a promise on the result
     * @param collection the collection the documents we are checking
     * @param documentname the document id to look for
     * @returns promise with type boolean
     */
    doesDocumentExist(collection, documentname) {
        return new Promise((resolve, reject) => {
            this.db.collection(collection).doc(documentname).get().subscribe(result => {
                resolve(result.exists);
            });
        });
    }
    /**
     * Sends a request to database for getting all documents within a specified collection.
     * returns an observable for the request
     * @param collection the collection of documents we are getting
     * @returns observable with status and data of the data
     */
    queryDocumentsFromCollection(collection) {
        return this.db.collection(collection).get();
    }
    //getters
    /**
     * function to get user data from the database. Must include a listener function(Userdata) for response
     * @param uid the user id you are getting data for
     * @param listenerFunction the function(ProgramData) that receives the request data
     */
    getUserData(uid, listenerFunction) {
        this.queryDocument(this.USER_DATA, uid).subscribe(result => {
            if (result.exists) {
                var data = result.data();
                var ud = {
                    Username: data.Username,
                    CompletedLevels: data.CompletedLevels,
                    Programs: data.OwnedCodes,
                    Level: data.Level,
                    Description: data.description
                };
                listenerFunction(ud);
            }
            else {
                listenerFunction(null);
            }
        });
    }
    /**
     * function to get the data for a program from the database Must include a listener function(ProgramData) for response
     * @param cid the program id you are getting data for
     * @param listenerFunction the function(Programdata) that receives the request data
     */
    getProgramData(cid, listenerFunction) {
        this.queryDocument(this.CODE_DATA, cid).subscribe(result => {
            var data = result.data();
            //gets array of units
            var units = [];
            for (var x = 0; x < data.units.length; x++) {
                var u = {
                    TroopType: data.units[x].type, CodeBlocks: data.units[x].blocks,
                    CodeType: src_app_models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_1__["CodeType"][data.units[x].ctype],
                    CodeFile: data.units[x].codeFile,
                    location: data.units[x].location
                };
                units.push(u);
            }
            var pd = {
                Name: data.name,
                Verified: data.verified,
                Units: units
            };
            listenerFunction(pd);
        });
    }
    /**
     * function to get the data for a level from the database Must include a listener function(LevelData) for response
     * @param lid the program id you are getting data for
     * @param listenerFunction the function(LevelData) that receives the request data
     */
    getLevelData(lid, listenerFunction) {
        this.queryDocument(this.LEVEL_DATA, lid).subscribe(result => {
            var data = result.data();
            var ld = {
                ProgramId: data.Code
            };
            listenerFunction(ld);
        });
    }
    /**
     * function to get the data for a program in a level from the database Must include a listener function(ProgramData) for response
     * @param lid the program id you are getting data for
     * @param listenerFunction the function(ProgramData) that receives the request data
     */
    getLevelProgram(lid, listenerFunction) {
        var self = this;
        this.getLevelData(lid, function (data) {
            self.getProgramData(data.ProgramId.toString(), listenerFunction);
        });
    }
    /**
     * function to retrieve the user's hand typed code and converts it to a worker. Must include a listener function(ProgramData) for response
     * @param storageRef the path in storage to the user's code
     * @param fileName the name you wish to save the file as
     * @param listenerFunction the function(Worker) that receives the request data
     */
    getUserCodeFromStorage(storageRef, fileName, listenerFunction) {
        let ref = this.storage.ref(storageRef);
        ref.getDownloadURL().subscribe(res => {
            let xhr = new XMLHttpRequest();
            xhr.responseType = 'text';
            xhr.onload = function (event) {
                let code = xhr.response;
                let file = new File([code], fileName, {
                    type: "text/javascript",
                });
                let url = window.URL.createObjectURL(file);
                listenerFunction(new Worker(url));
            };
            xhr.open('GET', res);
            xhr.send();
        }, error => {
            console.log(error);
        });
    }
    /**
     * Gets all level data document snapshots from the levels collection
     * @param callback function to call on request complete. parameter will give a QuerySnapshot
     */
    getAllLevels(callback) {
        this.queryDocumentsFromCollection(this.LEVEL_DATA).subscribe(result => {
            callback(result);
        });
    }
    /**
     * Checks if a program document exists in database, returns a callback with result
     * @param pid the program id to get
     * @param callback the callback function on request complete
     */
    doesProgramExist(pid, callback) {
        this.doesDocumentExist(this.CODE_DATA, pid).then((result) => {
            callback(result);
        });
    }
    //setters
    /**
     * Function that sets the data in the user collection database based on a UserData object
     * Returns the promise of the response
     * @param uid the id of the user you are trying to change
     * @param ud the UserData object to place into database
     */
    setUserData(uid, ud) {
        return this.updateDocument(this.USER_DATA, uid, {
            Username: ud.Username,
            CompletedLevels: ud.CompletedLevels,
            OwnedCodes: ud.Programs,
            Level: ud.Level,
            description: ud.Description
        });
    }
    /**
     * Function that sets the data in the program collection database based on a ProgramData object
     * Returns the promise of the response
     * @param pid the id of the program you are trying to change
     * @param pd the ProgramData object to place into database
     */
    setProgramData(pid, pd) {
        var dbunit = [];
        for (var x = 0; x < pd.Units.length; x++) {
            dbunit.push({
                blocks: pd.Units[x].CodeBlocks, location: pd.Units[x].location, type: pd.Units[x].TroopType,
                ctype: src_app_models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_1__["CodeType"][pd.Units[x].CodeType], codeFile: pd.Units[x].CodeFile
            });
        }
        return this.updateDocument(this.CODE_DATA, pid, {
            name: pd.Name,
            verified: pd.Verified,
            units: dbunit
        });
    }
    /**
     *
     * Stores a user's javascript code at the specified url if that url does not already contain code.
     * Note: this assumes the file does not already exist. To ensure it doesn't I include the current time in the url
     * for simplicity.
     * @param url: the url you wish to save your code at
     * @param file: the file containing the code
     */
    storeCodeAtLocation(url, file) {
        this.storage.upload(url, file);
    }
    //deleters
    /**
     * Deletes program data from database
     * @param pid the program id to delete
     */
    deleteProgramData(pid) {
        return this.deleteDocument(this.CODE_DATA, pid);
    }
}
FirestoreDatabaseService.ɵfac = function FirestoreDatabaseService_Factory(t) { return new (t || FirestoreDatabaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"])); };
FirestoreDatabaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FirestoreDatabaseService, factory: FirestoreDatabaseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirestoreDatabaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }]; }, null); })();


/***/ }),

/***/ "inrU":
/*!****************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/executable/East.ts ***!
  \****************************************************************/
/*! exports provided: East */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "East", function() { return East; });
/* harmony import */ var src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/game/GameAction */ "IiXB");
/* harmony import */ var _Wait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wait */ "lo65");
/* harmony import */ var _services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/game/grid-parser.service */ "qLgx");



/**
 * Executable representing a forward movement
 * See block-command.ts for specific documentation
 * on properties and methods
 */
class East {
    constructor() { }
    execute(grid, unit) {
        let newLocation = { x: unit.location.x + 1, y: unit.location.y };
        if (_services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_2__["GridParserService"].isInBounds(newLocation, grid) && !_services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_2__["GridParserService"].isUnitOccupied(newLocation, grid)) {
            grid[unit.location.x][unit.location.y] = null;
            unit.location = newLocation;
            unit.doWalkAnimation();
            return new src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_0__["GameAction"](East.name, unit, null, false);
        }
        else {
            return new src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_0__["GameAction"](_Wait__WEBPACK_IMPORTED_MODULE_1__["Wait"].name, unit, null, false);
        }
    }
    getId() {
        return East.id;
    }
    getLabel() {
        return East.label;
    }
    getAsCode() {
        return East.asCode;
    }
}
East.label = 'Go east';
East.id = btoa(East.name);
East.asCode = 'this.postMessage({result: \'East\'});';


/***/ }),

/***/ "jJWq":
/*!*************************************************!*\
  !*** ./src/app/models/database/DatabaseData.ts ***!
  \*************************************************/
/*! exports provided: UserData, LevelData, ProgramData, UnitData, CodeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelData", function() { return LevelData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramData", function() { return ProgramData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitData", function() { return UnitData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeType", function() { return CodeType; });
/**
 * The User data from the database "User_Data" Collection
 * This data is a representation of what was gathered from
 * the database
 */
class UserData {
}
/**
 * The Level data from the database "Level_Data" Collection
 * This data is a representation of what was gathered from
 * the database
 */
class LevelData {
}
/**
 * The Program Data from the database "Code_Data" Collection
 * This data is a representation of what was gathered from
 * the database
 */
class ProgramData {
}
/**
 * Object representing each Unit's avaliable program and location
 * within the ProgramData
 */
class UnitData {
    constructor() {
        this.TroopType = undefined;
        this.CodeType = CodeType.NONE;
        this.CodeBlocks = null;
        this.CodeFile = null;
        this.location = null;
    }
}
var CodeType;
(function (CodeType) {
    CodeType[CodeType["BLOCK"] = 0] = "BLOCK";
    CodeType[CodeType["FILE"] = 1] = "FILE";
    CodeType[CodeType["NONE"] = 2] = "NONE";
})(CodeType || (CodeType = {}));


/***/ }),

/***/ "jjhM":
/*!************************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/predicate/WestAvailable.ts ***!
  \************************************************************************/
/*! exports provided: WestAvailable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WestAvailable", function() { return WestAvailable; });
/* harmony import */ var _services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/game/grid-parser.service */ "qLgx");

class WestAvailable {
    constructor() {
        this.conjunction = '';
        this.negate = false;
    }
    evaluation(grid, unit) {
        let west = { x: unit.location.x - 1, y: unit.location.y };
        return _services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_0__["GridParserService"].isInBounds(west, grid)
            && !_services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_0__["GridParserService"].isUnitOccupied(west, grid);
    }
    getAsCode() {
        return WestAvailable.asCode;
    }
    getId() {
        return WestAvailable.id;
    }
    getLabel() {
        return WestAvailable.label;
    }
}
WestAvailable.id = btoa(WestAvailable.name);
WestAvailable.label = 'West Available';
WestAvailable.asCode = 'locationAvailable(grid, {x: me.location.x - 1, y: me.location.y})';


/***/ }),

/***/ "lo65":
/*!****************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/executable/Wait.ts ***!
  \****************************************************************/
/*! exports provided: Wait */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wait", function() { return Wait; });
/* harmony import */ var src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/game/GameAction */ "IiXB");

/**
 * Executable to make unit wait action
 * See block-command.ts for specific documentation
 * on properties and methods
 */
class Wait {
    execute(grid, unit) {
        return new src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_0__["GameAction"](Wait.name, unit, null, false);
    }
    getId() {
        return Wait.id;
    }
    getLabel() {
        return Wait.label;
    }
    getAsCode() {
        return Wait.asCode;
    }
}
Wait.label = 'Wait';
Wait.id = btoa(Wait.name);
Wait.asCode = 'this.postMessage({result: \'Wait\'});';


/***/ }),

/***/ "ltGn":
/*!*****************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/executable/North.ts ***!
  \*****************************************************************/
/*! exports provided: North */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "North", function() { return North; });
/* harmony import */ var src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/game/GameAction */ "IiXB");
/* harmony import */ var _services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/game/grid-parser.service */ "qLgx");
/* harmony import */ var _Wait__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wait */ "lo65");



/**
 * Executable representing a left movement
 * See block-command.ts for specific documentation
 * on properties and methods
 */
class North {
    constructor() { }
    execute(grid, unit) {
        let newLocation = { x: unit.location.x, y: unit.location.y - 1 };
        if (_services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_1__["GridParserService"].isInBounds(newLocation, grid) && !_services_game_grid_parser_service__WEBPACK_IMPORTED_MODULE_1__["GridParserService"].isUnitOccupied(newLocation, grid)) {
            grid[unit.location.x][unit.location.y] = null;
            unit.location = newLocation;
            unit.doWalkAnimation();
            return new src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_0__["GameAction"](North.name, unit, null, false);
        }
        else {
            return new src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_0__["GameAction"](_Wait__WEBPACK_IMPORTED_MODULE_2__["Wait"].name, unit, null, false);
        }
    }
    getId() {
        return North.id;
    }
    getLabel() {
        return North.label;
    }
    getAsCode() {
        return North.asCode;
    }
}
North.label = 'Go north';
North.id = btoa(North.name);
North.asCode = 'this.postMessage({result: \'North\'});';


/***/ }),

/***/ "mK3C":
/*!***************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/conditional/If.ts ***!
  \***************************************************************/
/*! exports provided: If */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "If", function() { return If; });
/* harmony import */ var _terminal_Endif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../terminal/Endif */ "aww8");
/* harmony import */ var _predicate_EmptyPredicate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../predicate/EmptyPredicate */ "c5BP");
/* harmony import */ var _terminal_EndElse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../terminal/EndElse */ "txq3");
/* harmony import */ var _terminal_EndElseIf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terminal/EndElseIf */ "+lJh");




/**
 * ConditionalBlock representing an If statement
 * See block-command.ts for specific documentation
 * on properties and methods
 */
class If {
    constructor() {
        this.conditions = [new _predicate_EmptyPredicate__WEBPACK_IMPORTED_MODULE_1__["EmptyPredicate"]()];
        this.terminal_blocks = [_terminal_Endif__WEBPACK_IMPORTED_MODULE_0__["EndIf"].label, _terminal_EndElse__WEBPACK_IMPORTED_MODULE_2__["EndElse"].label, _terminal_EndElseIf__WEBPACK_IMPORTED_MODULE_3__["EndElseIf"].label];
        this.condition = new _predicate_EmptyPredicate__WEBPACK_IMPORTED_MODULE_1__["EmptyPredicate"]();
    }
    static asCode(conditions) {
        let code = 'if(';
        for (let condition of conditions) {
            if (condition.conjunction !== '') {
                code += ` ${condition.conjunction + condition.conjunction} `;
            }
            if (condition.negate) {
                code += '!';
            }
            code += condition.getAsCode();
        }
        code += '){';
        return code;
    }
    ;
    getId() {
        return If.id;
    }
    getLabel() {
        return If.label;
    }
    getAsCode() {
        return If.asCode(this.conditions);
    }
}
If.label = 'If';
If.id = btoa(If.name);


/***/ }),

/***/ "pv0v":
/*!*************************************************************!*\
  !*** ./src/app/services/game/gameloop/game-loop.service.ts ***!
  \*************************************************************/
/*! exports provided: GameLoopServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLoopServiceService", function() { return GameLoopServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_dataStructures_Stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataStructures/Stack */ "BbXq");
/* harmony import */ var src_app_models_blockCommands_blocks_conditional_Else__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/conditional/Else */ "RLPw");
/* harmony import */ var src_app_models_blockCommands_blocks_conditional_ElseIf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/conditional/ElseIf */ "5VXY");
/* harmony import */ var src_app_models_blockCommands_blocks_conditional_If__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/blockCommands/blocks/conditional/If */ "mK3C");
/* harmony import */ var src_app_models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/database/DatabaseData */ "jJWq");
/* harmony import */ var src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/game/GameAction */ "IiXB");
/* harmony import */ var _models_blockCommands_blocks_executable_Wait__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/blockCommands/blocks/executable/Wait */ "lo65");
/* harmony import */ var _models_game_units_UnitReadOnly__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models/game/units/UnitReadOnly */ "PS8/");
/* harmony import */ var _levelDataInterface_level_data_interface_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../levelDataInterface/level-data-interface.service */ "CBun");
/* harmony import */ var _program_construction_block_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../program-construction/block.service */ "NC9t");












/**
 * Service that runs the internal gameloop for the game
 */
class GameLoopServiceService {
    constructor(LevelInterface, blockServ) {
        this.LevelInterface = LevelInterface;
        this.blockServ = blockServ;
        this.WORKER_TIMEOUT_TIME = 5000;
    }
    /**
     * Must be called before loop is prepped
     */
    loadData(levelid, programid) {
        return new Promise((resolutionFunc, rejectionFunc) => {
            this.LevelInterface.getGameInfo(levelid, programid).then(result => {
                this.gameData = result;
                resolutionFunc();
            });
        });
    }
    loadTestData(programData) {
        return new Promise((resolutionFunc, rejectionFunc) => {
            this.LevelInterface.getGameInfoTesting(programData).then(result => {
                this.gameData = result;
                resolutionFunc();
            });
        });
    }
    /**
     * Called before the start of game
     * prepares the service for runnning a single game
     */
    prepLoop() {
        try {
            var data = this.gameData;
            this.isTeam1Active = true;
            this.unitIndex = 0;
            this.codeIndex = 0;
            this.lastAction = null;
            this.team1units = data.team1Units;
            this.team2units = data.team2Units;
            this.grid = this.create2DArray(data.griddimensions.x, data.griddimensions.y);
            this.currentConditions = new src_app_dataStructures_Stack__WEBPACK_IMPORTED_MODULE_1__["Stack"]();
            for (var x = 0; x < this.team1units.length; x++) {
                var u = this.team1units[x];
                this.grid[u.location.x][u.location.y] = u;
            }
            for (var x = 0; x < this.team2units.length; x++) {
                var u = this.team2units[x];
                this.grid[u.location.x][u.location.y] = u;
            }
            // console.log("Team 1 Data");
            // console.log(JSON.stringify(this.team1units));
            // console.log(JSON.stringify(this.team2units));
            // console.log(JSON.stringify(this.grid));
        }
        catch (error) {
            console.log("Failed: " + error);
            return false;
        }
        return true;
    }
    /**
     * runs through 1 action in the game via interpreting game commands
     */
    stepGame() {
        var self = this;
        // return Promise.race([this.baseStepPromise(), new Promise<GameAction>((resolve, reject) => {
        //   setTimeout(function () {
        //     var curTeam: Unit[] = (self.isTeam1Active) ? self.team1units : self.team2units;
        //     self.unitIndex++;
        //     self.codeIndex = 0;
        //     if (curTeam.length <= self.unitIndex) {
        //       //no more units to run through switch sides
        //       self.unitIndex = 0;
        //       self.isTeam1Active = !self.isTeam1Active;
        //     }
        //     self.currentConditions.clear();
        //     if (self.workerRunning != null) {
        //       self.workerRunning.terminate();
        //     }
        //     resolve(new GameAction("RanOutOfTimeError", ((self.isTeam1Active) ? self.team1units : self.team2units)[self.unitIndex], null, false));
        //   }, this.WORKER_TIMEOUT_TIME);
        // })]);
        return new Promise((resolve, reject) => {
            Promise.race([this.baseStepPromise(), new Promise((resolve, reject) => {
                    setTimeout(function () {
                        resolve(new src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_6__["GameAction"]("RanOutOfTimeError", ((self.isTeam1Active) ? self.team1units : self.team2units)[self.unitIndex], null, false));
                    }, this.WORKER_TIMEOUT_TIME);
                })]).then(result => {
                var resolvedAction = result;
                if (resolvedAction.actionId === "RanOutOfTimeError") {
                    var curTeam = (self.isTeam1Active) ? self.team1units : self.team2units;
                    self.unitIndex++;
                    self.codeIndex = 0;
                    if (curTeam.length <= self.unitIndex) {
                        //no more units to run through switch sides
                        self.unitIndex = 0;
                        self.isTeam1Active = !self.isTeam1Active;
                    }
                    self.currentConditions.clear();
                    if (self.workerRunning != null) {
                        self.workerRunning.terminate();
                    }
                }
                resolve(result);
            });
        });
    }
    baseStepPromise() {
        return new Promise((successFunc, rejectFunc) => {
            try {
                // Return at the end of each of these to not execute the code after. We know we're done.
                if (this.team1units.length === 0) {
                    //return new GameAction("GameEnd2", null, null, false);
                    successFunc(new src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_6__["GameAction"]("GameEnd2", null, null, false));
                    return;
                }
                else if (this.team2units.length === 0) {
                    //return new GameAction(""GameEnd1"", null, null, false);
                    successFunc(new src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_6__["GameAction"]("GameEnd1", null, null, false));
                    return;
                }
                var unit = ((this.isTeam1Active) ? this.team1units : this.team2units)[this.unitIndex];
                if (unit.codeType == src_app_models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_5__["CodeType"].BLOCK) {
                    //it is a codeblock task
                    var currentCodeBlock = null;
                    do {
                        unit = ((this.isTeam1Active) ? this.team1units : this.team2units)[this.unitIndex];
                        currentCodeBlock = unit.activecode[this.codeIndex];
                    } while (this.evalCodeBlock(currentCodeBlock, unit));
                    //check action integrity
                    var last = this.lastAction;
                    if (last == null) {
                        last = new src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_6__["GameAction"]("NoEvent", null, null, false);
                    }
                    this.lastAction = null;
                    //check for death
                    if (last.hasDied) {
                        // var team: Unit[] = (last.receiver.team == 1) ? this.team1units : this.team2units;
                        // var indexDead = team.indexOf(last.receiver);
                        // if(indexDead >= 0 && indexDead < team.length) {
                        //   team.splice(indexDead, 1);
                        //   //adjust new code index
                        //   if(this.unitIndex > indexDead) {
                        //     this.codeIndex--;
                        //   }
                        // } else {
                        //   console.log("You shouldnt be seeing this error message");
                        // }
                        this.deleteUnit(last.receiver);
                    }
                    //next unit
                    var curTeam = (this.isTeam1Active) ? this.team1units : this.team2units;
                    this.unitIndex++;
                    this.codeIndex = 0;
                    if (curTeam.length <= this.unitIndex) {
                        //no more units to run through switch sides
                        this.unitIndex = 0;
                        this.isTeam1Active = !this.isTeam1Active;
                    }
                    this.currentConditions.clear();
                    successFunc(last);
                }
                else if (unit.codeType === src_app_models_database_DatabaseData__WEBPACK_IMPORTED_MODULE_5__["CodeType"].FILE) {
                    this.workerRunning = unit.activecode;
                    this.workerRunning.postMessage(JSON.stringify({ grid: this.convertGridToReadOnly(this.grid), unit: new _models_game_units_UnitReadOnly__WEBPACK_IMPORTED_MODULE_8__["UnitReadOnly"](unit) }));
                    var self = this;
                    var messageSent = false;
                    this.workerRunning.onmessage = function (event) {
                        if (!messageSent) {
                            self.workerRunning = null;
                            /*
                            Note the the convertWorkerMessageToAction never returns null. Instead if something goes
                            wrong it will return a default wait action.
                             */
                            console.log("Unit request " + event.data.result);
                            var last = self.convertWorkerMessageToAction(event.data, self.grid, unit);
                            self.lastAction = last;
                            //check for death
                            if (last.hasDied) {
                                // var team: Unit[] = (last.receiver.team == 1) ? self.team1units : self.team2units;
                                // var indexDead = team.indexOf(last.receiver);
                                // if (indexDead >= 0 && indexDead < team.length) {
                                //   team.splice(indexDead, 1);
                                //   //adjust new code index
                                //   if (self.unitIndex > indexDead) {
                                //     self.codeIndex--;
                                //   }
                                // } else {
                                //   console.log("You shouldnt be seeing this error message");
                                // }
                                self.deleteUnit(last.receiver);
                            }
                            var curTeam = (self.isTeam1Active) ? self.team1units : self.team2units;
                            self.unitIndex++;
                            self.codeIndex = 0;
                            if (curTeam.length <= self.unitIndex) {
                                //no more units to run through switch sides
                                self.unitIndex = 0;
                                self.isTeam1Active = !self.isTeam1Active;
                            }
                            successFunc(self.lastAction);
                        }
                        messageSent = true;
                    };
                    this.workerRunning.onerror = function (event) {
                        self.workerRunning = null;
                        // var curTeam: Unit[] = (self.isTeam1Active) ? self.team1units : self.team2units;
                        // self.unitIndex++;
                        // self.codeIndex = 0;
                        // if (curTeam.length <= self.unitIndex) {
                        //   //no more units to run through switch sides
                        //   self.unitIndex = 0;
                        //   self.isTeam1Active = !self.isTeam1Active;
                        // }
                        //rejectFunc("Written Code has encountered an error");
                        throw new Error("Written Code has encountered an error");
                    };
                }
                else {
                    //none type
                    throw new Error("Unexpected Nonetype code");
                }
            }
            catch (error) {
                last = null;
                //return new GameAction("Error", null, null, false);
                console.log("Error running unit index " + this.unitIndex.toString() + " on team " + this.isTeam1Active + " " + error);
                //next unit
                var curTeam = (this.isTeam1Active) ? this.team1units : this.team2units;
                this.unitIndex++;
                this.codeIndex = 0;
                if (curTeam.length <= this.unitIndex) {
                    //no more units to run through switch sides
                    this.unitIndex = 0;
                    this.isTeam1Active = !this.isTeam1Active;
                }
                this.currentConditions.clear();
                successFunc(new src_app_models_game_GameAction__WEBPACK_IMPORTED_MODULE_6__["GameAction"]("Error", null, null, false));
            }
        });
    }
    /**
     * Evaluates the current codeblock for action or conditional logic
     * Returns true if this method should be called another time
     * @param cmd the block command to evaluate
     * @param unit the unit commiting the action
     */
    //TODO COMPLETE FOR ALL CONDITIONALS
    evalCodeBlock(cmd, unit) {
        var finalReturn = false;
        //conditional check
        if (this.blockServ.isConditional(cmd)) {
            if (cmd instanceof src_app_models_blockCommands_blocks_conditional_If__WEBPACK_IMPORTED_MODULE_4__["If"]) {
                return this.handleIfStatement(cmd, unit);
            }
            else if (cmd instanceof src_app_models_blockCommands_blocks_conditional_ElseIf__WEBPACK_IMPORTED_MODULE_3__["ElseIf"]) {
                if (this.currentConditions.peek().preCondition) {
                    this.seekToEndIf(unit);
                }
                else {
                    this.currentConditions.pop();
                    return this.handleIfStatement(cmd, unit);
                }
            }
            else if (cmd instanceof src_app_models_blockCommands_blocks_conditional_Else__WEBPACK_IMPORTED_MODULE_2__["Else"]) {
                if (this.currentConditions.peek().preCondition) {
                    this.seekToEndIf(unit);
                }
                else {
                    finalReturn = true;
                }
            }
            //conditionalEnd check
        }
        else if (this.blockServ.isTerminal(cmd)) {
            finalReturn = true;
            this.currentConditions.pop();
            //It must be an action
        }
        else {
            this.lastAction = cmd.execute(this.grid, unit);
            finalReturn = false;
        }
        this.codeIndex++;
        //check range in code array
        if (unit.activecode.length <= this.codeIndex) {
            //no more code, next unit
            // var curTeam: Unit[] = (this.isTeam1Active) ? this.team1units : this.team2units;
            // this.unitIndex++;
            // this.codeIndex = 0;
            // if (curTeam.length <= this.unitIndex) {
            //   //no more units to run through switch sides
            //   this.unitIndex = 0;
            //   this.isTeam1Active = !this.isTeam1Active;
            // }
            // this.currentConditions.clear();
            return false;
        }
        else {
            return finalReturn;
        }
    }
    convertGridToReadOnly(grid) {
        let newGrid = [];
        for (let row of grid) {
            let newRow = [];
            for (let el of row) {
                if (el === null) {
                    newRow.push(el);
                    continue;
                }
                newRow.push(new _models_game_units_UnitReadOnly__WEBPACK_IMPORTED_MODULE_8__["UnitReadOnly"](el));
            }
            newGrid.push(newRow);
        }
        return newGrid;
    }
    /**
     * Creates a null filled 2d array of units for the grid at specified size
     * @param x size in x direction
     * @param y size in y direction
     */
    create2DArray(x, y) {
        var arr = [];
        for (var row = 0; row < x; row++) {
            arr[row] = [];
            for (var col = 0; col < y; col++) {
                arr[row][col] = null;
            }
        }
        return arr;
    }
    handleIfStatement(cmd, unit) {
        this.currentConditions.push(new ConditionalHold(cmd, this.codeIndex));
        //check conditioning
        if (cmd.condition.evaluation(this.grid, unit)) {
            this.currentConditions.peek().preCondition = true;
            this.codeIndex++;
            return true;
        }
        else {
            this.currentConditions.peek().preCondition = false;
            //Find endblock
            this.seekToEndIf(unit);
            /*while (!(unit.activecode[this.codeIndex] instanceof EndIf));*/
            return true;
        }
    }
    seekToEndIf(unit) {
        var conditionCount = 1;
        var curBlock;
        do {
            this.codeIndex++;
            curBlock = unit.activecode[this.codeIndex];
            if (curBlock instanceof src_app_models_blockCommands_blocks_conditional_If__WEBPACK_IMPORTED_MODULE_4__["If"]) {
                conditionCount++;
            }
            else if (this.blockServ.isTerminal(curBlock)) {
                conditionCount--;
            }
        } while (!(this.blockServ.isTerminal(curBlock) || curBlock instanceof src_app_models_blockCommands_blocks_conditional_Else__WEBPACK_IMPORTED_MODULE_2__["Else"] || curBlock instanceof src_app_models_blockCommands_blocks_conditional_ElseIf__WEBPACK_IMPORTED_MODULE_3__["ElseIf"]) || !(conditionCount <= 0));
    }
    /**
     * Takes the data returned from the web worker and converts it to a game action object. If unable to
     * parse game action then we make the unit just wait.
     * @param data the data from the web worker
     * @param grid the map the user is playing
     * @param unit the unit the user is controlling
     * @private
     */
    convertWorkerMessageToAction(data, grid, unit) {
        let action = data.result;
        try {
            let executable = this.blockServ.getById(btoa(action));
            if (!(this.blockServ.isExecutable(executable))) {
                throw new Error();
            }
            else {
                return executable.execute(grid, unit);
            }
        }
        catch (err) {
            return new _models_blockCommands_blocks_executable_Wait__WEBPACK_IMPORTED_MODULE_7__["Wait"]().execute(grid, unit);
        }
    }
    deleteUnit(unit) {
        console.log("Deleting unit " + unit.id + " of team " + unit.team);
        var team = (unit.team === 1 ? this.team1units : this.team2units);
        console.log("Looked at team " + team + " of type " + JSON.stringify((team === this.team1units ? "1" : "2")));
        for (let i = 0; i < team.length; i++) {
            if (team[i].id === unit.id) {
                console.log("Deleted unit " + unit.id + " at index " + i);
                team.splice(i, 1);
            }
        }
        this.grid[unit.location.x][unit.location.y] = null;
        console.log("end");
    }
}
GameLoopServiceService.ɵfac = function GameLoopServiceService_Factory(t) { return new (t || GameLoopServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_levelDataInterface_level_data_interface_service__WEBPACK_IMPORTED_MODULE_9__["LevelDataInterfaceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_program_construction_block_service__WEBPACK_IMPORTED_MODULE_10__["BlockService"])); };
GameLoopServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameLoopServiceService, factory: GameLoopServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameLoopServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _levelDataInterface_level_data_interface_service__WEBPACK_IMPORTED_MODULE_9__["LevelDataInterfaceService"] }, { type: _program_construction_block_service__WEBPACK_IMPORTED_MODULE_10__["BlockService"] }]; }, null); })();
/**
 * Object representing a conditional group that the code has intercepted
 */
class ConditionalHold {
    constructor(cond, ind) {
        this.preCondition = false;
        this.elseMet = false;
        this.conditional = cond;
        this.conditionCodeIndex = ind;
    }
}


/***/ }),

/***/ "qLgx":
/*!******************************************************!*\
  !*** ./src/app/services/game/grid-parser.service.ts ***!
  \******************************************************/
/*! exports provided: GridParserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridParserService", function() { return GridParserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GridParserService {
    constructor() { }
    static isUnitOccupied(location, grid) {
        return grid[location.x][location.y] !== null;
    }
    static isInBounds(location, grid) {
        return location.x >= 0 && location.x < grid.length && location.y >= 0 && location.y < grid[0].length;
    }
}
GridParserService.ɵfac = function GridParserService_Factory(t) { return new (t || GridParserService)(); };
GridParserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GridParserService, factory: GridParserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridParserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qpLt":
/*!*************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/terminal/End.ts ***!
  \*************************************************************/
/*! exports provided: End */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "End", function() { return End; });
/**
 * TerminalBlock representing the end of the code
 * See block-command.ts for specific documentation
 * on properties and methods
 */
class End {
    constructor() {
        this.terminate = null;
        this.indentationLevel = 0;
    }
    getId() {
        return End.id;
    }
    getLabel() {
        return End.label;
    }
    getAsCode() {
        return '}';
    }
}
End.label = 'End Turn';
End.id = btoa(End.name);


/***/ }),

/***/ "spD5":
/*!*******************************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/predicate/HealthBelow30Percent.ts ***!
  \*******************************************************************************/
/*! exports provided: HealthBelow30Percent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthBelow30Percent", function() { return HealthBelow30Percent; });
/**
 * Predicate representing Health below 30% condition
 * condition checks the unit's health if below 30%
 * See block-command.ts for specific documentation
 * on properties and methods
 */
class HealthBelow30Percent {
    constructor() {
        this.conjunction = '';
        this.negate = false;
    }
    evaluation(grid, unit) {
        return ((unit.health / unit.maxHealth) * 100) < 30;
    }
    getId() {
        return HealthBelow30Percent.id;
    }
    getLabel() {
        return HealthBelow30Percent.label;
    }
    getAsCode() {
        return HealthBelow30Percent.asCode;
    }
}
HealthBelow30Percent.label = 'Health Less Than 30 Percent';
HealthBelow30Percent.id = btoa(HealthBelow30Percent.name);
HealthBelow30Percent.asCode = 'healthLessThan30Percent(me)';


/***/ }),

/***/ "txq3":
/*!*****************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/terminal/EndElse.ts ***!
  \*****************************************************************/
/*! exports provided: EndElse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndElse", function() { return EndElse; });
/**
 * TerminalBlock representing the end of an Else block
 * See block-command.ts for specific documentation
 * on properties and methods
 */
class EndElse {
    constructor() {
        this.terminate = null;
    }
    getId() {
        return EndElse.id;
    }
    getLabel() {
        return EndElse.label;
    }
    getAsCode() {
        return '}';
    }
}
EndElse.label = 'End Else';
EndElse.id = btoa(EndElse.name);


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
/* harmony import */ var _components_block_code_block_code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/block-code/block-code.component */ "OoWN");
/* harmony import */ var _components_signin_page_signin_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/signin-page/signin-page.component */ "TA28");
/* harmony import */ var _components_profilepages_profilepages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profilepages/profilepages.component */ "bBaE");
/* harmony import */ var _components_docs_docs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/docs/docs.component */ "1hNk");
/* harmony import */ var _components_levelselect_levelselect_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/levelselect/levelselect.component */ "Us7Y");
/* harmony import */ var _components_levelplay_levelplay_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/levelplay/levelplay.component */ "LAVv");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_level_level_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/level/level.component */ "H3xd");
/* harmony import */ var _components_javascript_guide_javascript_guide_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/javascript-guide/javascript-guide.component */ "zO2K");
/* harmony import */ var _components_code_editor_guide_code_editor_guide_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/code-editor-guide/code-editor-guide.component */ "PuqQ");














const routes = [
    { path: 'signin', component: _components_signin_page_signin_page_component__WEBPACK_IMPORTED_MODULE_3__["SigninPageComponent"] },
    { path: 'profile', component: _components_profilepages_profilepages_component__WEBPACK_IMPORTED_MODULE_4__["ProfilepagesComponent"] },
    { path: 'code', component: _components_block_code_block_code_component__WEBPACK_IMPORTED_MODULE_2__["BlockCodeComponent"] },
    { path: 'levelSelect', component: _components_levelselect_levelselect_component__WEBPACK_IMPORTED_MODULE_6__["LevelselectComponent"] },
    { path: 'tutorials', component: _components_levelselect_levelselect_component__WEBPACK_IMPORTED_MODULE_6__["LevelselectComponent"] },
    { path: 'play', component: _components_levelplay_levelplay_component__WEBPACK_IMPORTED_MODULE_7__["LevelplayComponent"] },
    { path: 'docs', component: _components_docs_docs_component__WEBPACK_IMPORTED_MODULE_5__["DocsComponent"] },
    { path: 'level', component: _components_level_level_component__WEBPACK_IMPORTED_MODULE_9__["LevelComponent"] },
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'learn-js', component: _components_javascript_guide_javascript_guide_component__WEBPACK_IMPORTED_MODULE_10__["JavascriptGuideComponent"] },
    { path: 'using-the-code-editor', component: _components_code_editor_guide_code_editor_guide_component__WEBPACK_IMPORTED_MODULE_11__["CodeEditorGuideComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy', anchorScrolling: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy', anchorScrolling: 'enabled' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vq8i":
/*!************************************************************************!*\
  !*** ./src/app/models/blockCommands/blocks/predicate/TruePredicate.ts ***!
  \************************************************************************/
/*! exports provided: TruePredicate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruePredicate", function() { return TruePredicate; });
/**
 * Predicate representing a true condition
 * the condition will always be true
 * See block-command.ts for specific documentation
 * on properties and methods
 */
class TruePredicate {
    constructor() {
        this.negate = false;
        this.conjunction = '';
    }
    evaluation(grid, unit) {
        return true;
    }
    getId() {
        return TruePredicate.id;
    }
    getLabel() {
        return TruePredicate.label;
    }
    getAsCode() {
        return TruePredicate.asCode;
    }
}
TruePredicate.id = btoa(TruePredicate.name);
TruePredicate.label = 'true';
TruePredicate.asCode = 'true';


/***/ }),

/***/ "z5jU":
/*!*******************************************************************************!*\
  !*** ./src/app/components/prog-select-dialog/prog-select-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProgSelectDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgSelectDialogComponent", function() { return ProgSelectDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






function ProgSelectDialogComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgSelectDialogComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const d_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onSelect(d_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r1.prog.Name);
} }
class ProgSelectDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onSelect(id) {
        this.dialogRef.close(id);
    }
}
ProgSelectDialogComponent.ɵfac = function ProgSelectDialogComponent_Factory(t) { return new (t || ProgSelectDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ProgSelectDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgSelectDialogComponent, selectors: [["app-prog-select-dialog"]], decls: 8, vars: 1, consts: [["id", "background"], ["mat-dialog-title", ""], [1, "mat-typography"], ["class", "option", "mat-button", "", 3, "click", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-button", "", 1, "option", 3, "click"]], template: function ProgSelectDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose your program");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProgSelectDialogComponent_button_4_Template, 2, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgSelectDialogComponent_Template_button_click_6_listener() { return ctx.onSelect(undefined); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: [".option[_ngcontent-%COMP%] {\r\n    margin-right: 20px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    color: #2cdd3e;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    color: #2cdd3e;\r\n    font-weight: 500;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9nLXNlbGVjdC1kaWFsb2cvcHJvZy1zZWxlY3QtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZy1zZWxlY3QtZGlhbG9nL3Byb2ctc2VsZWN0LWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wdGlvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIGNvbG9yOiAjMmNkZDNlO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGNvbG9yOiAjMmNkZDNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgSelectDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-prog-select-dialog',
                templateUrl: './prog-select-dialog.component.html',
                styleUrls: ['./prog-select-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "zO2K":
/*!***************************************************************************!*\
  !*** ./src/app/components/javascript-guide/javascript-guide.component.ts ***!
  \***************************************************************************/
/*! exports provided: JavascriptGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavascriptGuideComponent", function() { return JavascriptGuideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login/authy-login.service */ "PISR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class JavascriptGuideComponent {
    constructor(viewPortScroller, auth, router) {
        this.viewPortScroller = viewPortScroller;
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
        if (!this.auth.checkSigninStatus()) {
            this.router.navigate(['']);
        }
    }
    scrollToSection(sectionName) {
        this.viewPortScroller.scrollToAnchor(sectionName);
    }
}
JavascriptGuideComponent.ɵfac = function JavascriptGuideComponent_Factory(t) { return new (t || JavascriptGuideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_2__["AuthyLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
JavascriptGuideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JavascriptGuideComponent, selectors: [["app-javascript-guid"]], decls: 847, vars: 27, consts: [["id", "main-header"], ["id", "title"], ["id", "main-content"], ["id", "book-marks"], [3, "click"], ["id", "docs-content"], ["id", "all-you-need-to-know-about-javascript"], ["href", "https://youtu.be/PkZNo7MFNFg", 1, "link"], ["id", "getting-started"], ["href", "https://code.visualstudio.com/", 1, "link"], ["href", "https://code.sololearn.com/web/", 1, "link"], ["href", "https://www.sololearn.com/learning/1024", 1, "link"], ["id", "variables-in-javascript"], [1, "lang-Javascript"], [1, "hljs-attribute"], [1, "hljs-number"], [1, "hljs-comment"], [1, "hljs-built_in"], [1, "lang-javascript"], ["id", "conditional-statements"], [1, "hljs-keyword"], [1, "hljs-literal"], [1, "hljs-string"], ["id", "arrays"], ["id", "for-loops"], ["id", "functions"], ["id", "objects"], ["id", "bonus-tips-to-maintain-your-code"], [1, "hljs-type"], ["id", "conclusion"], ["href", "./Getting%20Started%20With%20Coding%20a%20Scripting%20Siege%20Unit.md", 1, "link"]], template: function JavascriptGuideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Everything Javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JavascriptGuideComponent_Template_h3_click_6_listener() { return ctx.scrollToSection("variables-in-javascript"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Variables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JavascriptGuideComponent_Template_h3_click_9_listener() { return ctx.scrollToSection("conditional-statements"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Conditional Statements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JavascriptGuideComponent_Template_h3_click_12_listener() { return ctx.scrollToSection("arrays"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Arrays");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JavascriptGuideComponent_Template_h3_click_15_listener() { return ctx.scrollToSection("for-loops"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "For Loops");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JavascriptGuideComponent_Template_h3_click_18_listener() { return ctx.scrollToSection("functions"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Functions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JavascriptGuideComponent_Template_h3_click_21_listener() { return ctx.scrollToSection("objects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Objects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JavascriptGuideComponent_Template_h3_click_24_listener() { return ctx.scrollToSection("bonus-tips-to-maintain-your-code"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Bonus Tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "To get started coding your Scripting Siege units in Javascript, you of course need to the basics of the language first! This guide will try to cover the bare basics you'll need to know to write meaningful code to control your units. Keep in mind however that there is a lot to know about Javascript to fit into this guide. We\u2019ve tried our best to give a deep overview of Javascript in a way that\u2019s concise yet understandable. However, if you feel that this guide may be too fast for you, feel free to look for resources to learn at your own pace. There are many good free guides online particularly on Youtube. You could also use them to supplement what you\u2019ve learned from reading this. We highly recommend you do so since there may be some stuff we missed here that could be useful to you. In particular, we recommend this full and free ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Javascript course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "freecodecamp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Getting Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "One of the beautiful things about Javascript is that it is a very easy language to set up. As long as you have a browser on your computer, you can write and run Javascript code. Open up your browser and right-click any page. Then click inspect element which should open up a console somewhere (this can vary depending on your browser). In that console, you can start writing random Javascript code and instantly see what it does. The reason this exists is because Javascript is the language of the web. Practically all websites or web applications use Javascript in one way or another. For this reason, you\u2019ll typically see Javascript partnered with HTML and CSS (two languages specialized in designing web pages). Yet, Javascript isn\u2019t just limited to the web, it has evolved for you to use it just about anywhere. This is part of the reason it is now one of the most popular languages among developers. Anyways, if you want to get started writing and playing around with Javascript, we recommend using an IDE (integrated development environment). This is basically a fancy text editor to help you code. One of the more popular IDEs for Javascript developers is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "vscode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " which is completely free and provides useful tools for you to code more efficiently. Although you can also use an online IDE like the one provided by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Sololearn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, ". Sololearn has a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "free Javascript course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " you can use to help you better understand the concepts here or learn even further. Anyways, now that you some background knowledge of Javascript, let\u2019s start learning.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Variables in Javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "You can use variables in Javascript to store information with the desired name for it. The basic syntax for declaring a variable is like so:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "code", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "let number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " = 19;\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Note that we end the statement with a semicolon. It is a good convention but not required. However, other programming languages will require this.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Just like in math class, you'll define variables using a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " statement. After you define the variable you can use it without that ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " word before it. Keep in mind that you cannot have a variable name with spaces, numbers, or some special characters. Also, note that in Javascript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " does not mean equality but instead it is used to assign or reassign a value to a variable. For example, we can do this:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "code", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "To give that number variable a new value of 20. Variables can hold anything from booleans (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "), text (commonly known as strings), numbers, or even objects (we will discuss what those are later). Now if you wanted to increase the value stored in number by 1 you would do something like this:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "code", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, ";\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Remember that ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " does not mean equality but instead we use it to give a variable a new value. So what we are doing here is setting the value of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " to whatever value is in number plus 1. Javascript gives us a useful shortcut to increase a number variable by 1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "code", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "++;\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "You can also use a similar statement to decrease the value of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " by 1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "code", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "--;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Although, there is also another shortcut if you want to increase or decrease the value of a variable by a value not equal to 1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "code", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " += ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " -= ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h1", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Conditional Statements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Remember how we mentioned that we can store true or false values in variables? We can use true or false values to create what are called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "if statements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, ". An ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "if statement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " is pretty much some code that tells Javascript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "if this is true, then do this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, ". An if statement can optionally have an else statement following it to give instructions if whatever you were checking is false. As an example, we can do the following:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "code", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " isRainingOutside = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, ";\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " result = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "''");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, ";\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "if");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "'Bring an umbrella!'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "else");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "'What a nice day!'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Notice that we gave the result variable a value that is some text in quotation marks. This is how you set a variable to have a string (text) value.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "So what we are doing here is setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "isRainingOutside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " to true. Then we tell Javascript, if ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "isRainingOutside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " is true, then set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " to the value ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "'Bring an umbrella!'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " otherwise, we set it to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "'What a nice day!'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, ". This isn't too useful because we know the value of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "isRainingOutside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " ahead of time. Yet when you read game data from Scripting Siege this won't be the case. Also, Javascript has what is called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "conditional operators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " which are used to test certain conditions about data. For example, we can do something like this:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "code", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " age = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, ";\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " = '';\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "if");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "(age >= ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "\"Here's some alcohol.\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "else");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, " = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "\"Hey that's illegal you can't drink!\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Notice in the string values we have single quotes inside. If you intend to use text that contains single quotes, you need to wrap it in double-quotes. This way, you don't confuse Javascript into thinking you are trying to make another string.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Here, we say that if age is greater than or equal to 19 then we give the person some alcohol, otherwise we don't. But let's say the person may or may not like alcohol to begin with, we can't just give them alcohol if they don't want it. We can solve this issue like so:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "code", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " age = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, ";\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " likesAlcohol = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, ";\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, " = '';\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "if");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "(age >= ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "\"Here's some alcohol.\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "else");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "if");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "(age >= ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, " = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "\"Oh you don't like alcohol my bad.\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "else");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, " = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "\"Hey that's illegal you can't drink!\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "This is a little more involved, but we'll go through it step by step. We first check if their age is greater than or equal to 19, and (&& means and) the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "likesAlcohol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, " variable is true. If this is the case then we set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "\"Here's some alcohol.\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, ". If this is false, we then check if they're 19 and don't like alcohol (! means not). In which case we set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "\"Oh you don't like alcohol my bad.\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, " . Otherwise, if that's not true then their age must be less than 19, meaning they are not legal drinking age (at least where we are sorry Americans). If this is true then we set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "\"Hey that's illegal you can't drink!\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, ". You may be wondering what that ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "else if");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, " part does. What it does is if the first condition in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "if");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, " statement is not met, then it checks the condition in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "else if");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, ". Otherwise, if neither is true then we do whatever is in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "else");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, " statement. If the first condition is met, then Javascript doesn't even check the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "else if");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, " condition. In this example, we only used 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "else if");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, " statement but you can use as much as you need. Small note, notice how in Javascript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "&&");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, " means and, if you wanted to say ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, " you would you use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "||");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, ". Also, if you want to compare if two things are equal, you would use this operator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "===");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Arrays");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "An array in Javascript is simply a list of any values you want. They take this basic syntax:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "code", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "let nums = [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "];\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Javascript numbers each item in the array in order from 0 to the number of items - 1. So in this example, we have 5 items where item 0 is 9, item 1 is 12, item 2 is 3, item 3 is 4, and item 4 is 1. The number associated with the item is known as its index. Using the index we could access individual items using this syntax:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "code", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "let number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, " = nums[1];\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "In this case, we will be getting item 1 which has a value of 12. It's also important to understand that an array can also contain a bunch of inner arrays (usually called a 2D array). In Scripting Siege, you will see that we will use these 2D arrays to represent data about the in-game, grid. More precisely, you will encounter an array containing a bunch of inner arrays representing columns in the grid. In each of these inner arrays is data representing all the units on that column. For now, let us give you a simpler example of a 2D array:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "code", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "let grid = [\n  [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "],\n  [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "],\n  [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "],\n  [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "]\n];\n\nlet item = grid[");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "][");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, "];\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "Note that the way we formatted the 2D array is just for readability, we could have defined it on one line but doing it this way is easier to read");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "It may look a little funky seeing two consecutive square brackets with indexes in them, yet it is much simpler than it looks. Remember a 2D array is just an array with a bunch of inner arrays. So when we say ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "grid[0]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, ", we are getting the inner list at index 0. Then when we add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "[1]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, " to the end of that, we are getting the element at index 1 of that inner array. Or in other words, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "grid[0]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, " is itself an array, so we can retrieve items from particular indexes like so: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "grid[0][1]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, ". So here we are getting the 2nd item of the 1st array within the grid array. This item would have the value 2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "h1", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "For loops");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "Next, let's have a look at what a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "for loop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, " is. A for loop is just a way to tell Javascript to repeat some code a certain amount of times. It follows the following syntax:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "code", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "num");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, " = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, ";\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "for");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, " i = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "; i < ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, "num");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, "This might look like a bit much but once you start to break it down it's pretty straightforward. In the brackets after the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "for");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, " word, we declare a variable called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, " with a value of 0. Then we give a conditional statement, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "i < 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](509);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, "i++");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, " meaning we want to increase the");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "variable by 1 after each time we run code in the curly braces. So in this example, the code in the curly braces will run 10 times, since ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, " will go from 0 to 9. Notice we can also use the value of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](520, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, " within the curly braces. You'll find that using the value of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, " could be pretty useful once you start coding more. For example, you could use it to look through the items in an array:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "code", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, "let sum = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](529, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, ";\nlet nums = [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](533, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](538, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545, "];\nfor(let i = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "In this for loop, the i variable goes from 0 to the number of items in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, "nums");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, " minus 1. This is because the loop's condition ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](555, "i < nums.length");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](556, " will no longer be true when i is equal to the number of items in nums (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](558, "nums.length");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](559, "), so the loop will not run at that point. This is exactly what we want because the indexes in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](561, "nums");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](562, " range from 0 to the number of items in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](564, "nums");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](565, " minus 1. Javascript also gives us an alternate way to look through all the items in an array:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "code", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](569, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](570, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](572, "sum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](573, " = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](575, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](576, ";\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](578, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, " nums = [");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](584, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](585, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](587, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](588, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](590, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](591, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](594, "];\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](595, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](596, "for");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](597, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](599, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](600, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](602, "num");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](605, "sum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](606, " += ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](608, "num");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](609);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](611, "This time, in the brackets after the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](613, "for");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](614, " word it says ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, "let num of nums");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](617, ". What this means is that we execute the code (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](619, "sum += num");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](620, ") once for each number in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](622, "nums");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, ". Each time we execute the code, the value of num is a unique item in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, "nums");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](626, " array, going in order. In other words, the first time it executes the code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](628, "num");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](629, " is 3, then the next time we execute the code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](631, "num");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](632, " is 1, then ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](634, "num");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](635, " is 9, then ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](637, "num");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](638, " is 2, then finally in the last time the loop executes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](640, "num");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](641, " is 5.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "h1", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](643, "Functions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](645, "In programming, a function is a collection of related code that you can reuse whenever you want. Like functions in math class, they can take input and give back output, although you don't necessarily need to give an output if you don't need to. To create a function, you would do something like this:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "code", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](648, "function ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](650, "sum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](651);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](652, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](653, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](654, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](656, "sum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](657, " = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](659, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](660, ";\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](661, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](662, "for");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](663, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](665, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](666, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](668, "num");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](669);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](671, "sum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](672, " += ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](674, "num");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](675);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](677, "return");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](678, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](680, "sum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](681);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](682, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](683, "Here, our function accepts an input called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](684, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](685, "nums");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](686, " which we assume is an array of numbers. If it's not an array an error will probably occur, in which case it won't run. Also, if the array contains items that aren't numbers then you will probably get unexpected behavior. Thus, it is important to make sure you give this function the right input whenever you use it. Going to the contents of the function, we add all the numbers in the array to get the sum. You will notice at the end, we have this line of code: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](688, "return sum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](689, ". This is saying that the output of our function will be the sum. When we want to use this function, we would do something like this:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](691, "code", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](692, "let mySum = sum([");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](694, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](695, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](697, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](698, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](699, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](700, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](701, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](702, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](703, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](704, "]);\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](705, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](706, "Here, we use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](708, "sum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](709, " function with an array of numbers as an input. Then we store the output of the function in a variable called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](711, "mySum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](712, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](713, "h1", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](714, "Objects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](716, "Next, let's discuss objects in Javascript. An object is just a collection of related variables and functions that you store as a single variable. They are typically used to model a real-world thing. For example, we can create an object to represent a dog:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "code", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](720, "let myDoggo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](721);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](722, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](723, "'Steve'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](724, ",\n  ownerName: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](726, "'Bobbert'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](727, ",\n  collarColor: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](729, "'red'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](730);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](732, "Here, we create an object representing a dog and store it as a variable called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](733, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](734, "myDoggo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](735, ". If we want to access variables in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](736, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](737, "myDoggo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](738, " object we would do something like this:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](739, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "code", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](741, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](742, "let name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](743, " = myDoggo.name;\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](745, "let owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](746, " = myDoggo.ownerName;\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](747, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](748, "let collarColor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](749, " = myDoggo.collarColor;\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](750, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](751, "let age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](752, " = myDoggo.age;\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](754, "An object can even contain functions in them if you need them to. For example, if you had a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](756, "bark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](757, " function in that dog object, you would use it like so:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "code", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](760, "myDoggo.bark()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](762, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](763, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "h1", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](765, "Bonus Tips to Maintain Your Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](766, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](767, "The more you code, the more you'll realize that things can get pretty wild as you start coding more complex stuff. For example, you'll come to realize you'll very rarely do things right the first time. As well, sometimes it could be easy to forget exactly how some of the code you wrote works. Here, we'll show you some small tips to help you out with both of these issues. To help remember how your code works, programming languages including Javascript have a feature called comments. These are little notes you can write in your code for personal use:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "code", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](770, "// ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](771, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](772, "This");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](773, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](775, "is");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](776, " a single-line comment. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](777, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](778, "The");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](779, " code below me declares a variable called number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](780, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](781, "with");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](782, " a value ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](783, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](784, "of");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](785, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](786, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](787, "42");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](788, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](790, "let");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](791, " number = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](792, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](793, "42");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](794, ";\n/*\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](795, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](796, "This");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](797, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](798, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](799, "is");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](800, " a multi-line comment\nI can ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](802, "type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](803, " random text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](804, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](805, "in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](806, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](807, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](808, "as");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](809, " many\nlines ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](810, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](811, "as");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](812, " I see fit\n*/\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](813, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](814, "Anything wrapped between the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](815, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](816, "/*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](817, " and the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](818, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](819, "*/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](820, " or following a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](822, "//");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](823, " will be ignored because Javascript knows those are just personal notes. Although useful, they won't help you if there is a bug in your code. A small tool that can help you debug your code is the use of print statements. Print statements tell Javascript to print out data to the console in your browser. To do this, you would simply type the following:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](824, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](825, "code", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](826, "let myData = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](827, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](828, "42");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](829, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](830, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](831, "\nconsole.log(myData)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](832, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](833, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](834, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](835, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](836, "Note that you can print out practically anything you want this way. So if something goes wrong you can print out the values of certain data to check their state when you run your code. Recall in the beginning we mentioned a Javascript console in your browser. This is where the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](837, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](838, "console.log");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](839, " statements print out the data. Javascript will also print out errors in the console if something goes very wrong that would cause it to stop. Although it can be a little frustrating to see it can give useful hints for you to find what went wrong.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](840, "h1", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](841, "Conclusion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](843, "In this guide, we went over the fundamental Javascript concepts you need to help you get started coding your units in Scripting Siege. If you understood these concepts you should be ready to start writing your own code that can be used in the game. Just make sure you have a look at the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](844, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](845, "documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](846, " to see how exactly to get started.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(isRainingOutside)", "{", "\n  result = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](";\n", "}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "{", "\n  result = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](";\n", "}", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](")", "{", "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](";\n", "}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "{", "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](";\n", "}", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" && likesAlcohol)", "{", "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](";\n", "}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" && !likesAlcohol)", "{", "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](";\n", "}", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "{", "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](";\n", "}", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("; i++)", "{", "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" = i;\n", "}", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" meaning as long as i is less than 10 keep repeating what is in the curly braces (these: ", "{", " ). Then after that, we say ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("; i < nums.length; i++)", "{", "\n  sum += nums[i];\n", "}", "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" of nums)", "{", "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](";\n", "}", "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(nums)", "{", "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" of nums)", "{", "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](";\n\n  ", "}", "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](";\n", "}", "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" = ", "{", "\n  name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](",\n  age: 5\n", "}", ";\n");
    } }, styles: ["#main-content[_ngcontent-%COMP%]{\r\n\r\n  background-color: #141C34;\r\n  color: white;\r\n  width: 1188px;\r\n  margin: 0 auto;\r\n  padding: 0 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n}\r\n\r\n#docs-content[_ngcontent-%COMP%]{\r\n\r\n  flex-grow: 3;\r\n  flex-basis: 85%;\r\n  padding-top: 54px;\r\n  overflow-x: auto;\r\n\r\n}\r\n\r\n#book-marks[_ngcontent-%COMP%]{\r\n\r\n  flex-grow: 1;\r\n  flex-basis: 15%;\r\n  padding: 54px 10px;\r\n  margin-right: 45px;\r\n  border-right: 1px solid white;\r\n\r\n}\r\n\r\n#book-marks[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n\r\n  font-size: 15px;\r\n\r\n}\r\n\r\n#book-marks[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n\r\n  color: #2CDD3E;\r\n\r\n}\r\n\r\n.link[_ngcontent-%COMP%]{\r\n\r\n  text-decoration: none;\r\n  color: #A4000F;\r\n\r\n}\r\n\r\n.link[_ngcontent-%COMP%]:hover{\r\n\r\n  color: #2CDD3E;\r\n\r\n}\r\n\r\ncode[_ngcontent-%COMP%]{\r\n\r\n  color: #2CDD3E;\r\n  font-family: codefont;\r\n\r\n}\r\n\r\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  border: 1px solid white;\r\n  border-collapse: collapse;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]{\r\n\r\n  width: 500px;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\r\n\r\n  padding: 10px;\r\n\r\n}\r\n\r\nth[_ngcontent-%COMP%]{\r\n\r\n  text-align: center;\r\n\r\n}\r\n\r\n#main-header[_ngcontent-%COMP%]{\r\n\r\n  color: #2CDD3E;\r\n  margin: 100px auto 57px;\r\n  width: 1228px;\r\n\r\n}\r\n\r\n#title[_ngcontent-%COMP%]{\r\n\r\n  font-family: codefont;\r\n  font-size: 60px;\r\n\r\n}\r\n\r\n.page-ref[_ngcontent-%COMP%]{\r\n\r\n  text-decoration: none;\r\n  color: white;\r\n\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n\r\n  width: 100%;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb2NzL2RvY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7O0FBRWhDOztBQUVBOztFQUVFLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjs7QUFFbEI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDZCQUE2Qjs7QUFFL0I7O0FBRUE7O0VBRUUsZUFBZTs7QUFFakI7O0FBRUE7O0VBRUUsY0FBYzs7QUFFaEI7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLGNBQWM7O0FBRWhCOztBQUVBOztFQUVFLGNBQWM7O0FBRWhCOztBQUdBOztFQUVFLGNBQWM7RUFDZCxxQkFBcUI7O0FBRXZCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjs7QUFFckI7O0FBRUE7O0VBRUUsYUFBYTs7QUFFZjs7QUFFQTs7RUFFRSxrQkFBa0I7O0FBRXBCOztBQUVBOztFQUVFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsYUFBYTs7QUFFZjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsZUFBZTs7QUFFakI7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLFlBQVk7O0FBRWQ7O0FBRUE7O0VBRUUsV0FBVzs7QUFFYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jcy9kb2NzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1jb250ZW50e1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxQzM0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTE4OHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbn1cclxuXHJcbiNkb2NzLWNvbnRlbnR7XHJcblxyXG4gIGZsZXgtZ3JvdzogMztcclxuICBmbGV4LWJhc2lzOiA4NSU7XHJcbiAgcGFkZGluZy10b3A6IDU0cHg7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuXHJcbn1cclxuXHJcbiNib29rLW1hcmtze1xyXG5cclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZmxleC1iYXNpczogMTUlO1xyXG4gIHBhZGRpbmc6IDU0cHggMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XHJcblxyXG59XHJcblxyXG4jYm9vay1tYXJrcyBoM3tcclxuXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG5cclxufVxyXG5cclxuI2Jvb2stbWFya3MgYTpob3ZlcntcclxuXHJcbiAgY29sb3I6ICMyQ0REM0U7XHJcblxyXG59XHJcblxyXG4ubGlua3tcclxuXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjQTQwMDBGO1xyXG5cclxufVxyXG5cclxuLmxpbms6aG92ZXJ7XHJcblxyXG4gIGNvbG9yOiAjMkNERDNFO1xyXG5cclxufVxyXG5cclxuXHJcbmNvZGV7XHJcblxyXG4gIGNvbG9yOiAjMkNERDNFO1xyXG4gIGZvbnQtZmFtaWx5OiBjb2RlZm9udDtcclxuXHJcbn1cclxuXHJcbnRhYmxlLCB0aCwgdGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbnRhYmxle1xyXG5cclxuICB3aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxufVxyXG5cclxudGgsIHRke1xyXG5cclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxufVxyXG5cclxudGh7XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbiNtYWluLWhlYWRlcntcclxuXHJcbiAgY29sb3I6ICMyQ0REM0U7XHJcbiAgbWFyZ2luOiAxMDBweCBhdXRvIDU3cHg7XHJcbiAgd2lkdGg6IDEyMjhweDtcclxuXHJcbn1cclxuXHJcbiN0aXRsZXtcclxuXHJcbiAgZm9udC1mYW1pbHk6IGNvZGVmb250O1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuXHJcbn1cclxuXHJcbi5wYWdlLXJlZntcclxuXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbmltZ3tcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JavascriptGuideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-javascript-guid',
                templateUrl: './javascript-guide.component.html',
                styleUrls: ['../docs/docs.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["ViewportScroller"] }, { type: _services_login_authy_login_service__WEBPACK_IMPORTED_MODULE_2__["AuthyLoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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