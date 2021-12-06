import React, {useContext} from 'react';
import {Context} from "../index";
import {useParams} from "react-router-dom";
import {Container, Col, Image, Row, Card, Button} from 'react-bootstrap';
import bigStar from '../assets/bigStar.png'
const DevicePage = () => {

    const device = {id: 1, name: 'Iphone 12', price: 2000, rating: 5, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000'}
    const description = [
        {id: 1, title: 'Ram', description: '5 gb'},
        {id: 2, title: 'Camera', description: '15 mpx'},
        {id: 3, title: 'Processor', description: 'Xeon 2ghz'},
        {id: 4, title: 'Core', description: '8'},
        {id: 5, title: 'Battery', description: '4000mah'}
    ]
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} src={device.img} height={300}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2 style={{textAlign: "center"}}>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: "cover", fontSize: 64}}
                        >
                            {device.rating}
                        </div>
                    </Row>

                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontsize: 32, border: '2px solid lightgray'}}
                    >
                        <h3>{device.price}</h3>
                        <Button variant={"outline-dark"}>Add in basket</Button>

                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column">
                <h2>Description</h2>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;