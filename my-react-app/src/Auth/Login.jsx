import React from "react";
import { Card, Form, Input, Button, Spin, Typography, Alert } from "antd";
import { Flex } from "antd";
import { Link } from "react-router-dom";
import loginImage from '../assets/loginImage.jpeg';
import useLogin from "../hooks/useLogin";
import './loginandreg.css';

const Login = () => {
    const { loading, error, loginUser } = useLogin();

    const handleLogin = async (values) => {
        await loginUser(values);
    };

    return (
        <div className="Login">
            <Card className="form-container">
                <Flex justifyContent="center" alignItems="center" style={{ height: "100%", width: "100%" }}>
                    {/* Image */}
                    <Flex flex={1}>
                        <img src={loginImage} alt="Login" style={{ width: "100%" }} />
                    </Flex>
                    {/* Form */}
                    <Flex vertical flex={1} style={{ marginLeft: "20px" }}>
                        <Typography.Title level={3} strong className="title">
                            Sign In
                        </Typography.Title>
                        <Typography.Text type="secondary" strong className="slogan">
                            Welcome Back Girl!
                        </Typography.Text>
                        <Form layout="vertical" onFinish={handleLogin} autoComplete="off" style={{ width: "100%" }}>
                            <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please enter your email" }, { type: "email", message: "Please enter a valid email" }]}>
                                <Input size="large" placeholder="Enter your email" />
                            </Form.Item>
                            <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please enter your password" }, { min: 6, message: "Password must be at least 6 characters" }]}>
                                <Input.Password size="large" placeholder="Enter your password" />
                            </Form.Item>
                            {error && <Alert description={error} type="error" showIcon closable className="alert" />}
                            <Form.Item>
                                <Button 
                                    type={loading ? '' : 'primary'}
                                    htmlType="submit" 
                                    size="large" 
                                    className="btn powder-pink"
                                    style={{width : '100%'}}>
                                    {loading ? <Spin /> : 'Sign In'} 
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                <Link to='/Register'>
                                    <Button size="large" className="btn powder-pink" style={{width:'100%'}}>Create Account</Button>
                                </Link>
                            </Form.Item>
                        </Form>
                    </Flex>
                </Flex>
            </Card>
        </div>
    );
};

export default Login;
