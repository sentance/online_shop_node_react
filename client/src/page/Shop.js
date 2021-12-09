import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchTypes} from "../http/typeApi";
import {fetchBrands} from "../http/brandApi";
import {fetchDevices} from "../http/deviceApi";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data=>device.setTypes(data))
        fetchBrands().then(data=>device.setBrands(data))
        fetchDevices().then(data=>device.setDevice(data.rows))
    },[])
    return (
       <Container>
           <Row >
               <Col md={3} style={{marginTop: 20}}>
                   <TypeBar/>
               </Col>
               <Col md={9}>
                   <BrandBar/>
                   <DeviceList/>
               </Col>
           </Row>
       </Container>
    );
});

export default Shop;