import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchTypes, fetchBrands, fetchDevices} from "../http/deviceApi";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data=>device.setTypes(data))
        fetchBrands().then(data=>device.setBrands(data))


    },[])

    useEffect(()=>{
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(data=> {
            device.setDevice(data.rows)
            device.setTotalCount(data.count)
        })
    },[device.page, device.selectedType, device.selectedBrand])

    return (
       <Container>
           <Row >
               <Col md={3} style={{marginTop: 20}}>
                   <TypeBar/>
               </Col>
               <Col md={9}>
                   <BrandBar/>
                   <DeviceList/>
                   <Pages/>
               </Col>
           </Row>
       </Container>
    );
});

export default Shop;