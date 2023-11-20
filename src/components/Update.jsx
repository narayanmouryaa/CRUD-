import React, { useEffect, useState } from 'react'
import { Button, Col, InputGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../features/userDetailSlice';
import Form from 'react-bootstrap/Form';

function Update() {

    const { id } = useParams();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [updateData, setUpdateData] = useState();

    const users = useSelector((state) => state.app.users);

    useEffect(() => {

        if (id) {

            const singleUser = users?.find((ele) => ele.id === id);

            setUpdateData(singleUser);
        }

    }, []);

    console.log(setUpdateData);

    const handleUpdate = (e) => {

        e.preventDefault();

        dispatch(updateUser(updateData));

        navigate("/read");
    }


    const newData = (e) => {

        setUpdateData({ ...updateData, [e.target.name]: e.target.value })

    }
    console.log("update data", updateData);

    return (

        <>
            <Form className='mx-auto my-5' onSubmit={handleUpdate} >

                <h2 >Update DATA</h2>

                <Row className="mb-3">
                    <Col xs={10} md={6} className='mx-auto'>
                        
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label className='d-flex' >Name</Form.Label>
                            <Form.Control
                                name='name'
                                required
                                type="text"
                                placeholder="Full Name"

                                value={updateData && updateData.name}

                                onChange={newData}
                            />
                            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                        </Form.Group>

                        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                            <Form.Label className='d-flex my-2'>Email</Form.Label>
                            <InputGroup hasValidation>
                                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                                <Form.Control
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    value={updateData && updateData.email}
                                    onChange={newData}

                                // onChange={getUserData}
                                />

                            </InputGroup>
                        </Form.Group>

                    </Col>
                </Row>

                <Row className="mb-3 mt-4">
                    <Col xs={10} md={6} className='mx-auto'>

                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label className='d-flex my-2'>Age</Form.Label>
                            <Form.Control name="age" type="text" placeholder="Age" required
                                value={updateData && updateData.age}
                                onChange={newData}
                            //  onChange={getUserData}
                            />

                        </Form.Group>



                        <Form.Group className='pt-5' as={Col} md="2" controlId="validationCustom04">
                            <Form.Check
                                type="radio"
                                label="Male"
                                name="gender"
                                value="male"
                                checked={updateData && updateData.gender === "male"}
                                onChange={newData}
                            // onChange={getUserData}

                            />
                        </Form.Group>

                        <Form.Group className='pt-5' as={Col} md="2" controlId="validationCustom04">
                            <Form.Check
                                type="radio"
                                label="Female"
                                name="gender"
                                value="female"
                                checked={updateData && updateData.gender === "female"}
                                // onChange={getUserData}
                                onChange={newData}

                            />
                        </Form.Group>
                    </Col>

                </Row>

                <Row>

                    <Col xs={10} md={6} className='mx-auto'>
                        <Form.Group>
                            <Form.Check
                                className='d-flex'
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                    </Col>
                </Row>


                <Button className='btn-secondary mt-3' type="submit">Submit</Button>

            </Form>
        </>
    );



};

export default Update;
