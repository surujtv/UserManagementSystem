import React, { useState, useEffect } from 'react'
import { Form, Link } from 'react-router-dom'
import { EDIT_PROFILE } from './Constant'
import axios from 'axios'
import Header from './Header'

export default function EditProfile() {
    const [FormData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
        state: "",
        pincode: "",
        city: "",
        gender: "Male",
    })

    useEffect(() => {
        let email = localStorage.getItem('email')
        let city = localStorage.getItem('city')
        let name = localStorage.getItem('name')
        let mobile = localStorage.getItem('mobile')
        let gender = localStorage.getItem('gender')
        let state = localStorage.getItem('state')
        let pincode = localStorage.getItem('pincode')
        console.log("State:", state)
        setFormData({
            name: name,
            email: email,
            password: "",
            mobile: mobile,
            state: state,
            pincode: pincode,
            city: city,
            gender: gender,
        })
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(FormData)
        let token = localStorage.getItem('token')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.put(EDIT_PROFILE, FormData, config)
            .then((response) => {
                console.log(response.data)
                const { name, email, mobile, gender } = response.data.record
                const { state, city, pincode} = response.data.record.address
                localStorage.setItem("name", name)
                localStorage.setItem("email", email)
                localStorage.setItem("mobile", mobile)
                localStorage.setItem("gender", gender)
                localStorage.setItem("state", state)
                localStorage.setItem("city", city)
                localStorage.setItem("pincode", pincode)
                alert(response.data.msg)
            })
            .catch((error) => {
                alert("Error", error)
            })
        // setFormData({
        //     name: "",
        //     email: "",
        //     password: "",
        //     mobile:"",
        //     state:"",
        //     pincode:"",
        //     city: "",
        //     gender: "Male",
        // })
    }

    return (
        <div>
            <Header />
            {/* Start Form */}
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="contact-form bg-secondary rounded p-5">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm"
                            onSubmit={handleSubmit}
                        >
                            <div className="control-group">
                                <input type="text" className="form-control border-0 p-4" id="name" placeholder="Name" required="required" data-validation-required-message="Please enter  name"
                                    name="name"
                                    value={FormData.name}
                                    onChange={handleChange}
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control border-0 p-4" id="email" placeholder="Email" required="required"
                                    disabled
                                    data-validation-required-message="Please enter  email"
                                    name="email"
                                    value={FormData.email}
                                    onChange={handleChange}
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            {/* <div className="control-group">
                                <input type="password" className="form-control border-0 p-4" id="password" placeholder="Password" required="required" data-validation-required-message="Please enter  password" 
                                name="password"
                                disabled
                                value={FormData.password}
                                onChange={handleChange}
                                />
                                <p className="help-block text-danger"></p>
                            </div> */}
                            <div className="control-group">
                                <input type="text" className="form-control border-0 p-4" id="mobile" placeholder="Mobile" required="required" data-validation-required-message="Please enter  mobile"
                                    name="mobile"
                                    value={FormData.mobile}
                                    onChange={handleChange}
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <div className="form-check">
                                    <input className="form-check-input specifyColor" type="radio"
                                        id="flexRadioDefault1"
                                        name="gender"
                                        onChange={handleChange}
                                        value="Male"
                                        checked={FormData.gender === "Male"}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input specifyColor" type="radio"
                                        id="flexRadioDefault2"
                                        name="gender"
                                        onChange={handleChange}
                                        value="Female"
                                        checked={FormData.gender === "Female"}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Female
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input specifyColor" type="radio"
                                        id="flexRadioDefault3"
                                        name="gender"
                                        onChange={handleChange}
                                        value="Other"
                                        checked={FormData.gender === "Other"}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                                        Other
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <select className="custom-select border-0 px-4" style={{ height: 47 }}
                                    name='state'
                                    value={FormData.state}
                                    onChange={handleChange}
                                >
                                    <option>Select a State</option>
                                    <option value="M.P">M.P</option>
                                    <option value="Maharastra">Maharastra</option>
                                    <option value="Gujrat">Gujrat</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select className="custom-select border-0 px-4" style={{ height: 47 }}
                                    name='city'
                                    value={FormData.city}
                                    onChange={handleChange}
                                >
                                    <option>Select a City</option>

                                    <option value="Indore">Indore</option>
                                    <option value="Ujjain">Ujjain</option>
                                    <option value="Bhopal">Bhopal</option>


                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Thane">Thane</option>
                                    <option value="Pune">Pune</option>

                                </select>
                            </div>

                            <div className="control-group">
                                <input type="text" className="form-control border-0 p-4" id="pincode" placeholder="Pincode" required="required" data-validation-required-message="Please enter  pincode"
                                    name='pincode'
                                    value={FormData.pincode}
                                    onChange={handleChange}
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary py-3 px-5" type="submit" id="sendMessageButton">Edit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* End Form */}
        </div>
    )
}
