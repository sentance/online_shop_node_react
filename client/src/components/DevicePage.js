import React, {useContext} from 'react';
import {Context} from "../index";
import {useParams} from "react-router-dom";

const DevicePage = () => {
    const {device} = useContext(Context)
    const {id} = useParams()

    return (
        <div>
            <h2>{device.devices[id].name}</h2>
        </div>
    );
};

export default DevicePage;