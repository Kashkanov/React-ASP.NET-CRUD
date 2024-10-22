import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const CRUD = () => {

    const empdata = [
        {
            ID: 1,
            Name: "Freakbob",
            Manager: "Freak Krabs",
            Position: "Freak Manager",
            Image: "",
            Department: "Freaks",
            email: "freakbob@freakbob"
        }
        ,
        {
            ID: 2,
            Name: "Freaky",
            Manager: "Freakbob",
            Position: "Freaky Employee",
            Image: "",
            Department: "Freaks",
            email: "freaky@freaky"
        },
        {
            ID: 3,
            Name: "Freakster",
            Manager: "Freakbob",
            Position: "Freakster Employee",
            Image: "",
            Department: "Freaks",
            email: "freakster@freakster"
        }
    ]

    const [data, setData] = useState([]);

    const [show, setShow] = useState(false);

    const [name, setName] = useState("");
    const [manager, setManager] = useState("");
    const [position, setPosition] = useState("");
    const [image, setImage] = useState("");
    const [department, setDepartment] = useState("");
    const [email, setEmail] = useState("");

    const [editName, setEditName] = useState("");
    const [editManager, setEditManager] = useState("");
    const [editPosition, setEditPosition] = useState("");
    const [editImage, setEditImage] = useState("");
    const [editDepartment, setEditDepartment] = useState("");
    const [editEmail, setEditEmail] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEdit = (id) => {
        //alert("Editing " + id);
        handleShow();
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete " + id + "?") === true) {
            alert("Deleting " + id);
        }

    }

    const handleRemove = () => {

    }

    const getData = () => {
        axios.get('https://localhost:7023/api/Employees')
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const postData = () => {
        axios.post('https://localhost:7023/api/Employees', {
            Name: name,
            Manager: manager,
            Position: position,
            Image: image,
            Department: department,
            email: email
        })
            .then((response) => {
                console.log(response);
                getData();
            })
            .catch((error) => {
                console.log(error);
            })

    }

    const clearForm = () => {
        setName("");
        setManager("");
        setPosition("");
        setImage("");
        setDepartment("");
        setEmail("");

        setEditName("");
        setEditManager("");
        setEditPosition("");
        setEditImage("");
        setEditDepartment("");
        setEditEmail("");
    }

    useEffect(() => {
        getData(empdata);
    }, [])

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col>
                        <input type="text" className="form-control" placeholder="Enter Name..." value={name} onChange={(e) => setName(e.target.value)} />
                    </Col>
                    <Col>
                        <input type="text" className="form-control" placeholder="Enter Manager..." value={manager} onChange={(e) => setManager(e.target.value)} />
                    </Col>
                    <Col>
                        <input type="text" className="form-control" placeholder="Enter Position..." value={position} onChange={(e) => setPosition(e.target.value)} />
                    </Col>
                    <Col>
                        <input type="text" className="form-control" placeholder="Enter Image..." value={image} onChange={(e) => setImage(e.target.value)} />
                    </Col>
                    <Col>
                        <input type="text" className="form-control" placeholder="Enter Department..." value={department} onChange={(e) => setDepartment(e.target.value)} />
                    </Col>
                    <Col>
                        <input type="text" className="form-control" placeholder="Enter Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <input type="submit" className="btn btn-primary" value="Submit" onClick={postData} />
                    </Col>
                    <Col>
                        <button className="btn btn-danger" onClick={clearForm}>Clear</button>
                    </Col>
                </Row>
            </Container>
            <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Manager</th>
                        <th>Position</th>
                        <th>Image</th>
                        <th>Department</th>
                        <th>Email</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.manager}</td>
                                <td>{item.position}</td>
                                <td>{item.image}</td>
                                <td>{item.department}</td>
                                <td>{item.email}</td>
                                <td colSpan={2} >
                                    <button className="btn btn-primary" onClick={() => handleEdit(item.ID)}>Edit</button> &nbsp;
                                    <button className="btn btn-danger" onClick={() => handleDelete(item.ID)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <input type="text" className="form-control" placeholder="Enter Name..." value={editName} onChange={(e) => setEditName(e.target.value)} />
                            </Col>
                            <Col>
                                <input type="text" className="form-control" placeholder="Enter Manager..." value={editManager} onChange={(e) => setEditManager(e.target.value)} />
                            </Col>
                            <Col>
                                <input type="text" className="form-control" placeholder="Enter Position..." value={editPosition} onChange={(e) => setEditPosition(e.target.value)} />
                            </Col>
                            <Col>
                                <input type="text" className="form-control" placeholder="Enter Image..." value={editImage} onChange={(e) => setEditImage(e.target.value)} />
                            </Col>
                            <Col>
                                <input type="text" className="form-control" placeholder="Enter Department..." value={editDepartment} onChange={(e) => setEditDepartment(e.target.value)} />
                            </Col>
                            <Col>
                                <input type="text" className="form-control" placeholder="Enter Email..." value={editEmail} onChange={(e) => setEditEmail(e.target.value)} />
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <input type="submit" className="btn btn-primary" value="Submit" />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose}>
                        Close
                    </button>
                    <button>
                        Save Changes
                    </button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default CRUD;