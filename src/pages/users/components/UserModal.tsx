import { Form, Input, Modal, Button } from 'antd';
import { useEffect } from 'react';


export const UserModal = (props) => {

    const [form] = Form.useForm();

    useEffect(()=>{
        form.setFieldsValue(props.record);
    }, [props.visible]);


    return (
        <div>
            <Modal title="弹出框" forceRender visible={props.visible} onOk={props.handleCancel} onCancel={props.handleCancel}>
                
                <Form name="basic" initialValues={props.record} form={form}>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    > 
                    <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    > 
                    <Input />
                    </Form.Item>

                    <Form.Item
                        label="CreateTime"
                        name="create_time"
                        rules={[{ required: true, message: 'Please input your create time!' }]}
                    > 
                    <Input />
                    </Form.Item>

                    <Form.Item
                        label="Status"
                        name="status"
                        rules={[{ required: true, message: 'Please input your status!' }]}
                    > 
                    <Input />
                    </Form.Item>

                </Form>


            </Modal>
        </div>
    )
}
