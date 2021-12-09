import React, {useState} from "react";
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {createBrand} from "../../http/deviceApi";


const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addBrand = () => {
        createBrand({name: value}).then(data=>setValue(''))
        onHide()
    }
    return (
        <Modal
            show={show}
            onHide={onHide  }
            backdrop="static"

        >
            <Modal.Header closeButton>
                <Modal.Title>Add new brand</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={event => setValue(event.target.value)}
                        placeholder={"enter new brand name"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={addBrand}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default CreateBrand;