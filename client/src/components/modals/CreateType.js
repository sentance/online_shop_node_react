import React, {useState} from "react";
import {Button, Form,  Modal} from "react-bootstrap";

import {createType} from "../../http/typeApi";


const CreateType = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addType = () => {
        createType({name: value}).then(data=>setValue(''))
        onHide()
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            backdrop="static"

        >
            <Modal.Header closeButton>
                <Modal.Title>Add new type</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        placeholder={'Enter new type name'}
                        onChange={e=>setValue(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={addType}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default CreateType;