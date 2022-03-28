"use strict";
(() => {
var exports = {};
exports.id = 394;
exports.ids = [394,200];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "GenerateReport": () => (/* binding */ GenerateReport),
  "InsertArray": () => (/* binding */ InsertArray),
  "Login": () => (/* binding */ Login),
  "Logout": () => (/* binding */ Logout),
  "MasterData": () => (/* binding */ MasterData),
  "Register": () => (/* binding */ Register),
  "TestApi": () => (/* binding */ TestApi),
  "UserAssignData": () => (/* binding */ UserAssignData),
  "ValidateData": () => (/* binding */ ValidateData),
  "currencyFormat": () => (/* binding */ currencyFormat),
  "getUserInfo": () => (/* binding */ getUserInfo),
  "handleChangeData": () => (/* binding */ handleChangeData),
  "handleChangeInput": () => (/* binding */ handleChangeInput),
  "handleClassRequireField": () => (/* binding */ handleClassRequireField),
  "handleStyleField": () => (/* binding */ handleStyleField),
  "handleStyleFieldDate": () => (/* binding */ handleStyleFieldDate),
  "simulateMouseClick": () => (/* binding */ simulateMouseClick)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./pages/api/Config.js
var Config = __webpack_require__(9079);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/ApiService.js




let source = external_axios_default().CancelToken.source();
let config = {
    cancelToken: source.token
};
let API = (0,Config.APIUrl)();
const MasterData = ()=>{
    const { 0: data , 1: setData  } = (0,external_react_.useState)([]);
    const { 0: isLoaded , 1: setIsLoaded  } = (0,external_react_.useState)(false);
    const { 0: error1 , 1: setError  } = (0,external_react_.useState)(null);
    const url = API + '/api/masterData';
    (0,external_react_.useEffect)(()=>{
        const fetchData = ()=>{
            external_axios_default().get(url, config).then((res)=>{
                setIsLoaded(true);
                setData(res.data.MasterList);
            }).catch((error)=>{
                setError(error);
            });
        };
        fetchData();
    }, [
        url
    ]);
    return {
        error: error1,
        isLoaded,
        data
    };
};
const UserAssignData = ()=>{
    const { 0: data , 1: setData  } = (0,external_react_.useState)([]);
    const { 0: isLoaded , 1: setIsLoaded  } = (0,external_react_.useState)(false);
    const { 0: error2 , 1: setError  } = (0,external_react_.useState)(null);
    const url = API + '/api/userAssign';
    (0,external_react_.useEffect)(()=>{
        const fetchData = ()=>{
            external_axios_default().get(url, config).then((res)=>{
                setIsLoaded(true);
                setData(res.data.MasterList);
            }).catch((error)=>{
                setError(error);
            });
        };
        fetchData();
    }, [
        url
    ]);
    return {
        error: error2,
        isLoaded,
        data
    };
};
const InsertArray = (arr, ...newItems)=>[
        ...arr.slice(0, arr.length - 1),
        ...newItems,
        ...arr.slice(arr.length - 1)
    ]
;
const Register = (data)=>{
    data.cancelToken = source.token;
    return external_axios_default().post(API + '/api/login', data);
};
const Login = async (data)=>{
    data.cancelToken = source.token;
    data.ldapURL = API.ldapURL;
    const response = await external_axios_default().post(API.defaultHost + '/api/login', data);
    if (response) {
        localStorage.setItem("user_data", JSON.stringify(response.data));
    }
    return response.data;
};
const TestApi = async (data)=>{
    console.log('API backendHost>> ' + API.backendHost);
    console.log('API defaultHost>> ' + API.defaultHost);
    const response = await external_axios_default().get(API.defaultHost + '/api/testApi', {
        crossDomain: true
    });
    if (response) {
        localStorage.setItem("testApi: ", JSON.stringify(response.data));
    }
    return response.data;
};
const Logout = ()=>{
    localStorage.removeItem('user_data');
    // Router.push('/page/LoginPage')
    router_default().push('/');
};
const ValidateData = async (data)=>{
    data.cancelToken = source.token;
    // const response = await axios.post(API.backendHost + '/validateData', data);
    const response = await external_axios_default().post(API.defaultHost + '/api/validateData', data);
    return response.data;
};
const GenerateReport = async (param)=>{
    param.cancelToken = source.token;
    const response = await external_axios_default().post(API + '/api/exportExcel', param, {
        responseType: 'blob'
    });
    return response.data;
};
const mouseClickEvents = [
    'mousedown',
    'click',
    'mouseup'
];
const simulateMouseClick = (element)=>{
    mouseClickEvents.forEach((mouseEventType)=>element.dispatchEvent(new MouseEvent(mouseEventType, {
            view: window,
            bubbles: true,
            cancelable: true,
            buttons: 1
        }))
    );
};
const getUserInfo = (data)=>{
    const userInfoNew = data;
    userInfoNew.userRole = 'user';
    for(let i = 0; i < data.roleList.length; i++){
        if ('admin' === data.roleList[i].roleName) {
            userInfoNew.userRole = 'admin';
            break;
        }
    }
    return userInfoNew;
};
//action select dropdown for set data to session
const handleChangeData = (selected, setSelected, key)=>(e)=>{
        if (e) {
            // console.log('xx1!>> ' + key + ' : ' + e);
            const value = e;
            setSelected({
                ...selected,
                [key]: value
            });
        } else {
            setSelected({
                ...selected,
                [key]: ''
            });
        }
    }
;
const handleChangeInput = (inputs1, setInputs)=>(e)=>{
        console.log('event e: ' + e);
        const { name , value  } = e.target;
        setInputs((inputs)=>({
                ...inputs,
                [name]: value
            })
        );
    }
;
const handleClassRequireField = (submitted, field)=>{
    return 'form-control' + (submitted && !field ? ' is-invalid' : '');
};
const handleStyleField = (submitted, field)=>{
    return {
        borderColor: submitted && !field ? '#dc3545' : ''
    };
};
const handleStyleFieldDate = (submitted, field)=>{
    console.log('xxx : ' + (submitted && !field));
    return submitted && !field ? 'reqRed' : '.rs-picker-default .rs-picker-toggle.rs-btn';
};
const currencyFormat = (num)=>{
    let currency = 0;
    if (num.length > 0) {
        num = num.replaceAll(',', '');
        currency = parseFloat(num);
    }
    return currency.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [79], () => (__webpack_exec__(4731)));
module.exports = __webpack_exports__;

})();