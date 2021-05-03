import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";


function Adote_ja() {
    return (

        <div className="base">

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="dog1.png" />
                <Card.Body align = "center">
                    <Card.Title>Adote o Billy</Card.Title>
                    <Card.Text>Tempo de abrigo: 2 anos</Card.Text>
                </Card.Body>
                <ListGroup variant="flush">
                <ListGroup.Item>
                    <div className ="image">
                        <img src="gps.png" className="image"/>  
                    </div>
                </ListGroup.Item>
                
  </ListGroup>

                
            </Card>
        </div>
    )
}

export default Adote_ja;