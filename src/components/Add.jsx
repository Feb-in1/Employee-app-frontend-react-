import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const Add = () => {

    const [data, setData] = useState(
        {
            "id": "",
            "name": "",
            "desg": "",
            "sal": ""

        }
    )

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
      axios.post("http://localhost:8080/",data).then((response)=>{
        console.log(response.data)
        if(response.data.status=="Success"){
            alert("Added Successfully")
        }
        else{
            alert(response.data)
        }
      }).catch(
        (error)=>{
            alert("Error")
        }
      )
      console.log(data)
    }
    return (
        <div>

            <div>
                <Nav />
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">



                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label htmlFor="" className="form-label">Employee ID </label>
                                    <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler} />

                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                    <label htmlFor="" className="form-label">Name</label>
                                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />



                                </div>

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label htmlFor="" className="form-label">Designation</label>
                                    <input type="text" className="form-control" name='desg' value={data.desg} onChange={inputHandler} />

                                </div>


                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label htmlFor="" className="form-label">Salary</label>
                                    <input type="text" className="form-control" name='sal' value={data.sal} onChange={inputHandler} />
                                </div>

                                {/* 
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Date of Birth</label>
                        <input type="date" className="form-control" />


                        </div>


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Email id</label>
                        <input type="text" className="form-control" />

                        </div>


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" className="form-control" />

                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" />

                        </div> */}

                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <button className="btn btn-success " onClick={readValue}>Register</button>

                                </div>



                            </div>



                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Add