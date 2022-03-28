"use strict";
exports.id = 763;
exports.ids = [763];
exports.modules = {

/***/ 8763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m3": () => (/* binding */ Login),
  "RD": () => (/* binding */ Logout),
  "Se": () => (/* binding */ TestApi),
  "Z0": () => (/* binding */ ValidateData),
  "OH": () => (/* binding */ currencyFormat),
  "vl": () => (/* binding */ handleChangeData),
  "OZ": () => (/* binding */ handleChangeInput),
  "iM": () => (/* binding */ handleClassRequireField),
  "lW": () => (/* binding */ handleStyleField)
});

// UNUSED EXPORTS: GenerateReport, InsertArray, MasterData, Register, UserAssignData, getUserInfo, handleStyleFieldDate, simulateMouseClick

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./pages/api/Config.js

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


// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./pages/api/ApiService.js




let source = external_axios_default().CancelToken.source();
let config = {
    cancelToken: source.token
};
let API = APIUrl();
const MasterData = ()=>{
    const { 0: data , 1: setData  } = useState([]);
    const { 0: isLoaded , 1: setIsLoaded  } = useState(false);
    const { 0: error1 , 1: setError  } = useState(null);
    const url = API + '/api/masterData';
    useEffect(()=>{
        const fetchData = ()=>{
            axios.get(url, config).then((res)=>{
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
    const { 0: data , 1: setData  } = useState([]);
    const { 0: isLoaded , 1: setIsLoaded  } = useState(false);
    const { 0: error2 , 1: setError  } = useState(null);
    const url = API + '/api/userAssign';
    useEffect(()=>{
        const fetchData = ()=>{
            axios.get(url, config).then((res)=>{
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
    return axios.post(API + '/api/login', data);
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
    const response = await axios.post(API + '/api/exportExcel', param, {
        responseType: 'blob'
    });
    return response.data;
};
const mouseClickEvents = (/* unused pure expression or super */ null && ([
    'mousedown',
    'click',
    'mouseup'
]));
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