import { Form, Button, Input } from 'antd'

function LoginForm() {

    const h3Style = {
        textAlign: 'center',
        fontSize: '20px'
    }

    const onFinish = (values) => {
        console.log('Success: ', values);
    }

    const onFinishFailed = (error) => {
        console.log('Failed: ', error);
    }

    return (
        <Form
            labelCol={{
                span: 5,
              }}
            wrapperCol={{
                span: 16,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            
            <h3 style={h3Style}>LOGIN</h3>
            
            <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!'
                  },
                  {
                      pattern: /^[!@#$%\^&*)(+=._-]*[A-Z0-9]+[A-Z0-9!@#$%\^&*A-Z0-9)(+=._-]*@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'Email is not valid!'
                  }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  }
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                offset: 5,
                span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>

        </Form>
    )
}

export default LoginForm