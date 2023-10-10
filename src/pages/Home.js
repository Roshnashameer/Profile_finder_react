import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
    const [contacts,setContact] =useState([])
    const getAllcontacts =async()=>{
        const result = await axios.get('/db.json')
        setContact(result.data.contacts)       
    }
    useEffect(()=>{
        getAllcontacts()
    },[])
    // console.log(contacts);
  return (
    <div className='mr-auto p-5'>
         <Container>
      <Row>
        <Col></Col>
      </Row>
    </Container>
    <Row>
        {contacts.length > 0?contacts.map(i=>
        <Col xs={6} lg={4} md={4}>
        <Link to={`/view/${i.name}`} style={{textDecoration:'none'}}>

                <Card style={{ width: '50%',height:'550px' }} className='m-4'>
                  <Card.Img style={{height:'400px'}} variant="top" src={i.profile} />
                  <Card.Body>
                    <Card.Title>{i.name}</Card.Title>
                    </Card.Body>
                    </Card>
                    </Link>
            </Col>
            
        ):<h1>No Data</h1> }
         </Row>
    </div>
  )
}

export default Home