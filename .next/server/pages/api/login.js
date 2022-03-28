"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994,200];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9267:
/***/ ((module) => {

module.exports = require("nextjs-cors");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9267);
/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nextjs_cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9079);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



let API = (0,_Config_js__WEBPACK_IMPORTED_MODULE_2__.APIUrl)();
async function handler(req, res) {
    await nextjs_cors__WEBPACK_IMPORTED_MODULE_0___default()(req, res, {
        methods: [
            'GET',
            'HEAD',
            'PUT',
            'PATCH',
            'POST',
            'DELETE'
        ],
        origin: '*',
        optionsSuccessStatus: 200
    });
    if (req.method === 'POST') {
        await axios__WEBPACK_IMPORTED_MODULE_1___default().post(API.backendHost + '/login', req.body).then((response)=>{
            console.log(response.data);
            res.send(response.data);
        });
    } else {}
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [79], () => (__webpack_exec__(8420)));
module.exports = __webpack_exports__;

})();