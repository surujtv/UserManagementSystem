import React, { useEffect,useState } from 'react'
import Header from './Header'

export default function User() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")

  useEffect(()=>{
    const name = localStorage.getItem("name")
    const email = localStorage.getItem("email")
    setname(name)
    setemail(email)
  },[])
  
  return (
    <div>
        <Header />
        <h3>Name:{name}</h3>
        <h3>Email:{email}</h3>
    </div>
  )
}
