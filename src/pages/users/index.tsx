import React from 'react';
import { connect } from '@/.umi/plugin-dva/exports';
import { Table, Tag, Space } from 'antd';
import { UserModal } from './components/UserModal';
import { useState } from 'react';

const index = ({ users }) =>{

  const [modalVisible, setModalVisible] = useState(false);
  const [recordValue, setRecord] = useState(undefined);

  const handleCancel = () => {
    setModalVisible(false);
  };

  const editHandler =(record) => {
    setRecord(record);
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'createTime',
      dataIndex: 'create_time',
      key: 'time',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a onClick={()=>{
            setModalVisible(true);
            editHandler(record);
          }}>Edit&nbsp;</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return(<div>
    <Table className='list-table' columns={columns} dataSource={users.data} rowKey="id"/>
    <UserModal visible={modalVisible} handleCancel={handleCancel} record={recordValue}></UserModal>

  </div>);
}
const mapStateToProps =({users})=>{
  return {users,};
}
export default connect(mapStateToProps)(index);

