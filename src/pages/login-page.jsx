import React from 'react'
import { Form, Input, Button, Checkbox, Row, Col, Modal } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useState } from 'react'
import logo from '../photo/darktranslogo.png'
import axios from 'axios'

export const LoginPage = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const [isSubmitted, setIsSubmitted] = useState(false)
  // const [isCorrected, setIsCorrected] = useState(false)
  function errorToast() {
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    })
  }
  const sendSubmit = () => {
    axios
      .post(
        'http://localhost:8001/retailer/auth/login',
        {
          username: username,
          password: password,
        },

        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        },
      )
      .then(
        (response) => {
          console.log('response: ' + response)
          if (response.data) {
            const token = response.data

            if (token === 'invalid username or password') {
              console.log('Bugg invalid username or password')
              setUsername('')
              setPassword('')
              errorToast()
            } else {
              localStorage.setItem('token', token)
              props.history.push('/')
              console.log('correct')
            }
          } else if (response.data === 'Incorrect') {
          }
          // console.log(localStorage.token)
        },
        (error) => {
          console.log('error' + error)
        },
      )

    // event.preventDefault()
    // console.log('username: ', username, 'password: ', password)

    // if (username === 'bob' && password === '123456') {
    //   props.history.push('/')
    // } else {
    //   console.log('wrong')
    // }

    // axios.post("http://propclaim.com"+"/guest/authen", {username: username, password:password}).then(response=>
    // console.log(response)
    // if (response.data.token){
    //   localStorage.setItem("token", response.data.token)

    // }else if(response.data === "incorrect"){

    // }

    // )

    // setIsSubmitted(true);
    // console.log(isSubmitted);
  }

  return (
    <article className="Login-Page">
      <Form>
        <img className="logo-login" src={logo} alt="logo" />
        <Row>
          <Col span={8}></Col>
          <Col span={8}>
            <Form.Item
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
          </Col>
          <Col span={8}></Col>
        </Row>
        <Row>
          <Col span={8}></Col>
          <Col span={8}>
            <Form.Item
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
          </Col>
          <Col span={8}></Col>
        </Row>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className="login-form-button"
            style={{ background: '#0050b3', borderColor: '#0050b3' }}
            onClick={sendSubmit}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </article>
  )
}
