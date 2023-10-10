import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, ListGroup, Row } from 'react-bootstrap'

function SingleView() {
    const param=useParams()
  
  var {name}=param //destructuring
  useEffect(()=>{

  },[])
//   console.log(name);
const [allContacts,setContact] =useState([])
    const getAllcontacts =async()=>{
        const result = await axios.get('/db.json')
        setContact(result.data.contacts)       
    }
    useEffect(()=>{
        getAllcontacts()
    },[])
    const singleContact=allContacts.find(i=>i.name==name)
//   console.log(singleContact);

  return (
    <div>
    {singleContact ? (
  <Row>
    <Col lg={5} sm={12} md={6} className='py-5 ps-5 ms-5 mt-5 mb-5'>
      <img style={{ height: '700px', width: '100%' }} src={singleContact.profile} alt="" />
    </Col>
    <Col className='d-flex flex-column justify-content-center align-items-center' lg={5} sm={12} md={6}>
      <h1 className='text-center mt-3'>{singleContact.name}</h1>
      <ListGroup>
        <ListGroup.Item><b className='text-info-emphasis'>Email: </b>{singleContact.email}</ListGroup.Item>
        <ListGroup.Item><b className='text-info-emphasis'>PhoneNo:</b>{singleContact.mobile}</ListGroup.Item>
        <ListGroup.Item><b className='text-info-emphasis'>Location:</b>{singleContact.location}</ListGroup.Item>
      </ListGroup>
    </Col>
  </Row>
) : (
  <h1>No Data</h1>
)} 
    </div>
  )
}

export default SingleView