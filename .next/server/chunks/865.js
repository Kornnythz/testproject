"use strict";
exports.id = 865;
exports.ids = [865];
exports.modules = {

/***/ 9493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OverwriteMomentBE)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _date_io_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5696);
/* harmony import */ var _date_io_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_date_io_moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment_locale_th__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(195);
/* harmony import */ var moment_locale_th__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_locale_th__WEBPACK_IMPORTED_MODULE_2__);



class OverwriteMomentBE extends (_date_io_moment__WEBPACK_IMPORTED_MODULE_1___default()) {
    constructor({ locale , formats , instance  }){
        super({
            locale,
            formats,
            instance
        });
    }
    date = (value = null)=>{
        if (value === null) {
            return null;
        }
        const moment1 = this.moment(value);
        moment1.locale(this.locale);
        return moment1;
    };
    toBuddhistYear(moment2, format) {
        var christianYear = moment2.format('YYYY');
        var buddhishYear = (parseInt(christianYear) + 543).toString();
        return moment2.format(format.replace('YYYY', buddhishYear).replace('YY', buddhishYear.substring(2, 4))).replace(christianYear, buddhishYear);
    }
    format = (date, formatKey)=>{
        return this.toBuddhistYear(date, formatKey);
    };
};


/***/ }),

/***/ 8865:
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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7269);
/* harmony import */ var rsuite_dist_rsuite_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6050);
/* harmony import */ var rsuite_dist_rsuite_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rsuite_dist_rsuite_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_ApiService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8763);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4210);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rsuite__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _component_OverwriteMomentBE__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9493);
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8314);
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([reactstrap__WEBPACK_IMPORTED_MODULE_2__]);
reactstrap__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







// import dayjs from 'dayjs'
// import { WatDatePicker } from 'thaidatepicker-react'
// import NumberFormat from 'react-number-format';



