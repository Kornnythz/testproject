"use strict";
exports.id = 79;
exports.ids = [79];
exports.modules = {

/***/ 9079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIUrl": () => (/* binding */ APIUrl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const APIUrl = ()=>{
    let urlConfig = {};
    const apiName = '/WebPreScreenLinkedWS';
    // const hostname = (typeof window !== 'undefined' && window.location.origin ? window.location.origin : '');
    // const hostname = 'https://uat-hpleasing.thailife.com/WebPreScreening'; //172.34.72.237
    // const hostname = 'https://dev-hpleasing.thailife.com/WebPreScreening'; //172.34.72.237
    const hostname = 'http://localhost:3000/WebPreScreening';
    console.log('current url : ' + hostname);
    //front web url
    urlConfig.defaultHost = hostname;
    // //api url (IP)
    let urlApiLocal = "http://192.168.159.76:8080" //localhost iTAM
    ;
    // let urlApiDev = "http://10.102.60.20:8080/WebPreScreenLinkedWS";
    // let urlApiSit = "http://10.102.63.20:8080/WebPreScreenLinkedWS";
    // let urlApiUat = "http://10.102.65.20:8080/WebPreScreenLinkedWS";
    // let urlApiPreProd = "http://10.102.45.43:8080/WebPreScreenLinkedWS";
    // let urlApiProd = "";
    //api url (Domain name)
    let urlApiDevDomain = "http://dev-sgi-api.thailife.com:8280/WebPreScreenLinkedWS"; //port8243 //dev-tws.thailife.com:8080/WebPreScreenLinkedWS
    let urlApiSitDomain = "https://sit-sgi-api.thailife.com:8243/WebPreScreenLinkedWS"; //sit-tws.thailife.com:8080/WebPreScreenLinkedWS
    // let urlApiUatDomain = "https://uat-sgi-api.thailife.com:8243/WebPreScreenLinkedWS";
    // let urlApiUatDomain = "http://uat-sgi-api.thailife.com:8280/WebPreScreenLinkedWS"; //P'Lalita advice
    let urlApiUatDomain = "http://uat-sginonag-api.thailife.com:8280/WebPreScreenLinkedWS"; //P'Sakda advice
    let urlApiPreProdDomain = "corews.thailife.com:8080/WebPreScreenLinkedWS";
    let urlApiProdDomain = "corews.thailife.com:8080/WebPreScreenLinkedWS";
    //let urlTest = 'dev-hpleasing.thailife.com/WebPreScreening/login';
    if (hostname.includes("localhost")) {
        console.log('local env!!!!');
        // urlConfig.backendHost = urlApiLocal; //local iTAM
        // urlConfig.backendHost = urlApiDevDomain;
        urlConfig.backendHost = urlApiUatDomain;
    } else if (hostname.includes("dev")) {
        console.log('dev env!!!!');
        urlConfig.backendHost = urlApiDevDomain;
    } else if (hostname.includes("sit")) {
        console.log('sit env!!!!');
        urlConfig.backendHost = urlApiSitDomain;
    } else if (hostname.includes("uat")) {
        console.log('uat env!!!!');
        urlConfig.backendHost = urlApiUatDomain;
    } else if (hostname.includes("preprod")) {
        console.log('prepord env!!!!');
        urlConfig.backendHost = urlApiPreProdDomain;
    } else {
        console.log('case no env : ' + hostname);
        urlConfig.backendHost = hostname + apiName;
    }
    console.log('call url final : ' + urlConfig.backendHost);
    return urlConfig;
};



/***/ })

};
;