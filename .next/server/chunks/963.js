"use strict";
exports.id = 963;
exports.ids = [963];
exports.modules = {

/***/ 1963:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_ApiService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8763);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2899);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7269);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4210);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rsuite__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_4__]);
reactstrap__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// import 'bootstrap/dist/css/bootstrap.min.css';



const LoginPage = ({ props  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    //set default state
    const { 0: inputs , 1: setInputs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        username: '',
        password: ''
    });
    const { 0: submitted , 1: setSubmitted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isLogin , 1: setIsLogin  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { username , password  } = inputs;
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setSubmitted(true);
        if (username && password) {
            const response = await (0,_api_ApiService__WEBPACK_IMPORTED_MODULE_2__/* .Login */ .m3)(inputs);
            // console.log("login data: " + JSON.stringify(response, "", "\t"));
            console.log("res status: " + response.status);
            if ('success' === response.status) {
                setLoading(false);
                setIsLogin(true);
                // props.history.push("/mainPage");
                router.push('/page/MainPage');
            } else {
                setLoading(false);
                setIsLogin(false);
            }
        } else {
            setLoading(false);
        }
    };
    const testApi = async ()=>{
        const response = await (0,_api_ApiService__WEBPACK_IMPORTED_MODULE_2__/* .TestApi */ .Se)('');
        console.log('test resp: ' + JSON.stringify(response));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "Login",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                name: "form",
                onSubmit: handleSubmit,
                children: [
                    !isLogin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_3___default()), {
                        variant: "danger",
                        children: "Username or Password is not correct."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "form-group",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                    sm: "4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        onClick: ()=>{
                                            testApi();
                                        },
                                        children: "Username"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                    sm: "8",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(rsuite__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                        name: "username",
                                        value: username,
                                        onChange: (0,_api_ApiService__WEBPACK_IMPORTED_MODULE_2__/* .handleChangeData */ .vl)(inputs, setInputs, 'username'),
                                        className: (0,_api_ApiService__WEBPACK_IMPORTED_MODULE_2__/* .handleClassRequireField */ .iM)(submitted, username)
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "form-group",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                    sm: "4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "Password"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                    sm: "8",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(rsuite__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                        type: "password",
                                        name: "password",
                                        value: password,
                                        onChange: (0,_api_ApiService__WEBPACK_IMPORTED_MODULE_2__/* .handleChangeData */ .vl)(inputs, setInputs, 'password'),
                                        className: (0,_api_ApiService__WEBPACK_IMPORTED_MODULE_2__/* .handleClassRequireField */ .iM)(submitted, password)
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "form-group",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                    sm: "4"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                                    sm: "8",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: "btn btn-primary",
                                        children: [
                                            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "spinner-border spinner-border-sm mr-1"
                                            }),
                                            "Login"
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;