import React, {useContext} from "react";
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";


const CreateType = ({show, onHide}) => {
    const {device} = useContext(Context)
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
                    <Dropdown>
                        <Dropdown.Toggle>Select type</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type=>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary">Add</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default CreateType;