import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, ListGroup, Row} from "react-bootstrap";

const BrandBar = observer( () => {
    const {device} = useContext(Context)

    return (
       <Row className="d-flex align-content-around" style={{marginTop: 20}}>
           {device.brands.map(brand=>
            <Card
                style={{cursor: "pointer", width: 120, background: "gray"}}
                border={brand.id === device.selectedBrand.id ? "danger" : "light"}
                key={brand.id}
                onClick={()=>device.setSelectedBrand(brand)}
                className="p-3"
            >
                {brand.name}
            </Card>
           )}
       </Row>
    );
});

export default BrandBar;