import React, { useEffect, useState } from 'react'
import { Modal, Table } from 'react-bootstrap'
import axios from 'axios';
import './User.css'
import Button from 'react-bootstrap/Button';


export const User = () => {
    const [text, setText] = useState({
        name: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setText({ ...text, [name]: value })
        console.log("sadsagd" ,name, value);
    }
    axios.get(`http://localhost:8080/file/findbyname/${text.name}`)
    .then((res) => {
        console.log("find name", res);
    }).catch((err) => {
        console.log("find error", err);
    })

   



    const [posts, SetPosts] = useState();

    const fetchData = () => {
        axios.get("http://localhost:8080/form/getfile")
            .then((res) => {
                Object.keys(res.data).forEach(key => {
                    console.log(key, res.data[key]);
                    console.log("===img==" + res.data[key].image);

                });
                SetPosts(res.data);

                // console.log("===Response==="+res.data.value);

            })
            .catch((err) => {
                console.log("error", err);
            })
    };
    useEffect(() => {
        fetchData();
    }, []);


   


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className='container'>
            <div>
                <br />
                <h3>User</h3>
                <div>View The User List</div>
                <input type="text" id="in" name='name' value={text.name} onChange={handleChange} placeholder='enter a user name' />
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>s.no</th>
                        <th>User Name</th>
                        <th>Email Address</th>
                        <th>Password</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(posts) && posts.map((post) => (
                        <tr key={post.id}>
                            <td><b>{post.id}</b></td>
                            <td><b>{post.username}</b></td>
                            <td><b>{post.email}</b></td>
                            <td><b>{post.password}</b></td>
                            <td>
                                <Button variant="primary" onClick={handleShow} className="me-2">
                                    click
                                </Button>


                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
            <Modal size="sm" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}