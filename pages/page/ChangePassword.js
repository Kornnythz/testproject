import React, { useState } from 'react';
import {
    Login,
    handleChangeInput
} from '../api/ApiService';
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'reactstrap';
// import { Input } from 'rsuite';

function ChangePassword(props) {
    //set default state
    const [inputs, setInputs] = useState({
        username: '',
        oldpassword: '',
        newpassword: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);

    const { username, oldpassword, newpassword } = inputs;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitted(true);
        if (username && oldpassword && newpassword) {
            inputs.hostname = window.location.origin;
            // const response = await Login(inputs);
            // console.log("login data" + JSON.stringify(response));
            const response = { isLogin: true };
            if (response.isLogin) {
                setLoading(false);
                setIsLogin(response.isLogin);
                props.history.push("/mainPage");

            } else {
                setLoading(false);
                setIsLogin(response.isLogin);
            }
        } else {
            setLoading(false);
        }
    }

    return (
        <div>
            <div className="Login">
                {/* <h2>Login</h2> */}
                <form name="form" onSubmit={handleSubmit}>
                    {!isLogin && <Alert variant='danger'>Username or Password is not correct.</Alert>}
                    <div className="form-group">
                        <Row>
                            <Col sm="4">
                                <label>Username</label>
                            </Col>
                            <Col sm="8">
                                <input
                                    type="text"
                                    name="username"
                                    value={username}
                                    onChange={handleChangeInput(inputs, setInputs)}
                                    className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                                {submitted && !username &&
                                    <div className="invalid-feedback">Username is required.</div>
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="4">
                                <label>Old Password</label>
                            </Col>
                            <Col sm="8">
                                <input
                                    type="password"
                                    name="oldpassword"
                                    value={oldpassword}
                                    onChange={handleChangeInput(inputs, setInputs)}
                                    className={'form-control' + (submitted && !oldpassword ? ' is-invalid' : '')} />
                                {submitted && !oldpassword &&
                                    <div className="invalid-feedback">Old Password is required.</div>
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="4">
                                <label>New Password</label>
                            </Col>
                            <Col sm="8">
                                <input
                                    type="password"
                                    name="newpassword"
                                    value={newpassword}
                                    onChange={handleChangeInput(inputs, setInputs)}
                                    className={'form-control' + (submitted && !newpassword ? ' is-invalid' : '')} />
                                {submitted && !newpassword &&
                                    <div className="invalid-feedback">New Password is required.</div>
                                }
                            </Col>
                        </Row>
                    </div>
                    <div className="form-group">
                        <Row>
                            <Col sm="4">
                            </Col>
                            <Col sm="8">
                                <button className="btn btn-primary">
                                    {loading && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                    Change Password
                                </button>
                            </Col>
                        </Row>
                    </div>
                </form>
            </div>
            <div className="ChangePass">
                <div className="form-group">
                    <Row>
                        <Col>
                            <label className='rule-head-label'>{'ข้อกำหนดในการสร้างรหัสผ่าน สำหรับผู้ใช้งาน'}</label><br></br>
                            <label>{'1. การกำหนดรหัสผ่านสำหรับผู้ใช้งาน ต้องตั้งตามข้อกำหนดดังต่อไปนี้'}</label><br></br>
                            <label className='rule-detail-label1'>{'1.1 มีความยาวอย่างน้อย 8 ตัวอักษร'}</label><br></br>
                            <label className='rule-detail-label1'>{'1.2 มีอักษรตัวพิมพ์เล็ก (Lowercase letters) อย่างน้อย 1 ตัวอักษร เช่น a, b เป็นต้น'}</label><br></br>
                            <label className='rule-detail-label1'>{'1.3 มีอักษรตัวพิมพ์ใหญ่ (Uppercase letters) อย่างน้อย 1 ตัวอักษร เช่น A, B เป็นต้น'}</label><br></br>
                            <label className='rule-detail-label1'>{'1.4 มีตัวเลข (Numbers) คือ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9'}</label><br></br>
                            <label className='rule-detail-label2'>{'1.5 มีอักขระพิเศษ อย่างน้อย 1 ตัว อักขรพิเศษ ได้แก่ ! $ * - . : @ _ = [ ] ? < >'}</label><br></br>
                            <label>{'2. ไม่สามารถใช้รหัสผ่าน ซ้ำกับ '}</label> 
                            <label className='rule-detail-label4'>{'8'}</label> 
                            <label>{' ครั้งก่อน'}</label><br></br>
                            <label>{'3. ต้องเปลี่ยนรหัสผ่านทุก 90 วัน'}</label><br></br>
                            <label className='rule-detail-label3'>{'4. ต้องใช้รหัสผ่านอย่างน้อย 1 วัน (24 ชั่วโมง) จึงสามารถเปลี่ยนใหม่ได้'}</label><br></br>
                            <label className='rule-detail-label3'>{'5. หากใส่รหัสผ่านไม่ถูกต้อง 5 ครั้ง user จะถูก lock'}</label>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword