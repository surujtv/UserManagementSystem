import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {ADD_POST} from './Constant'
import Header from './Header'

export default function CreatePost() {
  const [post_description, setpost_description] = useState("")  
  const [post_img, setpost_img] = useState("")
  const [post_imgdata, setpost_imgdata] = useState(null)

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(post_description)
    console.log(post_img)
    console.log(post_imgdata)

    const formdata = new FormData()
    formdata.append("post_description",post_description)
    formdata.append("post_img",post_imgdata)
    formdata.append("userId",localStorage.getItem("_id"))

    let token = localStorage.getItem('token')
    axios.post(ADD_POST,formdata,{
      headers:{
        'Content-Type':'multipart/form-data',
        'Authorization': `Bearer ${token}` 
      }
    })
    .then((response)=>{
      console.log(response)
      alert("Post Created Successfully!!!")
    })
    .catch((err)=>{
      alert(err)
    })
  }

  const saveFile = (e)=>{ 
    console.log(e.target.files[0]);//array
    setpost_img(e.target.files[0].name);//name
    setpost_imgdata(e.target.files[0])//object
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
                                <input type="text" className="form-control border-0 p-4" id="post_description" placeholder="post description" required="required" data-validation-required-message="Please enter post description"
                                name='post_description'
                                value={post_description}
                                onChange={(event) => setpost_description(event.target.value)}
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="file" className="form-control border-0 p-6" id="postimg" required="required" 
                                onChange={saveFile}
                                name='post_img'
                                />
                                
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="text-center">
                                <button className="btn 
                                btn-primary py-3 px-5" 
                                type="submit" id="sendMessageButton">Add Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* End Form */}
    </div>
  )
}
