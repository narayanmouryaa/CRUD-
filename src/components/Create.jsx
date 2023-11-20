import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';
import { useNavigate } from 'react-router-dom';

function Create() {
    

    const [users,setUsers] = useState({});

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const getUserData = (e) =>{

         setUsers({...users,[e.target.name] : e.target.value}) 
        

    };

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log("users...",users);

        dispatch(createUser(users));  
        navigate("/read")  ;    

    };


    return (

        <Form className='w-50 mx-auto my-5' style={{border:'2px solid grey' ,padding:'20px',borderRadius:'10px',boxShadow:'2px 2px 2px grey'}} noValidate  onSubmit={handleSubmit} >

            <h2 > Fill DATA</h2>
            <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                    <Form.Label className='d-flex' >Name</Form.Label>
                    <Form.Control
                        name='name'
                        required
                        type="text"
                        placeholder="Full Name"
                       
                        onChange={getUserData}
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
                            onChange={getUserData}
                        />
                        {/* <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback> */}
                    </InputGroup>
                </Form.Group>
            </Row>

            <Row className="mb-3 mt-4">

                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label className='d-flex my-2'>Age</Form.Label>
                    <Form.Control name="age" type="number" placeholder="Age" required onChange={getUserData} />
                 
                </Form.Group>



                <Form.Group className='pt-5' as={Col} md="2" controlId="validationCustom04">
                    <Form.Check                    
                        type="radio"
                        label="Male"
                        name="gender"
                        value="male"
                        onChange={getUserData}

                    />
                </Form.Group>

                <Form.Group className='pt-5' as={Col} md="2" controlId="validationCustom04">
                    <Form.Check
                        type="radio"
                        label="Female"
                        name="gender"
                        value="female"
                        onChange={getUserData}

                    />
                </Form.Group>

            </Row>

            <Row>
                <Form.Group>
                    <Form.Check
                        className='d-flex'
                        required
                        label="Agree to terms and conditions"

                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
            </Row>

            <Button className='btn-secondary mt-3' type="submit">Submit</Button>
        </Form>
    );
}

export default Create;