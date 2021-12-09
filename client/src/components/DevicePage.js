import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Container, Col, Image, Row, Card, Button} from 'react-bootstrap';
import bigStar from '../assets/bigStar.png';
import {fetchOneDevice} from "../http/deviceApi";

const DevicePage = () => {
    const [device, setDevice] = useState({info:[]})
    const {id} = useParams()

    useEffect(()=>{
        fetchOneDevice(id).then(data=>setDevice(data))
    },[])
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} src={process.env.REACT_APP_API_URL + device.img} height={300}/>
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
            <Row className="d-flex flex-column mt-2">
                <h2>Description</h2>
                {/*{description.map((info, index) =>*/}
                {/*    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>*/}
                {/*        {info.title}: {info.description}*/}
                {/*    </Row>*/}
                {/*)}*/}
            </Row>
        </Container>
    );
};

export default DevicePage;