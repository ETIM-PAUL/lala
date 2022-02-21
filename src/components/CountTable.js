import React from 'react'
import { Table, Row, Col, Divider } from 'antd';
const CountTable = ({data}) => {
  const columns = [
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      // render: year => {year},
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'age',
    }
  ]
  return (
    <>
    <br/>
    <div>CountTable</div>
    <br/>
    <Row justify='center'>
      <Col span={12}>
         <Table columns={columns} dataSource={data} pagination={false} />
      </Col>
    </Row>
    <Divider/>
    </>
  )
}

export default CountTable