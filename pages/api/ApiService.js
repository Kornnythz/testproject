import { useState, useEffect } from 'react';
import axios from 'axios';
import { APIUrl } from './Config.js';
import Router from 'next/router';

let source = axios.CancelToken.source();
let config = { cancelToken: source.token };
let API = APIUrl();

const MasterData = () => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const url = API + '/api/masterData';
    useEffect(() => {
        const fetchData = () => {
            axios.get(url, config)
                .then(res => {
                    setIsLoaded(true);
                    setData(res.data.MasterList);
                })
                .catch(error => {
                    setError(error);
                });
        };
        fetchData();
    }, [url]);
    return { error, isLoaded, data };
};

const UserAssignData = () => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const url = API + '/api/userAssign';
    useEffect(() => {
        const fetchData = () => {
            axios.get(url, config)
                .then(res => {
                    setIsLoaded(true);
                    setData(res.data.MasterList);
                })
                .catch(error => {
                    setError(error);
                });
        };
        fetchData();
    }, [url]);
    return { error, isLoaded, data };
};

const InsertArray = (arr, ...newItems) => [
    ...arr.slice(0, (arr.length - 1)),
    ...newItems,
    ...arr.slice((arr.length - 1))
]

const Register = (data) => {
    data.cancelToken = source.token;
    return axios.post(API + '/api/login', data);
};

const Login = async (data) => {
    data.cancelToken = source.token;
    data.ldapURL = API.ldapURL;
    const response = await axios.post(API.defaultHost + '/api/login', data);
    if (response) {
        localStorage.setItem("user_data", JSON.stringify(response.data));
    }
    return response.data;
};

const TestApi = async (data) => {

    console.log('API backendHost>> ' + API.backendHost);
    console.log('API defaultHost>> ' + API.defaultHost);
    const response = await axios.get(API.defaultHost + '/api/testApi', { crossDomain: true })
    if (response) {
        localStorage.setItem("testApi: ", JSON.stringify(response.data));
    }
    return response.data;
};

const Logout = () => {
    localStorage.removeItem('user_data');
    // Router.push('/page/LoginPage')
    Router.push('/')
};

const ValidateData = async (data) => {
    data.cancelToken = source.token;
    // const response = await axios.post(API.backendHost + '/validateData', data);
    const response = await axios.post(API.defaultHost + '/api/validateData', data);
    return response.data;
};


const GenerateReport = async (param) => {
    param.cancelToken = source.token;
    const response = await axios.post(API + '/api/exportExcel', param, { responseType: 'blob' })
    return response.data;
};

const mouseClickEvents = ['mousedown', 'click', 'mouseup'];
const simulateMouseClick = (element) => {
    mouseClickEvents.forEach(mouseEventType =>
        element.dispatchEvent(
            new MouseEvent(mouseEventType, {
                view: window,
                bubbles: true,
                cancelable: true,
                buttons: 1
            })
        )
    );
}

const getUserInfo = (data) => {
    const userInfoNew = data;
    userInfoNew.userRole = 'user';
    for (let i = 0; i < data.roleList.length; i++) {
        if ('admin' === data.roleList[i].roleName) {
            userInfoNew.userRole = 'admin';
            break;
        }
    }
    return userInfoNew;
}

//action select dropdown for set data to session
const handleChangeData = (selected, setSelected, key) => (e) => {
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

const handleChangeInput = (inputs, setInputs) => (e) => {
    console.log('event e: ' + e);
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
}

const handleClassRequireField = (submitted, field) => {
    return 'form-control' + (submitted && !field ? ' is-invalid' : '')
}

const handleStyleField = (submitted, field) => {
    return { borderColor: (submitted && !field ? '#dc3545' : '') }

}

const handleStyleFieldDate = (submitted, field) => {
    console.log('xxx : ' + (submitted && !field));
    return (submitted && !field
        ? 'reqRed'
        : '.rs-picker-default .rs-picker-toggle.rs-btn')

}

const currencyFormat = (num) => {
    let currency = 0.00;
    if (num.length > 0) {
        num = num.replaceAll(',', '');
        currency = parseFloat(num);
    }
    return currency.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export {
    MasterData,
    UserAssignData,
    InsertArray,
    Register,
    Login,
    Logout,
    GenerateReport,
    simulateMouseClick,
    getUserInfo,
    handleChangeData,
    TestApi,
    handleChangeInput,
    ValidateData,
    handleClassRequireField,
    handleStyleField,
    currencyFormat,
    handleStyleFieldDate
};
