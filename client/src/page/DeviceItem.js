import React, {useEffect} from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from "../assets/star.png"
import {useNavigate} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/constants";

const DeviceItem = ({props}) => {
    const {id, img, name, price, rating} = props
    const navigate = useNavigate()

    return (

            <Col md={3} style={{margin: 20}} onClick={() => navigate(DEVICE_ROUTE + "/" + id)}>
                <Card style={{ width: '12rem', margin: 10, cursor: "pointer"}} >
                    <Card.Img variant="top" src={process.env.REACT_APP_API_URL + img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <div className="d-flex justify-content-between">
                            <div>
                                {rating}
                                <Image style={{alignItems: "center"}} src={star}/>
                            </div>
                            <div>{price}$</div>
                        </div>

                        <button style={{marginTop: 10}}>View</button>
                    </Card.Body>
                </Card>
            </Col>

        );
};

export default DeviceItem;