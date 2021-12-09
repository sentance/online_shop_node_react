import React, {useContext, useEffect, useState} from "react";
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {fetchTypes} from "../../http/typeApi";
import {fetchBrands} from "../../http/brandApi";
import {observer} from "mobx-react-lite";
import {createDevice} from "../../http/deviceApi";



const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [price, setPrice] = useState(0)
    const [name, setName] = useState('')
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(()=>{
        fetchTypes().then(data=>device.setTypes(data))
        fetchBrands().then(data=>device.setBrands(data))
    },[])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then((data)=>onHide())
    }
    return (
        <Modal
            show={show}
            onHide={onHide  }
            backdrop="static"

        >
            <Modal.Header closeButton>
                <Modal.Title>Add new device</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2 p-2">
                        <Dropdown.Toggle>{device.selectedType.name || "Choose type"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type=>
                                <Dropdown.Item onClick={()=>device.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2 p-2">
                        <Dropdown.Toggle>{device.selectedBrand.name || "Select brand"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand=>
                                <Dropdown.Item onClick={()=>device.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={event => setName(event.target.value)}
                        className="mt-2"
                        placeholder={"Enter name of device"}
                    />
                    <Form.Control
                        value={price}
                        onChange={event => setPrice(Number(event.target.value))}
                        className="mt-2"
                        placeholder={"Enter price of device"}
                        type="number"
                    />
                    <Form.Control
                        className="mt-2"
                        placeholder={"select image"}
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Add new property
                    </Button>
                    {info.map(i=>
                        <Row className="mt-2" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    placeholder={"enter name of property"}
                                    onChange={(event)=>changeInfo('title', event.target.value, i.number)}
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(event)=>changeInfo('description', event.target.value, i.number)}
                                    placeholder={"enter description of property"}
                                />
                            </Col>
                            <Col md={4}>
                                <Button variant="outline-danger" onClick={()=>removeInfo(i.number)}>Delete property</Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="outline-success"
                    onClick={addDevice}
                >
                    Add device
                </Button>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>

            </Modal.Footer>
        </Modal>
    )
})
export default CreateDevice;