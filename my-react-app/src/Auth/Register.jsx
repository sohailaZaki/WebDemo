import React from "react";
import { Alert, Button, Card, Form, Input, Spin , Typography } from "antd";
import { Flex } from "antd";
import { Link } from "react-router-dom"; 
import useSignup  from "../hooks/useSignup";
import registerImage from '../assets/registerImage.jpeg';
import './loginandreg.css';

const Register = () => {
    const { loading, error, registerUser } = useSignup();
    const handleRegister = (values) => {
        registerUser(values); 
    };

    return (
        <div className="REG">
        <Card className="form-container" style={{ display: "flex", height: "100%" }}>
            <Flex justifyContent="center" alignItems="center" style={{ height: "100%" }}>
                {/* Image */}
                <Flex flex={1}>
                    <img src={registerImage} alt="Register" style={{ width: "100%" }} />
                </Flex>
                {/* Form */}
                <Flex vertical flex={1} style={{ marginLeft: "20px" }}>
                    <Typography.Title level={3} strong className="title">
                        Create an account
                    </Typography.Title>
                    <Typography.Text type="secondary" strong className="slogan">
                        Join for exclusive benefits!
                    </Typography.Text>
                    <Form layout="vertical" onFinish={handleRegister} autoComplete="off" style={{ height: "100%" }}>
                        <Form.Item label="Full Name" name="name" rules={[{ required: true, message: "Please enter your full name" }]}>
                            <Input size="large" placeholder="Enter your full name" />
                        </Form.Item>
                        <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please enter your email" }, { type: "email", message: "Please enter a valid email" }]}>
                            <Input size="large" placeholder="Enter your email" />
                        </Form.Item>
                        <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please enter your password" }, { min: 6, message: "Password must be at least 6 characters" }]}>
                            <Input.Password size="large" placeholder="Enter your password" />
                        </Form.Item>
                        <Form.Item label="Confirm Password" name="confirmPassword" rules={[{ required: true, message: "Please confirm your password" }]}>
                            <Input.Password size="large" placeholder="Enter your password" />
                        </Form.Item>
                        {error && <Alert description={error} type="error" showIcon closable className="alert" />} 
                        <Form.Item>
                            <Button 
                                type={loading ? '' : 'primary'}
                                htmlType="submit" 
                                size="large" 
                                className="btn powder-pink signUpbtn"
                                style={{width : '100%'}}
                                >
                                {loading ? <Spin /> : 'Create Account'} 
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Link to='/'>
                                <Button size="large" className="btn powder-pink" style={{width:'100%'}}>Sign In</Button>
                            </Link>
                        </Form.Item>
                    </Form>
                </Flex>
            </Flex>
        </Card>
        </div>
    );
};

export default Register;
