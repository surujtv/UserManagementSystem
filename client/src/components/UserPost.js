import React,{useEffect,useState} from 'react'
import Header from './Header'
import axios from 'axios'
import {USER_POST} from './Constant'

export default function UserPost() {
  const [post, setpost] = useState([])
  const [status, setstatus] = useState(false)


  useEffect(()=>{
    let token = localStorage.getItem('token')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
    let _id = localStorage.getItem("_id")
    let url = USER_POST+"?id="+_id
    axios.get(url,config)
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
                        <th>Description</th>
                        <th colSpan={2}>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {status ?
                        post.map((post) =>
                             
                            <tr key={post._id}>
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
