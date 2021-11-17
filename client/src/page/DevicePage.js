import React, {useContext} from 'react';
import {Context} from "../index";

const DevicePage = () => {
    const {device} = useContext(Context)

    return (
        <div>
            <h1>Devices</h1>
        </div>
    );
};

export default DevicePage;