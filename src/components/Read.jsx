import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { deleteUser, showUser } from '../features/userDetailSlice';

import { useDispatch, useSelector } from 'react-redux';

import Custommodal from './Custommodal';
import { Link, useNavigate } from 'react-router-dom';
import { Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

export default function Read() {

    const dispatch = useDispatch();

    // const navigate = useNavigate();

    const [id, setId] = useState();

    const [radioData, setRadioData] = useState("");

    const [showPopup, setShowPopup] = useState(false);


    const { users, loading, searchData } = useSelector((state) => state.app)

    // console.log(users);

    useEffect(() => {

        dispatch(showUser());

    }, []);

    if (loading) {

        return (<h2>Loading...</h2>)

    }


    return (
        <div>
            {showPopup && <Custommodal
                id={id}
                showPopup={showPopup}
                setShowPopup={setShowPopup}
            />
            }

            <h2>All DATA</h2>

            <div style={{ marginBottom: '1vh' }}>



                <input className='form-check-input'
                    name='gender'
                    checked={radioData === ""}
                    onChange={(e) => setRadioData("")}
                    type="radio" />

                <label className='form-check-label ' style={{ marginRight: '10px', paddingLeft: '8px' }}>All</label>

                <input className='form-check-input'
                    name='gender'
                    onChange={(e) => setRadioData(e.target.value)}
                    checked={radioData === "male"}
                    value="male"
                    type="radio" />

                <label className='form-check-label' style={{ marginRight: '10px', paddingLeft: '8px' }}>Male</label>

                <input className='form-check-input'
                    name='gender'
                    value='female'
                    type='radio'
                    checked={radioData === "female"}
                    onChange={(e) => setRadioData(e.target.value)}
                />

                <label className='form-check-label' style={{ marginRight: '10px', paddingLeft: '8px' }}>Female</label>
            </div>

            {users && users.filter((ele) => {

                if (searchData.length === 0) {
                    return ele
                } else {
                    return ele.name
                        .toLowerCase()
                        .includes(searchData.toLowerCase());
                }


            })
                .filter((ele) => {
                    if (radioData === "male") {
                        return ele.gender === radioData;
                    }
                    else if (radioData === "female") {
                        return ele.gender === radioData;

                    }
                    else {
                        return ele;
                    }
                })




                .map((ele) => (
                    <Col xs={10} md={6} className='card mx-auto '>
                        <Card>
                            <Card.Body>
                                <Card.Title>{ele.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{ele.email}</Card.Subtitle>
                                <Card.Text>
                                    {ele.gender}
                                </Card.Text>

                                <button style={{backgroundColor:'transparent', border: '1px solid green', borderRadius: '35%', padding: '5px 20px',marginRight:'10px' }} href="#" className='card-link' onClick={() => [setId(ele.id), setShowPopup(true)]}>view</button>

                                {/* {console.log(ele.id)} */}


                                <Link to={`/edit/${ele.id}`}>
                                    <button style={{ border: '1ps solid grey',backgroundColor:'transparent', borderRadius: '35%', padding: '5px 20px',marginRight:'10px' }}>
                                        Edit
                                    </button>

                                </Link>

                                <Card.Link onClick={() => dispatch(deleteUser(ele.id))} >
                                    <button style={{ backgroundColor:'transparent',border: '1px solid red', borderRadius: '35%', padding: '5px 20px' }}>
                                        Delete
                                    </button>
                                </Card.Link>

                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }

        </div>
    );
};
