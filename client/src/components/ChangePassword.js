import React,{useState,useEffect} from 'react'
import Header from './Header'
import {CHANGE_PASSWORD} from './Constant'
import axios from 'axios'

export default function ChangePassword() {
  
  const [FormData,setFormData] = useState({
    password:"",
    confirm_password:""
})
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};

 const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(FormData)
    let token = localStorage.getItem('token')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    axios.post(CHANGE_PASSWORD,FormData,config)
    .then((response)=>{
        alert(response.data.msg)
    })
    .catch((error)=>{
        alert(error)
    })
  }

  return (
    <div>
         <Header/>
         {/* Start Form */}
         <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="contact-form bg-secondary rounded p-5">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm"
                            onSubmit={handleSubmit}
                        >
                            <div className="control-group">
                                <input type="password" className="form-control border-0 p-4" id="newpassword" placeholder="Password" required="required" data-validation-required-message="Please enter password"
                                    name="password"
                                    value={FormData.password}
                                    onChange={handleChange}
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="password" className="form-control border-0 p-4" id="confirmpassword" placeholder="Confirm Password" required="required" data-validation-required-message="Please enter password"
                                    name="confirm_password"
                                    value={FormData.confirm_password}
                                    onChange={handleChange}
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="text-center">
                                <button className="btn 
                                btn-primary py-3 px-5" 
                                type="submit" id="sendMessageButton">Change Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* End Form */}
    </div>
  )
}
