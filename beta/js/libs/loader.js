/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let Global = {
    pr_tank:[],
    jqready:false,
    swready:false,
    notifyallow:false,
    trend1_data:[],
    trend2_data:[],
    trend3_data:[],
    trend4_data:[],
    Trend1:undefined,
    Trend2:undefined,
    Trend3:undefined,
    Trend4:undefined,
    trend1Container:undefined,
    trend2Container:undefined,
    trend3Container:undefined,
    trend4Container:undefined,
    emer:{
        state:false,
        color:"",
        msg:"",
        users:[],
        user_msg:[]
    },
    loggedAs:"",
    tankselect:"",
    nodes:[],
    nodeDependencies:{},
    conerr:0
};
/* harmony default export */ __webpack_exports__["a"] = Global;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by SavinSV on 15.12.16.
 */
function Integrator(){
    this.init = true;
    this.lastPoint = 0;
    this.filtered = true;
    this.integrityOnly = false;
    this.prefilterPoints = 1;
    this.postfilterPoints = 1;


    this.Buffer = [0,0];

    this.setFilter = function(pre, post){
        this.Buffer = [];
        //----------Post points------------
        for(var el=0; el<post; el++){
            this.Buffer.push(0);
        }
        //-----------Pre points------------
        for(var el=0; el<pre; el++){
            this.Buffer.push(0);
        }

        this.prefilterPoints = pre;
        this.postfilterPoints = post;

        if(pre || post){
            this.filtered = true;
        }else{
            this.filtered = false;
        }
    };

    this.Integrity = function(val){
        var ret;
        if(!this.filtered){
            ret = val - this.lastPoint;
            this.lastPoint = val;

        }else{
            this.Buffer.shift();
            this.Buffer.push(val);
            if(this.integrityOnly){
                var Interg = this.DFilter();
            }else{
                var Interg = this.Filter();
            }
        }
        if(this.init){
            for(var el = 0; el<this.Buffer.length; el++){
                this.Buffer[el]=val;
            }
            this.init = false;
            return 0;
        }else{
            //Global.blink2.stop();
            return Interg;    
        }
        
    };

    this.Filter = function(){
        var ret;
        if(this.Buffer.length){
            var summPost = 0;
            var summPre = 0;
            for(var el = 0; el<this.Buffer.length; el++){
                if(el<this.postfilterPoints){
                    summPost += this.Buffer[el];
                }else{
                    summPre += this.Buffer[el];
                }

            }
            var avrPost = summPost/this.postfilterPoints;
            var avrPre = summPre/this.prefilterPoints;
            ret = avrPre*10 - avrPost*10;
            return ret/10;
        }
    };
    this.DFilter = function(){
        if(this.Buffer.length){
            var summ = 0.0;
            for(var el = 0; el<this.Buffer.length; el++){
                summ += this.Buffer[el];
            }
            var avr = summ/this.Buffer.length;
            return avr;
        }
    };
};

/* harmony default export */ __webpack_exports__["a"] = Integrator;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__integrator_js__ = __webpack_require__(1);
console.log(this);



window.Global = __WEBPACK_IMPORTED_MODULE_0__global_js__["a" /* default */];
window.Integrator = __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */];

Global.IntegratorForArrows1 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows2 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows3 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows4 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows5 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows6 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows7 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows8 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows9 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows10 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows11 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows12 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows13 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows14 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows15 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows16 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows17 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows18 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows19 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows20 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();

Global.IntegratorForArrows51 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows52 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows53 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows54 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows55 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows56 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();

Global.IntegratorForArrows69 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows70 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows71 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows72 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();
Global.IntegratorForArrows73 = new __WEBPACK_IMPORTED_MODULE_1__integrator_js__["a" /* default */]();

Global.IntegratorForArrows1.setFilter(2,2);
Global.IntegratorForArrows2.setFilter(2,2);
Global.IntegratorForArrows3.setFilter(2,2);
Global.IntegratorForArrows4.setFilter(2,2);
Global.IntegratorForArrows5.setFilter(2,2);
Global.IntegratorForArrows6.setFilter(2,2);
Global.IntegratorForArrows7.setFilter(2,2);
Global.IntegratorForArrows8.setFilter(2,2);
Global.IntegratorForArrows9.setFilter(2,2);
Global.IntegratorForArrows10.setFilter(2,2);
Global.IntegratorForArrows11.setFilter(2,2);
Global.IntegratorForArrows12.setFilter(2,2);
Global.IntegratorForArrows13.setFilter(2,2);
Global.IntegratorForArrows14.setFilter(2,2);
Global.IntegratorForArrows15.setFilter(2,2);
Global.IntegratorForArrows16.setFilter(2,2);
Global.IntegratorForArrows17.setFilter(2,2);
Global.IntegratorForArrows18.setFilter(2,2);
Global.IntegratorForArrows19.setFilter(2,2);
Global.IntegratorForArrows20.setFilter(2,2);

Global.IntegratorForArrows51.setFilter(2,2);
Global.IntegratorForArrows52.setFilter(2,2);
Global.IntegratorForArrows53.setFilter(2,2);
Global.IntegratorForArrows54.setFilter(2,2);
Global.IntegratorForArrows55.setFilter(2,2);
Global.IntegratorForArrows56.setFilter(2,2);

Global.IntegratorForArrows69.setFilter(2,2);
Global.IntegratorForArrows70.setFilter(2,2);
Global.IntegratorForArrows71.setFilter(2,2);
Global.IntegratorForArrows72.setFilter(2,2);
Global.IntegratorForArrows73.setFilter(2,2);

Global.IntegratorCon = true;

/***/ })
/******/ ]);