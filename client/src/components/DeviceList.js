import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";
import {Button} from "bootstrap";
import DeviceItem from "../page/DeviceItem";

const DeviceList = observer (() => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex">
            {device._devices.map((item)=>
                <DeviceItem props={item} key={item.id}/>
            )}

        </Row>
    );
});

export default DeviceList;