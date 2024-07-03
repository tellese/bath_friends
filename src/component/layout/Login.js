import React from 'react'
import {Form,Input,Button,Card} from 'antd'

const Login=({style})=> {
  return (
    <div>
    <Card style={style}>
          <Form
            name="Login"
          >
            <Form.Item
              label="아이디"
              name="username"
              rules={[{ required: true, message: '아이디: ID' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="비밀번호"
              name="password"
              rules={[{ required: true, message: '패스워드 : PassWord' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '50%', margin: '5px'}}>
                Login
              </Button>
              <Button type='primary'>
                회원 가입
              </Button>
            </Form.Item>
          </Form>
        </Card>
    </div>
  )
}

export default Login