// import DateFnsUtils from "@date-io/date-fns";
const MainPage = (props)=>{
    // console.log("data from load login : " + JSON.stringify(props.userDetail, "", "\t"));
    const { 0: userData , 1: setUserData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{
        try {
            // const item = window.localStorage.user_data;
            const item = null;
            return item ? JSON.parse(item) : {};
        } catch (error) {
            console.log(error);
            return {};
        }
    });
    const { 0: resultInfoModal , 1: setResultInfoModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const closeResultInfoModal = ()=>{
        setResultInfoModal(!resultInfoModal);
    // props.history.push("/login");
    };
    const { 0: inputs , 1: setInputs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        firstName: '',
        lastName: '',
        idNo: '',
        birthDate: new Date(),
        // planCode: 'L058',
        planCode: '',
        sum: '',
        termInsure: '',
        sex: '',
        userName: userData.username
    });
    const { 0: outputs , 1: setOutputs  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const { firstName , lastName , idNo , birthDate , planCode , sum , /*termInsure,*/ sex  } = inputs;
    const { 0: submitted , 1: setSubmitted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: warningLabel , 1: setWarningLabel  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const dropdownStyle1 = {
        zIndex: 99
    };
    const { 0: isFocus , 1: setIsFocus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleValidationSubmit = async (e)=>{
        // e.preventDefault();
        setLoading(true);
        setSubmitted(true);
        console.log("data submit: " + JSON.stringify(inputs));
        if (firstName && lastName && idNo && birthDate && planCode && sum /*&& termInsure && sex */ ) {
            let currencyBefore = inputs.sum.replaceAll(',', '');
            inputs.sum = currencyBefore;
            const response = await (0,_api_ApiService__WEBPACK_IMPORTED_MODULE_4__/* .ValidateData */ .Z0)(inputs);
            console.log("ValidateData result: " + JSON.stringify(response));
            console.log("response.result: " + response.result);
            let currencyAfter = (0,_api_ApiService__WEBPACK_IMPORTED_MODULE_4__/* .currencyFormat */ .OH)(inputs.sum);
            inputs.sum = currencyAfter;
            if (response.result) {
                setLoading(false);
                // props.history.push("/mainPage");
                setResultInfoModal(true);
                setOutputs({
                    result: response.result,
                    message: response.message,
                    detail: response.detail
                });
            } else {
                setLoading(false);
                setResultInfoModal(true);
                setOutputs({
                    result: response.result,
                    message: response.message,
                    detail: response.detail
                });
            }
        } else {
            setLoading(false);
        }
    };
    // const [selectedDate, setSelectedDate] = useState("")
    const { 0: selectedDate , 1: handleDateChange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());
    // const [selectedDate, handleDateChange] = useState(null);
    const { 0: selectedThaiDate , 1: setSelectedThaiDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleWatDatePickerChange = (christDate, buddhistDate)=>{
        // console.log(christDate)
        // console.log(buddhistDate);
        // setSelectedDate(christDate);
        // setSelectedThaiDate(buddhistDate);
        setInputs({
            ...inputs,
            ['birthDate']: christDate
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "MainHeader",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            md: 7
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            md: 4,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "head-label",
                                children: [
                                    "Welcome :",
                                    userData.fullname
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            md: 1,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(rsuite__WEBPACK_IMPORTED_MODULE_5__.ButtonGroup, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(rsuite__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                    className: "btn-logout",
                                    onClick: (e)=>{
                                        (0,_api_ApiService__WEBPACK_IMPORTED_MODULE_4__/* .Logout */ .RD)();
                                    },
                                    children: "Logout"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "MainPage",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    name: "main_form",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    sm: "2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "ชื่อ"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    sm: "4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(rsuite__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                        // label="ชื่อ"
                                        name: "firstName",
                                        placeholder: "ระบุชื่อ",
                                        autoComplete: "off",
                                        value: firstName,
                                        onChange: (0,_api_ApiService__WEBPACK_IMPORTED_MODULE_4__/* .handleChangeData */ .vl)(inputs, setInputs, 'firstName'),
                                        // className={handleClassRequireField(submitted, firstName)}
                                        style: (0,_api_ApiService__WEBPACK_IMPORTED_MODULE_4__/* .handleStyleField */ .lW)(submitted, firstName)
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    sm: "2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "นามสกุล"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    sm: "4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(rsuite__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                        // label=""
                                        name: "lastName",
                                        placeholder: "ระบุนามสกุล",
                                        autoComplete: "off",
                                        value: lastName,
                                        onChange: (0,_api_ApiService__WEBPACK_IMPORTED_MODULE_4__/* .handleChangeData */ .vl)(inputs, setInputs, 'lastName'),
                                        // className={handleClassRequireField(submitted, lastName)}
                                        style: (0,_api_ApiService__WEBPACK_IMPORTED_MODULE_4__/* .handleStyleField */ .lW)(submitted, lastName)
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    sm: "2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "วัน/เดือน/ปี"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    sm: "4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__.MuiPickersUtilsProvider, {
                                        utils: _component_OverwriteMomentBE__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                        locale: "th",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__.KeyboardDatePicker, {
                                            autoOk: true,
                                            placeholder: "ระบุวันเกิด",
                                            // variant="inline"
                                            // inputVariant="outlined"
                                            // label="วันเกิด"
                                            format: "DD/MM/YYYY",
                                            views: [
                                                "year",
                                                "month",
                                                "date"
                                            ],
                                            openTo: "year",
                                            maxDate: new Date(),
                                            value: selectedDate,
                                            // InputAdornmentProps={{ position: "end" }} //use for KeyboardDatePicker only
                                            InputProps: {
                                                disableUnderline: true
                                            },
                                            // onChange={date => handleDateChange(date)}
                                            onChange: (date)=>{
                                                handleDateChange(date);
                                                setInputs({
                                                    ...inputs,
                                                    ['birthDate']: date
                                                });
                                            },
                                            style: {
                                                border: '1px solid #e5e5ea',
                                                borderRadius: 6,
                                                width: '100%',
                                                paddingLeft: 12,
                                                alignItems: 'normal',
                                                fontWeight: 1,
                                                borderColor: submitted && !birthDate ? '#dc3545' : '#e5e5ea'
                                            }
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    sm: "2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    sm: "4"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    sm: "2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "เลขที่บัตรประชาชน"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    sm: "4",
                                    children: [
                                        warningLabel && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            style: {
                                                color: '#dc3545'
                                            },
                                            children: "*เลขที่บัตรประชาชนต้องครบ 13 หลัก"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(rsuite__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                            // label=""
                                            name: "idNo",
                                            placeholder: "ระบุเลขที่บัตรประชาชน",
                                            autoComplete: "off",
                                            maxLength: "13",
                                            value: idNo,
                                            onChange: (0,_api_ApiService__WEBPACK_IMPORTED_MODULE_4__/* .handleChangeData */ .vl)(inputs, setInputs, 'idNo'),
                                            onKeyPress: (event)=>{
                                                if (!/[0-9]/.test(event.key)) {
                                                    event.preventDefault();
                                                }
                                            },
                                            onPaste: (event)=>{
                                                if (!/[0-9]/.test(event.key)) {
                                                    event.preventDefault();
                                                }
                                            },
                                            onBlur: (e)=>{
                                                if (e.target.value != undefined && e.target.value.length > 0 && e.target.value.length < 13) {
                                                    setWarningLabel(true);
                                                } else {
                                                    setWarningLabel(false);
                                                }
                                            },
                                            // className={handleClassRequireField(submitted, idNo)}
                                            style: (0,_api_ApiService__WEBPACK_IMPORTED_MODULE_4__/* .handleStyleField */ .lW)(submitted, idNo)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    sm: "2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    sm: "4"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    sm: "2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "แบบประกัน"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    sm: "4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(rsuite__WEBPACK_IMPORTED_MODULE_5__.InputPicker, {
                                        // label=""
                                        size: "md",
                                        style: {
                                            // width: 500,
                                            borderColor: submitted && !planCode ? 'red' : ''
                                        },
                                        // creatable
                                        onCreate: (value, item)=>{
                                            console.log(value, item);
                                        },
                                        data: userData.planList,
                                        name: "planCode",
                                        placeholder: "ระบุแบบประกัน",
                                        autoComplete: "off",
                                        value: planCode,
                                        labelKey: "label",
                                        valueKey: "value",
                                        onChange: (0,_api_ApiService__WEBPACK_IMPORTED_MODULE_4__/* .handleChangeData */ .vl)(inputs, setInputs, 'planCode')
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    sm: "2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        children: "ทุนประกัน"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    sm: "3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(rsuite__WEBPACK_IMPORTED_MODULE_5__.Input, {
                                        // label=""
                                        name: "sum",
                                        placeholder: "ระบุทุนประกัน",
                                        autoComplete: "off",
                                        value: sum,
                                        onChange: (0,_api_ApiService__WEBPACK_IMPORTED_MODULE_4__/* .handleChangeData */ .vl)(inputs, setInputs, 'sum'),
                                        onKeyPress: (event)=>{
                                            if (!/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                            }
                                        },
                                        onPaste: (event)=>{
                                            if (!/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                            }
                                        },
                                        // className={handleClassRequireField(submitted, sum)}
                                        style: (0,_api_ApiService__WEBPACK_IMPORTED_MODULE_4__/* .handleStyleField */ .lW)(submitted, sum),
                                        onBlur: (e)=>{
                                            let currency = (0,_api_ApiService__WEBPACK_IMPORTED_MODULE_4__/* .currencyFormat */ .OH)(e.target.value);
                                            // console.log('onBlur currency: ' + currency);
                                            setInputs({
                                                ...inputs,
                                                ['sum']: currency
                                            });
                                        },
                                        onFocus: (e)=>{
                                            let currency = e.target.value;
                                            currency = currency.replaceAll(',', '');
                                            // console.log('onFocus currency: ' + currency);
                                            setInputs({
                                                ...inputs,
                                                ['sum']: currency
                                            });
                                        }
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    sm: "1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "MainPage-label-left",
                                        children: "บาท"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    sm: "2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    sm: "3"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    sm: "1"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "form-group",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                        sm: "4"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                        sm: "4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(rsuite__WEBPACK_IMPORTED_MODULE_5__.ButtonToolbar, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(rsuite__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                                appearance: "primary",
                                                onClick: handleValidationSubmit,
                                                children: [
                                                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "spinner-border spinner-border-sm mr-1"
                                                    }),
                                                    "ประมวลผล"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                        sm: "4"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                    isOpen: resultInfoModal,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "modal-header",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    className: "modal-title",
                                    children: "ผลการพิจารณาเบื้องต้น"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    "aria-hidden": "true",
                                    className: "modal-btn-close",
                                    onClick: closeResultInfoModal,
                                    children: "\xd7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-sm-12 label-modal-center",
                                    children: [
                                        outputs.result ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: "rule-detail-label5",
                                                    children: outputs.message
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    children: outputs.detail
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                            ]
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: "rule-detail-label6",
                                                    children: outputs.message
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    children: outputs.detail
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "rule-detail-label3",
                                            children: "หมายเหตุ : ผลการตรวจสอบข้างต้นมิได้เป็นการยืนยันการรับประกันภัย"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "rule-detail-label3",
                                            children: "การพิจารณารับประกัน จะขึ้นอยู่กับข้อมูลที่ระบุในใบคำขอเอาประกันภัยเท่านั้น"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "modal-footer-custom",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "modal-btn-cust",
                                onClick: closeResultInfoModal,
                                children: "OK"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;