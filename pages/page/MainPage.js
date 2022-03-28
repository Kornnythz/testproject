import React, { useState } from 'react';
import {
    Col, Row, Modal, ModalBody
} from 'reactstrap';
import 'rsuite/dist/rsuite.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    ValidateData,
    handleChangeData,
    Logout,
    handleClassRequireField,
    handleStyleField,
    currencyFormat,
    handleStyleFieldDate
} from '../api/ApiService';
import {
    InputPicker, ButtonGroup, ButtonToolbar,
    Button, Input
} from 'rsuite';
// import dayjs from 'dayjs'
// import { WatDatePicker } from 'thaidatepicker-react'
// import NumberFormat from 'react-number-format';
import moment from 'moment'
import OverwriteMomentBE from '../../component/OverwriteMomentBE';
import {
    DatePicker, MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
// import DateFnsUtils from "@date-io/date-fns";

const MainPage = (props) => {
    // console.log("data from load login : " + JSON.stringify(props.userDetail, "", "\t"));
    const [userData, setUserData] = useState(() => {
        try {
            // const item = window.localStorage.user_data;
            const item = null;
            return item ? JSON.parse(item) : {};
        } catch (error) {
            console.log(error);
            return {};
        }
    });
    const [resultInfoModal, setResultInfoModal] = useState(false);
    const closeResultInfoModal = () => {
        setResultInfoModal(!resultInfoModal);
        // props.history.push("/login");
    };
    const [inputs, setInputs] = useState({
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
    const [outputs, setOutputs] = useState({});

    const { firstName, lastName, idNo, birthDate, planCode, sum, /*termInsure,*/ sex } = inputs;
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [warningLabel, setWarningLabel] = useState(false);
    const dropdownStyle1 = { zIndex: 99 };
    const [isFocus, setIsFocus] = useState(false);

    const handleValidationSubmit = async (e) => {
        // e.preventDefault();
        setLoading(true);
        setSubmitted(true);

        console.log("data submit: " + JSON.stringify(inputs));
        if (firstName && lastName && idNo && birthDate && planCode && sum /*&& termInsure && sex */) {
            let currencyBefore = (inputs.sum).replaceAll(',', '');
            inputs.sum = currencyBefore;

            const response = await ValidateData(inputs);
            console.log("ValidateData result: " + JSON.stringify(response));
            console.log("response.result: " + response.result);

            let currencyAfter = currencyFormat(inputs.sum);
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
    }

    // const [selectedDate, setSelectedDate] = useState("")
    const [selectedDate, handleDateChange] = useState(new Date());
    // const [selectedDate, handleDateChange] = useState(null);

    const [selectedThaiDate, setSelectedThaiDate] = useState("")

    const handleWatDatePickerChange = (christDate, buddhistDate) => {
        // console.log(christDate)
        // console.log(buddhistDate);
        // setSelectedDate(christDate);
        // setSelectedThaiDate(buddhistDate);
        setInputs({
            ...inputs,
            ['birthDate']: christDate
        });
    }

    return (
        <div>
            <div className="MainHeader">
                <Row>
                    <Col md={7}>
                    </Col>
                    <Col md={4}>
                        <span
                            className="head-label">Welcome :
                            {userData.fullname}
                        </span>
                    </Col>
                    <Col md={1}>
                        <ButtonGroup>
                            <Button
                                className="btn-logout"
                                onClick={e => { Logout(); }}>
                                Logout
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </div>
            <div className="MainPage">
                {/* <h2>Login</h2> */}
                <form name="main_form">
                    <Row>
                        <Col sm="2">
                            <label>ชื่อ</label>
                        </Col>
                        <Col sm="4">
                            <Input
                                // label="ชื่อ"
                                name="firstName"
                                placeholder="ระบุชื่อ"
                                autoComplete="off"
                                value={firstName}
                                onChange={handleChangeData(inputs, setInputs, 'firstName')}
                                // className={handleClassRequireField(submitted, firstName)}
                                style={handleStyleField(submitted, firstName)}
                            />
                            {/* <div className="invalid-feedback">firstName is required.</div> */}
                        </Col>
                        <Col sm="2">
                            <label>นามสกุล</label>
                        </Col>
                        <Col sm="4">
                            <Input
                                // label=""
                                name="lastName"
                                placeholder="ระบุนามสกุล"
                                autoComplete="off"
                                value={lastName}
                                onChange={handleChangeData(inputs, setInputs, 'lastName')}
                                // className={handleClassRequireField(submitted, lastName)}
                                style={handleStyleField(submitted, lastName)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="2">
                            <label>วัน/เดือน/ปี</label>
                        </Col>
                        <Col sm="4" >
                            <MuiPickersUtilsProvider
                                utils={OverwriteMomentBE}
                                locale="th"
                            >
                                <KeyboardDatePicker
                                    autoOk
                                    placeholder="ระบุวันเกิด"
                                    // variant="inline"
                                    // inputVariant="outlined"
                                    // label="วันเกิด"
                                    format="DD/MM/YYYY"
                                    views={["year", "month", "date"]}
                                    openTo="year"
                                    maxDate={new Date()}
                                    value={selectedDate}
                                    // InputAdornmentProps={{ position: "end" }} //use for KeyboardDatePicker only
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                    // onChange={date => handleDateChange(date)}
                                    onChange={(date) => {
                                        handleDateChange(date);
                                        setInputs({
                                            ...inputs,
                                            ['birthDate']: date
                                        })
                                    }
                                    }
                                    style={{
                                        border: '1px solid #e5e5ea',
                                        borderRadius: 6,
                                        width: '100%',
                                        paddingLeft: 12,
                                        alignItems: 'normal',
                                        fontWeight: 1,
                                        borderColor: (
                                            submitted && !birthDate
                                                ? '#dc3545'
                                                : '#e5e5ea'
                                        )
                                    }} // styles for input
                                />
                            </MuiPickersUtilsProvider>
                            {/* <DatePicker
                                // label=""
                                name="birthDate"
                                placeholder="ระบุวันเกิด"
                                autoComplete="off"
                                selected={birthDate}
                                onChange={(date) =>
                                    setInputs({
                                        ...inputs,
                                        ['birthDate']: date
                                    })
                                }
                                selectsStart
                                startDate={birthDate}
                                maxDate={new Date()}
                                format='dd/MM/yyyy'
                                oneTap
                                className={handleStyleFieldDate(submitted, birthDate)}
                            /> */}
                            {/* <WatDatePicker
                                value={inputs.birthDate} // Can be replace with string or dayjs object (e.g. "2020-12-31" or `dayjs()`)
                                onChange={handleWatDatePickerChange}
                                dateFormat={'yyyy-MM-dd'} // for set data purpose [using date-fns format](https://date-fns.org/v2.12.0/docs/format)
                                displayFormat={'DD/MM/YYYY'} // for display purpose (using dayjs format)[https://day.js.org/docs/en/display/format]
                                inputStyle={{
                                    border: '1px solid #ffb300',
                                    padding: '7px 11px',
                                    borderRadius: 6,
                                    height: 40,
                                    width: 265,
                                    borderColor: (
                                        submitted && !birthDate
                                            ? '#dc3545'
                                            : ''
                                    )
                                }} // styles for input
                                clearable={false} // true | false
                                // minDate={'2020-12-26'} // supported date as string
                                maxDate={dayjs().add(0, 'day')} // also supported dayjs or moment
                                disabled={false} // true | false
                                readOnly={false} // true | false
                                yearBoundary={99} // number of boundary ±X Year
                                name="birthDate"
                                placeholder="ระบุวันเกิด"
                                autoComplete="off"
                            // className={handleClassRequireField(submitted, birthDate)}
                            /> */}
                        </Col>
                        <Col sm="2">
                            {/* <label>เพศ</label> */}
                        </Col>
                        <Col sm="4">
                            {/* <InputPicker
                                // label=""
                                size="md"
                                style={{
                                    width: 275,
                                    color: 'ivory',
                                    borderColor: (submitted && !sex) ? 'red' : '#e7e7ec'
                                }}
                                // creatable
                                onCreate={(value, item) => {
                                    console.log(value, item);
                                }}
                                data={[
                                    { "value": "F", "label": "หญิง" },
                                    { "value": "M", "label": "ชาย" }
                                ]}
                                name="sex"
                                placeholder="ระบุเพศ"
                                autoComplete="off"
                                value={sex}
                                labelKey="label"
                                valueKey="value"
                                onChange={handleChangeData(inputs, setInputs, 'sex')}
                            // renderValue={(value, item, selectedElement) => {
                            //     return (
                            //       <div>
                            //         <span style={{ color: '#575757' }}>
                            //           {value}
                            //         </span>
                            //       </div>
                            //     );
                            //   }}
                            // className={handleClassRequireField(submitted, sex, 'InputPicker')}
                            /> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="2">
                            <label>เลขที่บัตรประชาชน</label>
                        </Col>
                        <Col sm="4">
                            {warningLabel && (<label
                                style={{ color: '#dc3545' }}
                            >*เลขที่บัตรประชาชนต้องครบ 13 หลัก
                            </label>)}
                            <Input
                                // label=""
                                name="idNo"
                                placeholder="ระบุเลขที่บัตรประชาชน"
                                autoComplete="off"
                                maxLength="13"
                                value={idNo}
                                onChange={handleChangeData(inputs, setInputs, 'idNo')}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                                onPaste={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                                onBlur={(e) => {
                                    if ((e.target.value) != undefined
                                        && (e.target.value).length > 0
                                        && (e.target.value).length < 13) {
                                        setWarningLabel(true);
                                    } else {
                                        setWarningLabel(false);
                                    }
                                }}
                                // className={handleClassRequireField(submitted, idNo)}
                                style={handleStyleField(submitted, idNo)}
                            />
                        </Col>
                        <Col sm="2">
                        </Col>
                        <Col sm="4">
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="2">
                            <label>แบบประกัน</label>
                        </Col>
                        <Col sm="4">
                            <InputPicker
                                // label=""
                                size="md"
                                style={{
                                    // width: 500,
                                    borderColor: (submitted && !planCode) ? 'red' : ''
                                }}
                                // creatable
                                onCreate={(value, item) => {
                                    console.log(value, item);
                                }}
                                data={userData.planList}
                                name="planCode"
                                placeholder="ระบุแบบประกัน"
                                autoComplete="off"
                                value={planCode}
                                labelKey="label"
                                valueKey="value"
                                onChange={handleChangeData(inputs, setInputs, 'planCode')}
                            // className={handleClassRequireField(submitted, planCode)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="2">
                            <label>ทุนประกัน</label>
                        </Col>
                        <Col sm="3">
                            <Input
                                // label=""
                                name="sum"
                                placeholder="ระบุทุนประกัน"
                                autoComplete="off"
                                value={sum}
                                onChange={handleChangeData(inputs, setInputs, 'sum')}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                                onPaste={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                                // className={handleClassRequireField(submitted, sum)}
                                style={handleStyleField(submitted, sum)}
                                onBlur={(e) => {
                                    let currency = currencyFormat(e.target.value);
                                    // console.log('onBlur currency: ' + currency);
                                    setInputs({
                                        ...inputs,
                                        ['sum']: currency
                                    });
                                }}
                                onFocus={(e) => {
                                    let currency = (e.target.value);
                                    currency = currency.replaceAll(',', '');
                                    // console.log('onFocus currency: ' + currency);
                                    setInputs({
                                        ...inputs,
                                        ['sum']: currency
                                    });
                                }}
                            // console.log(currencyFormat(26652323)); // $2,665.00
                            />
                            {/* <NumberFormat
                                displayType={'input'}
                                type="text"
                                thousandSeparator={true}
                                prefix={''}
                                name="sum"
                                placeholder="ระบุทุนประกัน"
                                autoComplete="off"
                                value={sum}
                                // onChange={handleChangeData(inputs, setInputs, 'sum')}
                                // onKeyPress={(event) => {
                                //     if (!/[0-9]/.test(event.key)) {
                                //         event.preventDefault();
                                //     }
                                // }}
                                // onPaste={(event) => {
                                //     if (!/[0-9]/.test(event.key)) {
                                //         event.preventDefault();
                                //     }
                                // }}
                                // className={handleClassRequireField(submitted, sum)}
                                // style={handleStyleField(submitted, sum)}
                                // onBlur={handleChangeData(inputs, setInputs, 'sum')}
                                className={'rs-input'}
                                style={{
                                    borderColor: (submitted && !sum ? '#dc3545' : '')
                                }}
                            /> */}
                        </Col>
                        <Col sm="1">
                            <label className='MainPage-label-left'>บาท</label>
                        </Col>
                        <Col sm="2">
                            {/* <label>ระยะเวลาเอาประกัน</label> */}
                        </Col>
                        <Col sm="3">
                            {/* <Input
                                // label=""
                                name="termInsure"
                                placeholder="ระบุระยะเวลาเอาประกัน"
                                autoComplete="off"
                                value={termInsure}
                                onChange={handleChangeData(inputs, setInputs, 'termInsure')}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                                onPaste={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                                className={handleClassRequireField(submitted, termInsure)}
                            /> */}
                        </Col>
                        <Col sm="1">
                            {/* <label className='MainPage-label-left'>ปี</label> */}
                        </Col>
                    </Row>
                    <div className="form-group">
                        <Row>
                            <Col sm="4">
                            </Col>
                            <Col sm="4">
                                <ButtonToolbar>
                                    <Button appearance="primary" onClick={handleValidationSubmit}>
                                        {loading && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                        ประมวลผล
                                    </Button>
                                </ButtonToolbar>
                            </Col>
                            <Col sm="4">
                            </Col>
                        </Row>
                    </div>
                </form>
            </div>
            <div>
                <Modal isOpen={resultInfoModal}>
                    <div className="modal-header">
                        <h5 className="modal-title">ผลการพิจารณาเบื้องต้น</h5>
                        <span aria-hidden="true" className="modal-btn-close" onClick={closeResultInfoModal}>×</span>
                    </div>
                    <ModalBody>
                        <div className="row">
                            <div className="col-sm-12 label-modal-center">
                                {outputs.result ? (
                                    <div>
                                        <label className='rule-detail-label5'>{outputs.message}</label>
                                        {/* <label className='rule-detail-label5'>{'ผ่าน'}</label> */}
                                        <br></br>
                                        <label>{outputs.detail}</label><br></br>
                                    </div>
                                ) : (
                                    <div>
                                        <label className='rule-detail-label6'>{outputs.message}</label>
                                        {/* <label className='rule-detail-label6'>{'ไม่ผ่าน'}</label> */}
                                        <br></br>
                                        <label>{outputs.detail}</label><br></br>
                                        {/* <label className='rule-detail-label6'>{outputs.message}</label> */}
                                    </div>
                                )}
                                <label className='rule-detail-label3'>หมายเหตุ : ผลการตรวจสอบข้างต้นมิได้เป็นการยืนยันการรับประกันภัย</label><br></br>
                                <label className='rule-detail-label3'>การพิจารณารับประกัน จะขึ้นอยู่กับข้อมูลที่ระบุในใบคำขอเอาประกันภัยเท่านั้น</label>
                            </div>
                        </div>
                    </ModalBody>
                    <div className="modal-footer-custom">
                        <button className="modal-btn-cust" onClick={closeResultInfoModal}>OK</button>
                    </div>
                </Modal>
            </div>
        </div >
    );
}

export default MainPage;