import React, { useState } from 'react';
import {
    Login,
    handleChangeData,
    handleClassRequireField,
    TestApi
} from '../api/ApiService';
import Alert from 'react-bootstrap/Alert'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'reactstrap';
import { Input } from 'rsuite';
import { useRouter } from 'next/router'

const LoginPage = ({ props }) => {

    const router = useRouter()

    //set default state
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);

    const { username, password } = inputs;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitted(true);
        if (username && password) {
            const response = await Login(inputs);
            // console.log("login data: " + JSON.stringify(response, "", "\t"));
            console.log("res status: " + response.status);
            if ('success' === response.status) {
                setLoading(false);
                setIsLogin(true);
                // props.history.push("/mainPage");
                router.push('/page/MainPage')
            } else {
                setLoading(false);
                setIsLogin(false);
            }
        } else {
            setLoading(false);
        }
    }

    const testApi = async () => {
        const response = await TestApi('');
        console.log('test resp: ' + JSON.stringify(response));
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
                                <label onClick={() => { testApi() }}>Username</label>
                            </Col>
                            <Col sm="8">
                                <Input
                                    name="username"
                                    value={username}
                                    onChange={handleChangeData(inputs, setInputs, 'username')}
                                    className={handleClassRequireField(submitted, username)}
                                />
                                {/* <div className="invalid-feedback">Username is required.</div> */}
                            </Col>
                        </Row>
                    </div>
                    <div className="form-group">
                        <Row>
                            <Col sm="4">
                                <label>Password</label>
                            </Col>
                            <Col sm="8">
                                <Input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={handleChangeData(inputs, setInputs, 'password')}
                                    className={handleClassRequireField(submitted, password)}
                                />
                                {/* <div className="invalid-feedback">Password is required.</div> */}
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
                                    Login
                                </button>
                            </Col>
                        </Row>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage