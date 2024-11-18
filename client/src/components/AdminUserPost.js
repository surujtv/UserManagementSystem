import React,{useEffect,useState} from 'react'
import Header from './Header'
import axios from 'axios'
import {ADMIN_USER_POST} from './Constant'

export default function UserPost() {
  const [post, setpost] = useState([])
  const [status, setstatus] = useState(false)
  const [name,setname] = useState([])

  useEffect(()=>{
    let token = localStorage.getItem('token')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
    
    axios.get(ADMIN_USER_POST,config)
    .then((response)=>{
        console.log(response.data)
        setpost(response.data.post)
        setstatus(response.data.success)
    })
    .catch((error)=>{
       alert(error)
    })
  },[status])
  return (
    <div>
        <Header />
         <table className="table" border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th colSpan={2}>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {status ?
                        post.map((post) =>
                             
                            <tr key={post._id}>
                                
                                <td>{post.userId.email}</td>
                                <td>{post.post_description}</td>
                                <td><img src={post.post_img} height={200} width={200}/></td>
                                
                                {/* <td>
                                    <button 
                                    style={{backgroundColor:'white',color:'red',border:'1px solid red',borderRadius:10,padding:5}}
                                    >
                                        Delete
                                    </button>
                                </td>
                                 */}
                                
                            </tr>
                        )
                        : null}

                </tbody>
            </table>
    </div>
  )
}
