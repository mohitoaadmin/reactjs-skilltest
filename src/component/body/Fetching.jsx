import React from 'react'
import { useContext } from 'react'
import context from '../context/context'
import './fetching.scss'

const Fetching = () => {
    const newFetch = useContext(context) 
    console.log(newFetch)
  return (
    <>
      <h2>Hello ReqRes user!</h2>
    <div className="title container">
        {
           newFetch.map ((ele, i) => {
           const {avatar, email, first_name,  last_name} = ele 
        

            return (
              <>
               <div className="section">
                    <h5 className="card-name">{first_name} {last_name}</h5>
                    <div className="mail">{email}</div>
                    <img src={avatar} alt=""  className='card'/>
               </div>
              </>
            )
           })
        }
    </div>
    </>
  )
}

export default Fetching

// avatar
// : 
// "https://reqres.in/img/faces/7-image.jpg"
// email
// : 
// "michael.lawson@reqres.in"
// first_name
// : 
// "Michael"
// id
// : 
// 7
// last_name
// : 
// "Lawson"
