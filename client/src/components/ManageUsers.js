import React, { useState, useEffect } from 'react'
import Header from './Header'
import { USER_LIST,DELETE_USER, USER_STATUS } from './Constant'
import axios from 'axios'

export default function ManageUsers() {
    const [users, setusers] = useState([])
    const [status, setstatus] = useState(false)

    useEffect(() => {
        console.log("calling useeffect")
        getUserList()
    }, [status])
    
    const getUserList=()=>{
        axios.get(USER_LIST)
        .then((response) => {
            console.log(response.data.records)
            setusers(response.data.records)
            setstatus(response.data.success)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const handleDelete=(gId)=>{
        console.log(gId)
        let url = DELETE_USER +"?id="+gId
        console.log(url)
        axios.get(url)
            .then((response) => {
                console.log(response.data.records)
                getUserList()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleStatus=(gId,status)=>{
        console.log(gId,status)
        let url = ""
        if (status===1) {
            url = USER_STATUS + "?id="+ gId +"&s=block" 
        }
        else if (status===0)
        {
            url = USER_STATUS + "?id="+ gId +"&s=verify" 
        }
        console.log(url)
        axios.get(url)
            .then((response) => {
                console.log(response.data.records)
                getUserList()
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <div>
            <Header />
            <table className="table" border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>State</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {status ?
                        users.map((user) =>
                             user.role === "admin" ? null :
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                                <td>{user.address.state}</td>
                                <td>
                                    <button onClick={()=>handleDelete(user._id)}
                                    style={{backgroundColor:'white',color:'red',border:'1px solid red',borderRadius:10,padding:5}}
                                    >
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    {user.status === 0 ? 
                                <button onClick={()=>handleStatus(user._id,user.status)}
                                style={{backgroundColor:'white',color:'green',border:'1px solid green',borderRadius:10,padding:5}}
                                >
                                        Verify
                                </button> : <button onClick={()=>handleStatus(user._id,user.status)}
                                style={{backgroundColor:'white',color:'orange',border:'1px solid orange',borderRadius:10,padding:5}}
                                >
                                        Block
                                    </button>}
                                </td>
                            </tr>
                        )
                        : null}

                </tbody>
            </table>
        </div>
    )
}
